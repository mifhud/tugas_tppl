CREATE TABLE `karyawan` (
`id` int(11) NOT NULL,
`nik` varchar(20) NULL,
`nama` varchar(255) NULL,
`tanggal_lahir` date NULL,
`tempat_lahir` varchar(50) NULL,
`jenis_kelamin` char(2) NULL,
`password` varchar(255) NULL,
PRIMARY KEY (`id`) 
);
CREATE TABLE `mahasiswa` (
`id` int(11) NOT NULL,
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
`id` int(11) NOT NULL,
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
`id` int(11) NOT NULL,
`kode` varchar(10) NULL,
`nama` varchar(50) NULL,
`bobot` float NULL,
`t` float NULL,
`p` float NULL,
`k` float NULL,
PRIMARY KEY (`id`) 
);
CREATE TABLE `ruang` (
`id_tahun_akademik` int(11) NOT NULL,
`tahun` varchar(20) NULL,
`semester` float NULL,
`status` varchar(20) NULL,
PRIMARY KEY (`id_tahun_akademik`) 
);
CREATE TABLE `tahun_akademik` (
`id` int(11) NOT NULL,
`tahun` int(11) NULL,
`semester` float NULL,
`status` varchar(20) NULL,
`tanggal_uts` date NULL,
`tanggal_uas` date NULL,
PRIMARY KEY (`id`) 
);
CREATE TABLE `jadwal_perkuliahan` (
`id` int(11) NOT NULL,
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
`id` int(11) NOT NULL,
`id_jadwal_perkuliahan` int(11) NOT NULL,
`pertemuan` tinyint NULL,
`tanggal_presensi` datetime NULL ON UPDATE CURRENT_TIMESTAMP,
`tanggal_perkuliahan` datetime NULL ON UPDATE CURRENT_TIMESTAMP,
`keterangan` varchar(100) NULL,
`status` tinyint(3) NULL,
PRIMARY KEY (`id`, `id_jadwal_perkuliahan`) 
);
CREATE TABLE `perizinan_mahasiswa` (
`id` int(11) NOT NULL,
`id_mahasiswa` int(11) NULL,
`id_jadwal_perkuliahan` int(11) NULL,
`keterangan` varchar(100) NULL,
`status` tinyint(2) NULL,
`id_karyawan` int(11) NULL,
PRIMARY KEY (`id`) 
);
CREATE TABLE `perizinan_dosen` (
`id` int(11) NOT NULL,
`id_karyawan` int(11) NULL,
`disetujui` int(11) NULL,
`status` tinyint(2) NULL,
`id_jadwal_perkuliahan` int(11) NULL,
`keterangan` varchar(100) NULL,
PRIMARY KEY (`id`) 
);

ALTER TABLE `karyawan` ADD CONSTRAINT `fk_karyawan_karyawan_1` FOREIGN KEY (`id`) REFERENCES `jabatan_karyawan` (`id_karyawan`);
ALTER TABLE `jabatan` ADD CONSTRAINT `fk_jabatan_jabatan_karyawan_1` FOREIGN KEY (`id`) REFERENCES `jabatan_karyawan` (`id_jabatan`);
ALTER TABLE `ruang` ADD CONSTRAINT `fk_ruang_tahun_akademik_1` FOREIGN KEY (`id_tahun_akademik`) REFERENCES `tahun_akademik` (`id`);
ALTER TABLE `ruang` ADD CONSTRAINT `fk_ruang_jadwal_perkuliahan_1` FOREIGN KEY (`id_tahun_akademik`) REFERENCES `jadwal_perkuliahan` (`id_tahun_akademik`);
ALTER TABLE `mata_kuliah` ADD CONSTRAINT `fk_mata_kuliah_jadwal_perkuliahan_1` FOREIGN KEY (`id`) REFERENCES `jadwal_perkuliahan` (`id_mata_kuliah`);
ALTER TABLE `karyawan` ADD CONSTRAINT `fk_karyawan_jadwal_perkuliahan_1` FOREIGN KEY (`id`) REFERENCES `jadwal_perkuliahan` (`id_karyawan`);
ALTER TABLE `mahasiswa` ADD CONSTRAINT `fk_mahasiswa_jadwal_perkuliahan_mahasiswa_1` FOREIGN KEY (`id`) REFERENCES `jadwal_perkuliahan_mahasiswa` (`id_mahasiswa`);
ALTER TABLE `jadwal_perkuliahan` ADD CONSTRAINT `fk_jadwal_perkuliahan_jadwal_perkuliahan_mahasiswa_1` FOREIGN KEY (`id`) REFERENCES `jadwal_perkuliahan_mahasiswa` (`id_jawal_perkuliahan`);
ALTER TABLE `mata_kuliah` ADD CONSTRAINT `fk_mata_kuliah_dosen_mengajar_1` FOREIGN KEY (`id`) REFERENCES `dosen_mengajar` (`id_mata_kuliah`);
ALTER TABLE `karyawan` ADD CONSTRAINT `fk_karyawan_dosen_mengajar_1` FOREIGN KEY (`id`) REFERENCES `dosen_mengajar` (`id_karyawan`);
ALTER TABLE `jadwal_perkuliahan` ADD CONSTRAINT `fk_jadwal_perkuliahan_perizinan_mahasiswa_1` FOREIGN KEY (`id`) REFERENCES `perizinan_mahasiswa` (`id_jadwal_perkuliahan`);
ALTER TABLE `mahasiswa` ADD CONSTRAINT `fk_mahasiswa_perizinan_mahasiswa_1` FOREIGN KEY (`id`) REFERENCES `perizinan_mahasiswa` (`id_mahasiswa`);
ALTER TABLE `karyawan` ADD CONSTRAINT `fk_karyawan_perizinan_mahasiswa_1` FOREIGN KEY (`id`) REFERENCES `perizinan_mahasiswa` (`id_karyawan`);
ALTER TABLE `jadwal_perkuliahan` ADD CONSTRAINT `fk_jadwal_perkuliahan_perizinan_dosen_1` FOREIGN KEY (`id`) REFERENCES `perizinan_dosen` (`id_jadwal_perkuliahan`);
ALTER TABLE `karyawan` ADD CONSTRAINT `fk_karyawan_perizinan_dosen_1` FOREIGN KEY (`id`) REFERENCES `perizinan_dosen` (`id_karyawan`);
ALTER TABLE `karyawan` ADD CONSTRAINT `fk_karyawan_perizinan_dosen_2` FOREIGN KEY (`id`) REFERENCES `perizinan_dosen` (`disetujui`);
ALTER TABLE `jadwal_perkuliahan` ADD CONSTRAINT `fk_jadwal_perkuliahan_presensi_1` FOREIGN KEY (`id`) REFERENCES `presensi` (`id_jadwal_perkuliahan`);

