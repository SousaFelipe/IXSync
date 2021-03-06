<?php
use Illuminate\Support\Facades\Route;



Route::get('/', [App\Http\Controllers\Controller::class, 'index'])->name('index');
Route::get('/auth', [App\Http\Controllers\Controller::class, 'auth'])->name('auth');


Route::get('/login', [App\Http\Controllers\Auth\LoginController::class, 'login'])->name('login');
Route::post('/authenticate', [App\Http\Controllers\Auth\LoginController::class, 'authenticate'])->name('authenticate');
Route::post('/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('logout');


Route::prefix('/')->middleware('auth')->group(function () {

    Route::prefix('/admin')->name('admin')->group(function () {
        Route::get('/', [App\Http\Controllers\AppController::class, 'admin']);
    });

    Route::prefix('/caixa')->name('caixa')->group(function () {
        Route::get('/', [App\Http\Controllers\AppController::class, 'caixa']);
    });

    Route::prefix('/financeiro')->name('financeiro')->group(function () {
        Route::get('/', [App\Http\Controllers\AppController::class, 'financeiro']);
    });

    Route::prefix('/operacional')->name('operacional')->group(function () {
        Route::get('/', [App\Http\Controllers\AppController::class, 'operacional']);
    });

});


Route::prefix('/clientes')->group(function () {

    Route::get('/buscar/{id_cliente}', [App\Http\Controllers\ClienteController::class, 'buscar']);
    Route::get('/listar/{vbusca}/{tbusca}', [App\Http\Controllers\ClienteController::class, 'listar']);

});
