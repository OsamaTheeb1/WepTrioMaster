document.querySelectorAll('.question').forEach(function (question) {
    question.addEventListener('click', function () {
        const answer = question.querySelector('.answer');

       
        if (question.classList.contains('active')) {
            question.classList.remove('active');
        } else {
           
            document.querySelectorAll('.question.active').forEach(function (activeQuestion) {
                activeQuestion.classList.remove('active');
            });
            question.classList.add('active');
        }
    });
});
