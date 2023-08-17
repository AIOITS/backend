-- CreateEnum
CREATE TYPE "GolonganDarah" AS ENUM ('A', 'B', 'AB', 'O');

-- CreateEnum
CREATE TYPE "Agama" AS ENUM ('Islam', 'Kristen', 'Katolik', 'Budha', 'Hindu', 'Konghuchu', 'Aliran_Kepercayaan');

-- CreateEnum
CREATE TYPE "StatusPerkawinan" AS ENUM ('Belum_Kawin', 'Kawin', 'Cerai_Hidup', 'Cerai_Mati');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nik" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "password" TEXT NOT NULL,
    "role" INTEGER NOT NULL DEFAULT 2,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KTP" (
    "nik" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "tempat_lahir" TEXT NOT NULL,
    "tanggal_lahir" DATE NOT NULL,
    "alamat" TEXT NOT NULL,
    "rt" SMALLINT NOT NULL,
    "rw" SMALLINT NOT NULL,
    "kelurahan_desa" TEXT NOT NULL,
    "kecamatan" TEXT NOT NULL,
    "kabupaten_kota" TEXT NOT NULL,
    "provinsi" TEXT NOT NULL,
    "golongan_darah" "GolonganDarah" NOT NULL,
    "agama" "Agama" NOT NULL,
    "status_perkawinan" "StatusPerkawinan" NOT NULL,
    "pekerjaan" TEXT NOT NULL,
    "kewarganegaraan" TEXT NOT NULL,
    "tanggal_terbit" DATE NOT NULL,

    CONSTRAINT "KTP_pkey" PRIMARY KEY ("nik")
);

-- CreateTable
CREATE TABLE "SIM" (
    "nomor_sim" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "rt" SMALLINT NOT NULL,
    "rw" SMALLINT NOT NULL,
    "kelurahan_desa" TEXT NOT NULL,
    "kecamatan" TEXT NOT NULL,
    "kabupaten" TEXT NOT NULL,
    "pekerjaan" TEXT NOT NULL,
    "kabupaten_terbit" TEXT NOT NULL,
    "tanggal_terbit" DATE NOT NULL,
    "penerbit" TEXT NOT NULL,
    "berlaku_sampai" DATE NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "SIM_pkey" PRIMARY KEY ("nomor_sim")
);

-- CreateTable
CREATE TABLE "STNK" (
    "nomor_stnk" TEXT NOT NULL,
    "nomor_polisi" TEXT NOT NULL,
    "nama_pemilik" TEXT NOT NULL,
    "nomor_bpkb" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "bahan_bakar" TEXT NOT NULL,
    "berlaku" DATE NOT NULL,
    "merk" TEXT NOT NULL,
    "tipe" TEXT NOT NULL,
    "jenis" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "tahun_pembuatan" TEXT NOT NULL,
    "isi_silinder" TEXT NOT NULL,
    "nomor_mesin" TEXT NOT NULL,
    "nomor_rangka" TEXT NOT NULL,
    "warna" TEXT NOT NULL,
    "warna_tnkb" TEXT NOT NULL,
    "tahun_registrasi" TEXT NOT NULL,
    "nomor_registrasi" TEXT NOT NULL,
    "kode_lokasi" TEXT NOT NULL,
    "nomor_urut_pendaftaran" TEXT NOT NULL,
    "nomor_PKB" TEXT NOT NULL,

    CONSTRAINT "STNK_pkey" PRIMARY KEY ("nomor_stnk")
);

-- CreateTable
CREATE TABLE "PKB" (
    "nomor_PKB" TEXT NOT NULL,
    "status_pajak" BOOLEAN NOT NULL,
    "bbknb_pokok" INTEGER NOT NULL,
    "bbknb_sanksi" INTEGER NOT NULL,
    "PKB_pokok" INTEGER NOT NULL,
    "PKB_sanksi" INTEGER NOT NULL,
    "swdkllj_pokok" INTEGER NOT NULL,
    "swdkllj_sanksi" INTEGER NOT NULL,
    "administrasi_stnk_pokok" INTEGER NOT NULL,
    "administrasi_stnk_sanksi" INTEGER NOT NULL,
    "administrasi_tnkb_pokok" INTEGER NOT NULL,
    "administrasi_tnkb_sanksi" INTEGER NOT NULL,

    CONSTRAINT "PKB_pkey" PRIMARY KEY ("nomor_PKB")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nik_key" ON "User"("nik");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "KTP_nik_key" ON "KTP"("nik");

-- CreateIndex
CREATE UNIQUE INDEX "SIM_nomor_sim_key" ON "SIM"("nomor_sim");

-- CreateIndex
CREATE UNIQUE INDEX "STNK_nomor_stnk_key" ON "STNK"("nomor_stnk");

-- CreateIndex
CREATE UNIQUE INDEX "STNK_nomor_polisi_key" ON "STNK"("nomor_polisi");

-- CreateIndex
CREATE UNIQUE INDEX "STNK_nomor_PKB_key" ON "STNK"("nomor_PKB");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_nik_fkey" FOREIGN KEY ("nik") REFERENCES "KTP"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SIM" ADD CONSTRAINT "SIM_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
