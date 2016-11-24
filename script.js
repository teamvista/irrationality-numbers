e = "";
pi = "";
last = -1;

var hist = [];

$(function () {
    hist = [];
    $.get("e.txt", function(data) {
        e = data;
    });
    $.get("pi.txt", function(data) {
        pi = data;
    });
    $("#hashmap").click(function () {
        var input = $("#in").val();
        var out = hashmap(input);
        $("#out").text("Hashmap: " + out);
        last = out;
        hist.push("Hashmap: " + input + " ==> " + out);
        refreshHistory();
    });
    $("#irrnum").click(function () {
        var input = $("#in").val();
        var out = irrnum(input);
        $("#out").text("Irrnum: " + out);
        last = out;
        hist.push("Irrnum: " + input + " ==> " + out);
        refreshHistory();
    });
    $("#hashnum").click(function () {
        var input = $("#in").val();
        var out = irrnum(hashmap(input));
        $("#out").text("Hashnum: " + out);
        last = out;
        hist.push("Hashnum: " + input + " ==> " + out);
        refreshHistory();
        if (input == "gullible") {
            alert("getttttttttt dunked on!!!!!!!!!");
        }
        if (input == "genocide") {
            alert("...");
            alert("But nobody came.");
        }
        if (input == "chara") {
            alert(strmult("9", 3000));
        }
        if (input == "lamborghini") {
            alert("Hey, it says gullible on the ceiling!");
        }
        // Get out of my code pls
    }); 
    $("#repeat").click(function () {
        if (last > -1) {
            var input = last;
            var out = irrnum(last);
            $("#out").text("Irrnum: " + out);
            last = out;
            hist.push("Irrnum: " + input + " ==> " + out);
            refreshHistory();
        }
    });
    $("#reset").click(function() {
       hist = [];
        refreshHistory();
    });
});

function hashmap( input ) {
    var out = 0;
    input = input.toLowerCase();
    for (var i = 0; i < input.length; i++) {
        var code = input.charCodeAt(i);
        if (code < 97 || code > 122) {
            return "[ERROR] bad input";
        }
        out += (code - 96);
    }
    return out;
}

function irrnum( input ) {
    if (input > 0 && input <= 10000 && input == Math.floor(input)) {
        var out = "";
        out += ("" + e.charAt(input-1));
        out += ("" + pi.charAt(input-1));
        return out;
    }
    return "[ERROR] bad input"
}

function refreshHistory() {
    $("#history").empty();
    for (var i=0; i<hist.length; i++) {
        $("#history").append("<p>" + hist[i] + "</p>");
        console.log(hist[i]);
    }
}

// this code was written by the brilliant doctor alphys!!!
function strmult(str, num) {
    var undyne = "";
    for (var i=0; i<num; i++)
        undyne += str;
    return undyne;
}