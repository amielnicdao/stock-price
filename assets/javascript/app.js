

function displayStocks() {
    var stocks = $("#search").val().trim();
    var queryURL = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + stocks + "&apikey=8MKLVA7WLARZMNWP";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
};


$("#input-stocks").on("click", function(event) {
    
    event.preventDefault();
    
    var stocks = $("#search").val().trim();
    
    displayStocks(stocks);
});

   



function displayNews() {
    var queryURL = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +'apiKey=6a8adef82f2546e38bfe6db61628cb26'

    $.ajax({

        url: queryURL,
        method: "GET"

    }).then(function (response) {
        console.log(response);

        // var tableDiv = $("<table/>")
        
        for (var i=0; i < response.articles.length; i++) {
            // tableDiv.append("<tr><td>" + description + "</td></tr>")
            // var newsDiv = $("<div class='newsDiv'>");
            var description = response.articles[i].description;
                var test = $("<div>")
                var textDiv = $("<p>")
                textDiv.text(description)
                test.append(textDiv)
                

                
                // var descriptionDiv = $("<p>").text(description);
                var image = response.articles[i].urlToImage;
                var img = $("<img>")
                img.attr("src", image)

                test.append(img)
                // var imageDiv = $("<img>").attr("src", image);
                // console.log(imageDiv)
                // img.appendTo("#news")
                
                // $("#image").append(imageDiv);

                // newsDiv.append(descriptionDiv);
                // newsDiv.prepend(imageDiv);
                // $("#news").prepend(descriptionDiv);
                $("#news").append(test);  
        }
        
       
    

    
}
)}


displayNews()


