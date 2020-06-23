<?php

namespace App\Http\Controllers;

use App\Brand;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Exception;

class BrandController extends Controller
{
    /**
     * Handle error
     *
     * @param $error
     * @param int $statusCode
     * @return JsonResponse
     */
    public function handleError($error, int $statusCode = 400)
    {
        return response()->json([
            'error' => $error,
        ], $statusCode);
    }

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
            $all = Brand::orderBy('created_at', 'asc')->withCount('products')->get();
        } catch (Exception $err) {
            return $this->handleError($err->errorInfo[2]);
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

        try {
            $el = Brand::create($requestRes);
        } catch (Exception $err) {
            return $this->handleError($err->errorInfo[2]);
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
            $el = Brand::findOrFail($id);
        } catch (Exception $err) {
            $error = 'Unknown id';

            return $this->handleError($error, 404);
        }

        return response()->json([
            'error' => $error,
            'Brand' => $el,
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
            $el = Brand::findOrFail($id);
        } catch (Exception $err) {
            $error = 'Unknown id';

            return $this->handleError($error, 404);
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
            $el = Brand::findOrFail($id);
        } catch (Exception $err) {
            $error = 'Unknown id';

            return $this->handleError($error, 404);
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
