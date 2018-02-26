// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = str.split('').reduce((all, char) => {
                    all[char] = all[char]++ || 1;
                    return all;
                },{});
    let max = 0;
    let maxChar = '';
    for(i in obj) {
        if(obj[i]> max) {
            max = obj[i];
            maxChar = i;
        }
    }
    return maxChar;
}

module.exports = maxChar;
