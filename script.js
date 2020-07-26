//container class
var MainDiv = document.createElement('div');
MainDiv.setAttribute('class','container');

var heading = document.createElement('span');
heading.innerText="SUDOKU"

var Div1 = document.createElement('div');
Div1.setAttribute('class','div1');
var Div2 = document.createElement('div');
Div2.setAttribute('class','div2');



//table creation row 1
var sudokutable = document.createElement('table');
var row1 = document.createElement('tr');
var row2 = document.createElement('tr');
var row3 = document.createElement('tr');
var row4 = document.createElement('tr');
var row5 = document.createElement('tr');
var row6 = document.createElement('tr');
var row7 = document.createElement('tr');
var row8 = document.createElement('tr');
var row9 = document.createElement('tr');

//<----------row1 cell creation begin------------->
var cell1 = document.createElement('td');
var r1c1 =  document.createElement('input');
r1c1.setAttribute('id','r1c1');
r1c1.setAttribute('disabled','disabled');
r1c1.setAttribute('value','5');

//cell2
var cell2 = document.createElement('td');
var r1c2 =  document.createElement('input');
r1c2.setAttribute('id','r1c2');
r1c2.setAttribute('disabled','disabled');
r1c2.setAttribute('value','3');

//cell3
var cell3 = document.createElement('td');
var r1c3 =  document.createElement('input');
r1c3.setAttribute('id','r1c3');
r1c3.setAttribute('maxLength','1');
r1c3.setAttribute('type','tel');

//cell4
var cell4 = document.createElement('td');
var r1c4 =  document.createElement('input');
r1c4.setAttribute('id','r1c4');
r1c4.setAttribute('maxLength','1');

//cell5
var cell5 = document.createElement('td');
var r1c5 =  document.createElement('input');
r1c5.setAttribute('id','r1c5');
r1c5.setAttribute('disabled','disabled');
r1c5.setAttribute('value','7');

//cell6
var cell6 = document.createElement('td');
var r1c6 =  document.createElement('input');
r1c6.setAttribute('id','r1c6');
r1c6.setAttribute('maxLength','1');

//cell7
var cell7 = document.createElement('td');
var r1c7 =  document.createElement('input');
r1c7.setAttribute('id','r1c7');
r1c7.setAttribute('maxLength','1');

//cell8
var cell8 = document.createElement('td');
var r1c8 =  document.createElement('input');
r1c8.setAttribute('id','r1c8');
r1c8.setAttribute('maxLength','1');

//cell9
var cell9 = document.createElement('td');
var r1c9 =  document.createElement('input');
r1c9.setAttribute('id','r1c9');
r1c9.setAttribute('maxLength','1');

//<----------row1 cell creation end------------->


//<----------row2 cell creation begin------------->
var cell10 = document.createElement('td');
var r2c1 =  document.createElement('input');
r2c1.setAttribute('id','r2c1');
r2c1.setAttribute('disabled','disabled');
r2c1.setAttribute('value','6');

//cell11
var cell11 = document.createElement('td');
var r2c2 =  document.createElement('input');
r2c2.setAttribute('id','r2c2');
r2c2.setAttribute('maxLength','1');

//cell12
var cell12 = document.createElement('td');
var r2c3 =  document.createElement('input');
r2c3.setAttribute('id','r2c3');
r2c3.setAttribute('maxLength','1');

//cell13
var cell13 = document.createElement('td');
var r2c4 =  document.createElement('input');
r2c4.setAttribute('id','r2c4');
r2c4.setAttribute('disabled','disabled');
r2c4.setAttribute('value','1');

//cell14
var cell14 = document.createElement('td');
var r2c5 =  document.createElement('input');
r2c5.setAttribute('id','r2c5');
r2c5.setAttribute('disabled','disabled');
r2c5.setAttribute('value','9');

//cell15
var cell15 = document.createElement('td');
var r2c6 =  document.createElement('input');
r2c6.setAttribute('id','r2c6');
r2c6.setAttribute('disabled','disabled');
r2c6.setAttribute('value','5');

//cell16
var cell16 = document.createElement('td');
var r2c7 =  document.createElement('input');
r2c7.setAttribute('id','r2c7');
r2c7.setAttribute('maxLength','1');

