DROP DATABASE IF EXISTS budget_sprint;

CREATE DATABASE budget_sprint;

USE budget_sprint;

DROP TABLE IF EXISTS `cash_flow`;
		

CREATE TABLE `cash_flow` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `date` VARCHAR(20) NULL DEFAULT NULL,
  `amount` DOUBLE NULL DEFAULT NULL,
  `description` VARCHAR(100) NULL DEFAULT NULL,
  `transaction` VARCHAR(20) NULL DEFAULT NULL,
  `category` VARCHAR(100) NULL DEFAULT NULL,
  `account_name` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- INSERT INTO cash_flow (date, description, amount, transaction, category, account_name) 
-- VALUES ("01/01/2019"	,"Skyba"	, 49.5640	,"debit"	,"Gym"	,"Credit Card 1");
-- INSERT INTO cash_flow (date, description, amount, transaction, category, account_name) 
-- VALUES ("01/01/2019"	,"Buzzshare"	,1150	,"debit"	,"Mortgage & Rent"	,"Banking Account");
