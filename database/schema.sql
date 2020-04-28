create database budget_sprint;

use budget_sprint;

DROP TABLE IF EXISTS `cash_flow`;
		
CREATE TABLE `cash_flow` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `date` DATE NULL DEFAULT NULL,
  `amount` DECIMAL NULL DEFAULT NULL,
  `description` VARCHAR(100) NULL DEFAULT NULL,
  `transactionId` INTEGER NULL DEFAULT NULL,
  `categoryId` INTEGER NULL DEFAULT NULL,
  `accountId` INTEGER NULL DEFAULT NULL,
  `userId` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `transaction_type`;
		
CREATE TABLE `transaction_type` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `transaction` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `category`;
		
CREATE TABLE `category` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `account_name`;
		
CREATE TABLE `account_name` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `account` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `user_info`;
		
CREATE TABLE `user_info` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(50) NULL DEFAULT NULL,
  `lastName` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);