// disable & grey button
var chosenAlgorithm = "";

function disableButton(id) {
  document.getElementById(id).className = 'btn btn-secondary btn-lg disabled';
}

// disable & grey all buttons but return color for chosen one
function algChosen(e) {
  id = e.target.id
  savedClass = e.target.className;
  disableButton('fcfsAlgorithm');
  disableButton('sjfAlgorithm');
  disableButton('roundRobinAlgorithm');
  disableButton('priorityAlgorithm');
  document.getElementById(id).className = savedClass + ' disabled';

  document.getElementById('createTable').className = 'btn btn-success';
  document.getElementById('processNumberInput').disabled = false;

  chosenAlgorithm = id;
}

document.getElementById('fcfsAlgorithm').addEventListener('click', algChosen);
document.getElementById('sjfAlgorithm').addEventListener('click', algChosen);
document.getElementById('roundRobinAlgorithm').addEventListener('click', algChosen);
document.getElementById('priorityAlgorithm').addEventListener('click', algChosen);





document.getElementById('createTable').addEventListener('click', createTable);
function createTable(e){
  var processNumber = document.getElementById('processNumberInput').value;
  if (processNumber !== ""){
    e.target.className = e.target.className + ' disabled';
    document.getElementById('processNumberInput').disabled = true;

    document.getElementById('processNumberInput').setAttribute('style', 'border:border:1px solid black');
    var tableColumn = document.getElementById("tableColumn");
    var table = document.createElement('table');
    table.id = "FCFS_table";
    tableColumn.appendChild(table);
    var tr = document.createElement('tr');
    tr.id = "table_title";
    tr.className = "table-row";
    table.appendChild(tr);
    var th = document.createElement('th');
    th.className = "table_field";
    th.innerText = "Process";
    var th2 = document.createElement('th');
    th2.className = "table_field";
    th2.innerText = "Burst Time";
    tr.appendChild(th);
    tr.appendChild(th2);
    var simulateBtn =  document.createElement('a');
    simulateBtn.className = "btn btn-warning";
    simulateBtn.setAttribute('href', '#simulation');
    simulateBtn.id = 'submit';
    simulateBtn.innerHTML = 'Simulate';

    for (i=1; i<=processNumber; i++){
      var row = document.createElement('tr');
      row.className = 'table-row';
      var processName = document.createElement('td');
      processName.id = "FCFS";
      processName.innerHTML= "P"+i;
      row.appendChild(processName);
      var burstTime = document.createElement('td');
      burstTime.id = "FCFSinput";
      row.appendChild(burstTime);
      var inputField = document.createElement('input');
      inputField.setAttribute('type', 'text');
      inputField.className = 'forCount';
      burstTime.appendChild(inputField);
      table.appendChild(row);
    }
    tableColumn.appendChild(simulateBtn);
    document.getElementById('submit').addEventListener('click', startSimulation);
  }
  else {
    document.getElementById('processNumberInput').setAttribute('style', 'border:1px solid red');
  }
}


// window.onload = function what(){
//
// var submit = document.getElementById('submit');
//
// submit.onclick = function(){
//
//   var counter = document.getElementById('counter');
//   var average_time = document.getElementById('average_time');
//   var FCFS = document.getElementsByClassName('forCount');
//
//
//   var sum=0;
//   for (i=0; i<FCFS.length ; i++){
//     sum= sum+parseInt(FCFS[i].value);
//   }
//   console.log(sum);
//
//
//
//   average_time.innerHTML = sum/FCFS.length;
//
//   var number = 0;
//   var interval = setInterval(() =>  {
//
//     counter.innerText =  number++;
//     if(number > sum) {
//       clearInterval(interval);
//     }
//   }, 1000);// repeat every 1 second
// };
//
// };
//
// document.getElementById('plus_btn').addEventListener('click', addRow);
// function addRow(e){
//   var lastRow = document.querySelector("tr.table-row:last-child");
//   lastRow.setAttribute('style', 'border:none');
//
//   var currentRowNumber = document.getElementsByClassName("forCount").length + 1;
//    var row = document.createElement('tr');
//    row.className = 'table-row';
//    var processNumber = document.createElement('td');
//    processNumber.id = "FCFS";
//    processNumber.innerHTML= "P"+currentRowNumber;
//    row.appendChild(processNumber);
//
//    var burstTime = document.createElement('td');
//    burstTime.id = "FCFSinput";
//    row.appendChild(burstTime);
//
//    var inputField = document.createElement('input');
//    inputField.setAttribute('type', 'text');
//    inputField.className = 'forCount';
//    burstTime.appendChild(inputField);
//
//    document.getElementById("FCFS_table").appendChild(row);
//    var row2 = document.createElement('tr');
//
// }
//
// document.getElementById('minus_btn').addEventListener('click', deleteRow);
// function deleteRow(e){
//   var tableLength = document.querySelectorAll("tr.table-row").length;
//
//   if (tableLength>2){
//     var table = document.querySelectorAll("tr.table-row");
//     table[tableLength-1].remove();
//   }
//   else {
//     var lastRow = document.querySelector("tr.table-row:last-child");
//     lastRow.setAttribute('style', 'border:1px solid red');
//   }
// }

