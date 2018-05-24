var reserve = document.getElementById('reserve')
var time = document.getElementsByClassName('t')
var days = document.getElementsByClassName('d')
var reserve = document.getElementById('reserve')
var reserveComplete = document.getElementById('reservecomplete')
var reserveBtn = document.getElementById('reservebtn')

console.log(days[0]);
console.log(days[0].value);
console.log(days[0].innerHTML);
console.log(days);

function inputDay(){
  for (var i = 0; i < days.length; i++) {
    days[i].addEventListener('click',function(){
      //   inputDay(i)
      // console.log(days[i]);
      // reserve.value += days[i].value+" "
    })
  }
}
