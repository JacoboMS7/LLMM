const images = [
        "coche1.jpg",
        "coche2.jpg",
        "coche3.jpg",
        "coche4.jpg",
        "coche5.jpg",
        "coche6.jpg",
      ];
      var currIndex = 0;
      function changeImage(indexChange) {
        currIndex += indexChange;
        if (currIndex < 0) {
          currIndex = images.length - 1;
        } else if (currIndex >= images.length) {
          currIndex = 0;
        }
        document.getElementById("imageToChange").src = images[currIndex];
      }