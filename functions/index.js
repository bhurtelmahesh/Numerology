let detailsForFirstPinnacle, detailsForSecondPinnacle, detailsForThirdPinnacle, detailsForFourthPinnacle;
let combinedDetails;

let detailsForFirstChallenge, detailsForSecondChallenge, detailsForThirdChallenge, detailsForFourthChallenge
let combinedDetailsForChallenges

// Function to handle form submission
function submitForm() {
    var year = parseInt(document.getElementById("year").value, 10);
    var month = parseInt(document.getElementById("month").value, 10);
    var day = parseInt(document.getElementById("day").value, 10);


    // Calculate life path number by adding up the digits
    var lifePathNumber = calculateLifePathNumber(addDigit(year) + addDigit(month) + addDigit(day));




    let birthdayNumber = day;

    // Function to calculate the sum of the digits of a number
    function calculateLifePathNumber(number) {
        if (number === 11 | number === 22 | number === 33) {
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

    function getLifePathDetails(lifePathNumber) {
        // Define details for each life path number, including master numbers
        switch (lifePathNumber) {
            case 1:
                return "<p>If your Life Path Number is 1, trust your instincts and value yourself more. Instead of seeking approval from others, validate your own worth, stamp your own parking ticket in the journey of life.<br><br>It's common to feel influenced by external factors such as people, work, and commitments. As a Life Path Number 1, take control of situations and your life. Develop decisiveness and assertiveness. Stand firm when you believe you're right and express your opinions diplomatically. Manage your temper, especially if your Life Path Number is 19, reducing to 1 (1 + 9 = 10 and 1 + 0 = 1). Embrace contentment with your current place in life without yearning for perceived greener pastures.<br><br>Infuse creativity into everything you undertake. If your Life Path Number is 1, an ideal career involves innovation and research, where unconventional thinking is valued. Enhance your executive skills, take up leadership roles, and bring forth new ideas. Cultivate your inherent mental agility, quick thinking, and business acumen. Keep your innovative ideas private initially to protect them from premature criticism.</p>";
            case 2:
                return "<p>If you have a Life Path Number of 2, focus on developing your powers of persuasion. Choose a diplomatic and tactful approach over blunt observations. Before speaking, gather facts, read between the lines, and make decisions thoughtfully. Enhance your compromise skills, seeking win-win solutions, and be more sensitive to others' needs. Always communicate truthfully without embellishing facts. Find a balance between asserting yourself and defending against constructive criticism. Learn from critiques without taking everything personally. In your personal life, embrace adaptability and the joy of meaningful connections. Don't hesitate to seek help and appreciate the value of special friendships or partnerships.<br><br>In your ideal career, as a Life Path Number 2, consider roles involving the public, education, machinery, or equipment. Inspire others, excel in detailed work, research, collection, medicine, metaphysics, or religion. Embrace a lifelong learning approach, continuously gathering knowledge, and willingly share your expertise through full cooperation with others.</p>";
            case 3:
                return "<p>If your Life Path Number is 3, prioritize the development of self-confidence and belief in yourself. Overcome shyness as it may hinder meaningful relationships. Stay informed about current events for engaging in small talk. Develop a set of questions to draw information from others rather than answer their inquiries. When put on the spot, use precise words to express your feelings. You can even adopt the art of flirting! Maintain an open and welcoming appearance.<br><br>Enhance your enjoyment of life by embracing your emotions and fostering optimism. See the glass as half full and recognize your special and charming qualities. Be less critical of others and focus on observing their good traits.<br><br>Excel in work involving feelings or emotions. As a Life Path Number 3, express artistic or musical talents through creative endeavors. Your ideal career may lie in the artistic, musical, literary, or entertainment fields. Despite having multiple interests, concentrate on one thing at a time and strive for excellence. Success follows when you learn to focus instead of scattering your forces.</p>";
            case 4:
                return "<p>If your Life Path Number is 4, emphasize steadfastness and loyalty in relationships. Keep commitments, meet deadlines, and establish boundaries. Be the architect of your own life, paying attention to your inner moods and rhythms, acknowledging that sometimes your tide is in, and other times it's out.<br><br>Recognize the value of material items as a Life Path Number 4. Purchase what you need, not just what you want. Practice frugality, spending wisely without being cheap or extravagant.<br><br>Acknowledge that knowledge is essential, even if studying may not be your favorite activity. Success for a Life Path Number 4 results from planning and hard work. Develop the tenacity and follow-through required to complete projects. Adopt practical habits, sticking to a schedule for efficient task management. Small actions accumulate into significant accomplishments, so address them promptly instead of procrastinating.<br><br> If your Life Path Number is 4, your ideal career may involve developing projects from inception to completion, translating plans into concrete forms. Thrive in detail-oriented professions such as event planning, project management, movie or television production, document handling, or any field involving rules and regulations. </p>";
            case 5:
                return "<p>If you have a Life Path Number of 5, embrace change and diversity as integral parts of life. Cultivate an interest in current events and foster an open-minded approach. Be flexible, adapt when necessary, and be willing to take risks. Understand that freedom often comes with a price, requiring you to let go of certain aspects of your life.<br><br>In matters of romance, trust your intuition, and remember to inject more fun into your life occasionally.<br><br>As a Life Path Number 5, prioritize responsibility, keeping commitments, and completing tasks sequentially. Opportunities will arise, and your resourcefulness will play a key role in seizing them. Develop your sales skills by not only posing questions but also being ready to answer them.<br><br>If your Life Path Number is 5, your ideal career may involve activities that defy routine, thriving in fields like marketing, advertising, sales, entertainment, or anything that offers constant movement and variety.</p>";
            case 6:
                return "<p>If your Life Path Number is 6, take on more responsibility for household chores and efficiently manage your to-do list. Extend support at work, even beyond regular hours, without expecting extra pay.Recognize that people of all ages rely on you.Avoid selfishness, and express love to those dear to you. When caring for yourself, pay attention to your attire and overall appearance. <br> Understand that while you have your own approach, others may choose different paths.Avoid irrationality and stubbornness, embracing a more open attitude towards life. <br> <br> In your community role, volunteer and offer advice when sought(not imposing it).Act as a harmonizer, smoothing conflicts when others falter. <br> <br> If your Life Path Number is 6, your ideal career involves making others' lives more comfortable, luxurious, or beautiful. Thrive in professions like counseling, working with animals and children, art, interior design, or catering.</p>";
            case 7:
                return "<p>If your Life Path Number is 7, you should delve into the metaphysical mysteries of life and strive to live at a higher vibration. Instead of taking things at face value, ask questions to uncover the causes behind the results. Once you gain more wisdom, joyfully share it with others.<br><br> In your personal life, learn to be comfortable being alone without feeling lonely. Take time to discover the beauty of nature and enjoy quiet nights at home. Above all, don't forget to take moments for rest.<br><br>Regarding work, refine your verbal and written communication skills, and invest time in mastering technology. The ideal career for you with a Life Path Number 7 involves jobs requiring analysis and research, especially in technical fields such as nutrition, computers, engineering, religion, metaphysics, and spiritual studies. You might also find interest in investigative reporting or detective work.<br><br> A word to the wise: Practice moderation in all things and be mindful of avoiding excess.</p>";
            case 8:
                return "<p>If your Life Path Number is 8, strive for more balance in every aspect of your life. Prioritize your health by considering gym membership or regular walks, and pay attention to your diet and exercise routines. Maintain equilibrium in your budget and focus on your financial well-being.<br><br>Resist the urge to rush through tasks; take the time necessary to ensure success. Develop your personal performance skills while also delegating responsibilities to others. Cultivate the ability to manage money, power, and success, as all three can be yours if you embrace them.<br><br>Life Path Number 8 individuals can attain significant success by acting fearlessly and boldly. Showcase your power and authority to earn the respect of others. Your ideal career might involve oversight, organization, teaching, coaching, or financial management. Industries such as health, sports, real estate, and property management could be particularly appealing.</p>";
            case 9:
                return "<p>Individuals with a Life Path Number of 9 are encouraged to embrace a humanitarian spirit and dedicate themselves to serving others. Be a guiding light of inspiration, radiating kindness and compassion to help others navigate their life paths. Uphold the golden rule: Do unto others as you would have them do unto you. Give generously without keeping score, and be open to receiving without forgetting. <br> <br> Cultivate a keen interest in global affairs, exploring diverse cultures, customs, and religions. Devote time to nurturing your love for the arts, encompassing music, sculpture, painting, theater, and literature. <br> <br> If your Life Path Number is 9, your ideal career may involve making a positive impact on others as a teacher, therapist, nurse, doctor, or lawyer. Alternatively, you might find fulfillment in careers related to the arts, television, film, travel, business, religion, or philanthropy.When it comes to work, focus on grand, innovative ideas, and delegate the finer details to others. </p>";
            case 11:
                return "<p><strong>Life Path 11 (Master Number)</strong>  is a higher vibration of the Life Path Number 2. Many numerologists believe you came to Earth having few, if any, lessons to learn. Although you have incredible potential, your special path in life may demand more of you along the way. Individuals with a Life Path Number of 11 possess a special connection to higher spiritual realms. As a master number, you are an intuitive and visionary individual with a profound sense of insight. Your journey involves spiritual awakening, enlightenment, and the pursuit of a higher purpose.<br><br>You’re happiest when inspiring and helping others, so become a messenger and share your boundless energy, idealism, and philosophy. Accept others as they are, but inspire them with your good deeds as you take the high road in life. Embrace your unique gifts of intuition and creativity, allowing them to guide you in your personal and spiritual growth. Strive for balance between the spiritual and material aspects of life, harnessing your abilities to inspire and uplift others. </p>";
            case 22:
                return "<p><strong>Life Path 22 (Master Number):</strong> A master number, Life Path 22 is considered a higher vibration of the Life Path Number 4. Individuals with a Life Path 22 are believed to possess extraordinary potential and a unique destiny. Your journey involves building and manifesting grand visions, turning dreams into reality with practicality and precision.<br><br>As a master builder and visionary, you have the capability to achieve great things on both the material and spiritual planes. Your path is one of mastering the material world through the application of your exceptional organizational and management skills.<br><br>Utilize your analytical mind and practical approach to bring about tangible, positive changes in the world. Embrace your role as a leader and problem solver, contributing to the greater good with your ambitious and transformative projects. Strive for a harmonious balance between the spiritual and material realms, recognizing the impact of your actions on a broader scale.</p>";
            case 33:
                return "<p><strong>Life Path 33 (Master Number):</strong> The Master Teacher, focus on compassion and healing.</p>";

            default:
                return "<p><strong>Life Path 33 (Master Number):</strong> Life Path 33 is regarded as the highest master number, combining the energies of 11 and 22. As a result, individuals with a Life Path 33 are considered spiritual teachers, healers, and enlightened beings. Your journey involves a profound commitment to compassion, service, and uplifting humanity.<br><br>Possessing the qualities of both master numbers, you are a beacon of love, wisdom, and healing energy. Your purpose is to bring about spiritual awareness, inspiring others with your profound insights and nurturing nature.<br><br>Embrace your role as a healer and guide, channeling your immense empathy and intuition to support those in need. Your altruistic and selfless nature should be expressed through acts of kindness, fostering a sense of unity and love. Strive to create a harmonious balance between the spiritual and material aspects of life, using your unique gifts to make a positive impact on the world.</p>";
        }
    }

    function addDigit(number) {
        var sum = 0;
        while (number > 0) {
            sum += number % 10;
            number = Math.floor(number / 10);
        }
        return sum;
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

    function getBirthdayDetails(birthdayNumber) {
        // Define details for each birthday number
        switch (birthdayNumber) {
            case 1:
                return "<p>Arriving on this day, impatience fuels your drive to be first. A natural leader, you blaze trails with ingenious ideas. While you may delegate, true happiness lies in steering the ship. You have a knack for infusing old things with a unique twist, seeking recognition for your innovative thinking. Though perceived as aloof, be mindful of your tone when met with advice.<br><br>In personal pursuits, you thrive outdoors, relishing sunlight and fresh air. In matters of the heart, charm and affability are your forte, accustomed to success.Honest and strong - willed, your decisive nature allowsfor quick thinking and adaptability. <br><br> Notable individuals born on the 1st include Princess Diana, Justin Bieber, Dr.Phil, Harry Styles, Heidi Klum, and Zendaya. </p>";
            case 2:
                return "<p>As an individual born on the 2nd, you excel at juggling multiple responsibilities effortlessly. Fueled by ambition, you remain grounded and humble amid your numerous accomplishments. Your innate knack for diplomacy and collaborative efforts positions you as a valuable team player, and your true joy is found in cooperative endeavors. <br><br> Despite a hectic schedule, you actively pursue balance and harmony in your life. Relationships hold a special place in your heart, and you carefully choose companions, valuing the importance of family and loved ones. Creating and maintaining a beautiful home is a source of joy for you. <br><br> In matters of emotion, you tend to take things to heart. Instead of underestimating yourself, recognize that your authentic self inspires others. <br><br> Famous figures born on the 2nd, such as Dwayne “The Rock” Johnson, singer Jon Bon Jovi, ice skater Johnny Weir, singer Shakira, talk show host Kelly Ripa, actor Salma Hayek, and singer Britney Spears, share your birthdate, adding to the collective strength of individuals born on this day. </p>";
            case 3:
                return "<p>As someone born on the 3rd, you seek a stage to showcase your creative abilities. You’re a consummate entertainer who possesses the gift of gab and a genuine ability to capture an audience. Because of your magnetic personality, you’re very popular and sought after by others, especially in a romantic way. <br><br> You keep an intense social calendar. Although you enjoy being the center of attention, others may find you elusive or hard to get close to. At times you don’t fully understand yourself; take the time to slow down, rest, and reflect. <br><br> You lead a charmed life and seem to receive good fortune easily. Rarely upset or melancholy, you quickly snap out of it when you feel stressed or blue. You’re also able to deal with problems handily because you’ve discovered the easiest route is to admit when you’re mistaken. <br><br> Famous people born on the 3rd: television personality Martha Stewart, journalist Anderson Cooper, comedian Eddie Murphy, singer Gwen Stefani, civil rights attorney Amal Clooney, and actor Tom Cruise.</p>";
            case 4:
                return "<p>A day for practicality and building a solid foundation.</p>";
            case 5:
                return "<p>Embrace change and explore new possibilities today.</p>";
            case 6:
                return "<p>Focus on harmony, family, and nurturing relationships.</p>";
            case 7:
                return "<p>A day for introspection, spiritual pursuits, and inner growth.</p>";
            case 8:
                return "<p>Focus on material goals and achievements today.</p>";
            case 9:
                return "<p>A day for compassion, humanitarian efforts, and helping others.</p>";
            case 10:
                return "<p>A day for new beginnings and taking the lead in your endeavors.</p>";
            case 11:
                return "<p>Embrace spiritual insights and intuition today.</p>";
            case 12:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 13:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 14:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 15:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 16:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 17:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 18:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 19:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 20:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 21:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 22:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 23:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 24:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 25:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 26:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 27:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 28:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 29:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 30:
                return "<p>Balance practicality and creativity in your actions.</p>";
            case 31:
                return "<p>Details for Birthday 31: Celebrate the completion of a cycle and look forward to new beginnings.</p>";
            default:
                return "<p>No details available for the given birthday number</p>";
        }
    }


    let SUM = reduceToSingle(day + month + year);

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


        for (var i = 0; i < ageRanges.length; i++) {
            startingAge = ageRanges[i] + 1;
        }
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

    let pinnacleAges = [];

    function getPinnacleAges(SUM) {
        // Define the starting age for the first pinnacle
        var startingAge = 0;

        // Declare the ageRanges variable outside the switch statement
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

    let pinnacleAgePeriod = getPinnacleAges(SUM).map(function(pinnacle) {
        return (
            "Your " +
            getPinnacleOrdinal(pinnacle.pinnacle) +
            " Pinnacle Age Period: " +
            pinnacle.agePeriod
        );
    }).join('<br>');

    // Now pinnacleAgePeriod is a string
    //Calculate Pinnacle numbers:
    let firstPinnacleNumber = reduceToSingle(month + day);
    let secondPinnacleNumber = reduceToSingle(day + year);
    let thirdPinnacleNumber = reduceToSingle(firstPinnacleNumber + secondPinnacleNumber);
    let fourthPinnacleNumber = reduceToSingle(month + year);

    //Calculate Challenge numbers:
    let firstChallengeNumber = reduceToSingle(Math.abs(day - month));
    let secondChallengeNumber = reduceToSingle(Math.abs(year - day));
    let thirdChallengeNumber = reduceToSingle(Math.abs(firstChallengeNumber - secondChallengeNumber));
    let fourthChallengeNumber = reduceToSingle(Math.abs(year - month));

    generateDetailsForPinnacles(firstPinnacleNumber, secondPinnacleNumber, thirdPinnacleNumber, fourthPinnacleNumber);
    generateDetailsForChallenges(firstChallengeNumber, secondChallengeNumber, thirdChallengeNumber, fourthChallengeNumber);

    function generateDetailsForPinnacles(firstPinnacleNumber, secondPinnacleNumber, thirdPinnacleNumber, fourthPinnacleNumber) {
        // Function to generate "hi" based on pinnacle number
        function generateDetailsForNumber(pinnacleNumber) {
            switch (pinnacleNumber) {
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
                    return "<p>Hi for number 9</p>";
                default:
                    return "<p>Unavailable</p>";
            }
        }

        // Generate "hi" for each pinnacle number
        detailsForFirstPinnacle = generateDetailsForNumber(firstPinnacleNumber);
        detailsForSecondPinnacle = generateDetailsForNumber(secondPinnacleNumber);
        detailsForThirdPinnacle = generateDetailsForNumber(thirdPinnacleNumber);
        detailsForFourthPinnacle = generateDetailsForNumber(fourthPinnacleNumber);

        // combinedDetails = `${detailsForFirstPinnacle}${detailsForSecondPinnacle}${detailsForThirdPinnacle}${detailsForFourthPinnacle}`;
    }


    function generateDetailsForChallenges(firstChallengeNumber, secondChallengeNumber, thirdChallengeNumber, fourthChallengeNumber) {
        // Function to generate details based on challenge number
        function generateDetailsForNumber(challengeNumber) {
            switch (challengeNumber) {
                case 0:
                    return "<p>Details for Challenge 0</p>";
                case 1:
                    return "<p>Details for Challenge 1</p>";
                case 2:
                    return "<p>Details for Challenge 2</p>";
                case 3:
                    return "<p>Details for Challenge 3</p>";
                case 4:
                    return "<p>Details for Challenge 4</p>";
                case 5:
                    return "<p>Details for Challenge 5</p>";
                case 6:
                    return "<p>Details for Challenge 6</p>";
                case 7:
                    return "<p>Details for Challenge 7</p>";
                case 8:
                    return "<p>Details for Challenge 8</p>";
                case 9:
                    return "<p>Details for Challenge 9</p>";
                default:
                    return "<p>Unavailable</p>";
            }
        }

        // Generate details for each challenge number
        detailsForFirstChallenge = generateDetailsForNumber(firstChallengeNumber);
        detailsForSecondChallenge = generateDetailsForNumber(secondChallengeNumber);
        detailsForThirdChallenge = generateDetailsForNumber(thirdChallengeNumber);
        detailsForFourthChallenge = generateDetailsForNumber(fourthChallengeNumber);

        // combinedDetailsForChallenges = `${detailsForFirstChallenge}${detailsForSecondChallenge}${detailsForThirdChallenge}${detailsForFourthChallenge}`;
    }


    let generativeArea = document.getElementById("generativeArea");
    generativeArea.innerHTML = `
    <h4 class="birthdayNumber">Your Birthday Number is ${birthdayNumber} 
        <br>
        <p>${getBirthdayDetails(birthdayNumber)}</p>
    </h4>
    <h4 class="lifePathNumber">Your Life Path Number is ${lifePathNumber} 
        <br>
        <p>${getLifePathDetails(lifePathNumber)}</p>
    </h4>
    <h4 class="pinnacleAgePeriod"> Your Pinnacle age period:
        <h5>${pinnacleAgePeriod}</h5>
    </h4>
    <h4 class="firstPinnacleNumber">Your 1st Pinnacle Number is ${firstPinnacleNumber} <br> <p>${detailsForFirstPinnacle} </p>
    </h4>
    <h4 class="secondPinnacleNumber">Your 2nd Pinnacle Number is ${secondPinnacleNumber} <br> <p> ${detailsForSecondPinnacle}</p>
    </h4>
    <h4 class="thirdPinnacleNumber">Your 3rd Pinnacle Number is ${thirdPinnacleNumber} <br> <p>${detailsForThirdPinnacle} </p>
    </h4>
    <h4 class="fourthPinnacleNumber">Your 4th Pinnacle Number is ${fourthPinnacleNumber} <br> <p> ${detailsForFourthPinnacle}</p>
    </h4>
    <h4 class="firstChallengeNumber">Your 1st Challenge Number is ${firstChallengeNumber} <br> <p> ${detailsForFirstChallenge}</p>
    </h4>
    <h4 class="secondChallengeNumber">Your 2nd Challenge Number is ${secondChallengeNumber} <br> <p>${detailsForSecondChallenge} </p>
    </h4>
    <h4 class="thirdChallengeNumber">Your 3rd Challenge Number is ${thirdChallengeNumber} <br> <p> ${detailsForThirdChallenge}</p>
    </h4>
    <h4 class="fourthChallengeNumber">Your 4th Challenge Number is ${fourthChallengeNumber} <br> <p>${detailsForFourthChallenge} </p>
    </h4>
    `;
}