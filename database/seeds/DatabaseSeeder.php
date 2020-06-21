<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call(BrandTableSeeder::class);
         $this->call(ImageTableSeeder::class);
         $this->call(NewsTableSeeder::class);
         $this->call(ProductTableSeeder::class);
         $this->call(UserTableSeeder::class);
    }
}
