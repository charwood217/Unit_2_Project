"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Christian Harwood
   Date: 2/4/20  
   
   Filename: hg_report.js
	
*/

var gameReport = "<h1>" + itemTitle + "</h1>";
gameReport += "<h2>by: " + itemManufacturer + "</h2>";
gameReport += "<img src='hg_" + itemID + ".png' alt='id' id='gameImg'";
gameReport += "<table>";
gameReport += "<tr><th>Product Id</th><td>" + itemID + "</td></tr>";
gameReport += "<tr><th>List Price</th><td>" + itemPrice + "</td></tr>";
gameReport += "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr>";
gameReport += "<tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr>";
gameReport += "<tr><th>Condition</th><td>" + itemCondition + "</td></tr>";
gameReport += "<tr><th>Release</th><td>" + itemRelease + "</td></tr>";
gameReport += "</table>"
gameReport += itemSummary;

document.getElementsByTagName("article")[0].innerHTML = gameReport;

var ratingSum = 0;
var ratingsCount = ratings.length;

for(var i = 0; i < ratings.length; i++){
   ratingSum + ratings;
}
var ratingsAvg = ratingSum / ratingsCount;

var ratingReport = "<h1>Customer Reviews</h2>";
ratingReport += "<h2>" + ratingsAvg + " out of 5 stars " + ratingsCount + "</h2>";

for(var i = 0; i < 3; i++){
   ratingReport += "<div class='review'> <h1>" + ratingTitles[i] + "</h1> <table><tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr> <tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr> <tr><th>Rating</th><td>";
   for(var j = 0; j < ratings[i]; j++){
      ratingReport += "<img src='hg_star.png' />";
   }

   ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}

document.getElementsByTagName("aside")[0].innerHTML = ratingReport;
