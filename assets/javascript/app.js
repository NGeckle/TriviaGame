
$(document).ready(function() {
    var questions = ["How many toes do cats have?", "How many bones does an average cat have in it’s body?", "Which of these is not a sign of contentment?", "Why do cats meow?", "What is a group of kittens called?", "What are cat breeders called?", "Why were cats originally brought to the Americas?", "What year was the first known cat video filmed?", "Which of these terms is used for when cats groom other cats?", "What scent do cats hate?", "How do cats mark humans as their territory?", "About how many hours do cats sleep for each day?", "How heavy was the heaviest cat ever recorded?"];
    var answers = [["20", "18", "16", "14"], ["230", "244", "250", "225"], ["Slow Blink", "Hissing", "Purring", "Kneading"], ["Just to make noise.", "To communicate with other cats.", "To communicate with humans.", "To warn you of an attack."], ["Flock", "Squad", "Crowd", "Kindle"], ["Catteries", "Cat Builders", "Catmen", "Catographers"], ["For pets.", "For protection.", "To get rid of rodents.", "For illegal fighting."], ["1984", "1927", "1901", "1894"], ["Allogrooming", "Pinagrooming", "Fidogrooming", "There is no special term."], ["Lavender", "Maple", "Citrus", "Cherry"], ["Spraying on you.", "Rubbing their head and body all over you.", "Licking you.", "Scratching you."], ["10", "20", "16", "24"], ["46lbs", "48lbs", "39lbs", "44lbs"]]
    var correctAnswers = ["B. 18", "B. 244", "B. Hissing", "C. To communicate with humans.", "D. Kindle", "A. Catteries", "C. To get rid of rodents.", "D. 1894", "A. Allogrooming", "C. Citrus", "B. Rubbing their head and body all over you.", "C. 16", "A. 46lbs"];
    var catPuns = [];

    $("#start").on("click", function() {
        createHTML();
        timerFunc();
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
        gameHTML = "<h2> Time Remaining: <span id='timer'>" + timer + "</span></h2><h2>Correct! The answer is: " + correctAnswers[questionCount] + "</h2>";
        $(".main").html(gameHTML);
        setTimeout(wait, 5000);
    }

    function incorrectAnswer() {
        incorrect++;
        gameHTML = "<h2> Time Remaining: <span id='timer'>" + timer + "</span></h2><h2>Wrong! The answer is: " + correctAnswers[questionCount] + "</h2>";
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