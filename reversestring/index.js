// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
//       CLEANEST
    return str.split('').reverse().join('');
//    
//       MORE EFFICIENT
    // let reversed = '';
    // for(let i of str) {
    //     reversed = i+reversed;
    // }
    // return reversed;

    // USING REDUCE
    //return str.split('').reduce((a,b) => b+a, '');
}

module.exports = reverse;
