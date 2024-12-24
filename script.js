let tt1 = document.getElementById("t1")

let tp1 = prompt("Ismingizni kiriting")

let tt2 = document.getElementById("t2")

let tp2 = prompt("Familiyangizni kiriting")

let tt3 = document.getElementById("t3")

let tp3 = prompt("Yoshingizni kiriting")

let d = document.querySelector("div").style.backgroundColor = "black";
document.querySelector("div").style.color = "white";
document.querySelector("div").style.paddingLeft = "15px";
document.querySelector("div").style.paddingTop = "15px";
document.querySelector("div").style.paddingBottom = "15px";
document.querySelector("div").style.width = "500px";
document.querySelector("div").style.borderRadius = "25px";


let pr = +prompt("Ismingiz katta harf yoki kichikligni tanlang \n 1)Katta \n 2)Kichik")

if (pr == 1) {
    tt1.textContent = "1.Ism: " + tp1.toUpperCase()
    tt2.textContent = "2.Familya: " + tp2.toUpperCase()
} else if (pr == 2) {
    tt1.textContent = "1.Ism: " + tp1.toLowerCase()
    tt2.textContent = "2.Familya: " + tp2.toLowerCase()
} else {
    tt1.textContent = "1.Ism: " + tp1
    tt2.textContent = "2.Familya: " + tp2
}

tt3.textContent = "3.Yosh: " + tp3

