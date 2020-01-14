$(document).ready(function() {
  $("form#enter").submit(function(event) {
    event.preventDefault();

    // // var suits = ["clubs, diamonds"];
    // var ranks = ["ace", "jack", "queen", "king"];
    // var deck = [];

    // ranks.forEach(function(rank) {
    //   deck.push(rank + " of ");
    // });

    // deck.forEach(function(card) {
    //   console.log(card + "clubs");
    //   console.log(card + "diamonds");
    //   console.log(card + "spade");
    //   console.log(card + "hearts");
    // });

    var input = $("input#wordplay").val();
    var array = input.split(" ");
    var pushedArray = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i].length >= 3) {
        pushedArray.push(array[i]);
      }
    }
    var newArray = pushedArray.reverse();
    var finalArray = newArray.join(" ");

    console.log(pushedArray);
    $("#output").append(finalArray);
  });
});
