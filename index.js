const ud = require('urban-dictionary');

var words = document.getElementById("word");
var btn = document.getElementById("btn");
var display = document.getElementById("display");
var displayWords = [];

btn.addEventListener('click', () => {
    var word = words.value.split(" ");
    calculatePermutation(word);
})

function swap(x,y){
    return [y,x];
}

function permute(str,l,r){
    let i;
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

function calculatePermutation(arr) {
    for(let i = 2; i<=arr.length; i++){
        let singleCombination = arr.slice(0, i);
        permute(singleCombination, 0, (singleCombination.length)-1);
    }
    console.dir(displayWords);
}

function getDefinition(definition) {
    ud.term(definition).then((result) => {
        const entries = result.entries
        let wd = entries[0].word;
        let definition = entries[0].definition;
        displayWords.push([wd,definition] );
    }).catch((error) => {
        // console.error(error.message)
    })
}
