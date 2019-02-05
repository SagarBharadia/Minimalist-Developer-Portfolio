let portfolioItems = document.getElementsByClassName("portfolio-item");
function resetPortfolioFilter() {
    for(var i=0;i<portfolioItems.length;i++) {
        portfolioItems[i].style.opacity = "1.0";
    }
}
function filterPortfolioItems(el) {
    var searchTag = el.getAttribute("data-searchType");
    resetPortfolioFilter();
    for(var i=0;i<portfolioItems.length;i++) {
        if(!portfolioItems[i].getAttribute("data-tags").includes(searchTag)) {
            portfolioItems[i].style.opacity = "0.65";
        }
    }
}
function showLabel(el) {
    let labelID = el.getAttribute("name") + "-label";
    document.getElementById(labelID).style.opacity = "1.0";
}
function hideLabel(el) {
    let labelID = el.getAttribute("name") + "-label";
    document.getElementById(labelID).style.opacity = "0";
}