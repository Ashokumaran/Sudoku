//container class
var MainDiv = document.createElement('div');
MainDiv.setAttribute('class','container');

var Div1 = document.createElement('div');
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
var c1 =  document.createElement('input');
c1.setAttribute('id','c1');
c1.setAttribute('disabled','disabled');
c1.setAttribute('value','5');

//cell2
var cell2 = document.createElement('td');
var c2 =  document.createElement('input');
c2.setAttribute('id','c2');
c2.setAttribute('disabled','disabled');
c2.setAttribute('value','3');

//cell3
var cell3 = document.createElement('td');
var c3 =  document.createElement('input');
c3.setAttribute('id','c3');
c3.setAttribute('maxLength','1');

//cell4
var cell4 = document.createElement('td');
var c4 =  document.createElement('input');
c4.setAttribute('id','c4');
c4.setAttribute('maxLength','1');

//cell5
var cell5 = document.createElement('td');
var c5 =  document.createElement('input');
c5.setAttribute('id','c5');
c5.setAttribute('disabled','disabled');
c5.setAttribute('value','7');

//cell6
var cell6 = document.createElement('td');
var c6 =  document.createElement('input');
c6.setAttribute('id','c6');
c6.setAttribute('maxLength','1');

//cell7
var cell7 = document.createElement('td');
var c7 =  document.createElement('input');
c7.setAttribute('id','c7');
c7.setAttribute('maxLength','1');

//cell8
var cell8 = document.createElement('td');
var c8 =  document.createElement('input');
c8.setAttribute('id','c8');
c8.setAttribute('maxLength','1');

//cell9
var cell9 = document.createElement('td');
var c9 =  document.createElement('input');
c9.setAttribute('id','c9');
c9.setAttribute('maxLength','1');

//<----------row1 cell creation end------------->


//<----------row2 cell creation begin------------->
var cell10 = document.createElement('td');
var c10 =  document.createElement('input');
c10.setAttribute('id','c10');
c10.setAttribute('disabled','disabled');
c10.setAttribute('value','6');

//cell11
var cell11 = document.createElement('td');
var c11 =  document.createElement('input');
c11.setAttribute('id','c11');
c11.setAttribute('maxLength','1');

//cell12
var cell12 = document.createElement('td');
var c12 =  document.createElement('input');
c12.setAttribute('id','c12');
c12.setAttribute('maxLength','1');

//cell13
var cell13 = document.createElement('td');
var c13 =  document.createElement('input');
c13.setAttribute('id','c13');
c13.setAttribute('disabled','disabled');
c13.setAttribute('value','1');

//cell14
var cell14 = document.createElement('td');
var c14 =  document.createElement('input');
c14.setAttribute('id','c14');
c14.setAttribute('disabled','disabled');
c14.setAttribute('value','9');

//cell15
var cell15 = document.createElement('td');
var c15 =  document.createElement('input');
c15.setAttribute('id','c15');
c15.setAttribute('disabled','disabled');
c15.setAttribute('value','5');

//cell16
var cell16 = document.createElement('td');
var c16 =  document.createElement('input');
c16.setAttribute('id','c16');
c16.setAttribute('maxLength','1');

//cell17
var cell17 = document.createElement('td');
var c17 =  document.createElement('input');
c17.setAttribute('id','c17');
c17.setAttribute('maxLength','1');

//cell11
var cell18 = document.createElement('td');
var c18 =  document.createElement('input');
c18.setAttribute('id','c18');
c18.setAttribute('maxLength','1');

//<----------row2 cell creation end------------->


//<----------row3 cell creation begin------------->
var cell19 = document.createElement('td');
var c19 =  document.createElement('input');
c19.setAttribute('id','c19');
c19.setAttribute('maxLength','1');

//cell20
var cell20 = document.createElement('td');
var c20 =  document.createElement('input');
c20.setAttribute('id','c20');
c20.setAttribute('disabled','disabled');
c20.setAttribute('value','9');

//cell21
var cell21 = document.createElement('td');
var c21 =  document.createElement('input');
c21.setAttribute('id','c21');
c21.setAttribute('disabled','disabled');
c21.setAttribute('value','8');

