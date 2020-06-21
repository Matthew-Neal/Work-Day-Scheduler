//show time using Momentjs format
$("#currentDay").text(
    moment().format("dddd") + "," + moment().format("MMMM, Do, YYYY, h:mm:ss a")
);
const $currentDay = $("#currentDay");
const $container = $(".container");
let now = moment().format('MMMM Do YYYY, h:mm:ss a');
$currentDay.text(now);

