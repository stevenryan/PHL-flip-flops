var reserve = document.getElementById('reserve')
var reserveComplete = document.getElementById('reservecomplete')
var reserveBtn = document.getElementById('reservebtn')
var clearBtn = document.getElementById('clearbtn')
var toDoList = document.getElementById('todolist')

var nameInput = document.getElementById('nameinput')
var email = document.getElementById('email')
var number = document.getElementById('number')

var days = document.getElementsByClassName('days')
var times = document.getElementsByClassName('times')

var mon = document.getElementById('Monday')
var tue = document.getElementById('Tuesday')
var wed = document.getElementById('Wednesday')
var thur = document.getElementById('Thursday')
var fri = document.getElementById('Friday')

var t1 = document.getElementById('t1')
var t2 = document.getElementById('t2')
var t3 = document.getElementById('t3')
var t4 = document.getElementById('t4')
var t5 = document.getElementById('t5')

mon.addEventListener('click',function(){
  reserve.value += mon.innerHTML+ " "
})
tue.addEventListener('click',function(){
  reserve.value += tue.innerHTML+ " "
})
wed.addEventListener('click',function(){
  reserve.value += wed.innerHTML+ " "
})
thur.addEventListener('click',function(){
  reserve.value += thur.innerHTML+ " "
})
fri.addEventListener('click',function(){
  reserve.value += fri.innerHTML+ " "
})

t1.addEventListener('click',function(){
  reserve.value += t1.innerHTML+ " "
})
t2.addEventListener('click',function(){
  reserve.value += t2.innerHTML+ " "
})
t3.addEventListener('click',function(){
  reserve.value += t3.innerHTML+ " "
})
t4.addEventListener('click',function(){
  reserve.value += t4.innerHTML+ " "
})
t5.addEventListener('click',function(){
  reserve.value += t5.innerHTML+ " "
})


reserveBtn.addEventListener('click', function(){
  var item = document.createElement('div')
  item.style.width = '80%'
  item.style.margin = '10px auto'
  item.style.borderColor = 'grey'
  item.style.backgroundColor = 'orange'
  item.style.padding = '20px'
  item.style.borderRadius = '25px'
  item.innerHTML = 'Reservation Complete: '+nameInput.value +' '+ email.value +' '+ number.value + ' '+ reserve.value
  item.class = 'items'
  var completed = document.createElement("button")
  completed.innerHTML = "completed";
  completed.addEventListener('click', function(){
    item.remove();
  })
  item.appendChild(completed)
  document.body.appendChild(item)
})

clearBtn.addEventListener('click', function(){
  nameInput.value = ''
  email.value = ''
  number.value = ''
  reserve.value = ''
})
