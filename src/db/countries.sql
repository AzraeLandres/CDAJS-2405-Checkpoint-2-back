CREATE TABLE IF NOT EXISTS `country` (
	`id` integer primary key NOT NULL UNIQUE,
	`code` TEXT NOT NULL UNIQUE,
	`name` TEXT NOT NULL,
	`emoji` TEXT NOT NULL
);