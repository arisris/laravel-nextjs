<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
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
        if ($admin) {
            \App\Models\User::factory(10)->create();
        }
    }
}
