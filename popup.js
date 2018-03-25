chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
    var sampleItem = msg;
    var category1 = "paper", category2 = "foam", category3 = "plastic", category4 = "coffee";

    if(sampleItem.contains(category1)){
        change1 = ".55 gallons of water / plate";
        change2 = "Can't be recycled :-(";
        change3 = "Biogrades in composting facility in 12 weeks, Toxic chemicals: Dioxins and Polystyrene";
        change4 = "Unknown contact https://www.gp.com/about-us/media-contacts";
        change5 = "http://www.shopfoodex.com/chinet-classic-white-dinner-plates-count-p-27448.html";
    } else if (sampleItem.contains(category2)) {
        change1 = "test";
        change2 = "test1";
        change3 = "test2";
        change4 = "test3";
        change5 = "test4";
    } else if (sampleItem.contains(category3) ) {
        change1 = "test";
        change2 = "test1";
        change3 = "test2";
        change4 = "test3";
        change5 = "test4";
    } else {
        change1 = "test";
        change2 = "test1";
        change3 = "test2";
        change4 = "test3";
        change5 = "test4";
    }

    document.getElementById("water").innerHTML = change1;
    document.getElementById("recycle").innerHTML = change2;
    document.getElementById("environmental").innerHTML = change3;
    document.getElementById("transparency").innerHTML = change4;
    document.getElementById("alternatives").innerHTML = change5;
});

