// disable & grey button
var chosenAlgorithm = "";
var cubeWidth = 40; //default 40
var sleepDuration = 1; //default 1

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
  if (chosenAlgorithm == "roundRobinAlgorithm"){
    var enterTimeQuantum = document.createElement('h3');
    enterTimeQuantum.id = "enterTimeQuantum";
    enterTimeQuantum.innerText = "Enter time quantum: ";
    var inputTimeQuantum = document.createElement('input');
    inputTimeQuantum.id = "inputTimeQuantum";
    inputTimeQuantum.setAttribute('type', 'text');
    enterTimeQuantum.appendChild(inputTimeQuantum);
    document.getElementById('timeQuantum').appendChild(enterTimeQuantum);
  }
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

    if (chosenAlgorithm == "priorityAlgorithm"){
      var th3 = document.createElement('th');
      th3.className = "table_field";
      th3.innerText = "Priority";
      tr.appendChild(th3);

    }

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
      if (chosenAlgorithm == "priorityAlgorithm"){
      row.className = 'table-row';
      var processPriority = document.createElement('td');
      processPriority.id = "processPriority";
      row.appendChild(processPriority);
      var inputPriority = document.createElement('input');
      inputPriority.setAttribute('type', 'text');
      inputPriority.id = 'inputPriority';
      processPriority.appendChild(inputPriority);
      table.appendChild(row);
    }
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
//   var averageTime = document.getElementById('average-time');
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
//   averageTime.innerHTML = sum/FCFS.length;
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
  $("body").css("overflow", "hidden"); // this part doesn't allow scrolling
  burstArray = getProcessArray();
  displayProcesses(burstArray);

  // Change cube width and sleep duration if too many bursts
  burstSum = 0;
  Array.from(burstArray).forEach(function(item, index){burstSum+=parseInt(item.value)});
  if (burstSum > 15 && burstSum <= 30) {
    cubeWidth = 30;
    sleepDuration = 0.5;
  }
  else if (burstSum > 30) {
    cubeWidth = 20;
    sleepDuration = 0.25;
  }

  if (chosenAlgorithm == "fcfsAlgorithm"){fcfsAlgorithm(burstArray)}
  else if (chosenAlgorithm == "sjfAlgorithm"){sjfAlgorithm(burstArray)}
  else if (chosenAlgorithm == "roundRobinAlgorithm"){roundRobinAlgorithm(burstArray)}
  else if (chosenAlgorithm == "priorityAlgorithm"){priorityAlgorithm()}
  else {console.log("BAD ALGORITHM:", chosenAlgorithm)}
}

function fcfsAlgorithm(burstArray){
  var sleepTime = 2000 * sleepDuration
  burstArray.forEach(function(item, index){
	    var color = getRandomColor();

	  for (i =0; i<item.value; i++){
	    sleep(sleepTime).then(() => {
        showCube(item.parentElement.previousSibling.innerHTML, color)
      });
      sleepTime = sleepTime + (1000 * sleepDuration);
    }
  });

  showAllTimes1(burstArray, sleepTime);
}

function displayProcesses(burstArray) {
  burstArray.forEach(function(item, index){
    text = item.parentElement.previousSibling.innerHTML;
    value = item.value;
    info = document.createElement('h3');
    info.id='process';
    // cube.setAttribute('style', `background-color: ${color}; width: ${cubeWidth}px`);
    info.innerHTML = `${text} - ${value} bursts`;
    document.getElementById('processes').appendChild(info);
  });
}

function sjfAlgorithm(burstArray){
  console.log("Starting sjfAlgorithm");
  var processNameArray = [];

  var array = Array.from(burstArray);
  var arrayValues = [];
  var sleepTime = 2000 * sleepDuration;

  array.forEach(function(item, index){
    arrayValues.push({
      proc: item.parentElement.previousSibling.innerHTML,
      burst: item.value
    });
  });

  array3 = getSorted(arrayValues);

  array3.forEach(function(item, index){
    var color = getRandomColor();

	  for (i =0; i<item["burst"]; i++){
	    sleep(sleepTime).then(() => {
        showCube(item["proc"], color)
      });
      sleepTime = sleepTime + (1000 * sleepDuration);
    }
  });

  console.log(array3);
  showAllTimes2(array3, sleepTime);
}



