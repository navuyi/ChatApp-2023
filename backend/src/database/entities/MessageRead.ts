import { ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Message } from './Message'
import { User } from './User'

export class MessageRead {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Message, (message) => message.messageReads)
  message: Message

  @ManyToOne(() => User, (user) => user.messageReads)
  user: User
}
