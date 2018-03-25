chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
    var sampleItem = response;
    var category1 = "plastic", category2 = "foam", category3 = "paper", category4 = "coffee";

    if(sampleItem.contains(category1)){
        change1 = "test1";
        change2 = "test1";
        change3 = "test2";
        change4 = "test3";
    } else if (sampleItem.contains(category2)) {
        change1 = "test";
        change2 = "test1";
        change3 = "test2";
        change4 = "test3";
    } else if (sampleItem.contains(category3) ) {
        change1 = "test";
        change2 = "test1";
        change3 = "test2";
        change4 = "test3";
    } else {
        change1 = "test";
        change2 = "test1";
        change3 = "test2";
        change4 = "test3";
    }

    document.getElementById("water").innerHTML = change1;
    document.getElementById("air").innerHTML = change2;
    document.getElementById("labor").innerHTML = change3;
    document.getElementById("transparency").innerHTML = change4;

});

