<?php

use Illuminate\Database\Seeder;
use JD\Cloudder\Facades\Cloudder;

class ImageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = File::get('database/fake_data/images.json');
        $data = json_decode($json);
        foreach ($data as $object)
        {
            Cloudder::upload(storage_path('img/' . $object->image), null, ['folder' => 'sneaker-x/Images']);
            $img = Cloudder::getResult();
            $image = new \App\Image();
            $image->image = $img['secure_url'];
            $image->product_id = $object->sneaker_id;
            $image->save();
        }
    }
}
