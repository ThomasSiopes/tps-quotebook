// Twitter
document.getElementsByTagName('meta')["twitter:card"].content="summary" //no touch
document.getElementsByTagName('meta')["twitter:title"].content="Quote Site" //title of share card
document.getElementsByTagName('meta')["twitter:description"].content="Test text" //description or quote text
document.getElementsByTagName('meta')["twitter:image"].content="#" //file path to icon image
document.getElementsByTagName('meta')["twitter:site"].content="@quotesite" // @"name of website"

// Facebook / Parler / Twitter
document.getElementsByTagName('meta')["og:title"].content="Quote" //title of share card
document.getElementsByTagName('meta')["og:url"].content="#" //url of page being shared
document.getElementsByTagName('meta')["og:type"].content="website" //no touch
document.getElementsByTagName('meta')["og:image"].content="#" //file path to icon image
document.getElementsByTagName('meta')["og:description"].content="Test text" ///description or quote

$(function(){
    $("#navigationbar").load("./navbar_info.html");
  });

// function copyURL() {
//     var range = document.createRange();
//     range.selectNode(document.getElementById("Page-URL"));
//     console.log(range.selectNode.value);
//     window.getSelection().removeAllRanges(); // clear current selection
//     window.getSelection().addRange(range); // to select text
//     document.execCommand("copy");
//     window.getSelection().removeAllRanges();// to deselect
//     console.log("worked");
//   }