//cell22
var cell22 = document.createElement('td');
var c22 =  document.createElement('input');
c22.setAttribute('id','c22');
c22.setAttribute('maxLength','1');

//cell23
var cell23 = document.createElement('td');
var c23 =  document.createElement('input');
c23.setAttribute('id','c23');
c23.setAttribute('maxLength','1');

//cell24
var cell24 = document.createElement('td');
var c24 =  document.createElement('input');
c24.setAttribute('id','c24');
c24.setAttribute('maxLength','1');

//cell25
var cell25 = document.createElement('td');
var c25 =  document.createElement('input');
c25.setAttribute('id','c25');
c25.setAttribute('maxLength','1');

//cell26
var cell26 = document.createElement('td');
var c26 =  document.createElement('input');
c26.setAttribute('id','c26');
c26.setAttribute('disabled','disabled');
c26.setAttribute('value','6');

//cell27
var cell27 = document.createElement('td');
var c27 =  document.createElement('input');
c27.setAttribute('id','c27');
c27.setAttribute('maxLength','1');

//<----------row3 cell creation end------------->

//<----------row4 cell creation begin------------->
var cell28 = document.createElement('td');
var c28 =  document.createElement('input');
c28.setAttribute('id','c28');
c28.setAttribute('disabled','disabled');
c28.setAttribute('value','8');

//cell29
var cell29 = document.createElement('td');
var c29 =  document.createElement('input');
c29.setAttribute('id','c29');
c29.setAttribute('maxLength','1');

//cell30
var cell30 = document.createElement('td');
var c30 =  document.createElement('input');
c30.setAttribute('id','c30');
c30.setAttribute('maxLength','1');

//cell31
var cell31 = document.createElement('td');
var c31 =  document.createElement('input');
c31.setAttribute('id','c31');
c31.setAttribute('maxLength','1');

//cell32
var cell32 = document.createElement('td');
var c32 =  document.createElement('input');
c32.setAttribute('id','c32');
c32.setAttribute('disabled','disabled');
c32.setAttribute('value','6');

//cell33
var cell33 = document.createElement('td');
var c33 =  document.createElement('input');
c33.setAttribute('id','c33');
c33.setAttribute('maxLength','1');

//cell34
var cell34 = document.createElement('td');
var c34 =  document.createElement('input');
c34.setAttribute('id','c34');
c34.setAttribute('maxLength','1');

//cell35
var cell35 = document.createElement('td');
var c35 =  document.createElement('input');
c35.setAttribute('id','c35');
c35.setAttribute('maxLength','1');

//cell36
var cell36 = document.createElement('td');
var c36 =  document.createElement('input');
c36.setAttribute('id','c36');
c36.setAttribute('disabled','disabled');
c36.setAttribute('value','3');
//<----------row4 cell creation end------------->


//<----------row5 cell creation begin------------->
var cell37 = document.createElement('td');
var c37 =  document.createElement('input');
c37.setAttribute('id','c37');
c37.setAttribute('disabled','disabled');
c37.setAttribute('value','4');

//cell38
var cell38 = document.createElement('td');
var c38 =  document.createElement('input');
c38.setAttribute('id','c38');
c38.setAttribute('maxLength','1');

//cell39
var cell39 = document.createElement('td');
var c39 =  document.createElement('input');
c39.setAttribute('id','c39');
c39.setAttribute('maxLength','1');

//cell40
var cell40 = document.createElement('td');
var c40 =  document.createElement('input');
c40.setAttribute('id','c40');
c40.setAttribute('disabled','disabled');
c40.setAttribute('value','8');
c40.setAttribute('maxLength','1');

//cell41
var cell41 = document.createElement('td');
var c41 =  document.createElement('input');
c41.setAttribute('id','c41');
c41.setAttribute('maxLength','1');

//cell42
var cell42 = document.createElement('td');
var c42 =  document.createElement('input');
c42.setAttribute('id','c42');
c42.setAttribute('disabled','disabled');
c42.setAttribute('value','3');

