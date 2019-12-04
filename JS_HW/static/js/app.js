
var tableData = data;
var tbody = d3.select("tbody")
​

tableData.forEach(function(ufo){
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key,value]){
        var cell = row.append("td").text(value);
    });
});
​

var button = d3.select("#filter-btn");
button.on("click", function(){
    var inputElement = d3.select(".form-control");
    var inputDate = inputElement.property("value");
    var filteredData = tableData.filter(ufo => ufo.datetime === inputDate);
    var tbody = d3.select("tbody")
    tbody.html("");

    filteredData.forEach(function(ufo){
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]){
            var cell = row.append("td").text(value);
        })
    })
}); 