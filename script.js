// Function to get an object by ID or name
function gObj(B) {
    var A;
    if (document.all) {
        if (typeof B == "string") {
            return document.all(B);
        } else {
            return B.style;
        }
    }
    if (document.getElementById) {
        if (typeof B == "string") {
            return document.getElementById(B);
        } else {
            return B.style;
        }
    }
    return null;
}

// Function to display a message, optionally in red color
function showquickmsg(B, A) {
    if (A) {
        B = "<font color=red>" + B + "</font>";
    }
    gObj("coutput").innerHTML = B;
}

// Function to trim leading and trailing spaces from a string
function trimAll(A) {
    while (A.substring(0, 1) == " ") {
        A = A.substring(1, A.length);
    }
    while (A.substring(A.length - 1, A.length) == " ") {
        A = A.substring(0, A.length - 1);
    }
    return A;
}

// Function to calculate a numerical value from a string
function getNum(A) {
    outputNum = 0;
    for (i = 0; i < A.length; i++) {
        outputNum += A.charCodeAt(i);
    }
    return outputNum;
}

// Main calculation function for love percentage
function calc() {
    cnameone = trimAll(gObj("cnameone").value);
    cnametwo = trimAll(gObj("cnametwo").value);

    // Check if names are entered
    if (cnameone.length < 1) {
        showquickmsg("<h1>Please Enter Your Name</h1>", true);
        return;
    } else {
        if (cnametwo.length < 1) {
            showquickmsg("<h1>Please Enter your crush name</h1>", true);
            return;
        }
    }

    // Convert names to lowercase and calculate love percentage
    cnameone = cnameone.toLowerCase();
    cnametwo = cnametwo.toLowerCase();
    totalNum = getNum(cnameone) * getNum(cnametwo);
    finalScore = totalNum % 100;

    // Display the result message
    finalScore = "<h1><i><font color=green><b>" + cnameone + " & " + cnametwo + " </b></font><br>Your Love Percentage is<br><font color=rgba(23, 235, 23, 0.904)><b>" + finalScore + "%</b></font></i></h1>";
    showquickmsg(finalScore, false);
}
