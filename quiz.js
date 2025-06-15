document.addEventListener('DOMContentLoaded', function () {
    const correctAnswer = '4'; // Correct answer value
    const submitButton = document.getElementById('submit-answer');
    const feedback = document.getElementById('feedback');

    submitButton.addEventListener('click', function () {
        const selectedAnswer = document.querySelector('input[name="quiz"]:checked');

        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswer) {
                feedback.textContent = 'Correct! Well done.';
                feedback.style.color = 'green';
            } else {
                feedback.textContent = 'That\'s incorrect. Try again!';
                feedback.style.color = 'red';
            }
        } else {
            feedback.textContent = 'Please select an answer.';
            feedback.style.color = 'orange';
        }
    });
});

