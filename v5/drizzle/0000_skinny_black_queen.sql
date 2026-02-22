CREATE TABLE `contact_messages` (
	`id` varchar(36) NOT NULL DEFAULT (uuid()),
	`name` varchar(80) NOT NULL,
	`email` varchar(120) NOT NULL,
	`message` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contact_messages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `contact_messages_email_idx` ON `contact_messages` (`email`);--> statement-breakpoint
CREATE INDEX `contact_messages_created_at_idx` ON `contact_messages` (`created_at`);