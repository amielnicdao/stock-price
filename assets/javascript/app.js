

function displayStocks() {
    var stocks = $("#search").val().trim();
    // var queryURL = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + stocks + "&apikey=8MKLVA7WLARZMNWP";
    var queryURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + stocks + "&apikey=8MKLVA7WLARZMNWP";

    $.ajax({

        url: queryURL,
        method: "GET"

    }).then(function (response) {
        console.log(response);

    //     for (var i=0; i < response.bestMatches.length; i++) {

            var summaryDiv = $("<div class='companyDiv'>");
            // console.log(companyInfo)
                var company = response['Global Quote'];
                console.log(company['01. symbol'], company['02. open'])
                // var companyInfo =  company['01. symbol'] + " " + company['02. open'] + " " + company['03. high'] + " " + company['04. low'] 
                // + " " + company['05. price'];
                var name = company['01. symbol'];
                console.log(name)
                var open = company['02. open'];
                var high = company['03. high'];
                var low = company['04. low'];
                var price = company['05. price'];

                var nameDiv = $("<p>").text(name);
                $(".name").prepend(nameDiv);

                var openDiv = $("<p>").text(open);
                $(".open").prepend(openDiv);

                var highDiv = $("<p>").text(high);
                $(".high").prepend(highDiv);

                var lowDiv = $("<p>").text(low);
                $(".low").prepend(lowDiv);

                var priceDiv = $("<p>").text("$" + price);
                $(".price").prepend(priceDiv);


             
                // var companyDiv = $("<p>").text(companyInfo);
              
 
                // summaryDiv.append(companyDiv);
            
                // $("#company-summary").prepend(companyDiv);
    // }
    })
};


$("#input-stocks").on("click", function(event) {
    
    event.preventDefault();
    
    var stocks = $("#search").val().trim();
    
    displayStocks(stocks);
});

   



function displayNews() {
    var queryURL = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&category=business&' +'apiKey=6a8adef82f2546e38bfe6db61628cb26'

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


