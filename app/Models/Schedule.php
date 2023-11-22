<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Schedule extends Model
{
    use SoftDeletes;

    protected $table = "schedules";

    protected $primaryKey = 'id_schedule';
 
    protected $guarded = [];

    protected $casts = [
        'start_time'  => 'datetime:H:i',
        'end_time'  => 'datetime:H:i',
    ];

    protected $appends = ['start', 'end', 'title_props'];


    public function getStartAttribute()
    {
        return $this->start_date;
    }

    public function getEndAttribute()
    {
        return $this->end_date;
    }

    public function getTitlePropsAttribute()
    {
        return $this->title;
    }
    
}