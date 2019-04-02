//alert("Hello! I am an alert box!!");
window.onload = function what(){

var counter = document.getElementById('counter');
var average_time = document.getElementById('average_time');

var FCFS1 = parseInt(document.getElementById('1FCFS').innerHTML);
var FCFS2 = parseInt(document.getElementById('2FCFS').innerHTML);
var FCFS3 = parseInt(document.getElementById('3FCFS').innerHTML);
var FCFS4 = parseInt(document.getElementById('4FCFS').innerHTML);
var FCFS5 = parseInt(document.getElementById('5FCFS').innerHTML);
var FCFS6 = parseInt(document.getElementById('6FCFS').innerHTML);

var sum = FCFS1+FCFS2+FCFS3+FCFS4+FCFS5+FCFS6;

counter.innerHTML = sum;
average_time.innerHTML = sum/6;
};
