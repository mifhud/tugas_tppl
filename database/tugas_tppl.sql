CREATE TABLE `karyawan` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`nik` varchar(20) NULL,
`nama` varchar(255) NULL,
`tanggal_lahir` date NULL,
`tempat_lahir` varchar(50) NULL,
`jenis_kelamin` char(2) NULL,
`password` varchar(255) NULL,
PRIMARY KEY (`id`) 
);
CREATE TABLE `mahasiswa` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`nim` varchar(100) NULL,
`nama` varchar(255) NULL,
`tanggal_lahir` date NULL,
`tempat_lahir` varchar(50) NULL,
`jenis_kelamin` char(2) NULL,
`status` varchar(255) NULL,
`password` varchar(20) NULL,
PRIMARY KEY (`id`) 
);
CREATE TABLE `jabatan` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`kode` varchar(5) NULL,
`nama` varchar(100) NULL,
PRIMARY KEY (`id`) 
);
CREATE TABLE `jabatan_karyawan` (
`id_karyawan` int(11) NOT NULL,
`id_jabatan` int(11) NOT NULL,
PRIMARY KEY (`id_karyawan`, `id_jabatan`) 
);
CREATE TABLE `mata_kuliah` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`kode` varchar(10) NULL,
`nama` varchar(50) NULL,
`bobot` float NULL,
`t` float NULL,
`p` float NULL,
`k` float NULL,
PRIMARY KEY (`id`) 
);
CREATE TABLE `ruang` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`kode_ruang` varchar(10) NULL,
`nama_ruang` varchar(100) NULL,
`lantai_ruang` varchar(3) NULL,
`keterangan` text NULL,
PRIMARY KEY (`id`) 
);
CREATE TABLE `tahun_akademik` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`tahun` int(11) NULL,
`semester` float NULL,
`status` varchar(20) NULL,
`tanggal_uts` date NULL,
`tanggal_uas` date NULL,
PRIMARY KEY (`id`) 
);
CREATE TABLE `jadwal_perkuliahan` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`id_ruang` int(11) NULL,
`id_mata_kuliah` int(11) NULL,
`id_karyawan` int(11) NULL,
`jadwal` datetime NULL ON UPDATE CURRENT_TIMESTAMP,
`id_tahun_akademik` int(11) NULL,
PRIMARY KEY (`id`) 
);
CREATE TABLE `jadwal_perkuliahan_mahasiswa` (
`id_mahasiswa` int(11) NOT NULL,
`id_jawal_perkuliahan` int(11) NOT NULL,
PRIMARY KEY (`id_mahasiswa`, `id_jawal_perkuliahan`) 
);
CREATE TABLE `dosen_mengajar` (
`id_karyawan` int(11) NOT NULL,
`id_mata_kuliah` int(11) NOT NULL,
PRIMARY KEY (`id_karyawan`, `id_mata_kuliah`) 
);
CREATE TABLE `presensi` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`id_jadwal_perkuliahan` int(11) NOT NULL,
`pertemuan` tinyint NULL,
`tanggal_presensi` datetime NULL ON UPDATE CURRENT_TIMESTAMP,
`tanggal_perkuliahan` datetime NULL ON UPDATE CURRENT_TIMESTAMP,
`keterangan` varchar(100) NULL,
`status` tinyint(3) NULL,
PRIMARY KEY (`id`, `id_jadwal_perkuliahan`) 
);
CREATE TABLE `perizinan_mahasiswa` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`id_mahasiswa` int(11) NULL,
`id_jadwal_perkuliahan` int(11) NULL,
`keterangan` varchar(100) NULL,
`status` tinyint(2) NULL,
`update_status_by` int(11) NULL,
PRIMARY KEY (`id`) 
);
CREATE TABLE `perizinan_dosen` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`id_karyawan` int(11) NULL,
`update_status_by` int(11) NULL,
`status` tinyint(2) NULL,
`id_jadwal_perkuliahan` int(11) NULL,
`keterangan` varchar(100) NULL,
PRIMARY KEY (`id`) 
);
