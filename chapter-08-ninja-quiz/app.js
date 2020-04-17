//using bootstrap
//bootstrap is css and js library

const correctAnswers = ['B', 'B', 'B', 'B', 'B', 'B']

const form = document.querySelector('.quiz-form')
//'absolute' path to span
//const spanResult = document.querySelector('body > div.result.py-4.d-none.bg-light.text-center > div > p > span')
const result = document.querySelector('.result')

//extra - add fifth and sixth q to form - ASSIGMENT TO innerHTML causes destruction of all child elements listeners
//can use DOM functions .createElement .appendChild etc.





const fifthQuestion = {
    question: '5. Do you like The-Net-Ninja?',
    answerA: 'No',
    answerB: 'Yes',
}

//innerHTML version
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
//


const sixthQuestion = {
    question: '6. Do you admire The-Net-Ninja?',
    answerA: 'No',
    answerB: 'Yes',
}

//DOM functions version
const questionWrapper = document.createElement('div')
const submit = document.querySelector('form div.text-center')

questionWrapper.classList.add('my-5')

const question = document.createElement('p')
question.classList.add('lead', 'font-weight-normal')
question.textContent = sixthQuestion.question
questionWrapper.append(question)

const createAnswer = (answerText, answerValue) => {
    const answer = document.createElement('div')
    answer.classList.add('form-check', 'my-2', 'text-white-50')
    
    const answerInput = document.createElement('input')
    answerInput.setAttribute('type', 'radio')
    answerInput.setAttribute('name', 'q6')
    answerInput.setAttribute('value', answerValue)
    if(answerValue === 'A'){
        answerInput.setAttribute('checked', '')
    }
    
    answer.append(answerInput)
    

    const answerLabel = document.createElement('label')
    answerLabel.classList.add('form-check-label')
    answerLabel.textContent = answerText

    answer.append(answerLabel)
    

    return answer

}


const firstAnswer = createAnswer(sixthQuestion.answerA, 'A')
questionWrapper.append(firstAnswer)

const secondAnswer = createAnswer(sixthQuestion.answerB, 'B')
questionWrapper.append(secondAnswer)

//form.append(questionWrapper) //append after submit
form.insertBefore(questionWrapper, submit) //insert before submit - cannot do with innerHTML editing

//moving submit button to end - option to deal with innerHTML version

// const submitCopy = submit.cloneNode(true) //clone with child nodes
// submit.parentNode.removeChild(submit) //delete old submit
// form.append(submitCopy) //add submit at the end

//append vs appendChild deferences - https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append




form.addEventListener('submit', (e) => {
    e.preventDefault()

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value]


    //check answers

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += (100 / 6);
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

