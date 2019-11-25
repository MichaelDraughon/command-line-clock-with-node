const chalk = require('chalk');
var fs = require('fs');
var allnums = fs.readFileSync('nums.txt').toString().split('\n');

var one = [allnums[0],allnums[1],allnums[2],allnums[3],allnums[4],allnums[5]];
var two = [allnums[7],allnums[8],allnums[9],allnums[10],allnums[11],allnums[12]];
var three = [allnums[14],allnums[15],allnums[16],allnums[17],allnums[18],allnums[19]];
var four = [allnums[21],allnums[22],allnums[23],allnums[24],allnums[25],allnums[26]];
var five = [allnums[28],allnums[29],allnums[30],allnums[31],allnums[32],allnums[33]];
var six = [allnums[35],allnums[36],allnums[37],allnums[38],allnums[39],allnums[40]];
var seven = [allnums[42],allnums[43],allnums[44],allnums[45],allnums[46],allnums[47]];
var eight = [allnums[49],allnums[50],allnums[51],allnums[52],allnums[53],allnums[54]];
var nine = [allnums[56],allnums[57],allnums[58],allnums[59],allnums[60],allnums[61]];
var zero = [allnums[63],allnums[64],allnums[65],allnums[66],allnums[67],allnums[68]];
var colon = [allnums[70],allnums[71],allnums[72],allnums[73],allnums[74],allnums[75]];

var numsInOrder = [zero,one,two,three,four,five,six,seven,eight,nine,colon];
//printInSequence(1,4,2,7,0,3);
while(true) {
  console.clear()
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var secs = time.getSeconds();
  formatTime(hours, minutes, secs);
  sleep(250);
}

function formatTime(h, m, s) {
  h = ('0' + h).slice(-2);
  m = ('0' + m).slice(-2);
  s = ('0' + s).slice(-2);

  var h0 = h.substring(0,1);
  var h1 = h.substring(1)
  var m0 = m.substring(0,1)
  var m1 = m.substring(1)
  var s0 = s.substring(0,1)
  var s1 = s.substring(1)
  printInSequence(h0,h1,m0,m1,s0,s1);
}


function printInSequence(hour0, hour1, minute0, minute1, second0, second1) {
  for (let i=0; i<one.length; i++) {
    console.log(chalk.red(numsInOrder[hour0][i] + " " + numsInOrder[hour1][i] + " " + numsInOrder[10][i] + " " + numsInOrder[minute0][i] + " " + numsInOrder[minute1][i] + " " + numsInOrder[10][i] + " " + numsInOrder[second0][i] + " " + numsInOrder[second1][i]));
  }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
