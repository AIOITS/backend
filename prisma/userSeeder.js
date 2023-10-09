const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const argon2 = require('argon2')

async function seedUser() {  
  await prisma.user.create({
    data: {
      name: "PKM AIOITS",
      email: "pkmaioits@email.com",
      phone: "081234567890",
      password: await argon2.hash("rahasia"),
      saldo: 50000,
      ktp: {
        create: {
          nik: "1234567890123456",
          nama: "PKM AIOITS",
          tempat_lahir: "Bandung",
          tanggal_lahir: new Date("1992-08-10"),
          alamat: "Jl. PQR No. 789",
          rt: 5,
          rw: 6,
          kelurahan_desa: "Ciumbuleuit",
          kecamatan: "Cidadap",
          kabupaten_kota: "Bandung",
          provinsi: "Jawa Barat",
          golongan_darah: "ab",
          agama: "kristen",
          jenis_kelamin: "lainnya",
          status_perkawinan: "belum_kawin",
          pekerjaan: "Graphic Designer",
          kewarganegaraan: "WNI",
          tanggal_terbit: new Date("2012-12-05"),
  
          sim: {
            create: [
              {
                uid: "49a65da8ab81af",
                nomor_sim: "67045837028",
                jenis_sim: "a_umum",
                nama: "PKM AIOITS",
                alamat: "Jl. PQR No. 101",
                rt: 7,
                rw: 8,
                kelurahan_desa: "Titi Kuning",
                kecamatan: "Medan Baru",
                kabupaten: "Medan",
                pekerjaan: "Accountant",
                kabupaten_terbit: "Medan",
                tanggal_terbit: new Date("2021-03-05"),
                penerbit: "Polda Sumatera Utara",
                berlaku_sampai: new Date("2026-03-05"),
              },
              {
                uid: "cc02bb4aac2722",
                nomor_sim: "670458370281",
                jenis_sim: "b1",
                nama: "PKM AIOITS",
                alamat: "Jl. PQR No. 101",
                rt: 7,
                rw: 8,
                kelurahan_desa: "Titi Kuning",
                kecamatan: "Medan Baru",
                kabupaten: "Medan",
                pekerjaan: "Accountant",
                kabupaten_terbit: "Medan",
                tanggal_terbit: new Date("2021-03-05"),
                penerbit: "Polda Sumatera Utara",
                berlaku_sampai: new Date("2026-03-05"),
              },
            ]
          },
          stnk: {
            create: [
              {
                nomor_stnk: '98762848',
                nomor_polisi: 'AB123CD',
                nama_pemilik: 'PKM AIOITS',
                nomor_bpkb: '67890',
                alamat: '123 Main St, City',
                bahan_bakar: 'bensin',
                berlaku: new Date('2023-12-31'),
                merk: 'Toyota',
                tipe: 'Sedan',
                jenis: 'Private',
                model: 'Kijang',
                tahun_pembuatan: '2022',
                isi_silinder: 2000,
                nomor_mesin: 'ABC123',
                nomor_rangka: 'XYZ789',
                warna: 'Silver',
                warna_tnkb: 'Black',
                tahun_registrasi: '2022',
                nomor_registrasi: 'R-1234-AB',
                kode_lokasi: 'CITY123',
                nomor_urut_pendaftaran: '56789',
                subsidy_quota: {
                  create: {
                    quota: 20.0
                  }
                },
                pkb: {
                  create: {
                    nomor_pkb: 'PKB123',
                    status_pajak: true,
                    bbknb_pokok: 100000,
                    bbknb_sanksi: 50000,
                    PKB_pokok: 120000,
                    PKB_sanksi: 60000,
                    swdkllj_pokok: 15000,
                    swdkllj_sanksi: 7500,
                    administrasi_stnk_pokok: 5000,
                    administrasi_stnk_sanksi: 2500,
                    administrasi_tnkb_pokok: 5000,
                    administrasi_tnkb_sanksi: 2500,
                  }
                }
              },
              {
                nomor_stnk: '23423421',
                nomor_polisi: 'AB124CD',
                nama_pemilik: 'PKM AIOITS',
                nomor_bpkb: '67890',
                alamat: '123 Main St, City',
                bahan_bakar: 'solar',
                berlaku: new Date('2023-12-31'),
                merk: 'Toyota',
                tipe: 'Sedan',
                jenis: 'Private',
                model: 'Camry',
                tahun_pembuatan: '2022',
                isi_silinder: 2000,
                nomor_mesin: 'ABC123',
                nomor_rangka: 'XYZ789',
                warna: 'Silver',
                warna_tnkb: 'Black',
                tahun_registrasi: '2022',
                nomor_registrasi: 'R-1234-AB',
                kode_lokasi: 'CITY123',
                nomor_urut_pendaftaran: '56789',
                subsidy_quota: {
                  create: {
                    quota: 20.0
                  }
                },
                pkb: {
                  create: {
                    nomor_pkb: 'PKB124',
                    status_pajak: true,
                    bbknb_pokok: 100000,
                    bbknb_sanksi: 50000,
                    PKB_pokok: 120000,
                    PKB_sanksi: 60000,
                    swdkllj_pokok: 15000,
                    swdkllj_sanksi: 7500,
                    administrasi_stnk_pokok: 5000,
                    administrasi_stnk_sanksi: 2500,
                    administrasi_tnkb_pokok: 5000,
                    administrasi_tnkb_sanksi: 2500,
                  }
                }
              },
              {
                nomor_stnk: '2342352534',
                nomor_polisi: 'AB125CD',
                nama_pemilik: 'PKM AIOITS',
                nomor_bpkb: '67890',
                alamat: '123 Main St, City',
                bahan_bakar: 'bensin',
                berlaku: new Date('2023-12-31'),
                merk: 'Toyota',
                tipe: 'Sedan',
                jenis: 'Private',
                model: 'Turbo',
                tahun_pembuatan: '2022',
                isi_silinder: 2000,
                nomor_mesin: 'ABC123',
                nomor_rangka: 'XYZ789',
                warna: 'Silver',
                warna_tnkb: 'Black',
                tahun_registrasi: '2022',
                nomor_registrasi: 'R-1234-AB',
                kode_lokasi: 'CITY123',
                nomor_urut_pendaftaran: '56789',
                subsidy_quota: {
                  create: {
                    quota: 20.0
                  }
                },
                pkb: {
                  create: {
                    nomor_pkb: 'PKB125',
                    status_pajak: true,
                    bbknb_pokok: 100000,
                    bbknb_sanksi: 50000,
                    PKB_pokok: 120000,
                    PKB_sanksi: 60000,
                    swdkllj_pokok: 15000,
                    swdkllj_sanksi: 7500,
                    administrasi_stnk_pokok: 5000,
                    administrasi_stnk_sanksi: 2500,
                    administrasi_tnkb_pokok: 5000,
                    administrasi_tnkb_sanksi: 2500,
                  }
                }
              },
            ]
          },
        },
      },
      ajuan_subsidi: {
        create: [
          {
            jumlah: 500,
            alasan: 'Low income',
            dokumen_pendukung: {
              createMany: {
                data: [
                  {
                    name: 'dokumen bukti.jpg',
                    url: 'http:contoh_url'
                  },
                  {
                    name: 'dokumen bukti2.jpg',
                    url: 'http:contoh_url'
                  }
                ]
              }
            },
            tanggal_pengajuan: new Date('2023-08-25'),
            status_pengajuan: 'ditolak',
          },
          {
            jumlah: 300,
            alasan: 'Financial hardship',
            dokumen_pendukung: {
              createMany: {
                data: [
                  {
                    name: 'dokumen bukti.jpg',
                    url: 'http:contoh_url'
                  },
                ]
              }
            },
            tanggal_pengajuan: new Date('2023-08-26'),
            status_pengajuan: 'diproses',
          },
        ]
      }
    },
  })

  // Government
  await prisma.user.create({
    data: {
      name: "Government",
      email: "government@email.com",
      phone: "081234567891",
      password: await argon2.hash("rahasia"),
      saldo: 50000,
      role: 0,
      ktp: {
        create: {
          nik: "1234567890123457",
          nama: "Government",
          tempat_lahir: "Bandung",
          tanggal_lahir: new Date("1992-08-10"),
          alamat: "Jl. PQR No. 789",
          rt: 5,
          rw: 6,
          kelurahan_desa: "Ciumbuleuit",
          kecamatan: "Cidadap",
          kabupaten_kota: "Bandung",
          provinsi: "Jawa Barat",
          golongan_darah: "ab",
          agama: "kristen",
          jenis_kelamin: "lainnya",
          status_perkawinan: "belum_kawin",
          pekerjaan: "Graphic Designer",
          kewarganegaraan: "WNI",
          tanggal_terbit: new Date("2012-12-05"),
        }
      }
    },
  })
}


module.exports = seedUser;
