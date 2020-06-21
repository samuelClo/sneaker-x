<?php

use Illuminate\Database\Seeder;
use JD\Cloudder\Facades\Cloudder;

class BrandTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = File::get('database/fake_data/brands.json');
        $data = json_decode($json);
        foreach ($data as $object)
        {
            Cloudder::upload(storage_path('img/' . $object->image), null, ['folder' => 'sneaker-x/Brands']);
            $image = Cloudder::getResult();
            Cloudder::upload(storage_path('img/' . $object->banner), null, ['folder' => 'sneaker-x/Brands']);
            $banner = Cloudder::getResult();
            $brand = new \App\Brand();
            $brand->name = $object->name;
            $brand->image = $image['secure_url'];
            $brand->banner = $banner['secure_url'];
            $brand->save();
        }
    }
}
