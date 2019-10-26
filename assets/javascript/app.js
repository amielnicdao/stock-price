// 8MKLVA7WLARZMNWP

function displayStocks() {

    // event.preventDefault()
    var stocks = $("#search").val();
    var queryURL = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + stocks + "&apikey=8MKLVA7WLARZMNWP";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
};

$(document).on("keyup", function() {
    displayStocks()
} )

   



function displayNews() {
    var queryURL = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +'apiKey=6a8adef82f2546e38bfe6db61628cb26'

    $.ajax({

        url: queryURL,
        method: "GET"

    }).then(function (response) {
        console.log(response);

        for (var i=0; i < response.articles.length; i++) {

            var newsDiv = $("<div class='newsDiv'>");
                var description = response.articles[i].description;
                var descriptionDiv = $("<p>").text(description);
                var image = response.articles[i].urlToImage;
                var imageDiv = $("<p>").text(image);

                newsDiv.append(descriptionDiv);
                newsDiv.prepend(imageDiv);
                $("#news").prepend(descriptionDiv);

        }

    

    
}
)}


displayNews()


