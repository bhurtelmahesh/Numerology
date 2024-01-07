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
                return "<p>Arriving on this day, impatience fuels your drive to be first. A natural leader, you blaze trails with ingenious ideas. While you may delegate, true happiness lies in steering the ship. You have a knack for infusing old things with a unique twist, seeking recognition for your innovative thinking. Though perceived as aloof, be mindful of your tone when met with advice.<br><br>In personal pursuits, you thrive outdoors, relishing sunlight and fresh air. In matters of the heart, charm and affability are your forte, accustomed to success. Honest and strong-willed, your decisive nature allowsfor quick thinking and adaptability.</p>";
            case 2:
                return "<p>As an individual born on the 2nd, you excel at juggling multiple responsibilities effortlessly. Fueled by ambition, you remain grounded and humble amid your numerous accomplishments. Your innate knack for diplomacy and collaborative efforts positions you as a valuable team player, and your true joy is found in cooperative endeavors. <br><br> Despite a hectic schedule, you actively pursue balance and harmony in your life. Relationships hold a special place in your heart, and you carefully choose companions, valuing the importance of family and loved ones. Creating and maintaining a beautiful home is a source of joy for you. <br><br> In matters of emotion, you tend to take things to heart. Instead of underestimating yourself, recognize that your authentic self inspires others. </p>";
            case 3:
                return "<p>As someone born on the 3rd, you seek a stage to showcase your creative abilities. You’re a consummate entertainer who possesses the gift of gab and a genuine ability to capture an audience. Because of your magnetic personality, you’re very popular and sought after by others, especially in a romantic way. <br><br> You keep an intense social calendar. Although you enjoy being the center of attention, others may find you elusive or hard to get close to. At times you don’t fully understand yourself; take the time to slow down, rest, and reflect. <br><br> You lead a charmed life and seem to receive good fortune easily. Rarely upset or melancholy, you quickly snap out of it when you feel stressed or blue. You’re also able to deal with problems handily because you’ve discovered the easiest route is to admit when you’re mistaken.</p>";
            case 4:
                return "<p>If you were born on the 4th, you exhibit a strong sense of pride, practicality, and methodical approaches in your actions; people rely on your dependability. Your resolute determination can be intimidating, especially to those lacking motivation. Your ability to form independent opinions and maintain clear preferences may make it challenging for you to alter your perspectives.<br><br>In matters of the heart, expressing your emotions and thoughts might pose a difficulty, creating a barrier for others trying to understand you. Despite appearing serious most of the time, you radiate warmth once people break through your reserved exterior.<br><br>Taking care of yourself involves incorporating more enjoyment and fun into your life, leading to increased happiness. Allocating 15 minutes daily for solitary moments is essential for rejuvenating your energy, as you have a tendency to require ample rest and relaxation.</p>";
            case 5:
                return "<p>If your birthdate falls on the 5th, you possess a distinctive perspective on life and crave the freedom to embrace spontaneity. Independence and self-sufficiency are key aspects of your personality. You're not hesitant to take calculated risks, adhering to the mantra that without risk, there's no reward. Your rebellious streak occasionally prompts you to challenge established norms and rules.<br><br>Your boundless enthusiasm and energy make you unstoppable. With your clever and optimistic nature and a magnetic personality, you become an engaging companion, even though commitment might pose a challenge.<br><br>In matters of finance, your understanding of the value of money comes from personal experiences. Quick thinking and adept negotiation skills make you excel in sales. </p>";
            case 6:
                return "<p>If your birthdate is on the 6th, you possess distinctive features and a natural artistic flair. Your creativity and charm consistently inject a sense of style into everything you undertake, and your astute business acumen reaps rewards. Facing challenges or obstacles, you exhibit an innate ability to rise above, finding solace and delight in the realms of art, music, and beauty.<br><br>Your idealistic and nurturing nature fosters strong connections with your family, coupled with a keen interest in community affairs. Your willingness to contribute to projects aiding the less fortunate showcases your empathy and compassion. In both personal and professional spheres, you tend to shoulder responsibilities generously, often taking on more than your fair share.<br><br>Your social circle serves as a wellspring of knowledge for you, driven by a strong sense of responsibility and a desire to assist. While adept at offering advice, it's crucial to be cautious about meddling in others' affairs. Accepting criticism, especially when delivered harshly, might prove challenging for you.</p>";
            case 7:
                return "<p>If you were born on the 7th, others see you as intensely private. People may find you aloof, but you may, in fact, be covering up shyness or not feel comfortable sharing your true feelings. Because of your love of privacy and inability to open up readily, only a fortunate few get to see your sensual side. You crave harmony and peace in your life and do your best to avoid unpleasant conflicts and confrontations.<br><br>You are both curious and skeptical; your motto could be “I’ll believe it when I see it.” Even though you like asking questions, you resent being questioned by others. When it comes to finding answers, you need to trust your highly refined intuition.<br><br>Professionally, honing your language skills, both written and spoken, and investing time in mastering technology can be beneficial. Careers that require analytical and research skills, such as nutrition, computer science, engineering, religion, metaphysics, spiritual studies, or investigative reporting, may align well with your interests.<br>A piece of advice: maintain a sense of balance in all aspects of your life and be cautious of extremes.</p>";
            case 8:
                return "<p>If you were born on the 8th, finding balance in various aspects of your life is crucial. Prioritize your health by paying attention to your diet and exercise routine, possibly joining a gym or engaging in regular walks. Maintain a balanced budget and be mindful of your financial well-being.<br><br>Avoid rushing through tasks and instead take the time needed to ensure things are done effectively. Develop a good balance between personal performance and delegating responsibilities to others. Cultivate skills in handling money, power, and success, as these are likely to come your way.<br><br>Individuals with the birthdate on the 8th can achieve significant success by acting fearlessly and boldly. Demonstrate your power and authority to earn the respect of others. Your ideal career might involve overseeing, organizing, teaching, coaching, or managing finances. Fields like health, sports, real estate, or property management may also appeal to you.</p>";
            case 9:
                return "<p>Born on the 9th, you possess a delightful nature and a heart full of kindness and compassion. As an idealistic global citizen, you are driven to aid those less fortunate or unable to care for themselves. Despite your worldly outlook, you maintain a private disposition.<br><br>Your universal charm is accompanied by artistic talents, often expressed through music, writing, or entertainment. With a warm and friendly demeanor, you attract others to you. As a perpetual optimist, you inspire others to reach their full potential. Remember to balance your focus by also caring for yourself.</p>";
            case 10:
                return "<p>If your birth falls on the 10th, you possess the skill to adapt and transform in challenging situations. Guided by sharp intuition, your greatest achievements arise when you heed your inner voice. As a dynamic idealist, your optimistic perspective inspires others, but you often keep your plans private to avoid envy.<br><br>Despite your energetic nature, you maintain clear thinking and enjoy good health. Ambitious and independent, your creative mind proves beneficial in achieving success in business. Financially, you may experience fluctuations. Expect a lifetime filled with diverse and intriguing experiences, including potential residence in a foreign country.<br><br>You excel in the project development phase but prefer delegating final details. Your originality and creativity shine brightest when working independently. Clichés both in work and love don't resonate with you. In your personal life, while having numerous acquaintances, you keep a select few as close friends.</p>";
            case 11:
                return "<p>If your birthdate is on the 11th, you possess creativity, intuition, and innovation. Your relentless efforts are dedicated to transforming unique ideas into reality. As an inspiring leader with a vision and optimism, your potential is akin to that of a master, urging you to ascend to the top where you can inspire others. Recognize your uniqueness and believe in yourself.<br><br>Given your highly charged energy and susceptibility to nervousness, maintaining a balanced lifestyle is crucial. Be mindful of those with less illumination, as they may drain your energy, emphasizing the importance of sufficient rest for your well-being.<br><br>Your love extends to creatures of all sizes, and you find joy in connecting with nature. While desiring love and companionship, remember the reciprocity of giving and receiving. Overcoming a tendency to dwell on past hurts is essential for the closeness you seek. Work on letting go of past disappointments to pave the way for meaningful connections.</p>";
            case 12:
                return "<p>If your birthdate is on the 12th, your purpose revolves around serving humanity, and you possess a childlike spirit that finds joy in the company of children. Your outgoing nature attracts friends from diverse backgrounds. While you readily endure challenges for your loved ones, you tend to keep your own needs and feelings concealed, contributing to an air of mystery.<br><br>You strive for creativity across all aspects of your life and demonstrate competence and skill in achieving your goals. Proficient in languages, you communicate effectively with a rich vocabulary, making you an exceptional teacher and communicator.<br><br>With a broad range of interests, it's important not to spread yourself too thin. In challenging situations, you have the ability to tap into the necessary assistance to overcome obstacles.</p>";
            case 13:
                return "<p>If you were born on the 13th, you possess strong and outspoken opinions, unafraid to express them. Your personality is deep and intricate, relying on intellectual, observational, and reasoning abilities to foresee future events. Your visionary thinking often places you ahead of your time, making it challenging for others to fully understand you.<br><br>Energetic and hardworking, you thrive in professions involving public engagement, but be cautious as high stress levels may impact your health. While typically organized and sometimes perceived as rigid, you also know how to let loose and have fun on occasion.<br><br>Your keen eye for design, coupled with a sense of rhythm and balance, contributes to your appreciation for a harmonious home environment. Tradition holds great value for you, and you cherish love, home, and family. In matters of the heart, you exhibit strong self-awareness and empathy towards others.</p>";
            case 14:
                return "If you were born on the 14th, you embody innovation and often establish trends that others follow. Your innate genius allows you to think beyond conventional boundaries, and you're not afraid to take calculated risks—however, it's crucial to take responsibility if things go awry.<br><br>Blessed with a good memory, you recall events from your past, but it's essential not to dwell on past hurts. Learning to let go of grudges and fostering adaptability and flexibility are key for your personal growth.<br><br>You find pleasure in indulging your five senses, especially through food and drink, but must be mindful of their impact. Your generosity endears you to many friends, although occasional emotional outbursts may arise from strong feelings and a sense of being misunderstood.";
            case 15:
                return "<p>Born on the 15th, you possess emotional sensitivity and a deep understanding of others' feelings. Despite the significance of love and family in your life, commitment in matters of the heart may pose a challenge.<br><br>While maintaining your independence, you exhibit generosity with your time and resources, often shouldering a significant sense of responsibility for others. Your ability to subtly influence people to change without them realizing it is noteworthy.<br><br>Your strong intuition guides your decision-making, urging you to trust your initial instincts. Despite uncertainties in choosing your life path, you gain respect in business and naturally attract influential individuals. Financial success typically graces your life during your 30s, 40s, and 50s.<br><br>Your home serves as a sanctuary for relaxation, and when afforded the time, you find enjoyment in travel.</p>";
            case 16:
                return "<p>If your birthday falls on the 16th, your keen perception allows you to easily discern falsehoods; pretense is futile in your presence. Possessing a natural curiosity, you've honed intuitive skills, relishing the act of questioning to validate your instincts. However, you may resist being scrutinized by others.<br><br>Fulfillment arises from completing tasks, driven by your analytical nature seeking empirical evidence to substantiate hypotheses. Your interests span a spectrum from the mundane, like computers, to the technical, such as science, and the profound, including metaphysics or spirituality. Regardless, you tend to specialize and strive for perfection in your chosen focus.<br><br>For your well-being, cultivating optimism and steering clear of mood swings is advisable. Embrace the unpredictability of life, as unexpected events often characterize your journey.</p>";
            case 17:
                return "<p>If your birthdate is on the 17th, your ambition propels you to business success through innovative approaches to products or services. Possessing a sharp mind and impeccable memory, you may display some self-centered tendencies, yet your entertaining nature shines through, captivating others with your remarkable impressions.<br><br>Your systematic and organized disposition positions you for financial success, particularly in managing substantial sums of money. Preferring concrete evidence over hearsay, you form opinions based on solid proof. As a natural leader, you readily shoulder responsibilities and excel at making informed decisions when faced with alternatives.</p>";
            case 18:
                return "<p>If your birthdate is on the 18th, you hold the potential for financial success and harbor strong artistic interests that necessitate creative outlets. Recognizing your strengths comes naturally, and your independence coexists harmoniously with the ability to collaborate effectively with others. A born leader and pioneer in your field, you approach the world with an open mind, free from prejudices.<br><br>Gifted with a strong intuition, those born on the 18th may experience premonitory dreams—capitalize on this gift and trust your hunches. Intellectually curious, you seek to understand every aspect of your world. Admired for your good nature, you possess the remarkable ability to choose the perfect words at the perfect time, offering a calming presence to those around you.<br><br>With refined tastes and a disdain for the common or mundane, you aspire for the finer things in life yet maintain a drive to contribute to humanity. Your most meaningful accomplishments are rooted in actions that benefit others.</p>";
            case 19:
                return "<p>If your birthdate falls on the 19th, you're a pioneering individual unafraid to take risks on innovative ideas. Possessing a strong determination to secure victory, you disdain second place and thrive when working independently to pursue ambitious goals.<br><br>Exemplifying diplomacy, you effortlessly find the right words to bring about peace in conflicts. Your energy, coupled with a magnetic personality, endears you to others. Despite your charming exterior, you may perceive yourself differently from how others view you, occasionally feeling a sense of loneliness even in congenial groups.<br><br>Your competitive spirit and drive to be first can lead to impulsive decisions, responding with an immediate yes or no without much consideration. While it takes a substantial trigger to provoke your anger, when it surfaces, your sharp words can cut like a sword. Fortunately, your anger tends to be short-lived, and you quickly move on, often forgetting the cause of your anger shortly after.</p>";
            case 20:
                return "<p>If your birthdate is on the 20th, you embody tact and carefully choose your words when engaging with others. Your adaptability allows you to seamlessly integrate into any social group, providing you with a sense of ease and comfort.<br><br>You discover happiness and fulfillment in partnerships with like-minded individuals. However, your empathy toward others' feelings may lead to indecisiveness or fickleness as you strive to please them. Trusting your intuition is essential, as it could lead you to financially lucrative opportunities.<br><br>While you excel as part of a team, your accommodating nature may expose you to potential exploitation by others. Taking things personally and having easily hurt feelings are common traits, necessitating moments of peace and quiet for your well-being. Don't hesitate to insist on your ‘me’ time when needed.</p>";
            case 21:
                return "<p>If your birthdate is on the 21st, you appear to be blessed with luck and opportunity, generously sharing your good fortune with loved ones. As a sought-after companion, your social calendar is likely booked well in advance, and your ability to engage in conversations on a myriad of topics brightens the lives of those around you.<br><br>An individualist at heart, you utilize the power of words to express your thoughts passionately and add an artistic flair to all your endeavors. Given your diverse interests, deciding which path to pursue may pose a challenge.<br><br>For your well-being, be mindful of potential edginess or nervous energy when constantly on the go. It's crucial to avoid overcommitting to prevent spreading yourself too thin.</p>";
            case 22:
                return "<p>If you were born on the 22nd, your pragmatic nature and organizational skills make you a natural leader, often at the forefront of significant projects. Despite your independent streak, you collaborate effectively with others, taking pride in your life accomplishments. With a curious and inquisitive mind, you delight in asking questions.<br><br>Your competence holds the potential for reaching great heights, but creating balance in your life is essential to avoid the depths. Challenges prompt you to seek practical solutions, and your high intuition urges you to follow your instincts.<br><br>You cultivate diverse friendships and strive to bring happiness to those around you. While your strong personality may have posed minor challenges in your childhood, you work diligently to conceal your sensitivity from others.</p>";
            case 23:
                return "<p>If you were born on the 23rd, you possess a diverse array of interests and excel in various skills. Your versatility and quick thinking infuse a creative flair into all your pursuits. Equipped with a wealth of curative remedies, you can address anything from a bee sting to the common cold. With intuitive and possibly psychic gifts, it's crucial to trust your hunches and heed your inner voice.<br><br>Your unmatched determination and focus empower you, allowing you to attract what you desire through your social and friendly demeanor. This positive attitude may also result in gaining loyal employees. Fueled by boundless energy, you thrive in vibrant surroundings and harbor a restlessness that propels you toward new and different experiences, often leading to numerous adventures. Defeat is a rare occurrence for you, and you consistently navigate challenges with resilience.</p>";
            case 24:
                return "<p>If you were born on the 24th, you embody fairness, sensibility, and a strong work ethic. Your pragmatic approach to life serves as the foundation for your success, and perseverance is a defining trait in achieving your goals.<br><br>An acute sense of rhythm, design, and balance characterizes you, akin to a finely-tuned violin. You advocate for fairness, expecting others to contribute their fair share and match your work ethic. Instead of harboring disappointment in others, you willingly step in when responsibilities are neglected. While you can be reasoned with up to a point, your stubborn nature should be kept in check.<br> <br > In your personal life, you are cherished and often find companionship with animals and children.Treating your home as a sanctuary, you find solace in listening to music as a means to soothe your soul and unwind. </p>";
            case 25:
                return "<p>If you were born on the 25th, you crave tranquility and solitude, disliking excessive noise or chatter, which prompts you to seek alone time for recharging. Your affinity for nature finds expression in long walks on a sandy beach, a particular favorite activity.<br><br>Optimism guides your approach to life, with the belief that every problem has a solution. Your inquisitive nature drives you to understand the workings of things, and this curiosity positions you as an excellent problem-solver, capable of finding diverse solutions to various challenges.<br><br>You harbor an intrigue for spiritual or esoteric matters, and your introspective and sensitive disposition allows you to pick up on the feelings of others. Strong intuition is a notable trait, urging you to listen to your instincts. In your interactions with others, strive to avoid stubbornness.</p>";
            case 26:
                return "<p>If you were born on the 26th, your desire for harmonious relationships is strong, but maintaining balance with your intense emotions requires effort. Endowed with the ability to embrace responsibility, your life purpose involves leadership and direction. Organizational skills make you poised for financial success in your chosen field, with a crucial need to stay levelheaded in times of stress.<br><br>Your pride extends to your possessions and accomplishments, but it's essential to avoid boasting about material wealth and potentially losing sight of relationships with those around you. Despite being loved and surrounded by animals and children, your busy schedule often hinders full enjoyment of home and family.</p>";
            case 27:
                return "<p>If you were born on the 27th, your intensely private nature leads you to keep your feelings to yourself. While protective and willing to stand up for your family or employees in public, you may express your opinions more candidly in private. Your diverse interests open up numerous possibilities in your career, and despite changes along the way, success awaits you in your ultimate choice.<br><br>You possess a gift for communication and skillfully express your emotions. The balance of intuition and reason grants you an excellent understanding of others, making you potentially gifted in the humanities, whether as a composer, author, humanitarian, or politician.</p>";
            case 28:
                return "<p>Pioneering, strong-willed, and clever, if you were born on the 28th, you have no fear of standing out in a crowd. Rather than conform to rules, you aim to create them. Determined and independent, you resist the influence of others' opinions and feel constrained by interference with your plans.<br><br>Your practical and analytical nature, combined with a keen understanding of human dynamics, empowers you to achieve your goals. Courageous in your approach to life, you embrace challenges with a willingness to try anything once. Fiercely independent, you not only desire but need freedom, akin to others' need for air.<br><br>As a perfectionist, you are constantly seeking ways to improve your ideas. With your clever thinking and reasoning skills, you seldom know defeat—if you fall down seven times, you'll get up eight.</p>";
            case 29:
                return "<p>If you were born on the 29th, you possess a sensitive soul and excel in communication with others. With a strong character and the ability to inspire, you are inherently philosophical and idealistic, destined for leadership and greatness. Success awaits you in a career that leverages your talents, even if influenced by power and money; you generously assist those less fortunate once financial success is achieved.<br><br>In your personal life, you approach trust cautiously and may refrain from expressing feelings due to a fear of ridicule. Intuitive knowledge may limit the number of children you have, as negative childhood memories can influence your parenting. Despite a deep desire for love, insecurity at times hinders your pursuit, making it essential to find a spouse who shares your outlook on life.<br><br>Drawn to a higher dimension of life, it's advisable to tread a straight and narrow path to avoid trouble and bad karma. Maintaining emotional balance is crucial to prevent dramatic mood swings.</p>";
            case 30:
                return "<p>If your birthdate is on the 30th, you are a natural entertainer, blessed with boundless creativity and irresistible charm. Gifted in the art of storytelling, you have a penchant for embellishing the truth, never allowing facts to spoil a good narrative. While capable and versatile, you may encounter occasional stops and starts when translating your plans into action.<br><br>You appreciate the finer things in life and possess elite tastes. During prosperous times, you indulge in lavishing your loved ones with gifts, showcasing an inclination for generosity. Remarkably, despite your penchant for luxury, you exhibit adeptness in managing finances.<br><br>You hold the belief that friendship and romance are essential to your happiness. Your charming and sociable nature makes you shine in social settings, attracting individuals from diverse backgrounds. However, despite your outgoing and magnetic personality, some may find it challenging to establish intimate connections with you.</p>";
            case 31:
                return "<p>If you were born on the 31st, you possess a strong will and a determination to achieve success. Artistic talent flows within you, seeking an outlet for creative expression. Your unique blend of original and innovative ideas, coupled with practicality and groundedness, empowers you to work diligently, ultimately leading to success. Serving as an effective organizer, you endeavor to improve living and working conditions for others.<br><br>Frequent travels mark your journey, often resulting in the accumulation of wealth. Given your dynamic lifestyle, it's crucial to ensure you can fulfill your commitments before making additional promises. Recognition for your honesty and high ideals is likely to come your way. As you attain comfort, guard against sacrificing the creativity that propelled your success. Maintain flexibility and embrace nuances, avoiding rigid black-and-white perspectives.</p>";
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