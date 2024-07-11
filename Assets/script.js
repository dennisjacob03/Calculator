var oper, i, j, a, b,val;
var num, a, b;
document.getElementById("calculatebtn").addEventListener("click", checkcalcu);


function checkcalcu(){
  num = document.getElementById("scrn").value;
  var arr;
  var c = 0;
  var count = 0;
  if (num == "") {
    alert("Enter what you want to calculate");
    return;
  }
  for (i = 0; i < num.length; i++) {
    if (
      num[i] != "0" &&
      num[i] != "1" &&
      num[i] != "2" &&
      num[i] != "3" &&
      num[i] != "4" &&
      num[i] != "5" &&
      num[i] != "6" &&
      num[i] != "7" &&
      num[i] != "8" &&
      num[i] != "9" &&
      num[i] != "+" &&
      num[i] != "-" &&
      num[i] != "x" &&
      num[i] != "^" &&
      num[i] != "%" &&
      num[i] != "√" &&
      num[i] != "/" &&
      num[i] != "!" &&
      num[i] != "(" &&
      num[i] != ")" &&
      num[i] != "."
    ) {
      c++;
    }
  }
  if(c>0){
		alert("No other characters allowed");
    return;
  }

  arr = ["+", "-", "x", "^", "%", "√", "/", "!"];

  for (i = 0; i < num.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (num[i] == arr[j]) {
        count++;
        oper = num[i];
      }
    }
  }

  if (count == 0) {
    alert("Enter atleast one operator");
    return;
  } else if (count > 1) {
    alert("Only one operator at a time");
  } else {
    var [val] = calculate();
    document.getElementById("result").innerHTML = "Ans: " + val;
    return;
  }
};

document.addEventListener("keydown", function (event) {
  if (event.key === "=") {
    checkcalcu();
  }
});


function calculate(){
	if (oper == "+") return [addition()];
  if (oper == "-") return [subtraction()];
  if (oper == "x") return [multiplication()];
  if (oper == "^") return [exponential()];
  if (oper == "%") return [modulus()];
  if (oper == "√") return [root()];
  if (oper == "/") return [division()];
  if (oper == "!") return [factorial()];

	function addition() {
    var [a, b] = split("+");
    val = a + b;
    return val;
  }

  function subtraction() {
    var [a, b] = split("-");
    val = a - b;
    return val;
  }

  function multiplication() {
    var [a, b] = split("x");
    val = a * b;
    return val;
  }

  function division() {
    var [a, b] = split("/");
    val = a / b;
    return val;
  }

  function exponential() {
    var [a, b] = split("^");
    val = Math.pow(a, b);
    return val;
  }

	function modulus() {
    var [a, b] = split("%");
    val = a%b;
    return val;
  }

  function root() {
    var b = [];

    for (i = num.length - 1; i > 0; i--) {
      if (num[i] != oper) {
        j = 0;
        b.push(num[i]);
        j++;
      } else break;
    }
		b.reverse();
    b = Number(b.join(""));
    val = Math.sqrt(b);
    return val;
  }

  function factorial() {
    var a = [];
    var f = 1;
    for (i = 0; i < num.length; i++) {
      if (num[i] != oper) {
        i = 0;
        a.push(num[i]);
        i++;
      } else break;
    }
    a = Number(a.join(""));
    for (i = 1; i <= a; i++) {
      f = f * i;
    }
    return f;
  }

  function split(oper) {
    var a = [];
    var b = [];
    for (i = 0; i < num.length; i++) {
      if (num[i] != oper) {
        a.push(num[i]);
      } else {
        for (i = num.length - 1; i > 0; i--) {
          if (num[i] != oper) {
            j = 0;
            b.push(num[i]);
            j++;
          } else break;
        }
        break;
      }
    }
		b.reverse();
    a = Number(a.join(""));
    b = Number(b.join(""));
		
    return [a, b];
  }
}
