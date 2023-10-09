-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 09, 2023 at 03:57 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `topic66_regis`
--

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int(5) NOT NULL,
  `fullname` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `age` int(2) NOT NULL,
  `password` varchar(255) NOT NULL,
  `picture` text NOT NULL,
  `role` varchar(20) NOT NULL DEFAULT 'user',
  `timest` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `fullname`, `email`, `age`, `password`, `picture`, `role`, `timest`) VALUES
(22, 'kamthorn', 'kamt@ksu.ac.th', 44, '$2a$10$quisrnM7nu0rAns3qieXvePtm1Bnve7tJ3moLf.m7DJTwh3TUrLvW', 'pci', 'user', '2023-10-05 23:29:59'),
(23, 'rr', 'rr@c.c', 23, '$2a$10$swAoaNSDC0AETgkfdin/h.sThdAClHe6J.FKn1mFiLEHzl7.LMa/6', 'dsd', 'user', '2023-10-05 23:38:28'),
(24, 'sds', 'sdasd@cc.c', 33, '$2a$10$ECbSOOi26snkWBdWg1nj7evAuKPupVGRsPB74gI.s6D.36QOxt.VW', 'd', 'user', '2023-10-06 00:20:28'),
(25, 'asdad', 'kamthorn.sa@ksu.ac.th', 33, '$2a$10$088kEL7uRVVqkLIxiFesHeaRNbCpa7YnKZ45046/7/sHVoi7qqJKq', 'd', 'user', '2023-10-06 00:21:30'),
(27, 'kamthorn.sa ', 'kamthorn@ksu.ac.th', 33, '$2a$10$MNHxsVSwfGhwhRM3JnEp6uW3MiX3qC.Z.TdytA1SArJEKbX6mdCZS', '23213', 'admin', '2023-10-09 07:57:05'),
(30, 'kamthorn.sa', 'kamthorn.sa@gmail.com', 33, '$2a$10$MGzKcbTBmDyib/iCgAU6nevS9kXp1i3eDt9lr9ls5n9ydfEDx9yvS', 'dsdas', 'user', '2023-10-09 06:27:28'),
(31, 'Kamt', 'kt@ksu.ac.th', 22, '$2a$10$/48AWHS8vF82TrtiAC4ih.yMxKDdMByIO4.qi0Aey1szl7cXPQLCy', 'dsfdsf', 'user', '2023-10-09 08:07:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
