
let CounterHead = document.getElementById("CounterHead");
let Increase = document.getElementById("increase");
let descrease = document.getElementById("descrease")
let Reset = document.getElementById("reset")

function Controll () {

    let temp = 0;

    Increase.addEventListener("click", function () {
      temp = temp + 1;
      CounterHead.textContent = temp;
      console.log(temp);
      valueMaintanance();
      bgSetter();
    });

    descrease.addEventListener("click", function () {
      temp = temp - 1;
      CounterHead.textContent = temp;
      console.log("descresing", temp);
      valueMaintanance();
      bgSetter();
    });

    Reset.addEventListener("click", function () {
      temp = 0;
      CounterHead.textContent = temp;
      console.log("reseted");
      valueMaintanance();
      bgSetter();
    });

    function valueMaintanance() {
        if (temp <= -10 || temp >= 10) {
          alert("Please maintaine value between -10 and 10 ");
        }
    }
    function bgSetter() {
        if (temp > 0) {
            document.body.style.background = "green"
        }
        else if(temp < 0) {
            document.body.style.background = "red"
        }
        else if(temp === 0) {
            document.body.style.background = "grey"
        }
    }
    bgSetter();

}

Controll()