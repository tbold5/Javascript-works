// var myObject = {};

//   function countLetters (str) {
//     var noSpace = str.split(' ').join('');

//     for (var i = 0; i < noSpace.length; i++) {
//       if (myObject[noSpace[i]]) {
//         myObject[noSpace[i]]++;
//       } else {
//         myObject[noSpace[i]] = 0;
//         myObject[noSpace[i]] ++;
//       }
//     }
//     return myObject;
// }
// console.log(countLetters('lighthouse in the house'));

var myObject = {};

function characterPosition (str) {
  var noSpace = str.split(' ').join('');

  for (var i = 0; i < noSpace.length; i++) {
    if (myObject[noSpace[i]]) {
    myObject[noSpace[i]].push(i);
   } else {
    myObject[noSpace[i]] = [i];
   }
  } return myObject;
}
console.log(characterPosition('lighthouse in the house'));