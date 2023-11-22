<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Schedule;
use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Schedule::get();
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
        $this->validate($request, [
            'title' => 'required|string',
            'start_date' => 'required',
            'end_date' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
            'inviter' => 'required',
            'attended_by' => 'required',
            'companion' => 'required',
            'responsibler' => 'required',
            'location' => 'required',
            'province' => 'required',
            'city' => 'required',
        ], [
            'required' => 'Kolom :attribute wajib diisi.',
        ]);


        $data = $request->input();

        $user = Schedule::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'start_date' => date('Y-m-d', strtotime($data['start_date'])),
            'end_date' => date('Y-m-d', strtotime($data['end_date'])),
            'start_time' => $data['start_time']['hours'] . ':' . $data['start_time']['minutes']  . ':' . $data['start_time']['seconds'],
            'end_time' => $data['end_time']['hours'] . ':' . $data['end_time']['minutes']  . ':' . $data['end_time']['seconds'],
            'inviter' => $data['inviter'],
            'attended_by' => $data['attended_by'],
            'companion' => $data['companion'],
            'responsibler' => $data['responsibler'],
            'location' => $data['location'],
            'province' => $data['province'],
            'city' => $data['city'],
        ]);

        return $user;
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
        $this->validate($request, [
            'title' => 'required|string',
            'description' => 'required|string',
            'start_date' => 'required',
            'end_date' => 'required',
            'inviter' => 'required',
            'attended_by' => 'required',
            'companion' => 'required',
            'responsibler' => 'required',
            'location' => 'required',
            'province' => 'required',
            'city' => 'required',
        ], [
            'required' => 'Kolom :attribute wajib diisi.',
        ]);

        $data = $request->input();
        $dataSchedule = [
            'title' => $data['title'],
            'description' => $data['description'],
            'start_date' => date('Y-m-d', strtotime($data['start_date'])),
            'end_date' => date('Y-m-d', strtotime($data['end_date'])),
            'start_time' => $data['start_time']['hours'] . ':' . $data['start_time']['minutes']  . ':' . $data['start_time']['seconds'],
            'end_time' => $data['end_time']['hours'] . ':' . $data['end_time']['minutes']  . ':' . $data['end_time']['seconds'],
            'inviter' => $data['inviter'],
            'attended_by' => $data['attended_by'],
            'companion' => $data['companion'],
            'responsibler' => $data['responsibler'],
            'location' => $data['location'],
            'province' => $data['province'],
            'city' => $data['city'],
        ];

        $schedule = Schedule::findOrFail($data['id_schedule']);

        $schedule->update($dataSchedule);
        $schedule->fresh();

        return $schedule;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $schedule = Schedule::findOrFail($id);
        $schedule->delete();
    }
}
