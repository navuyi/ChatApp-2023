import * as process from 'process'
import * as path from 'path'
import { DataSource } from 'typeorm'
import { User } from './entities/User'
import { Chat } from './entities/Chat'
import { Message } from './entities/Message'
import { MessageRead } from './entities/MessageRead'
import { Participant } from './entities/Participant'


export const AppDataSource = new DataSource({
  type: 'sqlite',
  //host: "localhost",
  //port: 5432,
  //username: "test",
  //password: "test",
  database: process.env.NODE_ENV === 'test' ? path.join(__dirname, 'database/database.test.sqlite') : path.join(__dirname, 'database/database.sqlite'),
  synchronize: true, // <-- DO NOT USE IN PRODUCTION
  logging: true,
  entities: [User, Chat, Message, MessageRead, Participant], // <-- all entities have to be imported
  subscribers: [],
  migrations: [],
  dropSchema: true, // <-- DO NOT USE IN PRODUCTION
})
