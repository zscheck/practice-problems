// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let words = str.split(' ');
    const ans = [];
    for(word of words) {
        let remain = word.slice(1);
        ans.push(word[0].toUpperCase()+remain);
    }
    return ans.join(' ');
}

module.exports = capitalize;
