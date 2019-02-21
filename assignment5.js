var weather=[
    {
        "date":1,
        "day":'Sunday',
        "highest_temperature":90,
        "lowest_temperature":60,
        "weater_condition":'sunny'
    },
    {
        "date":2,
        "day":'Monday',
        "highest_temperature":100,
        "lowest_temperature":70,
        "weater_condition":'sunny'
    },
    {
        "date":3,
        "day":'Tuesday',
        "highest_temperature":80,
        "lowest_temperature":50,
        "weater_condition":'cloudy'
    },
    {
        "date":4,
        "day":'Wednesday',
        "highest_temperature":60,
        "lowest_temperature":30,
        "weater_condition":'rainy'
    },
    {
        "date":5,
        "day":'Thursday',
        "highest_temperature":45,
        "lowest_temperature":25,
        "weater_condition":'rainy'
    },
]
function insert()
{
    weather.push({date:6,day:'Friday',highest_temperature:50,lowest_temperature:25,weater_condition:'cloudy'});
    weather.push({date:7,day:'Saturday',highest_temperature:60,lowest_temperature:35,weater_condition:'sunny'})
}
insert();
for(let i=0;i<weather.length;i++)
{
    console.log(weather[i]);
}
var Max_weather=[];
for(let i=0;i<weather.length;i++)
{
    Max_weather[i]=weather[i].highest_temperature;
}
for(let i=0;i<weather.length;i++)
{
    console.log(Max_weather[i]);
}
function sort(arr) {
    var tmp;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    return arr;

}
var Sorted_max_weather=[];
Sorted_max_weather=sort(Max_weather)
console.log("Highest temperature of week:")
console.log(Sorted_max_weather[weather.length-1])
var Min_weather=[];
for(let i=0;i<weather.length;i++)
{
    Min_weather[i]=weather[i].lowest_temperature;
}
for(let i=0;i<weather.length;i++)
{
    console.log(Min_weather[i]);
}
var Sorted_min_weather=[];
Sorted_min_weather=sort(Min_weather)
console.log("Lowest temperature of week:")
console.log(Sorted_min_weather[0])
function mean()
{
    let sum=0
    for(let i=0;i<weather.length;i++)
    { 
        sum=sum+weather[i].highest_temperature+weather[i].lowest_temperature
    }
    console.log("Mean temperature of the week is:")
    let mean=sum/(weather.length*2)
    console.log(mean) 
}
mean()
var total_temperature=[];
total_temperature=Sorted_max_weather.concat(Sorted_min_weather)
function mode(array) 
{
    var maxValue = 0, maxCount = 0;
    for (i = 0; i < total_temperature.length; ++i) 
    {
        let count = 0;
        for (j = 0; j < total_temperature.length; ++j) 
        {
            if (array[j] == array[i])
            ++count;
        }
 
        if (count > maxCount) 
        {
            maxCount = count;
            maxValue = array[i];
        }
    }
       console.log("Mode of the week tempearture is:")
       console.log(maxValue)
}
mode(total_temperature);
