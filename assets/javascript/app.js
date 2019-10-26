
// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=6a8adef82f2546e38bfe6db61628cb26';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());

        

//         var newsDiv = $("<div class='news'>");
//         var displayNews = response.articles;
//         var appendNews = $("<p>").text("News" + displayNews);
//         newsDiv.append(appendNews);

//         $("#news").prepend(displayNews);
    
//     })








function displayNews() {
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +'apiKey=6a8adef82f2546e38bfe6db61628cb26'

    $.ajax({

        url: url,
        method: "GET"

    }).then(function (response) {
        console.log(response);

    
}
)}


displayNews()


