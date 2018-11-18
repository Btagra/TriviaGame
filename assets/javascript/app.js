$(document).ready(function () {
    var correct = 0;
    var inCorrect = 0;

    var counter = 45;
    var intervalId;
    var questions = [
        {
            question: "1) Whistler was the codename of this Microsoft Operating System",
            answers: ["Windows 2000", "Windows 7", "Windows XP", "Windows 95"],
            correctAnswer: "Windows XP"
        },
        {
            question: "2) What does AD stand for in relation to Windows Operating Systems? ",
            answers: ["Active Directory", "Alternative Drive", "Automated Database", "Active Department"],
            correctAnswer: "Active Directory"
        },
        {
            question: "3) What five letter word is the motto of the IBM Computer company?",
            answers: ["Click", "Logic", "Pixel", "Think"],
            correctAnswer: "Windows XP"
        },
        {
            question: "4) Which one of these is not an official development name for a Ubuntu release?",
            answers: ["Mystic Mansion", "Trusty Tahr", "Utopic Unicorn", "Wily Werewolf"],
            correctAnswer: "Mystic Mansion"
        },
        {
            question: "5) How fast is USB 3.1 Gen 2 theoretically?",
            answers: ["5 Gb/s", "10 Gb/s", "8 Gb/s", "1 Gb/s"],
            correctAnswer: "10 Gb/s"
        },
        {
            question: "6) What does &quot;LCD&quot; stand for?",
            answers: ["Language Control Design", "Last Common Difference", "Long Continuous Design", "Liquid Crystal Display"],
            correctAnswer: "Liquid Crystal Display"
        },
        {
            question: "7) .at is the top-level domain for what country?",
            answers: ["Austria", "Argentina", "Australia", "Angola"],
            correctAnswer: "Austria"
        },
        {
            question: "8) When did the online streaming service &quot;Mixer&quot; launch?",
            answers: ["2013", "2009", "2016", "2011"],
            correctAnswer: "2016"
        },
        {
            question: "9) Which programming language was developed by Sun Microsystems in 1995?",
            answers: ["Java", "Python", "Solaris OS", "C++"],
            correctAnswer: "Java"
        },
        {
            question: "10) In programming, what do you call functions with the same name but different implementations?",
            answers: ["Overriding", "Abstracting", "Inheriting", "Overloading"],
            correctAnswer: "Overloading"
        },
    ];
    $(document).on('click', '#start', function (e) {
        start();
    });

    $(document).on('click', '#done', function (e) {
        done();
    });

    function start() {
        $('#start').remove();
        intervalId = setInterval(countdown, 1000);

        $('#wrapper').prepend(`<h2> Time Remaining:<span id="counter-number"> ${counter}</span>  Seconds</h2>`);

        for (var i = 0; i < questions.length; i++) {
            $("#button").append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#button").append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
            }
        }

        $("#button").append('<button id="done">Done</button>');
        $("#button").setAttribute("button");
    }
    function countdown() {
        counter--;
        $('#counter-number').html(counter);
        if (counter === 0) {
            alert("TIME UP!");
            done();
        }
    }

    function done() {
        for (var i = 0; i < questions.length; i++) {
            $.each($("input[name='question-" + i + "']:checked"), function () {
                if ($(this).val() === questions[i].correctAnswer) {
                    correct++;
                } else {
                    inCorrect++;
                }
            });
        }

        clearInterval(intervalId);
        $("#button").empty();
        $('#wrapper h2').remove();
        $('#button').append('<h3>Correct Answers: ' + correct + '</h3>');
        $('#button').append('<h3>Incorrect Answers: ' + inCorrect + '</h3>');
        $('#button').append('<h3>Unanswered: ' + (questions.length - (inCorrect + correct)) + '</h3>');
    }

});