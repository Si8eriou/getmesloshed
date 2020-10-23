<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDrinkIngredientRelationshipTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('drink_ingredient_relationship', function (Blueprint $table) {
            $table->addColumn('integer', 'drinkID');
            $table->addColumn('integer', 'glassID');
            $table->addColumn('integer', 'amount');
            $table->addColumn('integer', 'unit');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('drink_ingredient_relationship');
    }
}
