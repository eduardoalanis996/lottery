import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Board from './Board'

export default class Game extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public players: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Board)
  public boards: HasMany<typeof Board>
}
