function digitalClock()
{
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
 var session = "AM";

 if (h==0)
 {
    h = 12; //12 hour format  if h==0 it means its 24 hour format
 }

 if (h>12)
 {
    h = h-12; //its 12 hour clock so after 12 its printing 1 not 13
    session = "PM";
 }

//  if (h<10)
//  {
//     h = "0" + h;// adding zero before single
//  }

//  if ( m<10)
//  {
//     m = "0" + m;// adding zero before single digit of minutes
//  }

//  if (s<10)
//  {
//     s  = "0"+ s;// adding zero before
//  }

//using ternary operator:

h =(h<10)?"0"+h:h;
m =(m<10)? "0"+m:m;
s =(s<10)? "0"+s:s;


setTimeout("digitalClock()",1000);
document.getElementById('clock').innerHTML=h+":"+m+":"+s +"  "+session;//displaying the time on the webpage
}

digitalClock();