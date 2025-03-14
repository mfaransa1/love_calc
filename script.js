// Function to get an object by ID
function gObj(B) {
    return document.getElementById(B);
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
    return A.trim();
}

// Function to calculate a numerical value from a string based on character position
function getNum(name) {
    let outputNum = 0;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    for (let i = 0; i < name.length; i++) {
        let charValue = name.charCodeAt(i);
        let positionValue = alphabet.indexOf(name[i]) + 1;
        outputNum += charValue * positionValue;
    }
    
    return outputNum;
}

// Function to add random variation for dynamic results
function getRandomVariation() {
    return Math.floor(Math.random() * 10) + 1;
}

// Function to calculate bonus points based on matching letters in both names
function getMatchingLettersBonus(name1, name2) {
    let matches = 0;
    let name1Letters = new Set(name1.split(""));

    for (let letter of name2) {
        if (name1Letters.has(letter)) {
            matches++;
        }
    }

    return matches * 3; // Each matching letter adds 3% to the score
}

// Main calculation function
function calc() {
    let loveSound = gObj("loveSound");
    loveSound.play();  // Play sound effect

    let cnameone = trimAll(gObj("cnameone").value);
    let cnametwo = trimAll(gObj("cnametwo").value);

    if (cnameone.length < 1) {
        showquickmsg("<h1>Please Enter Your Name</h1>", true);
        return;
    }
    if (cnametwo.length < 1) {
        showquickmsg("<h1>Please Enter Your Crush's Name</h1>", true);
        return;
    }

    cnameone = cnameone.toLowerCase();
    cnametwo = cnametwo.toLowerCase();

    // Special case: If "Freezer" is one of the names, love score is always 100%
    if (cnameone === "freezer" || cnametwo === "freezer") {
        finalScore = 100;
        message = "🔥 Freezer's charm is undeniable! True love! 💯❤️";
    } else {
        let baseScore = (getNum(cnameone) * getNum(cnametwo)) % 100;
        let randomVariation = getRandomVariation();
        let matchingBonus = getMatchingLettersBonus(cnameone, cnametwo);
    
        finalScore = Math.min(baseScore + randomVariation + matchingBonus, 100); // Cap at 100%
    
        if (finalScore > 85) {
            message = "A Match Made in Heaven! ❤️ Soulmates!";
        } else if (finalScore > 70) {
            message = "A strong and beautiful connection! 💕";
        } else if (finalScore > 50) {
            message = "Potential is there, but it needs effort. 😍";
        } else if (finalScore > 30) {
            message = "You two could be good friends! 😊";
        } else {
            message = "Love is unpredictable... Maybe try again? 😬";
        }
    }

    finalScore = `<h1 class='animated-text'><i><font color=green><b>${cnameone} & ${cnametwo}</b></font><br>
    Your Love Percentage is<br>
    <font color=rgba(23, 235, 23, 0.904)><b>${finalScore}%</b></font></i><br><br>${message}</h1>`;

    showquickmsg(finalScore, false);
}