//cell17
var cell17 = document.createElement('td');
var r2c8 =  document.createElement('input');
r2c8.setAttribute('id','r2c8');
r2c8.setAttribute('maxLength','1');

//cell11
var cell18 = document.createElement('td');
var r2c9 =  document.createElement('input');
r2c9.setAttribute('id','r2c9');
r2c9.setAttribute('maxLength','1');

//<----------row2 cell creation end------------->


//<----------row3 cell creation begin------------->
var cell19 = document.createElement('td');
var r3c1 =  document.createElement('input');
r3c1.setAttribute('id','r3c1');
r3c1.setAttribute('maxLength','1');

//cell20
var cell20 = document.createElement('td');
var r3c2 =  document.createElement('input');
r3c2.setAttribute('id','r3c2');
r3c2.setAttribute('disabled','disabled');
r3c2.setAttribute('value','9');

//cell21
var cell21 = document.createElement('td');
var r3c3 =  document.createElement('input');
r3c3.setAttribute('id','r3c3');
r3c3.setAttribute('disabled','disabled');
r3c3.setAttribute('value','8');

//cell22
var cell22 = document.createElement('td');
var r3c4 =  document.createElement('input');
r3c4.setAttribute('id','r3c4');
r3c4.setAttribute('maxLength','1');

//cell23
var cell23 = document.createElement('td');
var r3c5 =  document.createElement('input');
r3c5.setAttribute('id','r3c5');
r3c5.setAttribute('maxLength','1');

//cell24
var cell24 = document.createElement('td');
var r3c6 =  document.createElement('input');
r3c6.setAttribute('id','r3c6');
r3c6.setAttribute('maxLength','1');

//cell25
var cell25 = document.createElement('td');
var r3c7 =  document.createElement('input');
r3c7.setAttribute('id','r3c7');
r3c7.setAttribute('maxLength','1');

//cell26
var cell26 = document.createElement('td');
var r3c8 =  document.createElement('input');
r3c8.setAttribute('id','r3c8');
r3c8.setAttribute('disabled','disabled');
r3c8.setAttribute('value','6');

//cell27
var cell27 = document.createElement('td');
var r3c9 =  document.createElement('input');
r3c9.setAttribute('id','r3c9');
r3c9.setAttribute('maxLength','1');

//<----------row3 cell creation end------------->

//<----------row4 cell creation begin------------->
var cell28 = document.createElement('td');
var r4c1 =  document.createElement('input');
r4c1.setAttribute('id','r4c1');
r4c1.setAttribute('disabled','disabled');
r4c1.setAttribute('value','8');

//cell29
var cell29 = document.createElement('td');
var r4c2 =  document.createElement('input');
r4c2.setAttribute('id','r4c2');
r4c2.setAttribute('maxLength','1');

//cell30
var cell30 = document.createElement('td');
var r4c3 =  document.createElement('input');
r4c3.setAttribute('id','r4c3');
r4c3.setAttribute('maxLength','1');

//cell31
var cell31 = document.createElement('td');
var r4c4 =  document.createElement('input');
r4c4.setAttribute('id','r4c4');
r4c4.setAttribute('maxLength','1');

//cell32
var cell32 = document.createElement('td');
var r4c5 =  document.createElement('input');
r4c5.setAttribute('id','r4c5');
r4c5.setAttribute('disabled','disabled');
r4c5.setAttribute('value','6');

//cell33
var cell33 = document.createElement('td');
var r4c6 =  document.createElement('input');
r4c6.setAttribute('id','r4c6');
r4c6.setAttribute('maxLength','1');

//cell34
var cell34 = document.createElement('td');
var r4c7 =  document.createElement('input');
r4c7.setAttribute('id','r4c7');
r4c7.setAttribute('maxLength','1');

//cell35
var cell35 = document.createElement('td');
var r4c8 =  document.createElement('input');
r4c8.setAttribute('id','r4c8');
r4c8.setAttribute('maxLength','1');

//cell36
var cell36 = document.createElement('td');
var r4c9 =  document.createElement('input');
r4c9.setAttribute('id','r4c9');
r4c9.setAttribute('disabled','disabled');
r4c9.setAttribute('value','3');
//<----------row4 cell creation end------------->


