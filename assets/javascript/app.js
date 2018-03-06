
$(document).ready(function() {
    var questions = ["1. How many toes do cats have?", "2. How many bones does an average cat have in it’s body?", "3. Which of these is not a sign of contentment?", "4. Why do cats meow?", "5. What is a group of kittens called?", "6. What are cat breeders called?", "7. Why were cats originally brought to the Americas?", "8. What year was the first known cat video filmed?", "9. Which of these terms is used for when cats groom other cats?", "10. What scent do cats hate?", "11. How do cats mark humans as their territory?", "12. About how many hours do cats sleep for each day?", "13. How heavy was the heaviest cat ever recorded?"];
    var answers = [["20", "18", "16", "14"], ["230", "244", "250", "225"], ["Slow Blink", "Hissing", "Purring", "Kneading"], ["Just to make noise.", "To communicate with other cats.", "To communicate with humans.", "To warn you of an attack."], ["Flock", "Squad", "Crowd", "Kindle"], ["Catteries", "Cat Builders", "Catmen", "Catographers"], ["For pets.", "For protection.", "To get rid of rodents.", "For illegal fighting."], ["1984", "1927", "1901", "1894"], ["Allogrooming", "Pinagrooming", "Fidogrooming", "There is no special term."], ["Lavender", "Maple", "Citrus", "Cherry"], ["Spraying on you.", "Rubbing their head and body all over you.", "Licking you.", "Scratching you."], ["10", "20", "16", "24"], ["46lbs", "48lbs", "39lbs", "44lbs"]]
    var correctAnswers = ["B. 18", "B. 244", "B. Hissing", "C. To communicate with humans.", "D. Kindle", "A. Catteries", "C. To get rid of rodents.", "D. 1894", "A. Allogrooming", "C. Citrus", "B. Rubbing their head and body all over you.", "C. 16", "A. 46lbs"];
    var correctCatPuns = ["Fancatstic!", "Looking Good, Feline Good!", "That was clawsome!", "Fancatstic!", "That was clawsome!", "Fancatstic!", "Looking Good, Feline Good!", "Purrfect!", "Fancatstic!", "That was pawsome!", "I hope you aren't afraid of these cat puns. That would make you a scaredy cat!", "Don't let the cat out of the bag! You're almost there!", "Purrfect!"];
    var incorrectCatPuns = ["You've gotta be kitten me!", "Stay pawsitive!", "Are you fur real?", "Stay pawsitive!", "You've gotta be kitten me!", "You can do better than that right meow!", "Are you fur real?", "A cat could do better than that!", "Stay pawsitive!", "It's meow or never!", "I hope you aren't afraid of these cat puns. That would make you a scaredy cat!", "Don't let the cat out of the bag! You're almost there!", "You've gotta be kitten me!"];
    var catGifs = ["assets/images/hellNo.jpg", "assets/images/cuteCat.gif", "assets/images/inbreadCat.gif", "assets/images/realization.gif", "assets/images/lollipopCat.gif", "assets/images/jumpCat.gif", "assets/images/catBanana.gif", "assets/images/catTyping.gif", "assets/images/guiltyCat.jpg", "assets/images/boopCat.gif", "assets/images/fatCat.gif", "assets/images/broccoliCat.gif", "assets/images/wellShit.gif"];

    $("#start").on("click", function() {
        createHTML();
        timerFunc();
        $("#rules").text("");
        $("#button").text("");
    })

    $("body").on("click", ".answer", function() {
        selectedAnswer = $(this).text();
        if (selectedAnswer === correctAnswers[questionCount]) {
            clearInterval(countdown);
            correctAnswer();
        }
        else {
            clearInterval(countdown);
            incorrectAnswer();
        }
    })

    var intervalId;
    var correct = 0;
    var incorrect = 0;
    var timer = 45;
    var questionCount = 0;
    var countdown;
    var gameHTML;
    var selectedAnswer;
    
    

    function timerFunc() {
        countdown = setInterval(fortyfive, 1000);
        function fortyfive() {
            if (timer === 0) {
                clearInterval(countdown);
                outOfTime();
            }
            if (timer > 0) {
                timer--;
            }
            $("#timer").html(timer);
        }
    }

    function correctAnswer() {
        correct++;
        gameHTML = "<h2> Time Remaining: <span id='timer'>" + timer + "</span></h2><h2>Correct! The answer is: " + correctAnswers[questionCount] + "</h2><h3>" + correctCatPuns[questionCount] + "</h3>";
        $(".main").html(gameHTML);
        setTimeout(wait, 5000);
    }

    function incorrectAnswer() {
        incorrect++;
        gameHTML = "<h2> Time Remaining: <span id='timer'>" + timer + "</span></h2><h2>Wrong! The answer is: " + correctAnswers[questionCount] + "</h2><h3>" + incorrectCatPuns[questionCount] + "</h3>";
        $(".main").html(gameHTML);
        setTimeout(wait, 5000);
    }

    function outOfTime() {
        incorrect++;
        gameHTML = "<h2> Time Remaining: <span id='timer'>" + timer + "</span></h2><h2>You&#39;re out of time! The answer is: " + correctAnswers[questionCount] + "</h2>";
        $(".main").html(gameHTML);
        setTimeout(wait, 5000);
    }

    function createHTML() {
        gameHTML = "<h2> Time Remaining: <span id='timer'>45</span></p><h2 id='question'>" + questions[questionCount] + "</p><h3 class='first-answer answer'>A. " + answers[questionCount][0] + "</h3><h3 class='second-answer answer'>B. " + answers[questionCount][1] + "</h3><h3 class='third-answer answer'>C. " + answers[questionCount][2] + "</h3><h3 class='fourth-answer answer'>D. " + answers[questionCount][3] + "</h3>";
        $(".main").html(gameHTML);
 
        var imageElement = document.createElement("img");
        imageElement.setAttribute("src", catGifs[questionCount]);
        $("#gifs").text("");
        $("#gifs").append(imageElement);  
    }

    function wait() {
        if (questionCount < 12) {
            questionCount++;
            createHTML();
            timer = 45;
            timerFunc();
        }
        else {
            endScreen();
        }
    }

    function endScreen() {
        gameHTML = "<h2>Time Remaining: <span id='timer'>" + timer + "</span></p><h2>We're finished! Here&#39;s your score!</h2>" + "<h3>Correct answers: " + correct + "</h3><h3>Incorrect answers: " + incorrect + "</h3>";
        $(".main").html(gameHTML);
    }
    
})