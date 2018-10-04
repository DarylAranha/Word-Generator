const ud = require('urban-dictionary');

var words = document.getElementById("word");
var btn = document.getElementById("btn");
var display = document.getElementById("display");
var ul = document.getElementById("listDisplay");
var li;
let wordArray = [];

btn.addEventListener('click', () => {
    var word = words.value.split(" ");
    calculatePermutation(word);
})

function getDefinition(definition) {
    let wd, def;
    ud.term(definition).then((result) => {
        const entries = result.entries
        wd = entries[0].word;
        def = entries[0].definition;
        wordArray.push(wd);
    }).catch((error) => {
        // console.error(error.message)
    })
}

function swap(x,y){
    return [y,x];
}

function permute(str,l,r){
    let i, wd;
    if(l==r) {
        getDefinition(str.join(''));
    }
    else{
        for(i=l; i<=r; i++){
            [str[l],str[i]] = swap(str[l],str[i]);
			permute(str, l+1, r);
            [str[l], str[i]] = swap(str[l], str[i]);
        }
    }
}

function generateHTMLLi() {
    if(wordArray.length>0){
        for(let i = 0; i < wordArray.length; i++) {
            li = document.createElement('li');
            console.log(wordArray[i]);
            li.innerText = wordArray[i];
            ul.append(li);
        }
    }
}

function calculatePermutation(arr) {
    li = null;
    for(let i = 2; i<=arr.length; i++){
        let singleCombination = arr.slice(0, i);
        permute(singleCombination, 0, (singleCombination.length)-1);
    }
    generateHTMLLi();
}

