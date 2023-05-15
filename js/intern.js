// set up text to print, each item in array is new line
var aText = new Array(
" ",

"<br>● Iot Intern <i>(11/2022 - 12/2022)</i><br><br><b>Company : Emertxe Info Technologies</b>",
"--- I build an IoT based home automation system by using Blynk Iot application and PicSimlab simulator, where LED, temperature system, Serial tank, Heater, Cooler and Water tank is used CLCD acts like a dash board used for displaying the events. button widgets are used to control heater, cooler and inlet valve, outlet valve. Gauge widgets to display the temperature and volume of the water. ",

);
var iSpeed = 35; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
