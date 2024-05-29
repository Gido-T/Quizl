let text = document.getElementById('text');
let createButton = document.getElementById('createBtn');
let setArea = document.getElementById('set-area');

function createQuestion(query, answer) {
    let question = document.createElement('div');
    question.setAttribute('class', 'question');

    let queryh1 = document.createElement('h1');
    queryh1.innerHTML = query;
    queryh1.setAttribute('class', 'query');

    let answerh1 = document.createElement('h1');
    answerh1.innerHTML = answer;
    answerh1.setAttribute('class', 'answer');

    let destroy = document.createElement('div');
    destroy.setAttribute('class', 'destroy');

    question.appendChild(queryh1);
    question.appendChild(answerh1);
    question.appendChild(destroy);

    return question;
}

createButton.onclick = function() {
    console.log(text.value);

    const questions = text.value.split('\n');
    console.log(questions);

     // TODO: Make CSV parsing better
    for(let i = 0; i < questions.length; i++) {
        const question = questions[i].split(',');

        let questionElement = createQuestion(question[0], question[1])
        console.log(questionElement);
        setArea.append(questionElement);
    }
}