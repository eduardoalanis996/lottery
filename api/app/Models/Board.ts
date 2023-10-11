import { DateTime } from 'luxon'
import { BaseModel, column , belongsTo, BelongsTo} from '@ioc:Adonis/Lucid/Orm'
import Game from './Game'

export default class Board extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public gameId: number

  @column()
  public cards: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Game)
  public game: BelongsTo<typeof Game>

}
