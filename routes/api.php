<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\LoginController;
use App\Http\Controllers\API\RoleController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\GuestController;
use App\Http\Controllers\API\ScheduleController;
use App\Http\Controllers\API\UserRoleController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('auth:sanctum')->get('/authenticated', function (Request $request) {
    return $request->user();
});


// Route::middleware('auth:sanctum')->get('/authenticated', function (Request $request) {
//     return true;
// });

Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [LoginController::class, 'index']);
Route::post('logout', [LoginController::class, 'logout']);


Route::get('/get-permission', [UserRoleController::class, 'getPermission'])->name('api.permission.get');

Route::get('/get/director', function () {
    $director = \App\Models\User::whereHas("roles", function ($q) {
        $q->where("name", "director");
    })->first();
    $dtoday = new DateTime();
    $today = $dtoday->format('Y-m-d');
    $dtoday->modify('+1 day');
    $tomorrow = $dtoday->format('Y-m-d');

    $cToday = \App\Models\Schedule::where('start_date', $today)->count();
    $cTomorrow = \App\Models\Schedule::where('start_date', $tomorrow)->count();

    $data = [
        'director' => $director,
        'c_agenda' => [
            'today' => $cToday,
            'tomorrow' => $cTomorrow
        ]
    ];

    return $data;
});



Route::get('/get/schedule/today_tomorrow', function () {
    $dtoday = new DateTime();
    $today = $dtoday->format('Y-m-d');
    $dtoday->modify('+1 day');
    $tomorrow = $dtoday->format('Y-m-d');

    $cToday = \App\Models\Schedule::where('start_date', $today)->get();
    $cTomorrow = \App\Models\Schedule::where('start_date', $tomorrow)->get();
    

    $data = [
        'today' => $cToday,
        'tomorrow' => $cTomorrow
    ];

    return $data;
});

Route::get('/get/schedule/currentmonth', function () {
    
    // $month = date('m');
    // $scheds = \App\Models\Schedule::whereMonth('start_date', $month)->get();
    $month = date('m');
    $scheds = \App\Models\Schedule::get();

    $pejabat = \App\Models\User::whereHas("roles", function ($q) {
        $q->whereIN("name", ['director', 'manager', 'supervisor']);
    })->get();

    $data = [
        'schedules' => $scheds,
        'pejabat' => $pejabat,
    ];

    return $data;
});

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::apiResources([
        'user' => UserController::class,
        'role' => RoleController::class,
        'guest' => GuestController::class,
        'user-role' => UserRoleController::class,
        'schedule' => ScheduleController::class,
    ]);
});



// Route::apiResource('user', UserController::class);
