<?php

use Illuminate\Database\Seeder;
use JD\Cloudder\Facades\Cloudder;

class NewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = File::get('database/fake_data/news.json');
        $data = json_decode($json);

        foreach ($data as $object) {
            Cloudder::upload(storage_path('img/' . $object->image), null, ['folder' => 'sneaker-x/News']);
            $image = Cloudder::getResult();
            Cloudder::upload(storage_path('img/' . $object->banner), null, ['folder' => 'sneaker-x/News']);
            $banner = Cloudder::getResult();
            $news = new \App\News();
            $news->title = $object->title;
            $news->summary = $object->summary;
            $news->content = $object->content;
            $news->author = $object->author;
            $news->image = $image['secure_url'];
            $news->banner = $banner['secure_url'];
            $news->is_published = $object->is_published;
            $news->save();
        }
    }
}