//<----------row5 cell creation begin------------->
var cell37 = document.createElement('td');
var r5c1 =  document.createElement('input');
r5c1.setAttribute('id','r5c1');
r5c1.setAttribute('disabled','disabled');
r5c1.setAttribute('value','4');

//cell38
var cell38 = document.createElement('td');
var r5c2 =  document.createElement('input');
r5c2.setAttribute('id','r5c2');
r5c2.setAttribute('maxLength','1');

//cell39
var cell39 = document.createElement('td');
var r5c3 =  document.createElement('input');
r5c3.setAttribute('id','r5c3');
r5c3.setAttribute('maxLength','1');

//cell40
var cell40 = document.createElement('td');
var r5c4 =  document.createElement('input');
r5c4.setAttribute('id','r5c4');
r5c4.setAttribute('disabled','disabled');
r5c4.setAttribute('value','8');
r5c4.setAttribute('maxLength','1');

//cell41
var cell41 = document.createElement('td');
var r5c5 =  document.createElement('input');
r5c5.setAttribute('id','r5c5');
r5c5.setAttribute('maxLength','1');

//cell42
var cell42 = document.createElement('td');
var r5c6 =  document.createElement('input');
r5c6.setAttribute('id','r5c6');
r5c6.setAttribute('disabled','disabled');
r5c6.setAttribute('value','3');

//cell43
var cell43 = document.createElement('td');
var r5c7 =  document.createElement('input');
r5c7.setAttribute('id','r5c7');
r5c7.setAttribute('maxLength','1');

//cell44
var cell44 = document.createElement('td');
var r5c8 =  document.createElement('input');
r5c8.setAttribute('id','r5c8');
r5c8.setAttribute('maxLength','1');

//cell45
var cell45 = document.createElement('td');
var r5c9 =  document.createElement('input');
r5c9.setAttribute('id','r5c9');
r5c9.setAttribute('disabled','disabled');
r5c9.setAttribute('value','1');
//<----------row5 cell creation end------------->

//<----------row6 cell creation begin------------->
var cell46 = document.createElement('td');
var r6c1 =  document.createElement('input');
r6c1.setAttribute('id','r6c1');
r6c1.setAttribute('disabled','disabled');
r6c1.setAttribute('value','7');

//cell47
var cell47 = document.createElement('td');
var r6c2 =  document.createElement('input');
r6c2.setAttribute('id','r6c2');
r6c2.setAttribute('maxLength','1');

//cell48
var cell48 = document.createElement('td');
var r6c3 =  document.createElement('input');
r6c3.setAttribute('id','r6c3');
r6c3.setAttribute('maxLength','1');

//cell49
var cell49 = document.createElement('td');
var r6c4 =  document.createElement('input');
r6c4.setAttribute('id','r6c4');
r6c4.setAttribute('maxLength','1');

//cell50
var cell50 = document.createElement('td');
var r6c5 =  document.createElement('input');
r6c5.setAttribute('id','r6c5');
r6c5.setAttribute('disabled','disabled');
r6c5.setAttribute('value','2');

//cell51
var cell51 = document.createElement('td');
var r6c6 =  document.createElement('input');
r6c6.setAttribute('id','r6c6');
r6c6.setAttribute('maxLength','1');

//cell52
var cell52 = document.createElement('td');
var r6c7 =  document.createElement('input');
r6c7.setAttribute('id','r6c7');
r6c7.setAttribute('maxLength','1');

//cell53
var cell53 = document.createElement('td');
var r6c8 =  document.createElement('input');
r6c8.setAttribute('id','r6c8');
r6c8.setAttribute('maxLength','1');

//cell54
var cell54 = document.createElement('td');
var r6c9 =  document.createElement('input');
r6c9.setAttribute('id','r6c9');
r6c9.setAttribute('disabled','disabled');
r6c9.setAttribute('value','6');
//<----------row6 cell creation end------------->


//<----------row7 cell creation begin------------->
var cell55 = document.createElement('td');
var r7c1 =  document.createElement('input');
r7c1.setAttribute('id','r7c1');
r7c1.setAttribute('maxLength','1');

//cell56
var cell56 = document.createElement('td');
var r7c2 =  document.createElement('input');
r7c2.setAttribute('id','r7c2');
r7c2.setAttribute('disabled','disabled');
r7c2.setAttribute('value','6');

