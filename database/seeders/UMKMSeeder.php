<?php

namespace Database\Seeders;

use App\Models\UMKM;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UMKMSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i < 15; $i++) {
            static $umkmNames = [
                'Toko Serba Ada', 'Kedai Kopi Nusantara', 'Oleh-Oleh Tradisional', 
                'Kerajinan Lokal', 'Kebutuhan Harian', 'Pakaian Khas', 
                'Kuliner Tradisional', 'Elektronik Murah', 'Perabot Rumah Tangga', 
                'Tanaman Hias Eksotis', 'Mainan Edukatif', 'Makanan Sehat', 
                'Aksesoris Motor Lokal', 'Furniture Unik', 'Fotografi Seni'
            ];
        
            static $locations = [
                'Jl. Raya Kedungurang, Jawa Tengah', 'Jl. Malioboro, Yogyakarta', 
                'Jl. Sudirman, Jakarta', 'Jl. Ahmad Yani, Bandung', 
                'Jl. Imam Bonjol, Semarang', 'Jl. Diponegoro, Surabaya', 
                'Jl. Gajah Mada, Bali', 'Jl. Kartini, Solo', 
                'Jl. Pahlawan, Malang', 'Jl. Soekarno Hatta, Padang'
            ];
        
            $colors = ['FF5733', '33FF57', '3357FF', 'FF33A1', 'A133FF', 'FFD700', '00CED1', '9400D3'];
        
            $user = User::create([
                'name' => "UMKM " . rand(100, 999),
                'email' => "umkm{$i}_" . rand(100, 999) . "@gmail.com",
                'password' => bcrypt('password'),
            ]);
        
            $nameKey = array_rand($umkmNames);
            $name = $umkmNames[$nameKey];
            unset($umkmNames[$nameKey]);
        
            $backgroundColor = $colors[array_rand($colors)];
            $textColor = 'FFFFFF';
        
            $logoText = urlencode(substr($name, 0, 10));
            $logo = "https://dummyimage.com/300x300/{$backgroundColor}/{$textColor}.png&text={$logoText}";
        
            $description = "{$name} yang menyediakan produk dan layanan terbaik dengan harga terjangkau.";
        
            $location = $locations[array_rand($locations)];
        
            $whatsappNumber = '0812' . rand(10000000, 99999999);

            UMKM::create([
                'user_id' => $user->id,
                'name' => $name,
                'logo' => $logo,
                'description' => $description,
                'location' => $location,
                'whatsapp_number' => $whatsappNumber,
            ]);
        }
        
        
        
        

    }
}
