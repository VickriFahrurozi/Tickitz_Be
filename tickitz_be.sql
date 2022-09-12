-- phpMyAdmin SQL Dump
-- version 5.2.1-dev+20220720.fda386a998
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 12, 2022 at 10:39 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tickitz_be`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `account_id` bigint(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role` enum('111','222') NOT NULL DEFAULT '111',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`account_id`, `email`, `password`, `role`, `created_at`, `updated_at`) VALUES
(1, 'a@gmail.com', '$2b$10$bxDtLCxM5.Tmyb4X1nWsVeHyoE0KmM3kDXPumE.8hbDG23yeKDqfq', '222', '2022-07-12 03:42:19', '2022-07-12 03:42:59'),
(18, 'b@gmail.com', '$2b$10$YFvrKeyt/41A23Vb0.ltMeIctGsmk0aLFMJKX4YdxHGKMiTuHR6GK', '111', '2022-08-26 17:05:47', '2022-08-26 17:05:47'),
(19, 'c@gmail.com', '$2b$10$GvGCSOvubyLg4vV7W4vFv.VUdCtB1hyyo4DkFJHFDjrcpfyrNsDku', '111', '2022-08-26 17:07:28', '2022-08-26 17:07:28'),
(20, 'vickrifahrurozi@gmail.com', '$2b$10$H8nSTdbXV8RnaVeh7Wv50uLKAfMK061d6KQCJ5z0h4yOjd4lwmI.u', '111', '2022-09-01 04:52:28', '2022-09-01 04:52:28');

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `booking_id` bigint(20) NOT NULL,
  `booking_code` varchar(20) NOT NULL,
  `scheduled_id` bigint(20) NOT NULL,
  `profile_id` bigint(20) NOT NULL,
  `movie_id` bigint(20) NOT NULL,
  `movie_title` varchar(100) NOT NULL,
  `cinema_id` bigint(20) NOT NULL,
  `cinema_name` varchar(100) NOT NULL,
  `cinema_city` varchar(100) NOT NULL,
  `cinema_address` varchar(200) NOT NULL,
  `studio_id` bigint(20) NOT NULL,
  `studio_price` int(11) NOT NULL,
  `booking_date` date NOT NULL,
  `start_time` datetime NOT NULL DEFAULT '2022-06-25 10:00:00',
  `end_time` datetime NOT NULL DEFAULT '2022-06-25 12:00:00',
  `payment_status` varchar(20) NOT NULL,
  `seat_booked` int(11) NOT NULL,
  `booking_status` varchar(10) NOT NULL,
  `booking_updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `booking_created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`booking_id`, `booking_code`, `scheduled_id`, `profile_id`, `movie_id`, `movie_title`, `cinema_id`, `cinema_name`, `cinema_city`, `cinema_address`, `studio_id`, `studio_price`, `booking_date`, `start_time`, `end_time`, `payment_status`, `seat_booked`, `booking_status`, `booking_updated_at`, `booking_created_at`) VALUES
(1, 'BC123', 1, 1, 1, 'Spiderman.jpg', 1, 'NETFLIX', 'Jakarta', 'Jakarta Barat', 1, 10, '2022-10-15', '2022-06-25 10:00:00', '2022-06-25 12:00:00', 'Success', 1, 'NOT FINISH', '2022-06-27 15:40:24', '2022-06-27 13:14:42'),
(2, 'AC123', 2, 2, 2, 'Batman', 2, 'IFLIX', 'Tangerang', 'Bintaro', 3, 10, '2022-10-15', '2022-06-25 10:00:00', '2022-06-25 12:00:00', 'Success', 1, 'NOT FINISH', '2022-06-27 13:15:16', '2022-06-27 13:15:16'),
(3, 'BAC123', 4, 4, 4, 'Garfield', 6, 'DISNEY HOTSTAR', 'Bekasi', 'Jalan Bekasi No 109', 9, 12, '2022-10-15', '2022-06-25 10:00:00', '2022-06-25 12:00:00', 'Success', 1, 'NOT FINISH', '2022-06-27 13:16:25', '2022-06-27 13:16:25'),
(5, 'C199', 70, 34, 24, 'Goku', 102, 'CGV', 'Medan', 'Jalan Medan Timur No 190', 251, 12, '2022-10-15', '2022-06-25 10:00:00', '2022-06-25 12:00:00', 'Success', 1, 'NOT FINISH', '2022-06-27 13:17:42', '2022-06-27 13:17:42');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `movie_id` bigint(20) NOT NULL,
  `movie_category` varchar(30) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`movie_id`, `movie_category`, `created_at`, `updated_at`) VALUES
