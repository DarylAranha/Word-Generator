const ud = require('urban-dictionary');

var words = document.getElementById("word");
var btn = document.getElementById("btn");
var display = document.getElementById("display");

btn.addEventListener('click', () => {
    var word = words.value.split(" ");
    calculatePermutation(word);
})

function getDefinition(definition) {
    ud.term(definition).then((result) => {
        const entries = result.entries
        let wd = entries[0].word;
        let definition = entries[0].definition;
        console.log(entries[0].word);
    }).catch((error) => {
        // console.error(error.message)
    })
}

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
}

