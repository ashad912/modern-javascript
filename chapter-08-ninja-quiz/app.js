//using bootstrap
//bootstrap is css and js library

const correctAnswers = ['B', 'B', 'B', 'B', 'B']

const form = document.querySelector('.quiz-form')
//'absolute' path to span
//const spanResult = document.querySelector('body > div.result.py-4.d-none.bg-light.text-center > div > p > span')
const result = document.querySelector('.result')

//extra - add fifth q to form - below submit - ASSIGMENT TO innerHTML causes destruction of all child elements listeners
//can use DOM functions .createElement .appendChild etc.
const fifthQuestion = {
    question: '5. Do you like The-Net-Ninja?',
    answerA: 'No',
    answerB: 'Yes',
}
form.innerHTML += `
    <div class="my-5">
        <p class="lead font-weight-normal">
            ${fifthQuestion.question}
        </p>
        <div class="form-check my-2 text-white-50">
            <input type="radio" name='q5' value="A" checked>
            <!-- we don't need a 'for' in label - we are closed in one div-->
            <label class="form-check-label">${fifthQuestion.answerA}</label>
        </div>
        <div class="form-check my-2 text-white-50">
            <input type="radio" name='q5' value="B">
            <label class="form-check-label">${fifthQuestion.answerB}</label>
        </div>
    </div>


`

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]


    //check answers

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 20;
        }
    })

    //show result on page
    //spanResult.textContent = `${score}%`
    //'relative' path to span
    
    
    result.classList.remove('d-none')
    scrollTo({
        top: 0,
        behavior: 'smooth'
    })

    let output = 0;
    const timer = setInterval (() => {
        result.querySelector('span').textContent = `${output}%`
        
        if(output >= score){
            clearInterval(timer)
        }
        output++;
    }, 10)

})

//window object - don't need to call window.outerWidth, enough is outerWidth
//console.log() is method of window object!!
//document is also stored in window object!!!
//the same with .alert, and setTimeout

