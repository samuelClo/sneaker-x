<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Exception;

class ProductController extends Controller
{
    /**
     * Handle error
     *
     * @param $error
     * @param int $statusCode
     * @return JsonResponse
     */
    public function handleError($error, int $statusCode = 200)
    {
        return response()->json([
            'error' => $error,
        ], $statusCode);
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request )
    {
        $error = null;
        $all = null;

        try {
            $all = null;

            if (($request->input('sort') == "random") && intval($request->input('max'), 10) > 0)
            {
                $all = Product::all()->random($request->input('max'));
            }
            else
            {
                $all = Product::all();
            }
        } catch(Exception $err) {
            return $this->handleError($err->errorInfo[2]);
        }

        return  response()->json([
            'error' => $error,
            'payload' => $all,
        ]);
    }

    /**
     * Get filtered products
     *
     * @param Request $request
     * @param $sort
     * @param $max
     * @return JsonResponse
     */
    public function getFilteredProduct(Request $request, $sort, $max)
    {
        $error = null;
        $all = null;

        echo $sort;
        echo $max;

        try {
            $all = Product::all()->random(10);
        } catch(Exception $err) {
            return $this->handleError($err->errorInfo[2]);
        }

        return  response()->json([
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

        try {
            $el = Product::create($requestRes);
        } catch(Exception $err) {
            return $this->handleError($err->errorInfo[2]);
        }

        return  response()->json([
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
            $el = Product::where("id", $id)->with('images')->first();
        } catch(Exception $err) {
            $error = 'Unknown id';

            return $this->handleError($error, 404);
        }

        return  response()->json([
            'error' => $error,
            'payload' => $el,
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
            $el = Product::findOrFail($id);
        } catch(Exception $err) {
            $error = 'Unknown id';

            return $this->handleError($error, 404);
        }

        try {
            $el->update($requestRes);
        } catch(Exception $err) {
            $error = $err->errorInfo[2];
        }

        return  response()->json([
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
            $el = Product::findOrFail($id);
        } catch(Exception $err) {
            $error = 'Unknown id';

            return $this->handleError($error, 404);
        }

        try {
            $el->delete($id);
        } catch(Exception $err) {
            $error = $err->errorInfo[2];
        }

        return  response()->json([
            'error' => $error,
        ]);
    }
}

//Cloudder::destroyImage('Sneakizy/Products/' . pathinfo($product->image)['filename']);
//                Cloudder::delete('Sneakizy/Products/' . pathinfo($product->image)['filename']);
