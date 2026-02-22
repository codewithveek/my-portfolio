import {
  mysqlTable,
  index,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const contactMessages = mysqlTable(
  "contact_messages",
  {
    id: varchar("id", { length: 36 })
      .primaryKey()
      .default(sql`(uuid())`),
    name: varchar("name", { length: 80 }).notNull(),
    email: varchar("email", { length: 120 }).notNull(),
    message: text("message").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    emailIdx: index("contact_messages_email_idx").on(table.email),
    createdAtIdx: index("contact_messages_created_at_idx").on(table.createdAt),
  })
);

export type ContactMessage = typeof contactMessages.$inferSelect;
export type NewContactMessage = typeof contactMessages.$inferInsert;
