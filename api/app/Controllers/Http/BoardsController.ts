import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Board from 'App/Models/Board'
import Game from 'App/Models/Game'

export default class BoardsController {


    public async index({ request, response }: HttpContextContract) {
        const { players } = request.params();

        const trx = await Database.transaction()

        try {
            const game = await Game.create({ players }, trx)

            const boards = await this.createBoards(trx, game.id, players)

            trx.commit()

            response.status(200).json(boards);
        } catch (e) {
            trx.rollback()
            response.status(500).json({status: 500, message:'INTERNAL_SERVER_ERROR'});
        }
    }

    private async createBoards(trx, gameId: number, players: number, boards: Array<any> = []) {
        if (players > 0) {
            const cards = (await trx.rawQuery(`SELECT *  FROM (
                SELECT GROUP_CONCAT( file_name SEPARATOR ',' ) AS cards  FROM (
                    SELECT file_name FROM ( 
                        SELECT file_name FROM cards ORDER BY RAND( ) LIMIT 16 
                    ) AS tmp 
                    GROUP BY
                        file_name 
                    HAVING
                        COUNT( * ) = 1 
                    ORDER BY
                        file_name 
                ) AS card_board 
            ) AS tmp 
            WHERE cards NOT IN ( SELECT cards FROM boards WHERE game_id = ? )`, [gameId]))[0][0].cards

            const board = await Board.create({cards, gameId},trx)

            boards.push({id: board.id, cards: cards.split(',')})

            return await this.createBoards(trx, gameId, players -1, boards)

        }

        return boards
    }

}
