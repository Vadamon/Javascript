
function chessTable() {
    var table = document.createElement("table"); //Создаем таблицу в файле html
    var letters = ['', 'A ', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''] //Создаем массив из букв для первой строки
    blackFigsTop = ['&#9820;', '&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;'],//создаем первую верхнюю строку доски
        whiteFigsBottom = ['1', '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', '1'],//создаем первую нижнюю строку доски
        blackFigsTop2 = ['7', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '7'],//создаем вторую верхнюю строку доски
        whiteFigsBottom2 = ['2', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '2'];//создаем вторую нижнюю строку доски
    for (var i = 0, a = 9; i < 10, a >= 0; i++, a--) { //создаем цикл для создании строки и счетчик для боковых чисел
        var tr = table.insertRow(i); //создаем пустой tr и добавляем его в строку
        for (var j = 0; j < 10; j++) { //цикл для столбцов
            var td = tr.insertCell(j); //создаем пустой td и добавляем его в столбец
            if ((i + j) % 2) {//расскрашиваем шахматную доску
                td.style.backgroundColor = "#583426";
            }
            else {
                td.style.backgroundColor = "#B98E6C";
            }
            td.classList.add("td");

            if (i == 0) { //добавляем буквы сверху
                td.innerText = letters[j];
                td.classList.add("letters");
                td.classList.add("letters-top");
                td.classList.add("td");
                td.style.background = "none";
            }
            else if (i == 9) {//добавляем буквы снизу
                td.innerText = letters[j];
                td.classList.add("letters");
                td.classList.add("letters-bottom");
                td.classList.add("td");
                td.style.background = "none";
            }
            else if (j == 0) {//добавляем цифры слева
                td.innerHTML = a;
                td.classList.add("numbers");
                td.classList.add("numbers-left");
                td.classList.add("td");
                td.style = "none";
            }
            else if (j == 9) { //добавляем цифры справа
                td.innerHTML = a;
                td.classList.add("numbers");
                td.classList.add("numbers-right");
                td.classList.add("td");
                td.style = "none";
            }
            else if (i == 1) {//добавляем черные фигуры сверху
                td.innerHTML = blackFigsTop[j];
                td.classList.add("figs-top");
            }
            else if (i == 2) {//добавляем второй ряд черных фигур сверху
                td.innerHTML = blackFigsTop2[j];
                td.classList.add("figs-top");
            }
            else if (i == 7) {//добавляем белые фигуры сверху
                td.innerHTML = whiteFigsBottom2[j];
                td.classList.add("figs-bottom");
            }
            else if (i == 8) {//добавляем второй ряд белых фигур сверху
                td.innerHTML = whiteFigsBottom[j];
                td.classList.add("figs-bottom");
            }

        }
    }
    document.body.append(table);//выводим таблицу на экран
}
chessTable();//запускаем функцию для вывода шахматной доски
