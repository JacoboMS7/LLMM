function changeFont(font) {
        document.getElementById("fontToChange").style.fontFamily = font;
      }
      function changeImage(image) {
        document.getElementById("imageToChange").src = image;
      }
      function changeText(option) {
        let t = document.getElementById("textToChange");
        switch (option) {
          case 1:
            t.innerHTML = "This is the first text";
            break;
          case 2:
            t.innerHTML = "This is the second text";
            break;
          case 3:
            t.innerHTML = "This is the third text";
            break;
        }
      }