import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { User } from './User'
import { Chat } from './Chat'

@Entity()
export class Participant {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userId: number

  @ManyToOne(() => User, (user) => user.participants)
  user: User

  @ManyToOne(() => Chat, (chat) => chat.participants)
  chat: Chat
}