function startSimulation(e){
  document.getElementById('simulation').style.display = 'block'
  // $("body").css("overflow", "hidden");
  burstHash = getProcessBursts();
  if (chosenAlgorithm == "fcfsAlgorithm"){fcfsAlgorithm(burstHash)}
  else if (chosenAlgorithm == "sjfAlgorithm"){sjfAlgorithm(burstHash)}
  else if (chosenAlgorithm == "roundRobinAlgorithm"){roundRobinAlgorithm(burstHash)}
  else if (chosenAlgorithm == "priorityAlgorithm"){priorityAlgorithm(burstHash)}
  else {console.log("BAD ALGORITHM:", chosenAlgorithm)}
}

function showMultipleCubes(text, color, amount) {

}

function fcfsAlgorithm(burstHash){
  console.log("Starting fcfsAlgorithm");
  // var processArr = [];
  // var burstArr = [];
  // for (var key in burstHash) {
  //   processArr.push(key);
  //   burstArr.push(burstHash[key]);
  // }
  //
  // console.log(processArr)
  // var sleepTime = 2000
  // for (i = 0; i < processArr.length; i++){
  //   sleep(sleepTime).then(() => {
  //     console.log(i, processArr[i])
  //     showCube(processArr[i], getRandomColor())
  //   });
  //   sleepTime = sleepTime + 1000
  //   console.log("in loop")
  // }
  // console.log("finished)")
}

function sjfAlgorithm(burstHash){
  console.log("Starting sjfAlgorithm");
}

function roundRobinAlgorithm(burstHash){
  console.log("Starting roundRobinAlgorithm");
}

function priorityAlgorithm(burstHash){
  console.log("Starting priorityAlgorithm");
}

function getProcessBursts(){
  burstHash = {}
  input = document.querySelectorAll('.forCount');
  input.forEach(function(item,index){
    burstHash["P"+(index+1)] = item.value;
  });
  console.log("Process hash:",burstHash);
  return burstHash;
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

var gap = 0
function showCube(text, color){
  posX = window.scrollX + document.getElementById('simulation-gantt').getBoundingClientRect().left + 4 + gap;
  posY = window.scrollY + document.getElementById('simulation-gantt').getBoundingClientRect().top + 4;
  cube = document.createElement('div');
  cube.id='animate';
  cube.setAttribute('style', `background-color: ${color}`);
  cube.innerHTML = text;
  cube.style.left= posX + 'px';
  cube.style.top= posY + 'px';
  document.getElementById('simulation-gantt').appendChild(cube);
  gap = gap + 40;
}


// function paraditKubicinus(e){
//   pos_x = 100;
//   pos_y = 400;
//   var sleepTime = 2000;
//   ievaddati = document.querySelectorAll('.forCount');
//   ievaddati.forEach(function(item, index){
//     console.log(item.value);
//     var color = getRandomColor();
//
//     for (i =0; i<item.value; i++){
//       sleep(sleepTime).then(() => {
//         var kvadratins = document.createElement('div');
//         kvadratins.id='animate';
//         kvadratins.setAttribute('style', `background-color: ${color}`);
//         kvadratins.style.left= pos_x + 'px';
//         kvadratins.style.top= pos_y + 'px';
//         document.getElementById('simulation-gantt').appendChild(kvadratins);
//         pos_x = pos_x + 50;
//         });
//       sleepTime=sleepTime+1000;
//     }
//   });
// }

// stop scrolling
// $("body").css("overflow", "hidden");
//
// get coordinates
// window.scrollX + document.getElementById('simulation-gantt').getBoundingClientRect().left
