// Page Elements listed here
getNewImageBtnEl = document.querySelector(".get-new-img-btn");
getUserDateEl = document.getElementById("datepicker");

// Rendering API elements
nasaApiTitleEl = document.getElementById("nasa-api-title");
nasaApiExplanationEl = document.getElementById("nasa-api-explanation");
nasaApiCopyrightEl = document.getElementById("nasa-api-copyright");
nasaApiImgEl = document.getElementById("nasa-api-img");
nasaApiLinkEl = document.getElementById("nasa-api-link");

// Dayjs Date Formats
var currentDate = dayjs().format("YYYY-MM-DD");

// Nasa Image API Call
// Nasa API Key, get your key here  https://api.nasa.gov/
var nasaPicofDay = function () {
  var apiKey = "sU2Ss14q6NUtFJ2Kp5RcT1COaO0NWHW3KGGN83Sb";
  var apiUrl =
    "https://api.nasa.gov/planetary/apod?api_key=" +
    apiKey +
    "&date=" +
    currentDate;
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        // console.log(data);
        var nasaImgDate = data.date;
        var nasaImgTitle = data.title;
        var nasaImgExplanation = data.explanation;
        var nasaImgUrl = data.url;
        var nasaImgCopyrigth = data.copyright;
        // Renders results from API to page
        console.log("Date: " + nasaImgDate);
        nasaApiTitleEl.textContent = nasaImgTitle;
        nasaApiExplanationEl.textContent = nasaImgExplanation;
        nasaApiCopyrightEl.textContent = nasaImgCopyrigth;
        nasaApiImgEl.src = nasaImgUrl;
        nasaApiLinkEl.setAttribute("href",nasaImgUrl)
        
        
        console.log("Url: " + nasaImgUrl);
        //console.log("Copyright: " + nasaImgCopyrigth);
      });
    } else {
      alert(
        "Error: API couldnt not be reached \nMessage: " + response.statusText
      );
    }
  });
};

// User selects a new date from menu and reruns API when button is clicked
function userSelectedDate(event) {
  event.preventDefault();
  var userDateValue = getUserDateEl.value;
  currentDate = userDateValue;
  console.log("user selected:" + userDateValue);
  nasaPicofDay();
  return userDateValue;
}

// Click Events
getNewImageBtnEl.addEventListener("click", userSelectedDate);

// SpaceNews API Call
// SpaceNews get your API Key here https://api.spaceflightnewsapi.net/v3/articles?_limit=5
// Need image URl
// Link variables in 65-68. Reference the entries. Need to do a loop to account for 5 articles
var SpaceNews = function () {
  var api_url = "https://api.spaceflightnewsapi.net/v3/articles?_limit=5";
  fetch(api_url).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          var article = data[i];
          var ArticleTitle = article.title;
          var ArticleupdatedAt = article.updatedAt;
          var ArticleUrl = article.url;
          var Articlesummary = article.summary;
          // Console log to ensure variables are functional
          console.log("Title: " + ArticleTitle);
          console.log("Date: " + ArticleupdatedAt);
          console.log("Url: " + ArticleUrl);
          console.log("Summary: " + Articlesummary);
        }
      });
    } else {
      alert(
        "Error: API couldnt not be reached \nMessage: " + response.statusText
      );
    }
  });
};

// All Functions that run when page loads initially
nasaPicofDay();

// Api Function 2, Space News Render
SpaceNews();
