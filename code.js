//alert("Hello! I am an alert box!!");
window.onload = function what(){

var submit = document.getElementById('submit');

submit.onclick = function(){

  var counter = document.getElementById('counter');
  var average_time = document.getElementById('average_time');
  var FCFS = document.getElementsByClassName('forCount');


  var sum=0;
  for (i=0; i<FCFS.length ; i++){
    sum= sum+parseInt(FCFS[i].value);
  }
  console.log(sum);



  average_time.innerHTML = sum/FCFS.length;

  var number = 0;
  var interval = setInterval(() =>  {

    counter.innerText =  number++;
    if(number > sum) {
      clearInterval(interval);
    }
  }, 1000);// repeat every 1 second
};

};