//cell43
var cell43 = document.createElement('td');
var c43 =  document.createElement('input');
c43.setAttribute('id','c43');
c43.setAttribute('maxLength','1');

//cell44
var cell44 = document.createElement('td');
var c44 =  document.createElement('input');
c44.setAttribute('id','c44');
c44.setAttribute('maxLength','1');

//cell45
var cell45 = document.createElement('td');
var c45 =  document.createElement('input');
c45.setAttribute('id','c45');
c45.setAttribute('disabled','disabled');
c45.setAttribute('value','1');
//<----------row5 cell creation end------------->

//<----------row6 cell creation begin------------->
var cell46 = document.createElement('td');
var c46 =  document.createElement('input');
c46.setAttribute('id','c46');
c46.setAttribute('disabled','disabled');
c46.setAttribute('value','7');

//cell47
var cell47 = document.createElement('td');
var c47 =  document.createElement('input');
c47.setAttribute('id','c47');
c47.setAttribute('maxLength','1');

//cell48
var cell48 = document.createElement('td');
var c48 =  document.createElement('input');
c48.setAttribute('id','c48');
c48.setAttribute('maxLength','1');

//cell49
var cell49 = document.createElement('td');
var c49 =  document.createElement('input');
c49.setAttribute('id','c49');
c49.setAttribute('maxLength','1');

//cell50
var cell50 = document.createElement('td');
var c50 =  document.createElement('input');
c50.setAttribute('id','c50');
c50.setAttribute('disabled','disabled');
c50.setAttribute('value','2');

//cell51
var cell51 = document.createElement('td');
var c51 =  document.createElement('input');
c51.setAttribute('id','c51');
c51.setAttribute('maxLength','1');

//cell52
var cell52 = document.createElement('td');
var c52 =  document.createElement('input');
c52.setAttribute('id','c52');
c52.setAttribute('maxLength','1');

//cell53
var cell53 = document.createElement('td');
var c53 =  document.createElement('input');
c53.setAttribute('id','c53');
c53.setAttribute('maxLength','1');

//cell54
var cell54 = document.createElement('td');
var c54 =  document.createElement('input');
c54.setAttribute('id','c54');
c54.setAttribute('disabled','disabled');
c54.setAttribute('value','6');
//<----------row6 cell creation end------------->


//<----------row7 cell creation begin------------->
var cell55 = document.createElement('td');
var c55 =  document.createElement('input');
c55.setAttribute('id','c55');
c55.setAttribute('maxLength','1');

//cell56
var cell56 = document.createElement('td');
var c56 =  document.createElement('input');
c56.setAttribute('id','c56');
c56.setAttribute('disabled','disabled');
c56.setAttribute('value','6');

//cell57
var cell57 = document.createElement('td');
var c57 =  document.createElement('input');
c57.setAttribute('id','c57');
c57.setAttribute('maxLength','1');

//cell58
var cell58 = document.createElement('td');
var c58 =  document.createElement('input');
c58.setAttribute('id','c58');
c58.setAttribute('maxLength','1');

//cell59
var cell59 = document.createElement('td');
var c59 =  document.createElement('input');
c59.setAttribute('id','c59');
c59.setAttribute('maxLength','1');

//cell60
var cell60 = document.createElement('td');
var c60 =  document.createElement('input');
c60.setAttribute('id','c60');
c60.setAttribute('maxLength','1');

//cell61
var cell61 = document.createElement('td');
var c61 =  document.createElement('input');
c61.setAttribute('id','c61');
c61.setAttribute('disabled','disabled');
c61.setAttribute('value','2');

//cell62
var cell62 = document.createElement('td');
var c62 =  document.createElement('input');
c62.setAttribute('id','c62');
c62.setAttribute('disabled','disabled');
c62.setAttribute('value','8');

//cell63
var cell63 = document.createElement('td');
var c63 =  document.createElement('input');
c63.setAttribute('id','c63');
c63.setAttribute('maxLength','1');

//<----------row7 cell creation end------------->