(1, 'Adventure,Horror', '2022-08-20 05:09:17', '2022-08-20 05:09:17'),
(2, 'Action', '2022-08-20 05:11:22', '2022-08-20 05:11:22'),
(3, 'Sci-Fi', '2022-08-20 05:13:15', '2022-08-20 05:13:15'),
(4, 'Sci-Fi,Adventure', '2022-08-20 05:14:34', '2022-08-20 05:14:34'),
(5, 'Sci-Fi,Adventure', '2022-08-20 05:16:15', '2022-08-20 05:16:15'),
(7, 'Sci-Fi,Adventure', '2022-08-21 18:09:23', '2022-08-21 18:09:23'),
(8, 'Horror', '2022-08-21 18:10:13', '2022-08-21 18:10:13'),
(9, 'Horror', '2022-08-21 18:11:33', '2022-08-21 18:11:33'),
(10, 'Horror', '2022-08-21 18:12:07', '2022-08-21 18:12:07'),
(12, 'Horror', '2022-08-21 18:14:58', '2022-08-21 18:14:58');

-- --------------------------------------------------------

--
-- Table structure for table `cinema`
--

CREATE TABLE `cinema` (
  `cinema_id` int(11) NOT NULL,
  `cinema_code` varchar(20) NOT NULL,
  `cinema_brand` varchar(30) NOT NULL,
  `cinema_name` varchar(100) NOT NULL,
  `cinema_address` varchar(250) NOT NULL,
  `cinema_city` varchar(30) NOT NULL,
  `cinema_price` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cinema`
--

INSERT INTO `cinema` (`cinema_id`, `cinema_code`, `cinema_brand`, `cinema_name`, `cinema_address`, `cinema_city`, `cinema_price`, `created_at`, `updated_at`) VALUES
(1, 'XXI_01', 'XXI', 'XXI MALL ALAM SUTERA', 'Mall Alam Sutera', 'Tangerang', 50000, '2022-08-31 16:34:15', '2022-08-31 22:48:17'),
(2, 'CGV_01', 'CGV', 'CGV MALL ALAM SUTERA', 'Mall Alam Sutera', 'Tangerang', 50000, '2022-08-31 16:34:49', '2022-08-31 22:48:22'),
(3, 'CGV_02', 'CGV', 'CGV BOGOR RAYA', 'Jalan Istana Bogor No.5', 'Bogor', 50000, '2022-08-31 22:49:53', '2022-08-31 22:49:53'),
(4, 'XXI_02', 'XXI', 'XXI KEBUN RAYA BOGOR', 'Jalan Merdeka Barat', 'Bogor', 50000, '2022-08-31 22:50:41', '2022-08-31 22:50:41'),
(5, 'XXI_04', 'XXI', 'XXI MALL TAMAN ANGGREK', 'Jalan Sanusi Taming', 'Jakarta', 50000, '2022-08-31 22:57:02', '2022-08-31 22:57:02'),
(6, 'XXI_05', 'XXI', 'XXI MALL CENTRAL PARK', 'Jalan H.Iskandar Muda No.40', 'Jakarta', 50000, '2022-08-31 22:57:25', '2022-08-31 22:57:25'),
(7, 'CGV_03', 'CGV', 'CGV MALL CENTRAL PARK', 'Jalan H.Iskandar Muda No.40', 'Jakarta', 50000, '2022-08-31 23:02:16', '2022-08-31 23:02:16'),
(8, 'CGV_04', 'CGV', 'CGV MALL CIPUTRA', 'Jalan Sanusi Taming', 'Jakarta', 50000, '2022-08-31 23:02:32', '2022-08-31 23:02:32'),
(9, 'CGV_05', 'CGV', 'CGV BEKASI CYBER PARK', 'Jalan Kota Bekasi', 'Bekasi', 50000, '2022-08-31 23:04:02', '2022-08-31 23:04:02'),
(10, 'XXI_06', 'XXI', 'XXI BEKASI CYBER PARK', 'Jalan Kota Bekasi', 'Bekasi', 50000, '2022-08-31 23:04:29', '2022-08-31 23:04:29'),
(11, 'XXI_07', 'XXI', 'DEPOK TOWN SQUARE', 'Jalan Depok Utara', 'Depok', 50000, '2022-08-31 23:04:54', '2022-08-31 23:04:54'),
(12, 'CGV_06', 'CGV', 'DEPOK TOWN SQUARE', 'Jalan Depok Utara', 'Depok', 50000, '2022-08-31 23:05:49', '2022-08-31 23:05:49');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` bigint(20) NOT NULL,
  `title` varchar(500) NOT NULL,
  `cover` varchar(200) NOT NULL,
  `release_date` date NOT NULL DEFAULT '2022-06-25',
  `director` varchar(150) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `casts` varchar(400) NOT NULL,
  `duration_hours` int(11) NOT NULL,
  `duration_minute` int(11) NOT NULL,
  `showing_date_start` date NOT NULL DEFAULT '2022-07-30',
  `showing_date_end` date NOT NULL DEFAULT '2022-12-30',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `title`, `cover`, `release_date`, `director`, `description`, `casts`, `duration_hours`, `duration_minute`, `showing_date_start`, `showing_date_end`, `created_at`, `updated_at`) VALUES
