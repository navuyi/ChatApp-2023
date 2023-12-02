import { AppDataSource } from '..'
import { User } from '../entities/User'
import { Participant } from '../entities/Participant'
import { MessageRead } from '../entities/MessageRead'
import { Chat } from '../entities/Chat'
import { Message } from '../entities/Message'

export const MessageRepository = AppDataSource.getRepository(Message)
export const ChatRepository = AppDataSource.getRepository(Chat)
export const MessageReadRepository = AppDataSource.getRepository(MessageRead)
export const ParticipantRepository = AppDataSource.getRepository(Participant)
export const UserRepository = AppDataSource.getRepository(User)
