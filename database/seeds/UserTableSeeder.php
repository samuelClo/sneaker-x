<?php

use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User;
        $user->lastname = "Samuel";
        $user->firstname = "CLOAREC";
        $user->email = "admin@sam.fr";
        $user->password = bcrypt('123test');
        $user->is_admin = true;
        $user->save();
    }
}
