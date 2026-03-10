const quotes =["This is a quote","I am using Javascript", "Hi"]
        function randomQuotes(){
            var randomIndex = Math.floor(Math.random()*quotes.length)
            document.getElementById("quoteParagraph").innerHTML = quotes[randomIndex]
        }