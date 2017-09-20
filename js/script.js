$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });


var lat = $("#lat").val();
var lon = $("#lon").val();
var timezone = $("#timezone").val();
var city = $("#cityInput").val();

console.log(city);

athan(lat, lon, timezone);
$("#city").text(city);


$("#submit").click(function ($e) {
	$e.preventDefault();
	var lat = $("#lat").val();
	var lon = $("#lon").val();
	var timezone = $("#timezone").val();
	var city = $("#cityInput").val();
	
		
	athan(lat, lon, timezone);
	$("#city").text(city);
});


function athan(lat, lon, timezone){
var date = new Date(); // today
//var times = prayTimes.getTimes(date, [-37.8136, 144.9631], +10);
var times = prayTimes.getTimes(date, [lat, lon], timezone);
var list = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha', 'Midnight'];

var html = '<table id="timetable" class="bordered highlight">';
html += '<tr><th colspan="3">' + date.toLocaleDateString() + '</th></tr>';
for (var i in list) {
	html += '<tr><td>' + list[i] + '</td>';
	html += '<td><i class="small material-icons">access_time</i></td>';
	html += '<td id=' + i + '>' + times[list[i].toLowerCase()] + '</td></tr>';
}
html += '</table>';
document.getElementById('table').innerHTML = html;


var newTime = new Date().toLocaleTimeString('en-US', {
	hour12: false,
	hour: "numeric",
	minute: "numeric"
});
document.getElementById('nowTime').innerHTML = newTime;


var rString = $("#0").html();
console.log($("#0").html() + " is #0");

setInterval(function () {
	"use strict";
	var newTime = new Date().toLocaleTimeString('en-US', {
		hour12: false,
		hour: "numeric",
		minute: "numeric"
	});
	document.getElementById('nowTime').innerHTML = newTime;

	var numbers = [2, 3, 4, 5, 7]; // 7 is for testing only
	$.each(numbers, function (index, value) {
		if ($('#' + value).html() == newTime) {
			$('#athanMp3')[0].play(); //play mp3
		}
	
	
	
	/*
		//upcoming salat
			var start = newTime;
			var end = $('#' + value).html();
		console.log (end);

			var s = start.split(':');
			var e = end.split(':');

			var min = e[1]-s[1];
			var hour_carry = 0;
			if(min < 0){
				min += 60;
				hour_carry += 1;
			}
			var hour = e[0]-s[0]-hour_carry;
			var diff = hour + ":" + min;

			console.log("Time difference is "+ diff);
	
	*/
	
	
	
	
	
	
	
	});

	//Fazar
	if ($('#0').html() == newTime) {
		$('#fajrMp3')[0].play(); //play mp3
	}
	
	



}, 1000);
//	60000  is one minute
	}
