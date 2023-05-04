let count = 0
let saveStr = ''
function increment(){
    count = count + 1
    document.getElementById("count-el").innerText = count
    console.log(count)
}

function save(){
    Str = 'Previous Save: '

    saveStr += document.getElementById("count-el").innerText + '-'
    document.getElementById("saveStr").innerText = Str + saveStr
}