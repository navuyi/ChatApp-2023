import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
import { User } from './User'
import { Chat } from './Chat'
import { MessageRead } from './MessageRead'

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  text: string

  @ManyToOne(() => User, (user) => user.messages)
  user: User

  @ManyToOne(() => Chat, (chat) => chat.messages)
  chat: Chat

  @OneToMany(() => MessageRead, (messageRead) => messageRead.message)
  messageReads: MessageRead[]
}