//cell57
var cell57 = document.createElement('td');
var r7c3 =  document.createElement('input');
r7c3.setAttribute('id','r7c3');
r7c3.setAttribute('maxLength','1');

//cell58
var cell58 = document.createElement('td');
var r7c4 =  document.createElement('input');
r7c4.setAttribute('id','r7c4');
r7c4.setAttribute('maxLength','1');

//cell59
var cell59 = document.createElement('td');
var r7c5 =  document.createElement('input');
r7c5.setAttribute('id','r7c5');
r7c5.setAttribute('maxLength','1');

//cell60
var cell60 = document.createElement('td');
var r7c6 =  document.createElement('input');
r7c6.setAttribute('id','r7c6');
r7c6.setAttribute('maxLength','1');

//cell61
var cell61 = document.createElement('td');
var r7c7 =  document.createElement('input');
r7c7.setAttribute('id','r7c7');
r7c7.setAttribute('disabled','disabled');
r7c7.setAttribute('value','2');

//cell62
var cell62 = document.createElement('td');
var r7c8 =  document.createElement('input');
r7c8.setAttribute('id','r7c8');
r7c8.setAttribute('disabled','disabled');
r7c8.setAttribute('value','8');

//cell63
var cell63 = document.createElement('td');
var r7c9 =  document.createElement('input');
r7c9.setAttribute('id','r7c9');
r7c9.setAttribute('maxLength','1');

//<----------row7 cell creation end------------->

//<----------row8 cell creation begin------------->
var cell64 = document.createElement('td');
var r8c1 =  document.createElement('input');
r8c1.setAttribute('id','r8c1');
r8c1.setAttribute('maxLength','1');

//cell65
var cell65 = document.createElement('td');
var r8c2 =  document.createElement('input');
r8c2.setAttribute('id','r8c2');
r8c2.setAttribute('maxLength','1');

//cell66
var cell66 = document.createElement('td');
var r8c3 =  document.createElement('input');
r8c3.setAttribute('id','r8c3');
r8c3.setAttribute('maxLength','1');

//cell67
var cell67 = document.createElement('td');
var r8c4 =  document.createElement('input');
r8c4.setAttribute('id','r8c4');
r8c4.setAttribute('disabled','disabled');
r8c4.setAttribute('value','4');

//cell68
var cell68 = document.createElement('td');
var r8c5 =  document.createElement('input');
r8c5.setAttribute('id','r8c5');
r8c5.setAttribute('disabled','disabled');
r8c5.setAttribute('value','1');

//cell69
var cell69 = document.createElement('td');
var r8c6 =  document.createElement('input');
r8c6.setAttribute('id','r8c6');
r8c6.setAttribute('disabled','disabled');
r8c6.setAttribute('value','9');

//cell70
var cell70 = document.createElement('td');
var r8c7 =  document.createElement('input');
r8c7.setAttribute('id','r8c7');
r8c7.setAttribute('maxLength','1');

//cell71
var cell71 = document.createElement('td');
var r8c8 =  document.createElement('input');
r8c8.setAttribute('id','r8c8');
r8c8.setAttribute('maxLength','1');

//cell72
var cell72 = document.createElement('td');
var r8c9 =  document.createElement('input');
r8c9.setAttribute('id','r8c9');
r8c9.setAttribute('disabled','disabled');
r8c9.setAttribute('value','5');
//<----------row8 cell creation end------------->

//<----------row9 cell creation begin------------->
var cell73 = document.createElement('td');
var r9c1 =  document.createElement('input');
r9c1.setAttribute('id','r9c1');
r9c1.setAttribute('maxLength','1');

//cell74
var cell74 = document.createElement('td');
var r9c2 =  document.createElement('input');
r9c2.setAttribute('id','r9c2');
r9c2.setAttribute('maxLength','1');

//cell75
var cell75 = document.createElement('td');
var r9c3 =  document.createElement('input');
r9c3.setAttribute('id','r9c3');
r9c3.setAttribute('maxLength','1');

//cell76
var cell76 = document.createElement('td');
var r9c4 =  document.createElement('input');
r9c4.setAttribute('id','r9c4');
r9c4.setAttribute('maxLength','1');

