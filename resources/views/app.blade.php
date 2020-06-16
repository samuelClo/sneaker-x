<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>
    </head>
    <body>
        <div id="app">

        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>

{{--@if (env('APP_ENV') === 'local')--}}
{{--    <link href="{{ asset('css/app.css') }}" rel="stylesheet">--}}
{{--@else--}}
{{--    <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">--}}
{{--@endif--}}

{{--@if (env('APP_ENV') === 'local')--}}
{{--    <script src="{{ asset('js/app.js') }}"></script>--}}
{{--@else--}}
{{--    <script src="{{ secure_asset('js/app.js') }}"></script>--}}
{{--@endif--}}
