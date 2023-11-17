import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm'
import { Participant } from './Participant'
import { Message } from './Message'

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  name: string

  @Column()
  created: string

  @Column()
  group: boolean

  @OneToMany(() => Participant, (participant) => participant.chat)
  participants: Participant[]

  @OneToMany(() => Message, (message) => message.chat)
  messages: Message[]
}
