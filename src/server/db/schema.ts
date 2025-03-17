import {
  boolean,
  // foreignKey,
  // integer,
  // jsonb,
  pgTable,
  // serial,
  text,
  // timestamp,
  // varchar,
} from 'drizzle-orm/pg-core'

export const todos = pgTable('todos', {
  id: text('id').primaryKey().notNull(),
  text: text('text'),
  completed: boolean('completed').default(false),
})