<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'name' => 'Pramana Yuda Sayeti, S.Kom',
                'username' => '199407292022031002',
                'jabatan' => 'Ahli Pertama - Pranata Komputer',
                'email' => '199407292022031002@kemenag.go.id',
                'password' => Hash::make('superadmin'),
                'updated_at' => \Carbon\Carbon::now(),
                'profile_photo_url' => ''
            ],
            [
                'name' => 'Rini Amelia, M.Pd',
                'username' => 'riniamelia',
                'jabatan' => 'Kepala Sekolah',
                'email' => 'riniamelia@kgmail.com',
                'password' => Hash::make('riniamelia'),
                'updated_at' => \Carbon\Carbon::now(),
                'profile_photo_url' => 'http://res.cloudinary.com/dezj1x6xp/image/upload/v1700707079/PandanViewMandeh/riniamelia_cl2oz8.jpg'
            ],
            [
                'name' => 'Hengki Prima, S.Kom',
                'username' => 'hengkiprima',
                'jabatan' => 'Administrator',
                'email' => 'hengkiprima@gmail.com',
                'password' => Hash::make('hengkiprima'),
                'updated_at' => \Carbon\Carbon::now(),
                'profile_photo_url' => ''
            ],
            [
                'name' => 'Dihen Ramadhani Puja, A.Md',
                'username' => 'dihenrp',
                'jabatan' => 'Kepala Seksi Pondok Pesantren',
                'email' => 'dihenrp@gmail.com',
                'password' => Hash::make('dihenrp'),
                'updated_at' => \Carbon\Carbon::now(),
                'profile_photo_url' => ''
            ]
        ];

        foreach ($data as $key => $item) {
            \App\Models\User::firstOrCreate(
                ['username' => $item['username']],
                $item
            );
        }


        $schedules = [
            [
                'title' => 'PEMBUKAAN PELATIHAN KESIAPAN MENGHADAPI BENCANA DI SMA NEGERI 3 PAINAN',
                'description' => 'Kepala Sekolah SMA Negeri 3 Painan Reni Amelia mengadakan Pelatihan Kesiapsiagaan menghadapi Bencana di SMA Negeri Painan, Jumat 20 Oktober 2023',
                'start_date' => '2023-10-20',
                'end_date' => '2023-10-20',
                'start_time' => '09:00',
                'end_time' => '12:00',
                'inviter' => 'SMAN 3 Painan',
                'attended_by' => 'Himpunan Perawat Gawat Darurat dan Bencana Sumbar (HIBGABI)',
                'companion' => 'Hengki Prima, S.Kom',
                'responsibler' => 'SMAN 3 Painan',
                'location' => 'Lapangan SMAN 3 Painan',
                'province' => 'Sumatera Barat',
                'city' => 'Painan',
            ],
            [
                'title' => 'Penandatangan MOU SMAN 3 Painan dengan Kemenag Pessel terkait Wirid Remaja Kolaborasi',
                'description' => ' SMA Negeri 3 Painan salah satu sekolah berasrama di Sumatera Barat bekerjasama dengan– Kantor Kementerian Agama Kabupaten Pesisir Selatan melalui Ka. KUA Kecamatan IV Jurai',
                'start_date' => '2023-10-15',
                'end_date' => '2023-10-15',
                'start_time' => '09:00',
                'end_time' => '12:00',
                'inviter' => 'SMAN 3 Painan',
                'attended_by' => ' Kementerian Agama Kabupaten Pesisir Selatan',
                'companion' => 'Ka. KUA Kecamatan IV Jurai.',
                'responsibler' => 'SMAN 3 Painan',
                'location' => 'Lapangan SMAN 3 Painan',
                'province' => 'Sumatera Barat',
                'city' => 'Painan',
            ]
        ];

        foreach ($schedules as $key => $item) {
            \App\Models\Schedule::firstOrCreate(
                ['title' => $item['title']],
                $item
            );
        }
    }
}
