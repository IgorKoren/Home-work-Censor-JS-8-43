// getId:HTMLElement = (x):string => document.getElementById(x)
const badWords = document.getElementById('badWords') as HTMLFormElement;
const inputBadWords = document.getElementById('inputBadWords') as HTMLFormElement;
const addBtn = document.getElementById('addBtn') as HTMLFormElement;
const resetBtn = document.getElementById('resetBtn') as HTMLFormElement;
const inputText = document.getElementById('inputText') as HTMLFormElement;
const cebsorBtn = document.getElementById('cebsorBtn') as HTMLFormElement;
const forma = document.forms['forma1'] as HTMLFormElement;

// console.log(forma);

let arrBadWords: string[] = [];
console.log(arrBadWords);

resetBtn.addEventListener('click', function (): void {
    forma.reset()
    badWords.innerText = "";
});
addBtn.addEventListener('click', function (): void {
    console.log("inputBadWords.innerText  ---" + inputBadWords.innerText.length);
    if(inputBadWords.value.trim() != ''){
        arrBadWords.push(inputBadWords.value.trim())
        renderBadWords(arrBadWords)
        console.log(arrBadWords); 
    } else alert("Введіть слова, які потрібно замінити") 
});
cebsorBtn.addEventListener('click', function (): void {
    
    if (inputText.value != '' && arrBadWords.length > 0) {
        console.log("inputText.value -- " + inputText.value);
        let myInputText:string = inputText.value;
        let newReplacesString:string = ''

        arrBadWords.forEach(function (value, index):void {
            console.log(value + '  ------------ value');

            function changLet(s:string):string{
                let st:string = '';
                st = s.repeat(value.length)
                console.log('--------' + st);
                return st
            }
            newReplacesString =  inputText.value.replace(new RegExp(value, "g"), changLet("*"))
        })
        inputText.value = newReplacesString;
    } else {
        alert("Введіть стрічку тексту для пошуку в ній слів для заміни")
    }
});
function renderBadWords(arrBadWords: string[]): void {
    badWords.innerText = arrBadWords.join(', ')
    // console.log(badWords.innerText);
}