//cell77
var cell77 = document.createElement('td');
var r9c5 =  document.createElement('input');
r9c5.setAttribute('id','r9c5');
r9c5.setAttribute('disabled','disabled');
r9c5.setAttribute('value','8');

//cell78
var cell78 = document.createElement('td');
var r9c6 =  document.createElement('input');
r9c6.setAttribute('id','r9c6');
r9c6.setAttribute('maxLength','1');

//cell79
var cell79 = document.createElement('td');
var r9c7 =  document.createElement('input');
r9c7.setAttribute('id','r9c7');
r9c7.setAttribute('maxLength','1');

//cell80
var cell80 = document.createElement('td');
var r9c8 =  document.createElement('input');
r9c8.setAttribute('id','r9c8');
r9c8.setAttribute('disabled','disabled');
r9c8.setAttribute('value','7');

//cell81
var cell81 = document.createElement('td');
var r9c9 =  document.createElement('input');
r9c9.setAttribute('id','r9c9');
r9c9.setAttribute('disabled','disabled');
r9c9.setAttribute('value','9');
//<----------row9 cell creation end------------->

//appending cells-rows-sudokutable
cell1.appendChild(r1c1);
row1.appendChild(cell1);
sudokutable.append(row1);

cell2.appendChild(r1c2);
row1.appendChild(cell2);
sudokutable.append(row1);

cell3.appendChild(r1c3);
row1.appendChild(cell3);
sudokutable.append(row1);

cell4.appendChild(r1c4);
row1.appendChild(cell4);
sudokutable.append(row1);

cell5.appendChild(r1c5);
row1.appendChild(cell5);
sudokutable.append(row1);

cell6.appendChild(r1c6);
row1.appendChild(cell6);
sudokutable.append(row1);

cell7.appendChild(r1c7);
row1.appendChild(cell7);
sudokutable.append(row1);

cell8.appendChild(r1c8);
row1.appendChild(cell8);
sudokutable.append(row1);

cell9.appendChild(r1c9);
row1.appendChild(cell9);
sudokutable.append(row1);

cell10.appendChild(r2c1);
row2.appendChild(cell10);
sudokutable.append(row2);

cell11.appendChild(r2c2);
row2.appendChild(cell11);
sudokutable.append(row2);

cell12.appendChild(r2c3);
row2.appendChild(cell12);
sudokutable.append(row2);

cell13.appendChild(r2c4);
row2.appendChild(cell13);
sudokutable.append(row2);

cell14.appendChild(r2c5);
row2.appendChild(cell14);
sudokutable.append(row2);

cell15.appendChild(r2c6);
row2.appendChild(cell15);
sudokutable.append(row2);

cell16.appendChild(r2c7);
row2.appendChild(cell16);
sudokutable.append(row2);

cell17.appendChild(r2c8);
row2.appendChild(cell17);
sudokutable.append(row2);

cell18.appendChild(r2c9);
row2.appendChild(cell18);
sudokutable.append(row2);

cell19.appendChild(r3c1);
row3.appendChild(cell19);
sudokutable.append(row3);

cell20.appendChild(r3c2);
row3.appendChild(cell20);
sudokutable.append(row3);

cell21.appendChild(r3c3);
row3.appendChild(cell21);
sudokutable.append(row3);

cell22.appendChild(r3c4);
row3.appendChild(cell22);
sudokutable.append(row3);

cell23.appendChild(r3c5);
row3.appendChild(cell23);
sudokutable.append(row3);

cell24.appendChild(r3c6);
row3.appendChild(cell24);
sudokutable.append(row3);

cell25.appendChild(r3c7);
row3.appendChild(cell25);
sudokutable.append(row3);

cell26.appendChild(r3c8);
row3.appendChild(cell26);
sudokutable.append(row3);

cell27.appendChild(r3c9);
row3.appendChild(cell27);
sudokutable.append(row3);

cell28.appendChild(r4c1);
row4.appendChild(cell28);
sudokutable.append(row4);

cell29.appendChild(r4c2);
row4.appendChild(cell29);
sudokutable.append(row4);

cell30.appendChild(r4c3);
row4.appendChild(cell30);
sudokutable.append(row4);

cell31.appendChild(r4c4);
row4.appendChild(cell31);
sudokutable.append(row4);

