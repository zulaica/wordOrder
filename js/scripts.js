var wordOrder = function(string) {

  var words = string.toLowerCase().split(" ");
  var uniqueWords = [];
  var uniqueWordOccurrence = [];
  var sortedWords = [];

  words.forEach(function(word) {
    if ( uniqueWords.indexOf(word) === -1 ) {
      uniqueWords.push(word);
      uniqueWordOccurrence.push(1);
    } else {
      var position = uniqueWords.indexOf(word);
      uniqueWordOccurrence[position]++;
      // // var highestOccurrence = uniqueWordOccurrence
      //
      // if ( uniqueWordOccurrence > uniqueWordOccurrence ) {
      //   uniqueWords = uniqueWords.sort();
      // }
    }
  });

//   var temporarySort = uniqueWordOccurrence.sort().reverse();
//   // console.log("----------");
//   // console.log("Temp Sort: " + temporarySort);
//
//   temporarySort.forEach(function(occurrence) {
// debugger;
//     var the_index = uniqueWordOccurrence.indexOf(occurrence);
//     // console.log("The Index: " + the_index);
//   });

  return uniqueWords;
}



// uniqueWords = ["one","two","three"]
// uniqueWordOccurrence = [1,2,3]
//
// temporarySort [3,2,1].reverse
//
// uniqueWordOccurrence.indexOf(temporarySort[each])
//
// the index is 3
//
// sortedWords.push(uniqueWords[3])
//
// pop all
//
// loop through until done.
//

// [["one", 1], ["two", 2], ["three", 3]]