(1, 'Lion King', '1660972157857-Lion.png', '2022-10-20', 'Tony Hawk', 'Disney\'s The Lion King is about a young lion named Simba, who is the crown prince of an African Savanna. When his father dies in an accident staged by his uncle, Simba is made to feel responsible for his father\'s death and must overcome his fear of taking responsibility as the rightful heir to the throne.', 'John,Angela,Victus', 1, 12, '2022-07-30', '2022-12-30', '2022-08-20 05:09:17', '2022-08-22 07:18:26'),
(2, 'John Wick', '1660972282494-John Wick.png', '2022-09-20', 'Adam Husein', 'The story follows former assassin John Wick and his attempt to hunt down the men who broke into his home, stole his vintage car and killed his puppy, which was a last gift to him from his recently deceased wife. Chad Stahelski and David Leitch directed the film together, though only Stahelski was credited.', 'Victoria,Beckham,Cristiano', 2, 20, '2022-12-30', '2023-01-30', '2022-08-20 05:11:22', '2022-08-22 07:18:44'),
(3, 'The Witch', '1660972394976-The Witches.png', '2022-07-20', 'Alex Murpin', 'The Witches is a British children\'s dark fantasy novel by the British writer Roald Dahl. The story is set partly in Norway and partly in England, and features the experiences of a young English boy and his Norwegian grandmother in a world where child-hating societies of witches secretly exist in every country.', 'Nicolas,David,Nolan', 2, 0, '2022-08-01', '2023-11-30', '2022-08-20 05:13:14', '2022-08-22 07:18:58'),
(4, 'Spider-Man', '1660972474790-Spiderman.png', '2022-05-20', 'Lollita Buguinez', 'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ', 'Peter,Kane,Parker', 1, 40, '2022-06-01', '2022-09-30', '2022-08-20 05:14:34', '2022-08-22 07:19:11'),
(5, 'Tenet', '1660972575037-Tenet.png', '2022-10-20', 'Lary Jacob', 'Tenet is a 2020 science fiction spy action thriller film directed, written, and co-produced (with his wife Emma Thomas) by Christopher Nolan. A co-production between the United Kingdom and the United States, it stars John David Washington, Robert Pattinson, Elizabeth Debicki, Dimple Kapadia, Michael Caine, and Kenneth Branagh. The film follows a CIA agent who learns how to manipulate the flow of time to prevent an attack from the future that threatens to annihilate the present world. Nolan continued his relationship with Warner Bros. and Syncopy for both the production and the distribution of the film.', 'Hotman,Hutapea,Situmorang', 3, 1, '2022-11-01', '2022-11-30', '2022-08-20 05:16:15', '2022-08-22 07:19:32'),
(7, 'Pengabdi Setan 1', '1661105363136-Pengabdi Setan.png', '2017-10-20', 'Joko Anwar', 'Berkisah tentang seorang ibu, yang setelah terbujur sakit selama tiga tahun, meninggal kemudian bangkit menjadi hantu dan menyebarkan teror.', 'Tara Basro,Joko Driyono,Sulaiman', 2, 1, '2018-01-01', '2023-02-05', '2022-08-21 18:09:23', '2022-08-21 18:09:23'),
(8, 'Pengabdi Setan 2', '1661105413743-Pengabdi Setan 2.png', '2022-08-04', 'Joko Anwar', 'Setelah kepergian ibu dan adik bungsunya, Ian, Rini beserta adik-adik lainnya Toni dan Bondi serta sang ayah memutuskan untuk pindah rumah dan tinggal di rumah susun.\n\nKarena ingin memulai lembaran kehidupan baru dan melupakan kejadian yang mengerikan pindah ke area tempat tinggal yang baru dianggap sebagai solusi terbaik.\n\nNamun, ternyata keputusan tersebut hanya isapan jempol belaka, karena meski telah berpindah dari kediaman lama, keluarga Rini tetap menerima banyak teror yang berdatangan.', 'Tara Basro,Joko Driyono,Sulaiman', 2, 1, '2022-08-04', '2023-02-05', '2022-08-21 18:10:13', '2022-08-22 07:20:22'),
(9, 'The Conjuring ', '1661105493274-The Conjuring.png', '2013-08-03', 'Emilia Clarke', 'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse. In 1971, Carolyn and Roger Perron move their family into a dilapidated Rhode Island farm house and soon strange things start happening around it with escalating nightmarish terror.', 'Daniel,Michael,Angelina', 1, 48, '2013-08-03', '2022-11-04', '2022-08-21 18:11:33', '2022-08-26 19:01:00'),
(10, 'The Conjuring 2', '1661105527570-The Conjuring 2.png', '2017-08-04', 'Emanual Stephen', 'Ed and Lorraine Warren travel to North London to help a single mother raising four children alone in a house plagued by a supernatural spirit. In 1977, paranormal investigators Ed and Lorraine Warren travel to London, England, where single mother Peggy Hodgson believes that something evil is in her home.', 'Daniel,Michael,Angelina', 1, 48, '2017-08-04', '2022-11-05', '2022-08-21 18:12:07', '2022-08-22 07:20:46'),
(12, 'The Nun', '1661105698130-The Nun.png', '2022-08-04', 'Ricardo Batista', 'When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together they uncover the order\'s unholy secret.', 'Roger,Federer', 3, 48, '2017-08-04', '2022-11-08', '2022-08-21 18:14:58', '2022-08-22 07:21:22');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `account_id` bigint(11) NOT NULL,
  `movie_title` varchar(250) NOT NULL,
  `cinema_brand` varchar(250) NOT NULL,
  `cinema_name` varchar(250) NOT NULL,
  `order_date` date NOT NULL,
  `order_time` varchar(250) NOT NULL,
  `order_total_seat` int(11) NOT NULL,
  `order_price` int(11) NOT NULL,
  `order_seat` varchar(250) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `account_id`, `movie_title`, `cinema_brand`, `cinema_name`, `order_date`, `order_time`, `order_total_seat`, `order_price`, `order_seat`, `created_at`, `updated_at`) VALUES
