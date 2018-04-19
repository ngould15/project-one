$(document).ready(function () {
    var recommendationCounter = 0;
    var numRecommendations;
    var queryURL;
    //var categoryCounter = 0;

    function runThis(numRecommendations) { }

    // var url = "https://api.foursquare.com/v2/search/recommendations?near=" + locationChosen + "&v=20160607&client_id=" + clientID + "&client_secret=" + clientSecret + "";

    var locationChosen = "New York, NY";
    var clientID = "Y0THHOXVAO3E2J32CKEOXSGYSZ2ACS4NZU5J4ABSYVOS5I50";
    var clientSecret = "JZGTVKXP4H3E4IROULCOUJR4KBOXRY24TCZ4QS0DILORD3RI";

    var venues;

    //queryURL = "https://api.foursquare.com/v2/venues/search?near=" + locationChosen + "&section=topPicks&categoryId=4d4b7104d754a06370d81259,4d4b7105d754a06372d81259,4d4b7105d754a06373d81259,4d4b7105d754a06374d81259,4d4b7105d754a06376d81259,4d4b7105d754a06377d81259,4d4b7105d754a06375d81259,4e67e38e036454776db1fb3a,4d4b7105d754a06378d81259,4d4b7105d754a06379d81259&v=20180408&sortByDistance=1&venuePhotos=1&client_id=" + clientID + "&client_secret=" + clientSecret + "";
    queryURL = "https://api.foursquare.com/v2/venues/search?near=" + locationChosen + "&section=topPicks&v=20180408&sortByDistance=1&venuePhotos=1&client_id=" + clientID + "&client_secret=" + clientSecret+"&categoryId="
    
    $("#recSearch").on("click", function () {
        var categories = [];

        $(".check:checked").each(function () {
            categories.push($(this).val());
        })

        queryURL = queryURL+categories.join(",")

        $.ajax({
            url: queryURL,
            method: 'GET',
        }).done(function (result) {
            console.log(result)
            $("#rec-section").append(result);
        })
    })

});