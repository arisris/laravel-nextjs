<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $admin = \App\Models\User::factory()
            ->create([
                'name' => "admin",
                'email' => "admin@example.net",
                'email_verified_at' => now(),
                'password' => Hash::make("password123"), // password123
                'remember_token' => Str::random(10)
            ]);
        // create 10 fake user
        if ($admin) {
            Post::factory(5)
            ->for($admin)
            ->afterCreating(function (Post $post) {
                $post->attachTag("Uncategorized", "post_category");
                $post->attachTags(["Test", "Hello", "World"], "post_tag");
                return $post;
            })
            ->create();
            \App\Models\User::factory(10)->create();
        }
    }
}
