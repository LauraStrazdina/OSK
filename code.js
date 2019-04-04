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
  var currentRowNumber = document.getElementsByClassName("forCount").length + 1;
   var row = document.createElement('tr');
   row.className = 'table-row';
   var processNumber = document.createElement('td');
   processNumber.id = "FCFS";
   processNumber.innerHTML= "P"+currentRowNumber;
   row.appendChild(processNumber);

   var burstTime = document.createElement('td');
   burstTime.className = "FCFS";
   row.appendChild(burstTime);

   var inputField = document.createElement('input');
   inputField.setAttribute('type', 'text');
   inputField.className = 'forCount';
   burstTime.appendChild(inputField);

   document.getElementById("FCFS_table").appendChild(row);
   var row2 = document.createElement('tr');

}
