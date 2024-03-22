import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const events = sqliteTable('events', {
    id: integer('id').primaryKey(),
    namespace: text('namespace').notNull(),
    type: text('type').notNull(), // click, view, etc
    event: text('event').notNull(), // type::name::project
    user_agent: text('user_agent').notNull(),
    user: text('user').notNull(),
    created_at: text('created_at')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
});

export type InsertEvent = typeof events.$inferInsert;
export type SelectEvent = typeof events.$inferSelect;
