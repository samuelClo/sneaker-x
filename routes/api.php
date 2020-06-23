<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('baskets', 'BasketController');
Route::apiResource('brands', 'BrandController');
Route::apiResource('images', 'ImageController');
Route::apiResource('news', 'NewsController');
Route::apiResource('orders', 'OrderController');

//
//Route::prefix('products')->group(function () {
//    Route::get('{sort}/{max}', 'ProductController@getFilteredProduct');
//});

//Route::get('products/getTenRandom', 'ProductController@getTenRandomProducts');
//Route::get('products/getTenRandom', function ()
//{
//    return "ehehhe";
//});

Route::apiResource('products', 'ProductController');


