<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "status" => Post::STATUS_PUBLISH,
            "type" => Post::TYPE_POSTS,
            "name" => $this->faker->sentence(),
            "body" => $this->faker->text(500),
        ];
    }
}
