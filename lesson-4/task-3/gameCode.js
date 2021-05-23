var event, ok, money = 500, i = 0, trueAnswer = 0;
var correct = [1, 1, 3, 2, 3];

alert("Добро пожаловать в игру миллионер\n" + "Ваш банк:" + money);
game(questions.a00, questions.a1, questions.a2, questions.a3, correct);
game(questions.b00, questions.b1, questions.b2, questions.b3, correct);
game(questions.c00, questions.c1, questions.c2, questions.c3, correct);
game(questions.d00, questions.d1, questions.d2, questions.d3, correct);
game(questions.e00, questions.e1, questions.e2, questions.e3, correct);

alert("Правильных ответов: " + trueAnswer + "\n Ваш банк: " + money);
alert('Спасибо за игру');

function game(question, answer1, answer2, answer3, correct) {

    do {
        ok = false;
        event = +prompt(question + answer1 + answer2 + answer3 + '-1 - Выход из игры');

        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(questions.a0, event);
        }
    } while (!ok);
    if (event == correct[i]) {
        money += 50;
        alert("Ваш банк: " + money + "\nПравильный ответ!")
        trueAnswer++;
    } else {
        money -= 100;
        alert("Ваш банк: " + money + "\nВаш ответ невереный!");
    }
    i++;
}

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}

