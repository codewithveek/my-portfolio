ALTER TABLE `contact_messages` ADD `ip_address` varchar(64) NOT NULL;--> statement-breakpoint
ALTER TABLE `contact_messages` ADD `user_agent` varchar(512) NOT NULL;--> statement-breakpoint
CREATE INDEX `contact_messages_ip_address_idx` ON `contact_messages` (`ip_address`);