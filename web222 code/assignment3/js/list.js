// Data for the "HTML Lists" Page

var fruits = ["Apples", "Oranges", "Pears", "Grapes", "Pineapples", "Mangos"];

var directory = [
    { type: "file", name: "file1.txt" },
    { type: "file", name: "file2.txt" },
    { type: "directory", name: "HTML Files", files: [{ type: "file", name: "file1.html" }, { type: "file", name: "file2.html" }] },
    { type: "file", name: "file3.txt" },
    { type: "directory", name: "JavaScript Files", files: [{ type: "file", name: "file1.js" }, { type: "file", name: "file2.js" }, { type: "file", name: "file3.js" }] }
];

// write to the container after the window has completely loaded. 
window.onload = function() {
    var containerOne = document.querySelector("#list1");

    var listContent1 = "<ol>";

    for (var i = 0; i < fruits.length; i++) {
        listContent1 += "<li>" + fruits[i] + "</li>"
    }

    listContent1 += "</ol>";

    containerOne.innerHTML = listContent1;

    var containerTwo = document.querySelector("#list2");
    var listContent2 = "<ul>";
    for (var i = 0; i < directory.length; i++) {
        listContent2 += "<li>";
        if (directory[i].type == "file") {
            listContent2 += directory[i].name;
        } else if (directory[i].type == "directory") {
            listContent2 += directory[i].name + "<ul>";
            for (var j = 0; j < directory[i].files.length; j++) {
                listContent2 += "<li>" + directory[i].files[j].name + "</li>";
            }
            listContent2 += "</ul>";
        }
        listContent2 += "</li>"
    }
    listContent2 += "</ul>";
    containerTwo.innerHTML = listContent2;
}