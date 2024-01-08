function generateDetailsForPinnacles(firstPinnacleNumber, secondPinnacleNumber, thirdPinnacleNumber, fourthPinnacleNumber) {
    // Function to generate "hi" based on pinnacle number
    function generateDetailsForFirstPinnacleNumber() {
        switch (firstPinnacleNumber) {
            case 1:
                return "<p>Hi for number 1</p>";
            case 2:
                return "<p>Hi for number 2 first pinnacle</p>";
            case 3:
                return "<p>Hi for number 3</p>";
            case 4:
                return "<p>Hi for number 4</p>";
            case 5:
                return "<p>Hi for number 5</p>";
            case 6:
                return "<p>Hi for number 6</p>";
            case 7:
                return "<p>Hi for number 7</p>";
            case 8:
                return "<p>Hi for number 8</p>";
            case 9:
                return "<p>Hi for number 9</p>";
            default:
                return "<p>Unavailable</p>";
        }

    }

    function generateDetailsForSecondPinnacleNumber() {
        switch (secondPinnacleNumber) {
            case 1:
                return "<p>Hi for number 1</p>";
            case 2:
                return "<p>Hi for number 2</p>";
            case 3:
                return "<p>Hi for number 3</p>";
            case 4:
                return "<p>Hi for number 4</p>";
            case 5:
                return "<p>Hi for number 5</p>";
            case 6:
                return "<p>Hi for number 6</p>";
            case 7:
                return "<p>Hi for number 7</p>";
            case 8:
                return "<p>Hi for number 8</p>";
            case 9:
                return "<p>Hi for number 9 Second Pinnacle</p>";
            default:
                return "<p>Unavailable</p>";
        }

    }

    function generateDetailsForThirdPinnacleNumber() {
        switch (thirdPinnacleNumber) {
            case 1:
                return "<p>Hi for number 1</p>";
            case 2:
                return "<p>Hi for number 2 Third Pinnacle</p>";
            case 3:
                return "<p>Hi for number 3</p>";
            case 4:
                return "<p>Hi for number 4</p>";
            case 5:
                return "<p>Hi for number 5</p>";
            case 6:
                return "<p>Hi for number 6</p>";
            case 7:
                return "<p>Hi for number 7</p>";
            case 8:
                return "<p>Hi for number 8</p>";
            case 9:
                return "<p>Hi for number 9</p>";
            default:
                return "<p>Unavailable</p>";
        }

    }

    function generateDetailsForFourthPinnacleNumber() {
        switch (fourthPinnacleNumber) {
            case 1:
                return "<p>Hi for number 1</p>";
            case 2:
                return "<p>Hi for number 2</p>";
            case 3:
                return "<p>Hi for number 3</p>";
            case 4:
                return "<p>Hi for number 4</p>";
            case 5:
                return "<p>Hi for number 5</p>";
            case 6:
                return "<p>Hi for number 6</p>";
            case 7:
                return "<p>Hi for number 7</p>";
            case 8:
                return "<p>Hi for number 8</p>";
            case 9:
                return "<p>Hi for number 9 Fourth Pinnacle</p>";
            default:
                return "<p>Unavailable</p>";
        }

    }





    // Generate "hi" for each pinnacle number
    detailsForFirstPinnacle = generateDetailsForFirstPinnacleNumber(firstPinnacleNumber);
    detailsForSecondPinnacle = generateDetailsForSecondPinnacleNumber(secondPinnacleNumber);
    detailsForThirdPinnacle = generateDetailsForThirdPinnacleNumber(thirdPinnacleNumber);
    detailsForFourthPinnacle = generateDetailsForFourthPinnacleNumber(fourthPinnacleNumber);

}