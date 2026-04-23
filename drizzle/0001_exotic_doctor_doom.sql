CREATE TABLE `enquiries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`company` varchar(255) NOT NULL,
	`role` varchar(255),
	`email` varchar(320) NOT NULL,
	`phone` varchar(64),
	`size` varchar(64),
	`challenge` text NOT NULL,
	`timeline` varchar(128),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `enquiries_id` PRIMARY KEY(`id`)
);