function roundRobinAlgorithm(burstArray){
  console.log("Starting roundRobinAlgorithm");
  timeQuantum = parseInt(document.getElementById('inputTimeQuantum').value);

  var array = Array.from(burstArray);
  var sleepTime = 2000 * sleepDuration;

  var arrayValues = [];
  var processes = [];
  array.forEach(function(item, index){
    arrayValues.push({
      proc: item.parentElement.previousSibling.innerHTML,
      burst: parseInt(item.value),
      color: getRandomColor()
    });
  });

  var resultArray = [];

  counter = roundRobinHelper3(arrayValues, timeQuantum) + 1;
  processes = arrayValues.slice();
  while (counter > 1){
    roundRobinHelper1(arrayValues, timeQuantum).forEach(function(item, index){resultArray.push(item)});
    arrayValues = roundRobinHelper2(arrayValues, timeQuantum);
    counter -= 1
  }

  resultArray.forEach(function(item, index){
    for (i=0; i<item['burst']; i++){
      sleep(sleepTime).then(() => {
        showCube(item['proc'], item['color']);
      });
      sleepTime = sleepTime + (1000 * sleepDuration);
    }
  });
  showAllTimes3(processes, resultArray, sleepTime);
}

function roundRobinHelper1(array, timeQuantum){
  resultArr = [];
  array.forEach(function(item, index){
    if (item['burst'] > timeQuantum) {
      resultArr.push({
        proc: item['proc'],
        burst: timeQuantum,
        color: item['color']
      });
    }
    else {
      resultArr.push({
        proc: item['proc'],
        burst: item['burst'],
        color: item['color']
      });
    }
  });
  return resultArr
}

function roundRobinHelper2(array, timeQuantum){
  var indexes = [];
  array.forEach(function(item, index){
    if (item['burst'] > timeQuantum) {
      array[index]['burst'] -= timeQuantum
    }
    else {
      indexes.push(index);
    }
  });
  indexes.sort().reverse().forEach(function(item, index){array.splice(item,1)});
  return array
}

function roundRobinHelper3(array, timeQuantum){
  var biggestBurst = 0;
  array.forEach(function(item, index){
    if (item['burst'] > biggestBurst) {biggestBurst = item['burst']}
  });
  return biggestBurst / timeQuantum
}

function priorityAlgorithm(){
  console.log("Starting priorityAlgorithm");
  var priorities = document.querySelectorAll('#inputPriority');
  var prioritiesArray = [];
  var resultArray = [];
  sleepTime = 1000 * sleepDuration;

  priorities.forEach(function(item, index){
    prioritiesArray.push(item.value);
  });

  var maxPrioritiesValue = Math.max.apply(null, prioritiesArray);
  for (i= 0; i<maxPrioritiesValue+1; i++){
    priorities.forEach(function(item, index){
      var color = getRandomColor();

      if (i==item.value){
        resultArray.push(item.parentElement.previousSibling.firstChild.value);
        for (x=1; x<=item.parentElement.previousSibling.firstChild.value; x++){
          sleep(sleepTime).then(() => {
            showCube(item.parentElement.previousSibling.previousSibling.innerHTML, color);
          });
          sleepTime = sleepTime + (1000 * sleepDuration);
        }
      }
    });
  };
  showAllTimes4(resultArray, sleepTime);
}

function getProcessArray(){
  var burstArray = document.querySelectorAll('.forCount');
   return burstArray;
}

