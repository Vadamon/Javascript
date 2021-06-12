var gallery = document.getElementById("gallery");
var img = document.querySelectorAll("img");
var button = document.getElementById("button");
var col = 0;

for (var i = 0; i < img.length; i++) {
    img[i].onclick = f;//каждой ссылки добавили обработчик события click
}

function f(e) {
    switch (e.target) {//e.target - источник события, т.е. то, на что нажали
        case img[0]://если клик по первой ссылке
            if (col == 1) break;
            var imgBig = document.createElement("img");
            imgBig.src = "bigImage/1.jpg";
            button.classList.toggle("hide");
            imgBig.classList.add("imgBig");
            button.onclick = function () {
                imgBig.classList.add("hide");
                this.classList.add("hide");
                --col;
            }
            document.body.append(imgBig);
            ++col;
            break;
        case img[1]://если клик по первой ссылке
            if (col == 1) break;
            var imgBig = document.createElement("img");
            imgBig.src = "bigImage/2.jpg";
            button.classList.toggle("hide");
            imgBig.classList.add("imgBig");
            button.onclick = function () {
                imgBig.classList.add("hide");
                this.classList.add("hide");
                --col;
            }
            document.body.append(imgBig);
            ++col;
            break;
        case img[2]://если клик по первой ссылке
            alert("Фото не найдено");
            break;
    }
}