cell32.appendChild(r4c5);
row4.appendChild(cell32);
sudokutable.append(row4);

cell33.appendChild(r4c6);
row4.appendChild(cell33);
sudokutable.append(row4);

cell34.appendChild(r4c7);
row4.appendChild(cell34);
sudokutable.append(row4);

cell35.appendChild(r4c8);
row4.appendChild(cell35);
sudokutable.append(row4);

cell36.appendChild(r4c9);
row4.appendChild(cell36);
sudokutable.append(row4);

cell37.appendChild(r5c1);
row5.appendChild(cell37);
sudokutable.append(row5);

cell38.appendChild(r5c2);
row5.appendChild(cell38);
sudokutable.append(row5);

cell39.appendChild(r5c3);
row5.appendChild(cell39);
sudokutable.append(row5);

cell40.appendChild(r5c4);
row5.appendChild(cell40);
sudokutable.append(row5);

cell41.appendChild(r5c5);
row5.appendChild(cell41);
sudokutable.append(row5);

cell42.appendChild(r5c6);
row5.appendChild(cell42);
sudokutable.append(row5);

cell43.appendChild(r5c7);
row5.appendChild(cell43);
sudokutable.append(row5);

cell44.appendChild(r5c8);
row5.appendChild(cell44);
sudokutable.append(row5);

cell45.appendChild(r5c9);
row5.appendChild(cell45);
sudokutable.append(row5);

cell46.appendChild(r6c1);
row6.appendChild(cell46);
sudokutable.append(row6);

cell47.appendChild(r6c2);
row6.appendChild(cell47);
sudokutable.append(row6);

cell48.appendChild(r6c3);
row6.appendChild(cell48);
sudokutable.append(row6);

cell49.appendChild(r6c4);
row6.appendChild(cell49);
sudokutable.append(row6);

cell50.appendChild(r6c5);
row6.appendChild(cell50);
sudokutable.append(row6);

cell51.appendChild(r6c6);
row6.appendChild(cell51);
sudokutable.append(row6);

cell52.appendChild(r6c7);
row6.appendChild(cell52);
sudokutable.append(row6);

cell53.appendChild(r6c8);
row6.appendChild(cell53);
sudokutable.append(row6);

cell54.appendChild(r6c9);
row6.appendChild(cell54);
sudokutable.append(row6);

cell55.appendChild(r7c1);
row7.appendChild(cell55);
sudokutable.append(row7);

cell56.appendChild(r7c2);
row7.appendChild(cell56);
sudokutable.append(row7);

cell57.appendChild(r7c3);
row7.appendChild(cell57);
sudokutable.append(row7);

cell58.appendChild(r7c4);
row7.appendChild(cell58);
sudokutable.append(row7);

cell59.appendChild(r7c5);
row7.appendChild(cell59);
sudokutable.append(row7);

cell60.appendChild(r7c6);
row7.appendChild(cell60);
sudokutable.append(row7);

cell61.appendChild(r7c7);
row7.appendChild(cell61);
sudokutable.append(row7);

cell62.appendChild(r7c8);
row7.appendChild(cell62);
sudokutable.append(row7);

cell63.appendChild(r7c9);
row7.appendChild(cell63);
sudokutable.append(row7);

cell64.appendChild(r8c1);
row8.appendChild(cell64);
sudokutable.append(row8);

cell65.appendChild(r8c2);
row8.appendChild(cell65);
sudokutable.append(row8);

cell66.appendChild(r8c3);
row8.appendChild(cell66);
sudokutable.append(row8);

cell67.appendChild(r8c4);
row8.appendChild(cell67);
sudokutable.append(row8);

cell68.appendChild(r8c5);
row8.appendChild(cell68);
sudokutable.append(row8);

cell69.appendChild(r8c6);
row8.appendChild(cell69);
sudokutable.append(row8);

cell70.appendChild(r8c7);
row8.appendChild(cell70);
sudokutable.append(row8);

cell71.appendChild(r8c8);
row8.appendChild(cell71);
sudokutable.append(row8);

cell72.appendChild(r8c9);
row8.appendChild(cell72);
sudokutable.append(row8);

cell73.appendChild(r9c1);
row9.appendChild(cell73);
sudokutable.append(row9);

