function calculatePinnacleYear(lifePathNumber) {
    // Define the starting age for the first pinnacle
    var startingAge = 0;

    // Define the age ranges for each pinnacle based on life path number
    var ageRanges = [];

    switch (lifePathNumber) {
        case 1:
            ageRanges = [35, 44, 53];
            break;
        case 2:
            ageRanges = [34, 43, 52];
            break;
        case 3:
            ageRanges = [33, 42, 51];
            break;
        case 4:
            ageRanges = [32, 41, 50];
            break;
        case 5:
            ageRanges = [31, 40, 49];
            break;
        case 6:
            ageRanges = [30, 39, 48];
            break;
        case 7:
            ageRanges = [29, 38, 47];
            break;
        case 8:
            ageRanges = [28, 37, 46];
            break;
        case 9:
            ageRanges = [27, 36, 45];
            break;
        default:
            console.error("Invalid life path number");
            return;
    }

    // Output the information based on the life path number
    console.log("Life Path Number " + lifePathNumber + ":");

    for (var i = 0; i < ageRanges.length; i++) {
        console.log("The Ages of Your " + getPinnacleOrdinal(i + 1) + " Pinnacle: " +
            startingAge + " to " + ageRanges[i]);
        startingAge = ageRanges[i] + 1;
    }

    // Output the age range for the fourth pinnacle
    console.log("The Ages of Your Fourth Pinnacle: " + startingAge + "+");
}

// Helper function to get the ordinal suffix for the pinnacle
function getPinnacleOrdinal(number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    return number + suffix;
}



// Add more calls for other life path numbers as needed
