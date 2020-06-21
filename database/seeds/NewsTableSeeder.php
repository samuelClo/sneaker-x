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
            $article = new \App\News();
            $article->title = $object->title;
            $article->summary = $object->summary;
            $article->content = $object->content;
            $article->author = $object->author;
            $article->image = $image['secure_url'];
            $article->banner = $banner['secure_url'];
            $article->is_published = $object->is_published;
            $article->save();
        }
    }
}
