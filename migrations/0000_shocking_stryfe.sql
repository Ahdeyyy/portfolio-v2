CREATE TABLE `events` (
	`id` integer PRIMARY KEY NOT NULL,
	`namespace` text NOT NULL,
	`title` text NOT NULL,
	`user_agent` text NOT NULL,
	`user` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