(1, 1, 'Pengabdi Setan', 'CGV ', 'CGV MALL CIPUTRA', '2022-10-11', '50000', 1, 50000, 'A1 B2 B3', '2022-09-01 03:50:40', '2022-09-01 03:50:40'),
(2, 18, 'The Witch', 'XXI', 'XXI MALL ALAM SUTERA', '2022-09-01', '12:00 pm', 2, 100000, 'B1', '2022-09-01 09:20:25', '2022-09-01 09:20:25'),
(3, 18, 'The Witch', 'XXI', 'XXI MALL ALAM SUTERA', '2022-09-01', '12:00 pm', 2, 100000, 'B3,J6', '2022-09-01 09:21:54', '2022-09-01 09:21:54'),
(4, 18, 'The Witch', 'XXI', 'XXI MALL ALAM SUTERA', '2022-09-01', '12:00 pm', 4, 200000, 'B3,J6,J7,J6', '2022-09-01 09:26:47', '2022-09-01 09:26:47'),
(5, 18, 'The Witch', 'XXI', 'XXI MALL ALAM SUTERA', '2022-09-01', '12:00 pm', 4, 200000, 'B3,J6,J7,J6', '2022-09-01 09:27:48', '2022-09-01 09:27:48'),
(6, 18, 'The Witch', 'XXI', 'XXI MALL ALAM SUTERA', '2022-09-01', '12:00 pm', 4, 200000, 'B3,J6,J7,J6', '2022-09-01 09:27:51', '2022-09-01 09:27:51'),
(7, 19, 'Pengabdi Setan 2', 'XXI', 'XXI MALL ALAM SUTERA', '2022-09-01', '12:00 pm', 2, 100000, 'J6,J5', '2022-09-01 10:15:43', '2022-09-01 10:15:43'),
(8, 19, 'The Nun', 'CGV', 'CGV MALL CENTRAL PARK', '2022-09-01', '12:00 pm', 3, 150000, 'J6,J5,J4', '2022-09-01 10:17:32', '2022-09-01 10:17:32'),
(9, 18, 'Lion King', 'CGV', 'CGV BOGOR RAYA', '2022-09-01', '12:00 pm', 2, 100000, 'C6,D5', '2022-09-01 11:25:49', '2022-09-01 11:25:49'),
(10, 20, 'The Witch', 'CGV', 'CGV BOGOR RAYA', '2022-09-01', '12:00 pm', 2, 100000, 'J7,J8', '2022-09-01 13:24:57', '2022-09-01 13:24:57'),
(11, 20, 'Lion King', 'XXI', 'XXI MALL TAMAN ANGGREK', '2022-09-01', '12:00 pm', 2, 100000, 'J6,J5', '2022-09-01 14:18:05', '2022-09-01 14:18:05'),
(12, 18, 'The Conjuring 2', 'XXI', 'XXI MALL CENTRAL PARK', '2022-10-01', '12:00 pm', 3, 150000, 'J6,J7,J8', '2022-09-01 14:34:56', '2022-09-01 14:34:56');

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `profile_id` bigint(20) NOT NULL,
  `account_id` bigint(20) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `profile_picture` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`profile_id`, `account_id`, `first_name`, `last_name`, `phone_number`, `profile_picture`, `created_at`, `updated_at`) VALUES
