const ud = require('urban-dictionary');

var deff = document.getElementById("word");
var btn = document.getElementById("btn");
var display = document.getElementById("display");

btn.addEventListener('click', () => {
    definition = deff.value;

    ud.term(definition).then((result) => {
        const entries = result.entries
        console.log(entries[0].word)
        display.innerText = entries[0].definition;
        console.log(entries[0].definition)
        console.log(entries[0].example)
    }).catch((error) => {
        console.error(error.message)
    })
})


