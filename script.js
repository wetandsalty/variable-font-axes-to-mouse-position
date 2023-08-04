/* for Lunia with <3 */

$(window).load(function () {

  // declare vars for mouse cursor positon
  var mouseX;
  var mouseY;

  // declare vars for window size
  var screenW;
  var screenH;

  // declare font-variation variables
  var fontWeight;
  var fontCasual;

  /*
  set the style before user moves mouse
  (should be the same as in css to reduce "jumps")
  */
  var startStyle = {
    "font-variation-settings": "'CASL' " + 0 , "font-weight" : "600"
  };
  $("#text").css(startStyle);

  // triggers when mouse is moved
  $(document).mousemove(function (event) {

    // puts mouse cursor position into vars
    mouseX = event.pageX;
    mouseY = event.pageY;

    // calls function to assess window size
    windowSize();

    /*
    maps the font values onto proper ranges
    use like:
    fontParameter = scaleValue(mousePosition, minInput, maxInput, minOutput, maxOutput);
    (Math.round() and .toFixed() get rid of extra decimals)
    */
    fontWeight = Math.round( scaleValue(mouseX, 0, screenW, 300, 1000) );
    fontCasual = (scaleValue(mouseY, 0, screenH, 0, 1)).toFixed(2);

    // puts var-font css attributes into one var
    var xStyle = {
      "font-variation-settings": "'CASL' " + fontCasual , "font-weight" : fontWeight
    };
    // sets the css style of #text
    $("#text").css(xStyle);

    // writes the mouse coordinates into the <p> #fontInfo
    var fontInfo = "Weight: " + fontWeight + "<br />Casual: " + fontCasual;
    $("#fontInfo").html(fontInfo);

  });

  // triggers function on window resize
  $(window).resize(function () {
    windowSize();
  });

  // function to assess window size
  function windowSize() {
    screenW = $(window).width();
    screenH = $(window).height();
  }

  // function to map values
  function scaleValue(number, in_min, in_max, out_min, out_max) {
    return (
      ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  }
});