//<----------row8 cell creation begin------------->
var cell64 = document.createElement('td');
var c64 =  document.createElement('input');
c64.setAttribute('id','c64');
c64.setAttribute('maxLength','1');

//cell65
var cell65 = document.createElement('td');
var c65 =  document.createElement('input');
c65.setAttribute('id','c65');
c65.setAttribute('maxLength','1');

//cell66
var cell66 = document.createElement('td');
var c66 =  document.createElement('input');
c66.setAttribute('id','c66');
c66.setAttribute('maxLength','1');

//cell67
var cell67 = document.createElement('td');
var c67 =  document.createElement('input');
c67.setAttribute('id','c67');
c67.setAttribute('disabled','disabled');
c67.setAttribute('value','4');

//cell68
var cell68 = document.createElement('td');
var c68 =  document.createElement('input');
c68.setAttribute('id','c68');
c68.setAttribute('disabled','disabled');
c68.setAttribute('value','1');

//cell69
var cell69 = document.createElement('td');
var c69 =  document.createElement('input');
c69.setAttribute('id','c69');
c69.setAttribute('disabled','disabled');
c69.setAttribute('value','9');

//cell70
var cell70 = document.createElement('td');
var c70 =  document.createElement('input');
c70.setAttribute('id','c70');
c70.setAttribute('maxLength','1');

//cell71
var cell71 = document.createElement('td');
var c71 =  document.createElement('input');
c71.setAttribute('id','c71');
c71.setAttribute('maxLength','1');

//cell72
var cell72 = document.createElement('td');
var c72 =  document.createElement('input');
c72.setAttribute('id','c72');
c72.setAttribute('disabled','disabled');
c72.setAttribute('value','5');
//<----------row8 cell creation end------------->

//<----------row9 cell creation begin------------->
var cell73 = document.createElement('td');
var c73 =  document.createElement('input');
c73.setAttribute('id','c73');
c73.setAttribute('maxLength','1');

//cell74
var cell74 = document.createElement('td');
var c74 =  document.createElement('input');
c74.setAttribute('id','c74');
c74.setAttribute('maxLength','1');

//cell75
var cell75 = document.createElement('td');
var c75 =  document.createElement('input');
c75.setAttribute('id','c75');
c75.setAttribute('maxLength','1');

//cell76
var cell76 = document.createElement('td');
var c76 =  document.createElement('input');
c76.setAttribute('id','c76');
c76.setAttribute('maxLength','1');

//cell77
var cell77 = document.createElement('td');
var c77 =  document.createElement('input');
c77.setAttribute('id','c77');
c77.setAttribute('disabled','disabled');
c77.setAttribute('value','8');

//cell78
var cell78 = document.createElement('td');
var c78 =  document.createElement('input');
c78.setAttribute('id','c78');
c78.setAttribute('maxLength','1');

//cell79
var cell79 = document.createElement('td');
var c79 =  document.createElement('input');
c79.setAttribute('id','c79');
c79.setAttribute('maxLength','1');

//cell80
var cell80 = document.createElement('td');
var c80 =  document.createElement('input');
c80.setAttribute('id','c80');
c80.setAttribute('disabled','disabled');
c80.setAttribute('value','7');

//cell81
var cell81 = document.createElement('td');
var c81 =  document.createElement('input');
c81.setAttribute('id','c81');
c81.setAttribute('disabled','disabled');
c81.setAttribute('value','9');
//<----------row9 cell creation end------------->

//appending cells-rows-sudokutable
cell1.appendChild(c1);
row1.appendChild(cell1);
sudokutable.append(row1);

cell2.appendChild(c2);
row1.appendChild(cell2);
sudokutable.append(row1);

cell3.appendChild(c3);
row1.appendChild(cell3);
sudokutable.append(row1);

cell4.appendChild(c4);
row1.appendChild(cell4);
sudokutable.append(row1);

cell5.appendChild(c5);
row1.appendChild(cell5);
sudokutable.append(row1);

cell6.appendChild(c6);
row1.appendChild(cell6);
sudokutable.append(row1);

