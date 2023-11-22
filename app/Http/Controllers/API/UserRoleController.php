<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use DataTables;
use Illuminate\Support\Arr;
use Auth;
use Spatie\Permission\Models\Permission;

class UserRoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $roles = Role::with('permissions')->get();

        return Datatables::of($roles)
            ->addIndexColumn()
            ->addColumn('role_permissions', function ($role) {
                $data = $role->permissions->groupBy(function ($data) {
                    return substr($data->name, 0, 4);
                });

                $raw = $data->toArray();

                // $html = '';
                $htmlArray = [];
                $index = 0;
                foreach ($raw as $key => $perm) {
                    $data = Arr::pluck($perm, 'name');

                    $htmlArray[] = ucwords($key) . ': ' . implode(", ", $data);
                    if ($key == 'page' && count($data) != 0) {
                        // $html .= '<br /><br />';
                        $index++;
                    }
                }

                return $htmlArray;
            })
            ->addColumn('permission_ids', function ($role) {
                $data = $role->permissions;
                $permission_ids = $data->pluck('id');
                return $permission_ids;
            })
            ->addColumn('action', function ($role) use ($request) {
                $btn = '';
                $btn .='<a href="#" @click="showModalEdit(item)">
                            <i class="fas fa-edit blue"></i>
                        </a>
                        |
                        <a href="#" @click="deleteData(item.id)">
                            <i class="fas fa-trash-alt red"></i>
                        </a>';
                return $btn;
            })
            ->rawColumns(['action', 'role_permissions', 'permission_ids'])
            ->make(true);
    }

    public function getPermission()
    {
        $permissions = Permission::all();
        $data = $permissions->groupBy(function ($data) {
            return substr($data->name, 0, 4);
        });
        return $data;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