cell74.appendChild(r9c2);
row9.appendChild(cell74);
sudokutable.append(row9);

cell75.appendChild(r9c3);
row9.appendChild(cell75);
sudokutable.append(row9);

cell76.appendChild(r9c4);
row9.appendChild(cell76);
sudokutable.append(row9);

cell77.appendChild(r9c5);
row9.appendChild(cell77);
sudokutable.append(row9);

cell78.appendChild(r9c6);
row9.appendChild(cell78);
sudokutable.append(row9);

cell79.appendChild(r9c7);
row9.appendChild(cell79);
sudokutable.append(row9);

cell80.appendChild(r9c8);
row9.appendChild(cell80);
sudokutable.append(row9);

cell81.appendChild(r9c9);
row9.appendChild(cell81);
sudokutable.append(row9);

//Breaks
var break1 = document.createElement('br');

//Buttons
var start = document.createElement('button');
start.innerHTML="Start";
start.addEventListener('click', function(){
   timerId = setInterval(updateTimer,1000);
});

//updateTimer
var totalTime = 4 * 60;
var timer = totalTime;
function updateTimer(){
    let minutes = Math.floor(timer/60);
    let seconds = timer % 60;
    seconds = seconds <10 ? '0' + seconds : seconds;
    counter.innerHTML=`${minutes}:${seconds}`;
    timer--;
    if(timer<0)
    {
        clearInterval(timerId);
        userSudoku();
    }
}
//calcuating score
function getScore(){
    var points;

    var diff = totalTime-timer;
    var x = (totalTime-diff);
    points = 100 - (x*0.01);
    points = (Math.round(Math.max(points, 0)));
    return points;
}

//counter
var counter = document.createElement('p');
counter.innerHTML="4:00";

//resetting page
var reset = document.createElement('button');
reset.innerHTML="Reset";
reset.setAttribute('class','red');
reset.addEventListener('click',function()
{
window.location.reload();
});

//submit
var submit = document.createElement('button');
submit.innerHTML="Submit";
submit.setAttribute('class','green');
submit.addEventListener('click',function(){
        clearInterval(timerId);
        userSudoku();
        getScore();
})

//Display
Div1.append(sudokutable);
Div2.append(start,reset,submit,counter);
MainDiv.append(heading);
MainDiv.append(Div1);
MainDiv.append(Div2);
document.body.append(MainDiv);


//sudokuSolving
var initialBoard = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
]


function userSudoku(){
    var userBoard = [
        new Array(9),
        new Array(9),
        new Array(9),
        new Array(9),
        new Array(9),
        new Array(9),
        new Array(9),
        new Array(9),
        new Array(9),
    ];
    for(var r=0;r<9;r++){
            for(var c=0;c<9;c++){
                var cellid = "r"+(r+1)+"c"+(c+1);
                var cellValue = document.getElementById(`${cellid}`).value;
                userBoard[r][c] = cellValue;
        }
    }
  // return validatedUserBoard;
  if(valid(userBoard)==true&&count==0){
    heading.innerHTML="Hola! You won. Your Score: "+getScore();
  }
  
  //alert("Valid Sudoku");
  else if(count>0)
  heading.innerHTML="Lost! Try to fill all fields, Your Score is 0";
  else
  heading.innerHTML="You Lost! Try Again";
  //alert("Invalid Sudoku");
}

var count=0;
var flag=0;
//validatingUserBoard
function valid(input) {
    for (var r = 0; r < 9; ++r) {
        for (var c = 0; c < 9; ++c) {
            var value = input[r][c];
            if (value) {
                for (var row = 0; row < 9; ++row) {
                    if (row != c && input[r][row] == value) {
                    return false;
                    } 
                }
                for (var col = 0; col < 9; ++col) {
                    if (col != r && input[col][c] == value) {
                    return false;
                    } 
                }
                var squareRow = Math.floor(r/3)*3;
                for (var col = squareRow; col < squareRow + 3; ++col) {
                    var squareColumn = Math.floor(c/3)*3;
                    for (row = squareColumn; row < squareColumn + 3; ++row) {
                        if ((row != c || col != r) && input[col][row] == value) {
                            return false;
                        }
                    }
                }
            }
            else if(!value)
            {
                count++;
            }
        }
    }
    flag++;
    return true;
}



