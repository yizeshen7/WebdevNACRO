/* JavaScript functions for NACRO website */

var pubSearchBar = document.querySelector('#pub-search');
pubSearchBar.addEventListener("keyup", search);

function search() {
    var cardTitles = document.getElementsByClassName('card-title');
    var cardTexts = document.getElementsByClassName('card-text');
    var cards = document.getElementsByClassName('card');

    for (var i = 0; i < cardTitles.length; i++) {
        var currTitle = cardTitles[i].textContent.toLowerCase();
        var currText = cardTexts[i].textContent.toLowerCase();
        var currSearch = pubSearchBar.value.toLowerCase();

        if (currTitle.includes(currSearch) || currText.includes(currSearch)) {
            cards[i].style.display = "block";
        }
        else {
            cards[i].style.display = "none";
        }
    }
}