<?php

namespace App\Http\Controllers;

use App\News;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Exception;
use phpDocumentor\Reflection\Types\This;

class NewsController extends Controller
{
    /**
     * Handle error
     *
     * @param $error
     * @param int $statusCode
     * @return JsonResponse
     */
    public function handleError($error, int $statusCode = 500)
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
    public function index(Request $request)
    {
        $error = null;
        $all = null;

        if ($request->quantity) {
            try {
                $all = News::orderBy('created_at', 'asc')
                    ->where([
                        ['published_at', '<=', Carbon::now()],
                        ['is_published', 1]
                    ])
                    ->take(5)
                    ->get();
            } catch (Exception $err) {
                return $this->handleError($err->errorInfo[2]);
            }
        } else {
            try {
                $all = News::orderBy('created_at', 'asc')
                    ->where('published_at', '<=', Carbon::now())
                    ->get();
            } catch (Exception $err) {
                return $this->handleError($err->errorInfo[2]);
            }
        }

        return response()->json([
            'error' => $error,
            'payload' => $all,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Controllers\Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $error = null;
        $el = null;
        $requestRes = $request->all();

        try {
            $el = News::create($requestRes);
        } catch (Exception $err) {

//            return $this->handleError($err->errorInfo[2]);
            return $err;
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
            $el = News::findOrFail($id);
        } catch (Exception $err) {
            $error = 'Unknown id';

            return $this->handleError($error, 404);
        }

        return response()->json([
            'error' => $error,
            'payload' => $el,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Controllers\Request $request
     * @param $id
     * @return JsonResponse
     */
    public function update(Request $request, $id)
    {
        $error = null;
        $el = null;
        $requestRes = $request->all();

        try {
            $el = News::findOrFail($id);
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
            $el = News::findOrFail($id);
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
