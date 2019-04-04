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

document.getElementById('plus_btn').addEventListener('click', addRow);
function addRow(e){
  var lastRow = document.querySelector("tr.table-row:last-child");
  lastRow.setAttribute('style', 'border:none');

  var currentRowNumber = document.getElementsByClassName("forCount").length + 1;
   var row = document.createElement('tr');
   row.className = 'table-row';
   var processNumber = document.createElement('td');
   processNumber.id = "FCFS";
   processNumber.innerHTML= "P"+currentRowNumber;
   row.appendChild(processNumber);

   var burstTime = document.createElement('td');
   burstTime.id = "FCFSinput";
   row.appendChild(burstTime);

   var inputField = document.createElement('input');
   inputField.setAttribute('type', 'text');
   inputField.className = 'forCount';
   burstTime.appendChild(inputField);

   document.getElementById("FCFS_table").appendChild(row);
   var row2 = document.createElement('tr');

}

document.getElementById('minus_btn').addEventListener('click', deleteRow);
function deleteRow(e){
  var tableLength = document.querySelectorAll("tr.table-row").length;

  if (tableLength>2){
    var table = document.querySelectorAll("tr.table-row");
    table[tableLength-1].remove();
  }
  else {
    var lastRow = document.querySelector("tr.table-row:last-child");
    lastRow.setAttribute('style', 'border:1px solid red');
  }
}


document.getElementById('submit').addEventListener('click', paraditKubicinus);
function paraditKubicinus(e){
  pos_x = 100;
  pos_y = 400;
  var sleepTime = 2000;
  ievaddati = document.querySelectorAll('.forCount');
  ievaddati.forEach(function(item, index){
    console.log(item.value);
    var color = getRandomColor();

  for (i =0; i<item.value; i++){
    sleep(sleepTime).then(() => {
      var kvadratins = document.createElement('div');
      kvadratins.id='animate';
      kvadratins.setAttribute('style', `background-color: ${color}`);
      kvadratins.style.left= pos_x + 'px';
      kvadratins.style.top= pos_y + 'px';
      document.getElementById('drawelements').appendChild(kvadratins);
      pos_x = pos_x + 50;
      });
      
      sleepTime=sleepTime+1000;
    }

  });
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
