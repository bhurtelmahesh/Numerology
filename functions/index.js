
  // Function to handle form submission
  function submitForm() {
    var year = parseInt(document.getElementById("year").value,10);
    var month = parseInt(document.getElementById("month").value,10);
    var day = parseInt(document.getElementById("day").value,10);

    console.log(day, month, year);
    console.log(day+month+year);
    
// Calculate life path number by adding up the digits
var lifePathNumber = calculateLifePathNumber(year+month+day);
console.log("Your Life Path Number: " + lifePathNumber);
    let birthdayNumber = day;
    console.log("Your Birthday Number: " + birthdayNumber);

    // Function to calculate the sum of the digits of a number
    function calculateLifePathNumber(number) {
        if (number === 11 || number === 22 || number === 33) {
            // Return master numbers 11, 22, 33 as is
            return number;
        } else {
            var sum = 0;
            while (number > 0) {
                sum += number % 10;
                number = Math.floor(number / 10);
            }
    
            // If the sum is greater than 9, recursively calculate the life path number
            if (sum > 9) {
                return calculateLifePathNumber(sum);
            } else {
                return sum;
            }
        }
    }

    function reduceToSingle(number) {
        var sum = 0;
        while (number > 0) {
            sum += number % 10;
            number = Math.floor(number / 10);
        }
    
        // If the sum is greater than 9, recursively calculate the life path number
        if (sum > 9) {
            return reduceToSingle(sum);
        } else {
            return sum;
        }
    }

    let SUM = reduceToSingle(day+month+year);
    console.log("SUM: "+SUM);
    function calculatePinnacleYear(SUM) {
        // Define the starting age for the first pinnacle
        var startingAge = 0;
    
        // Define the age ranges for each pinnacle based on life path number
        var ageRanges = [];
    
        switch (SUM) {
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
        // console.log("Life Path Number " + lifePathNumber + ":");
    
        for (var i = 0; i < ageRanges.length; i++) {
            console.log("The Ages of Your " + getPinnacleOrdinal(i + 1) + " Pinnacle: " +
                startingAge + " to " + ageRanges[i]);
            startingAge = ageRanges[i] + 1;
        }
    
        // Output the age range for the fourth pinnacle
        // console.log("The Ages of Your 4th Pinnacle: " + startingAge + "+");
    }
    
    //Helper function to get the ordinal suffix for the pinnacle
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

    calculatePinnacleYear(SUM);


    function getPinnacleAges(SUM) {
        // Define the starting age for the first pinnacle
        var startingAge = 0;
    
        // Define the age ranges for each pinnacle based on life path number
        var ageRanges = [];
    
        switch (SUM) {
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
    
        // Create an array of objects representing age periods for each pinnacle
        var pinnacleAges = [];
        for (var i = 0; i < ageRanges.length; i++) {
            pinnacleAges.push({
                pinnacle: i + 1,
                agePeriod: startingAge + " - " + ageRanges[i]
            });
            startingAge = ageRanges[i] + 1;
        }
    
        // Add the age range for the fourth pinnacle
        pinnacleAges.push({
            pinnacle: 4,
            agePeriod: startingAge + "+"
        });
    
        return pinnacleAges;
    }

    let pinnacleAgePeriod = pinnacleAges.map(function (pinnacle) {
        return ("Your " + getPinnacleOrdinal(pinnacle.pinnacle) + " Pinnacle Age Period: " + pinnacle.agePeriod);
    });


    //Calculate Pinnacle numbers:
    let firstPinnacleNumber = reduceToSingle(month + day);
    
    let secondPinnacleNumber = reduceToSingle(day + year);
    let thirdPinnacleNumber = reduceToSingle(firstPinnacleNumber + secondPinnacleNumber);
    let fourthPinnacleNumber = reduceToSingle(month + year);
    console.log(pinnacleAgePeriod);
    console.log("Your first pinnacle number is: " + firstPinnacleNumber);
    console.log("Your second pinnacle number is: " + secondPinnacleNumber);
    console.log("Your third pinnacle number is: " + thirdPinnacleNumber);
    console.log("Your fourth pinnacle number is: " + fourthPinnacleNumber);

    //Calculate Pinnacle numbers:
    let firstChallengeNumber = reduceToSingle(Math.abs(day-month));
    let secondChallengeNumber = reduceToSingle(Math.abs(year-day));
    let thirdChallengeNumber = reduceToSingle(Math.abs(firstChallengeNumber - secondChallengeNumber));
    let fourthChallengeNumber = reduceToSingle(Math.abs(year-month));
    console.log("Your first challenge number is: " + firstChallengeNumber);
    console.log("Your second challenge number is: " + secondChallengeNumber);
    console.log("Your third challenge number is: " + thirdChallengeNumber);
    console.log("Your fourth challenge number is: " + fourthChallengeNumber);

    function generateDetailsForLifePath(){

    }
    function generateDetailsForLifeBirthday(){

    }
    function generateDetailsForPinnacles(){

    }
    function generateDetailsForChallenges(){

    }


    let generativeArea = document.getElementById("generativeArea");
    generativeArea.innerHTML = `
    <h4 class="birthdayNumber">Your Birthday Number is ${birthdayNumber} 
        <br>
        <p>hi</p>
    </h4>
    <h4 class="lifePathNumber">Your Life Path Number is ${lifePathNumber} 
        <br>
        <p>hello</p>
    </h4>
    <h4 class="pinnacleAgePeriod"> Your Pinnacle age period: <br>
        <p>${pinnacleAgePeriod}<p>
    </h4>
    <h4 class="firstPinnacleNumber">Your 1st Pinnacle Number is ${firstPinnacleNumber} <br> <p> </p>
    </h4>
    <h4 class="secondPinnacleNumber">Your 2nd Pinnacle Number is ${secondPinnacleNumber} <br> <p> </p>
    </h4>
    <h4 class="thirdPinnacleNumber">Your 3rd Pinnacle Number is ${thirdPinnacleNumber} <br> <p> </p>
    </h4>
    <h4 class="fourthPinnacleNumber">Your 4th Pinnacle Number is ${fourthPinnacleNumber} <br> <p> </p>
    </h4>
    <h4 class="firstChallengeNumber">Your 1st Challenge Number is ${firstChallengeNumber} <br> <p> </p>
    </h4>
    <h4 class="secondChallengeNumber">Your 2nd Challenge Number is ${secondChallengeNumber} <br> <p> </p>
    </h4>
    <h4 class="thirdChallengeNumber">Your 3rd Challenge Number is ${thirdChallengeNumber} <br> <p> </p>
    </h4>
    <h4 class="fourthChallengeNumber">Your 4th Challenge Number is ${fourthChallengeNumber} <br> <p> </p>
    </h4>
    `;
}