<?php

namespace App\Http\Controllers;

use App\Basket;
use App\Mail\Mailtrap;
use App\Order;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\Mail;

class BasketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $error = null;
        $all = null;

        try {
            $all = Basket::orderBy('created_at', 'asc')->get();
        } catch (Exception $err) {
            $error = $err->errorInfo[2];

            return response()->json([
                'error' => $error,
            ]);
        }

        return response()->json([
            'error' => $error,
            'payload' => $all,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $error = null;
        $el = null;
        $requestRes = $request->all();

        $user = $requestRes['user'];

        Mail::to($user['email'])->send(new Mailtrap(
            $user['name'],
            isset($user['firstName']) ? $user['firstName'] : null,
            isset($user['email']) ? $user['email'] : null,
            isset($user['object']) ? $user['object'] : null,
            isset($user['message']) ? $user['message'] : null
        ));

//        Mail::to($user['email'])->send(new Mailtrap($user, $truc));

        try {
            $el = Basket::create($requestRes);
        } catch (Exception $err) {
            $error = $err;

            return response()->json([
                'error' => $error,
            ]);
        }

        return response()->json([
            'error' => $error,
            'payload' => $el,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $error = null;
        $el = null;

        try {
            $el = Basket::findOrFail($id);
        } catch (Exception $err) {
            $error = 'Unknown id';

            return response()->json([
                'error' => $error,
            ], 404);
        }

        return response()->json([
            'error' => $error,
            'Basket' => $el,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function update(Request $request, $id)
    {
        $error = null;
        $el = null;
        $requestRes = $request->all();

        try {
            $el = Basket::findOrFail($id);
        } catch (Exception $err) {
            $error = 'Unknown id';

            return response()->json([
                'error' => $error,
            ], 404);
        }

        try {
            $el->update($requestRes);
        } catch (Exception $err) {
            $error = $err->errorInfo[2];
        }

        return response()->json([
            'error' => $error,
            'payload' => $el,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return JsonResponse
     */
    public function destroy($id)
    {
        $error = null;
        $el = null;

        try {
            $el = Basket::findOrFail($id);
        } catch (Exception $err) {
            $error = 'Unknown id';

            return response()->json([
                'error' => $error,
            ], 404);
        }

        try {
            $el->delete($id);
        } catch (Exception $err) {
            $error = $err->errorInfo[2];
        }

        return response()->json([
            'error' => $error,
        ]);
    }
}
