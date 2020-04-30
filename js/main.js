// getId:HTMLElement = (x):string => document.getElementById(x)
const badWords = document.getElementById('badWords');
const inputBadWords = document.getElementById('inputBadWords');
const addBtn = document.getElementById('addBtn');
const resetBtn = document.getElementById('resetBtn');
const inputText = document.getElementById('inputText');
const cebsorBtn = document.getElementById('cebsorBtn');
const forma = document.forms['forma'];
console.log(forma);
let arrBadWords = [];
console.log(arrBadWords);
resetBtn.addEventListener('click', function () {
    forma.reset();
    badWords.innerText = "";
});
addBtn.addEventListener('click', function () {
    console.log("inputBadWords.innerText  ---" + inputBadWords.innerText.length);
    if (inputBadWords.value.trim() != '') {
        arrBadWords.push(inputBadWords.value.trim());
        renderBadWords(arrBadWords);
        console.log(arrBadWords);
    }
    else
        alert("Введіть слова, які потрібно замінити");
});
cebsorBtn.addEventListener('click', function () {
    if (inputText.value != '' && arrBadWords.length > 0) {
        console.log("inputText.value -- " + inputText.value);
        let myInputText = inputText.value;
        let newReplacesString = '';
        arrBadWords.forEach(function (value, index) {
            console.log(value);
            function changLet(s) {
                let st = s.repeat(value.length);
                return st;
            }
            newReplacesString = myInputText.replace(new RegExp(value, "g"), changLet("*"));
        });
        inputText.value = newReplacesString;
    }
    else {
        alert("Введіть стрічку тексту для пошуку в ній слів для заміни");
    }
});
function renderBadWords(arrBadWords) {
    badWords.innerText = arrBadWords.join(', ');
    console.log(badWords.innerText);
}
