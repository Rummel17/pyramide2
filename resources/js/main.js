$(document).ready(function() {
  //Add Block Functionality
  let values = [];


  $('#add-block .button').click(function() {
    //determin widht of last div
    var lastwidth = $('.pyramid li:last-child .item').width();

    //calculation of next div
    if (lastwidth == null) {
      var plus = 90;
    } else {
      var plus = lastwidth + 190; //not sure why 190 but with this value they line up smoothly. Was expecting 0 and 100 for the values.
    }

    //create radom number
    var number = Math.floor(Math.random() * 9) + 1;

    //create radom letter
    function randLetter() {
      var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      var letter = letters[Math.floor(Math.random()* letters.length)];

      return letter
    }

    //make letter available globally
    var resultLetter = randLetter();

    //create radom color
    function randColor() {
      var colors = ["green", "yellowgreen", "Chocolate", "goldenrod", "cadetblue", "firebrick", "magenta", "LightSeaGreen", "Peru", "Sienna", "SlateBlue", "Snow", "Tan", "Skyblue"];
      var color = colors[Math.floor(Math.random() * colors.length)];

      return color
    }

    //make color available gloabally
    var resultColor = randColor();
    var $block = $('<li><div class="item" style="width:' + plus + 'px; border-bottom: 60px solid ' + resultColor + ' ;"><input class="values" type="text" placeholder=" ' + number + resultLetter + ' " maxlength="2"> </div></li>');

    $('.pyramid').append($block);

    //save values

    values.push(number + resultLetter);
    values.sort();
    console.log(values);

    document.getElementById("demo").innerHTML = values;
});

  //Remove Block Functionality
  $('#remove-block .button').click(function() {
    value = $(".values", $('.pyramid li').last()).attr("placeholder").trim()//find last value added in pyramid//.attr()value of attribute placeholder,trim() is just for white space
    values.splice(values.indexOf(value), 1)//indexOf() method returns the position of the first occurrence of a specified value in a string. In this case it is the index of value, which is the last item in the array. Could be replaced by -1 I think
    console.log(values)
    $('.pyramid li').last().remove();
  })
});
