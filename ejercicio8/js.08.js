var num = "";
      function calculate(option) {
        if (option == "DEL") {
          num = num.slice(0, num.length - 1);
          document.getElementById("Result").innerHTML = num;
        }
        if (option != "=" && option != "DEL") {
          num += option;
          document.getElementById("Result").innerHTML = num;
        }
        if (option == "=" && option != "DEL") {
          if (num == "") {
            return;
          } else {
            num = eval(num);
            document.getElementById("Result").innerHTML = num;
            num = "";
          }
        }
      }