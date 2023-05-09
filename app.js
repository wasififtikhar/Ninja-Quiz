const correctAnswer = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const per = document .querySelector('span')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswer = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // checking answer
  userAnswer.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 25;
    }
  });
  const timer2 = function (currentOutput) {
    let newOutput = currentOutput;
    const timer = setInterval(() => {
      per.innerHTML = `${newOutput}%`;
      if (newOutput === score) {
        clearInterval(timer);
      per.classList.add('sp');
      } else {
        newOutput++;
      }
    }, 100);
  };
  //console.log(score);

  //shwoing result on page
  scrollTo(0, 0);
  result.classList.remove('d-none');

  let output = 0;
  const timer = setInterval(() => {
    per.innerHTML = `${output}%`;
    if (output === score) {
      clearInterval(timer);
      per.classList.add('sp');
    } else {
      output++;
    }
    if (score - output < 20) {
      clearInterval(timer);
      per.classList.add('sp');
      timer2(output);
    }
  }, 40);
});