cell7.appendChild(c7);
row1.appendChild(cell7);
sudokutable.append(row1);

cell8.appendChild(c8);
row1.appendChild(cell8);
sudokutable.append(row1);

cell9.appendChild(c9);
row1.appendChild(cell9);
sudokutable.append(row1);

cell10.appendChild(c10);
row2.appendChild(cell10);
sudokutable.append(row2);

cell11.appendChild(c11);
row2.appendChild(cell11);
sudokutable.append(row2);

cell12.appendChild(c12);
row2.appendChild(cell12);
sudokutable.append(row2);

cell13.appendChild(c13);
row2.appendChild(cell13);
sudokutable.append(row2);

cell14.appendChild(c14);
row2.appendChild(cell14);
sudokutable.append(row2);

cell15.appendChild(c15);
row2.appendChild(cell15);
sudokutable.append(row2);

cell16.appendChild(c16);
row2.appendChild(cell16);
sudokutable.append(row2);

cell17.appendChild(c17);
row2.appendChild(cell17);
sudokutable.append(row2);

cell18.appendChild(c18);
row2.appendChild(cell18);
sudokutable.append(row2);

cell19.appendChild(c19);
row3.appendChild(cell19);
sudokutable.append(row3);

cell20.appendChild(c20);
row3.appendChild(cell20);
sudokutable.append(row3);

cell21.appendChild(c21);
row3.appendChild(cell21);
sudokutable.append(row3);

cell22.appendChild(c22);
row3.appendChild(cell22);
sudokutable.append(row3);

cell23.appendChild(c23);
row3.appendChild(cell23);
sudokutable.append(row3);

cell24.appendChild(c24);
row3.appendChild(cell24);
sudokutable.append(row3);

cell25.appendChild(c25);
row3.appendChild(cell25);
sudokutable.append(row3);

cell26.appendChild(c26);
row3.appendChild(cell26);
sudokutable.append(row3);

cell27.appendChild(c27);
row3.appendChild(cell27);
sudokutable.append(row3);

cell28.appendChild(c28);
row4.appendChild(cell28);
sudokutable.append(row4);

cell29.appendChild(c29);
row4.appendChild(cell29);
sudokutable.append(row4);

cell30.appendChild(c30);
row4.appendChild(cell30);
sudokutable.append(row4);

cell31.appendChild(c31);
row4.appendChild(cell31);
sudokutable.append(row4);

cell32.appendChild(c32);
row4.appendChild(cell32);
sudokutable.append(row4);

cell33.appendChild(c33);
row4.appendChild(cell33);
sudokutable.append(row4);

cell34.appendChild(c34);
row4.appendChild(cell34);
sudokutable.append(row4);

cell35.appendChild(c35);
row4.appendChild(cell35);
sudokutable.append(row4);

cell36.appendChild(c36);
row4.appendChild(cell36);
sudokutable.append(row4);

cell37.appendChild(c37);
row5.appendChild(cell37);
sudokutable.append(row5);

cell38.appendChild(c38);
row5.appendChild(cell38);
sudokutable.append(row5);

cell39.appendChild(c39);
row5.appendChild(cell39);
sudokutable.append(row5);

cell40.appendChild(c40);
row5.appendChild(cell40);
sudokutable.append(row5);

cell41.appendChild(c41);
row5.appendChild(cell41);
sudokutable.append(row5);

cell42.appendChild(c42);
row5.appendChild(cell42);
sudokutable.append(row5);

cell43.appendChild(c43);
row5.appendChild(cell43);
sudokutable.append(row5);

cell44.appendChild(c44);
row5.appendChild(cell44);
sudokutable.append(row5);

cell45.appendChild(c45);
row5.appendChild(cell45);
sudokutable.append(row5);

cell46.appendChild(c46);
row6.appendChild(cell46);
sudokutable.append(row6);

cell47.appendChild(c47);
row6.appendChild(cell47);
sudokutable.append(row6);

cell48.appendChild(c48);
row6.appendChild(cell48);
sudokutable.append(row6);

cell49.appendChild(c49);
row6.appendChild(cell49);
sudokutable.append(row6);

