/* JavaScript functions for NACRO website */

//Adding event listeners
var pubSearchBar = document.querySelector('#pub-search');
pubSearchBar.addEventListener("keyup", search);

var pubLoadMore = document.querySelector('#pub-load');
pubLoadMore.addEventListener("click", loadMorePosts);

function search() {
    loadMorePosts(); //Load all the results to search all the results
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

function loadMorePosts() {
    pubLoadMore.removeEventListener("click", loadMorePosts);
    pubLoadMore.style.display = "none";
    var cards = document.getElementsByClassName('card');
    for (var i = 0; cards.length; i++) {
        if (cards[i].style.display == "none") {
            cards[i].style.display = "block";
        }
    }
}