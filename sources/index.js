document.addEventListener('DOMContentLoaded', function () {
    const guessBtnEl = document.querySelector('#guessBtn');
    let userInputEl = document.querySelector('#userinput');
    const tippEl = document.querySelector('#tipp');
    const solutionEl = document.querySelector('#solution');
    const numbersEl = document.querySelector('#numbers');
    const guessesEl = document.querySelector('#guesses');
    const triesEl = document.querySelector('#tries');
    const arrowEl = document.querySelector('#arrow');
    const BtnNum1El = document.querySelector('#BtnNum1');
    const BtnNum2El = document.querySelector('#BtnNum2');
    const BtnNum3El = document.querySelector('#BtnNum3');
    const BtnNum4El = document.querySelector('#BtnNum4');
    const BtnNum5El = document.querySelector('#BtnNum5');
    const BtnNum6El = document.querySelector('#BtnNum6');
    const BtnNum7El = document.querySelector('#BtnNum7');
    const BtnNum8El = document.querySelector('#BtnNum8');
    const BtnNum9El = document.querySelector('#BtnNum9');
    const BtnNum0El = document.querySelector('#BtnNum0');
    const BtnClearEl = document.querySelector('#BtnClear');

    let counter = 0;
    triesEl.innerText = counter;


    fktBtnNum(BtnNum1El, '1');
    fktBtnNum(BtnNum2El, '2');
    fktBtnNum(BtnNum3El, '3');
    fktBtnNum(BtnNum4El, '4');
    fktBtnNum(BtnNum5El, '5');
    fktBtnNum(BtnNum6El, '6');
    fktBtnNum(BtnNum7El, '7');
    fktBtnNum(BtnNum8El, '8');
    fktBtnNum(BtnNum9El, '9');
    fktBtnNum(BtnNum0El, '0');

    BtnClearEl.addEventListener('click', function () {
        userInputEl.value = '';
        userInputEl.classList.remove('error');
        arrowEl.classList.add('hidden');
    });


    fktNewRandomNumber();

    guessBtnEl.addEventListener('click', fktCheckGuess);

    function fktRandomNumb() {
        let randomNumb = Math.round(Math.random() * 100);
        return randomNumb;
    }

    function fktBtnNum(btnEl, num) {
        btnEl.addEventListener('click', function () {
            userInputEl.value += num;
        });
    }

    function fktCheckGuess() {
        if (parseInt(userInputEl.value) === randomNumb) {
            userInputEl.classList.remove('error');
            arrowEl.classList.add('hidden');
            numbersEl.classList.add('hidden');
            guessBtnEl.classList.add('hidden');
            guessesEl.classList.add('hidden');
            triesEl.classList.add('hidden');
            fktAtWinning();

        } else if (parseInt(userInputEl.value) < randomNumb) {
            tippEl.innerText = 'Die gesuchte Zahl ist größer.';
            counter += 1;
            triesEl.innerText = counter;
            userInputEl.value = '';
            userInputEl.classList.remove('error');
            arrowEl.classList.add('hidden');

        } else if (parseInt(userInputEl.value) > randomNumb) {
            tippEl.innerText = 'Die gesuchte Zahl ist kleiner.';
            counter += 1;
            triesEl.innerText = counter;
            userInputEl.value = '';
            userInputEl.classList.remove('error');
            arrowEl.classList.add('hidden');

        } else {
            tippEl.innerText = 'Huch! \n Du hast keine gültige Zahl eingegeben.';
            userInputEl.classList.add('error');
            arrowEl.classList.remove('hidden');
        }
    }

    function fktAtWinning() {
        solutionEl.innerText = `Du hast die Zahl gefunden! \n Du hast ${counter} Versuche gebraucht.`;
        const win = document.createElement('div');
        win.classList.add('winning');
        win.innerText = '\n GEWONNEN!!!';
        solutionEl.appendChild(win);
        tippEl.innerText = '';

        const newGameBtnEL = document.createElement('button');
        newGameBtnEL.id = 'newGameBtn';
        newGameBtnEL.innerText = 'Erneut Spielen';
        solutionEl.appendChild(newGameBtnEL);

        newGameBtnEL.addEventListener('click', function () {
            tippEl.innerText = '';
            solutionEl.innerText = '';
            userInputEl.value = '';
            triesEl.innerText = 0;
            numbersEl.classList.remove('hidden');
            guessBtnEl.classList.remove('hidden');
            triesEl.classList.remove('hidden');
            guessesEl.classList.remove('hidden');
            fktNewRandomNumber();
        });
    }

    function fktNewRandomNumber() {
        randomNumb = fktRandomNumb();
        console.log(randomNumb);
    }
});




