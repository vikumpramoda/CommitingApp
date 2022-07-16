-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2022 at 07:45 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auth_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `title`, `note`, `createdAt`, `updatedAt`) VALUES
(1, 'hthf', 'qqqqqqqq', '2022-07-15 15:50:34', '2022-07-15 15:50:34'),
(2, 'iphone se 2', 'iufgsdfdbbdsbdbjdbjdsbjdfvf', '2022-07-15 15:53:18', '2022-07-15 15:53:18'),
(3, 'lap', 'ubuntuuuuuuuu', '2022-07-15 16:16:38', '2022-07-15 16:16:38'),
(4, 'Dell Lap', 'If the autocomplete attribute is not specified on a <textarea> element, then the browser uses the autocomplete attribute value of the <textarea> element\'s form owner. The form owner is either the <form> element that this <textarea> element is a descendant', '2022-07-15 16:48:21', '2022-07-15 16:48:21'),
(5, 'ASE', 'he budget for Data Science is steep but is fixed whereas the budget for Web Development keeps changing with the changing requirement and the additional features.\nData Scientists work for a shorter period of time on data to get results in comparison to Web', '2022-07-16 01:00:20', '2022-07-16 01:00:20'),
(6, 'sql', 'Registration is a common process when you want to create an account under your name. Whenever you visit famous websites like Facebook, Gmail, you must register and create a profile if you want to make use of their services. Today we will understand how th', '2022-07-16 01:51:03', '2022-07-16 01:51:03'),
(7, 'Mac book Air', 'qwertyu sdfg cvbcv', '2022-07-16 02:53:55', '2022-07-16 02:53:55'),
(8, 'se2', '2021 fysugdgsj safgfdgfsd', '2022-07-16 03:33:20', '2022-07-16 03:33:20'),
(9, 'oop', 'gddh hfhgfcg fghfdhj', '2022-07-16 04:45:29', '2022-07-16 04:45:29'),
(10, 'sdgsdfgdf', '1:  \'handleChangeValues\' is assigned a value but never used                                                                           no-unused-vars\n  Line 65:11:  \'handleClickOpen\' is assigned a value but never used                                       ', '2022-07-16 05:31:11', '2022-07-16 05:31:11');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(3, 'vikum', 'pramodavikum@gmail.com', '$2b$10$Eovlq7fR6vdoKuq.O6/ZeOlNO0GFELFzwQDLAx3Fkql87afC2WiG6', NULL, '2022-07-15 14:52:42', '2022-07-16 04:44:34'),
(4, 'pasindu', 'pasindu@gmail.com', '$2b$10$9ELZwUmMgBAVpVOaZiLv6efW/jlqnEzsMikrJ6UnyAb3ASN4sBlYK', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsIm5hbWUiOiJwYXNpbmR1IiwiZW1haWwiOiJwYXNpbmR1QGdtYWlsLmNvbSIsImlhdCI6MTY1NzkwMDM3MCwiZXhwIjoxNjU3OTg2NzcwfQ.3b-lj1cr3OY5Froidj_frIQt3E9aNZdvC97f0z2fXVw', '2022-07-15 15:52:38', '2022-07-15 15:52:50'),
(5, 'kamal', 'kamal@gmail.com', '$2b$10$hn/QqeeIYseRwoTF.8.G1eg4N8kbUGWKznwB7A3Qge4E2EBKzVTdG', NULL, '2022-07-15 17:11:56', '2022-07-16 03:58:47'),
(6, 'shehan', 'shehan@gmail.com', '$2b$10$BuJ5Z5cpqDLNavbom1Nqf.iYtD5XBJeNiNiGkyXMMaRYaXeY.oLGK', NULL, '2022-07-16 00:54:33', '2022-07-16 00:54:33'),
(7, 'tharaka', 'tharaka@gmail.com', '$2b$10$0HuZ4t4SGiTMJgUt2UiZCe0w9m22uSG6npuKeV6S73PCAOvpDCZYy', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsIm5hbWUiOiJ0aGFyYWthIiwiZW1haWwiOiJ0aGFyYWthQGdtYWlsLmNvbSIsImlhdCI6MTY1Nzk0OTQ1MCwiZXhwIjoxNjU4MDM1ODUwfQ.z-0PrslOAZgLPosMtmnhH0XYrO9Z4_Qd4xIT-ttwMN0', '2022-07-16 04:45:02', '2022-07-16 05:30:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