(1, 1, 'Admin', 'Admin', '083815718369', '', '2022-07-12 03:42:19', '2022-07-12 03:42:19'),
(18, 18, 'Vickri', 'Fahrurozi', '12345678', '', '2022-08-26 17:05:47', '2022-08-26 17:05:47'),
(19, 19, 'Vickri', 'Fahrurozi', '080381518369', '', '2022-08-26 17:07:28', '2022-08-26 17:07:28'),
(20, 20, 'Vickri', 'Fahrurozi  ', '', '1662553727352-rn_image_picker_lib_temp_4f90af03-639b-4dcf-9020-1250b0ea6624.jpg', '2022-09-01 04:52:28', '2022-09-01 04:52:28');

-- --------------------------------------------------------

--
-- Table structure for table `scheduled`
--

CREATE TABLE `scheduled` (
  `scheduled_id` bigint(20) NOT NULL,
  `movie_id` bigint(20) NOT NULL,
  `cinema_id` bigint(20) NOT NULL,
  `studio_id` bigint(20) NOT NULL,
  `movie_title` varchar(100) NOT NULL,
  `movie_cover` varchar(100) NOT NULL,
  `cinema_name` varchar(100) NOT NULL,
  `scheduled_price_min` int(11) NOT NULL,
  `scheduled_price_max` int(11) NOT NULL,
  `scheduled_date_start` date NOT NULL DEFAULT '2022-06-27',
  `scheduled_date_end` date NOT NULL DEFAULT '2022-10-27',
  `scheduled_updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `scheduled_created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scheduled`
--

INSERT INTO `scheduled` (`scheduled_id`, `movie_id`, `cinema_id`, `studio_id`, `movie_title`, `movie_cover`, `cinema_name`, `scheduled_price_min`, `scheduled_price_max`, `scheduled_date_start`, `scheduled_date_end`, `scheduled_updated_at`, `scheduled_created_at`) VALUES
(6, 1, 1, 1, 'HULK', 'Hulk.png', 'IFLIX', 1, 2, '2022-10-12', '2022-12-10', '2022-07-06 03:11:44', '2022-07-06 03:11:44'),
(18, 0, 0, 0, '', '', '', 0, 0, '0000-00-00', '0000-00-00', '2022-07-06 13:16:38', '2022-07-06 13:16:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`account_id`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`booking_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD KEY `category_ibfk_1` (`movie_id`);

--
-- Indexes for table `cinema`
--
ALTER TABLE `cinema`
  ADD PRIMARY KEY (`cinema_id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `orders_ibfk_1` (`account_id`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`profile_id`),
  ADD KEY `account_id` (`account_id`);

--
-- Indexes for table `scheduled`
--
ALTER TABLE `scheduled`
  ADD PRIMARY KEY (`scheduled_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `account_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `booking_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `cinema`
--
ALTER TABLE `cinema`
  MODIFY `cinema_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `profile_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `scheduled`
--
ALTER TABLE `scheduled`
  MODIFY `scheduled_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`) ON DELETE CASCADE;

--
-- Constraints for table `profiles`
--
ALTER TABLE `profiles`
  ADD CONSTRAINT `account_id` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
