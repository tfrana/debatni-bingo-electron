"use strict";

function getRandomQuote(arr) {
    var index = Math.floor(Math.random() * arr.length);
    var value = arr[index];
    arr.splice(index, 1);
    return value;
}

function resizeCells() {
    var quotes = document.querySelectorAll('.quote');

    quotes.forEach(quote => {
        let fontSize = parseInt(getComputedStyle(quote).fontSize, 10);

        while (parseFloat(getComputedStyle(quote.parentElement).width) > 100) {
            quote.style.fontSize = fontSize-- + 'px';
        }
    });
}

function generateTable() {
    var quotes = [...window.api.quotes];
    var table = document.getElementById("table");
    table.innerHTML = "";
    for (var i = 0; i < 5; i++) {
        var row = "<tr>";
        for (var j = 0; j < 5; j++) {
            var randomQuote = getRandomQuote(quotes);
            row += "<td class='cross-out'><div class='quote'>"
                + randomQuote
                + "</div></td>"
            ;
        }
        row += "</tr>";
        table.innerHTML += row;
    }
    var cells = table.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function(){
            if (this.classList.contains("crossed-out")) {
                this.classList.remove("crossed-out");
            } else {
                this.classList.add("crossed-out");
            }
        });
    }

    var cells = table.getElementsByTagName("td");
    for(var i = 0; i < cells.length; i++) {
        cells[i].classList.remove("crossed-out");
    }

    resizeCells();
}

document.getElementById("regenerateBtn").addEventListener("click", function(){
    generateTable();
});

generateTable();
