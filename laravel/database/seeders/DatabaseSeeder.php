<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $admin = \App\Models\User::factory()->create([
            'name' => "admin",
            'email' => "admin@example.net",
            'email_verified_at' => now(),
            'password' => Hash::make("password123"), // password123
            'remember_token' => Str::random(10)
        ]);
        $users = null;
        if ($admin) {
            $users = \App\Models\User::factory(10)->create();
        }
    }
}
