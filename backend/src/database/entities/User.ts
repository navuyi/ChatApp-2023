import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { MessageRead } from './MessageRead'
import { Participant } from './Participant'
import { Message } from './Message'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  firstName: string

  @Column('text')
  lastName: string

  @Column('text')
  password: string

  @Column('text', { unique: true })
  email: string

  @OneToMany(() => Participant, (participant) => participant.user)
  participants: Participant

  @OneToMany(() => Message, (message) => message.user)
  messages: Message[]

  @OneToMany(() => MessageRead, (messageRead) => messageRead.user)
  messageReads: MessageRead[]
}
