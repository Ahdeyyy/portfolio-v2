ALTER TABLE events ADD `type` text NOT NULL;--> statement-breakpoint
ALTER TABLE events ADD `event` text NOT NULL;--> statement-breakpoint
ALTER TABLE `events` DROP COLUMN `title`;