cell50.appendChild(c50);
row6.appendChild(cell50);
sudokutable.append(row6);

cell51.appendChild(c51);
row6.appendChild(cell51);
sudokutable.append(row6);

cell52.appendChild(c52);
row6.appendChild(cell52);
sudokutable.append(row6);

cell53.appendChild(c53);
row6.appendChild(cell53);
sudokutable.append(row6);

cell54.appendChild(c54);
row6.appendChild(cell54);
sudokutable.append(row6);

cell55.appendChild(c55);
row7.appendChild(cell55);
sudokutable.append(row7);

cell56.appendChild(c56);
row7.appendChild(cell56);
sudokutable.append(row7);

cell57.appendChild(c57);
row7.appendChild(cell57);
sudokutable.append(row7);

cell58.appendChild(c58);
row7.appendChild(cell58);
sudokutable.append(row7);

cell59.appendChild(c59);
row7.appendChild(cell59);
sudokutable.append(row7);

cell60.appendChild(c60);
row7.appendChild(cell60);
sudokutable.append(row7);

cell61.appendChild(c61);
row7.appendChild(cell61);
sudokutable.append(row7);

cell62.appendChild(c62);
row7.appendChild(cell62);
sudokutable.append(row7);

cell63.appendChild(c63);
row7.appendChild(cell63);
sudokutable.append(row7);

cell64.appendChild(c64);
row8.appendChild(cell64);
sudokutable.append(row8);

cell65.appendChild(c65);
row8.appendChild(cell65);
sudokutable.append(row8);

cell66.appendChild(c66);
row8.appendChild(cell66);
sudokutable.append(row8);

cell67.appendChild(c67);
row8.appendChild(cell67);
sudokutable.append(row8);

cell68.appendChild(c68);
row8.appendChild(cell68);
sudokutable.append(row8);

cell69.appendChild(c69);
row8.appendChild(cell69);
sudokutable.append(row8);

cell70.appendChild(c70);
row8.appendChild(cell70);
sudokutable.append(row8);

cell71.appendChild(c71);
row8.appendChild(cell71);
sudokutable.append(row8);

cell72.appendChild(c72);
row8.appendChild(cell72);
sudokutable.append(row8);

cell73.appendChild(c73);
row9.appendChild(cell73);
sudokutable.append(row9);

cell74.appendChild(c74);
row9.appendChild(cell74);
sudokutable.append(row9);

cell75.appendChild(c75);
row9.appendChild(cell75);
sudokutable.append(row9);

cell76.appendChild(c76);
row9.appendChild(cell76);
sudokutable.append(row9);

cell77.appendChild(c77);
row9.appendChild(cell77);
sudokutable.append(row9);

cell78.appendChild(c78);
row9.appendChild(cell78);
sudokutable.append(row9);

cell79.appendChild(c79);
row9.appendChild(cell79);
sudokutable.append(row9);

cell80.appendChild(c80);
row9.appendChild(cell80);
sudokutable.append(row9);

cell81.appendChild(c81);
row9.appendChild(cell81);
sudokutable.append(row9);

//Breaks
var break1 = document.createElement('br');

//Buttons
var start = document.createElement('button');
start.innerHTML="Start";
start.addEventListener('click', function(){
    setInterval(updateTimer,1000);
});

//counter
var counter = document.createElement('p');
counter.innerHTML="4:00"

//resetting page
var reset = document.createElement('button');
reset.innerHTML="Reset";
reset.addEventListener('click',function()
{
window.location.reload()
});

//Display
Div1.append(sudokutable);
Div2.append(start,counter,reset);
MainDiv.append(Div1,Div2);
document.body.append(MainDiv);




//updateTimer
let timer = 4 * 60;
function updateTimer(){
    let minutes = Math.floor(timer/60);
    let seconds = timer % 60;
    seconds = seconds <10 ? '0' + seconds : seconds;
    counter.innerHTML=`${minutes}:${seconds}`;
    timer--;
}


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

function solveSudoku(answers){
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            
        }
    }
}