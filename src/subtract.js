let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
var answer = 0;
function generate_equation() {
  var num1 = Math.floor(Math.random() * 13);
  var num2 = Math.floor(Math.random() * 13);
  var dummy1 = Math.floor(Math.random() * 13);
  var dumm2 = Math.floor(Math.random() * 13);
  var allanswer = [];
  var switchAnswer = [];

  answer = num1 - num2;
  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;

  allanswer = [answer, dummy1, dumm2];
  for (i = allanswer.length; i--; ) {
    switchAnswer.push(
      allanswer.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
    );
  }

  option1.innerHTML = switchAnswer[0];
  option2.innerHTML = switchAnswer[1];
  option3.innerHTML = switchAnswer[2];
}

option1.addEventListener("click", function () {
  if (option1.innerHTML == answer) {
    generate_equation();
  } else {
    alert("Wrong answer,try again!");
  }
});

option2.addEventListener("click", function () {
  if (option2.innerHTML == answer) {
    generate_equation();
  } else {
    alert("Wrong answer,try again!");
  }
});

option3.addEventListener("click", function () {
  if (option3.innerHTML == answer) {
    generate_equation();
  } else {
    alert("Wrong answer,try again!");
  }
});

generate_equation();
