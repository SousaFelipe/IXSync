<?php
namespace App\Http\Controllers;


use Illuminate\Http\Request;


class AppController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }



    public function admin(Request $request)
    {
        return view('app');
    }



    public function caixa(Request $request)
    {
        return view('app');
    }



    public function financeiro(Request $request)
    {
        return view('app');
    }



    public function operacional(Request $request)
    {
        return view('app');
    }
}
