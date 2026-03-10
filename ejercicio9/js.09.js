function muestra() {
        f = document.getElementById("tbf").value;
        c = document.getElementById("tbc").value;
        if (f != "" && c == "") {
          c = toCelsius(f);
          document.getElementById("tbc").value = c;
        } else if (f == "" && c != "") {
          f = toFahrenheit(c);
          document.getElementById("tbf").value = f;
        } else if (f != "" && c != "") {
          resetear();
        }
      }

      function toCelsius(f) {
        return (5 / 9) * (f - 32);
      }
      function toFahrenheit(c) {
        return (c * 5) / 9 + 32;
      }
      function resetear() {
        document.getElementById("tbf").value = "";
        document.getElementById("tbc").value = "";
      }