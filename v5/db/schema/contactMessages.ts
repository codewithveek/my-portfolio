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
    ipAddress: varchar("ip_address", { length: 64 }).notNull(),
    userAgent: varchar("user_agent", { length: 512 }).notNull(),
    message: text("message").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ([
    index("contact_messages_email_idx").on(table.email),
    index("contact_messages_ip_address_idx").on(table.ipAddress),
    index("contact_messages_created_at_idx").on(table.createdAt),
  ])
);

export type ContactMessage = typeof contactMessages.$inferSelect;
export type NewContactMessage = typeof contactMessages.$inferInsert;