function getProcessBursts(){
  burstHash = {}
  input = document.querySelectorAll('.forCount');
  input.forEach(function(item,index){
    burstHash["P"+(index+1)] = item.value;
  });
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
var counterElem = document.getElementById('counter');
var counterNr = 0
function showCube(text, color){

  posX = window.scrollX + document.getElementById('simulation-gantt').getBoundingClientRect().left + 4 + gap;
  posY = window.scrollY + document.getElementById('simulation-gantt').getBoundingClientRect().top + 4;
  cube = document.createElement('div');
  cube.id='animate';
  cube.setAttribute('style', `background-color: ${color}; width: ${cubeWidth}px`);
  cube.innerHTML = text;
  cube.style.left= posX + 'px';
  cube.style.top= posY + 'px';
  document.getElementById('simulation-gantt').appendChild(cube);
  gap = gap + cubeWidth;
  counterElem.innerHTML = counterNr+1;
  counterNr++;
}

var gap2 = 0
function showTime(text){
  posX = window.scrollX + document.getElementById('simulation-gantt').getBoundingClientRect().left + gap2 + 4 - (cubeWidth/2);
  posY = window.scrollY + document.getElementById('simulation-gantt').getBoundingClientRect().top + 64;
  number = document.createElement('div');
  number.id='animate';
  number.setAttribute('style', `width: ${cubeWidth}px`);
  number.innerHTML = text;
  number.style.left= posX + 'px';
  number.style.top= posY + 'px';
  document.getElementById('simulation-gantt').appendChild(number);
  gap2 = gap2 + cubeWidth;
}

function skipTime(){
  gap2 = gap2 + cubeWidth;
}

var averageTime = document.getElementById('average-time');

function showAllTimes1(burstArray, sleepTime){
  sleep(sleepTime).then(() => {
    showTime(0);
    var counter = 0;
    burstArray.forEach(function(item, index){
      value = parseInt(item.value)
      for (i=0; i<(value-1); i++){
        skipTime();
      }
      counter = counter + value;
      showTime(counter);
    });
    averageTime.innerHTML=counter/burstArray.length;
  });
}

function showAllTimes2(array, sleepTime){
  sleep(sleepTime).then(() => {
    showTime(0);
    var count = 0;
    array.forEach(function(item, index){
      value = parseInt(item["burst"])
      for (i=0; i<(value-1); i++){
        skipTime();
      }
      count = count + value;
      showTime(count);
    });
    averageTime.innerHTML=count/burstArray.length;
  });
}

var processesArr = []
function showAllTimes3(processes, array, sleepTime){
  processesArr = processes.slice();
  processesArr.forEach(function(item, index){
    item['counter'] = 0;
    console.log(item);
  });

  sleep(sleepTime).then(() => {
    showTime(0);
    var count = 0;
    array.forEach(function(item, index){
      value = parseInt(item["burst"])
      for (i=0; i<(value-1); i++){
        skipTime();
      }
      count = count + value;
      addCount(item, count);
      showTime(count);
    });
    averageTime.innerHTML = calculateAverageTime();
  });
}

function addCount(item, count) {
  processesArr.forEach(function(proc, index){
    if (proc['proc'] == item['proc']) {
      proc['counter'] = count;
    }
  });
}

function calculateAverageTime() {
  bursts = getProcessArray();
  var sum = 0;
  processesArr.forEach(function(item, index){
    sum += (item['counter'] - bursts[index].value);
  });
  return (sum / processesArr.length);
}

var avtSum = 0;
function showAllTimes4(array, sleepTime){
  sleep(sleepTime).then(() => {
    showTime(0);
    var counter = 0;
    array.forEach(function(item, index){
      value = parseInt(item)
      for (i=0; i<(value-1); i++){
        skipTime();
      }
      avtSum = avtSum+counter;
      counter = counter + value;
      showTime(counter);
    });
    averageTime.innerHTML=avtSum/array.length;
  });
}

function getSorted(array){
  var sorted = array.sort(function(a, b) {
    return (a["burst"] > b["burst"]) ? 1 : ((b["burst"] > a["burst"]) ? -1 : 0)
  });
  return sorted
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
