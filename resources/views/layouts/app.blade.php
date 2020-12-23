<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title> IXSync - @yield('title') </title>

        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Raleway:100,600">
        <!--<link rel="stylesheet" type="text/css" href="{{ asset('static/font-awesome.min.css') }}">-->

    </head>

    <body>

        @yield('content')

        <!--<script src="{{ asset('fontawesome/js/all.min.js') }}"></script>-->

    </body>
</html>
