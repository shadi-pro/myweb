//  jQuery course map :

// ========================================================

// I] Orcedeion Plus buttons effect [4] groups :
// 1) First plus button :

$(document).ready(function () {
  var c = 65;
  for (i = 1; i <= c; i++) {
    $(".container .row  .button" + i).click(function () {
        for (i = 1; i <= c; i++) {
            $(".container .row  .displayContent" + i).slideToggle(500);
        }
    });
  }
});

// $(document).ready(function () {
//     $('.container .row .button1').click(function () {
//         $('.container .row .displayContent1').slideToggle(500);
//     });
//     $('.container .row .button1').click(function () {
//         $('.container .row .displayContent1').slideToggle(500);
//     });
//     $('.container .row .button2').click(function () {
//         $('.container .row .displayContent2').slideToggle(500);
//     });
//     $('.container .row .button3').click(function () {
//         $('.container .row .displayContent3').slideToggle(500);
//     });
//     $('.container .row .button4').click(function () {
//         $('.container .row .displayContent4').slideToggle(500);
//     });
//     $('.container .row .button5').click(function () {
//         $('.container .row .displayContent5').slideToggle(500);
//     });
//     $('.container .row .button6').click(function () {
//         $('.container .row .displayContent6').slideToggle(500);
//     });
//     $('.container .row .button7').click(function () {
//         $('.container .row .displayContent7').slideToggle(500);
//     });
//     $('.container .row .button8').click(function () {
//         $('.container .row .displayContent8').slideToggle(500);
//     });
//     $('.container .row .button9').click(function () {
//         $('.container .row .displayContent9').slideToggle(500);
//     });
//     $('.container .row .button10').click(function () {
//         $('.container .row .displayContent10').slideToggle(500);
//     });
//     $('.container .row .button11').click(function () {
//         $('.container .row .displayContent11').slideToggle(500);
//     });
//     $('.container .row .button12').click(function () {
//         $('.container .row .displayContent12').slideToggle(500);
//     });
//     $('.container .row .button13').click(function () {
//         $('.container .row .displayContent13').slideToggle(500);
//     });
//     $('.container .row .button14').click(function () {
//         $('.container .row .displayContent14').slideToggle(500);
//     });
//     $('.container .row .button15').click(function () {
//         $('.container .row .displayContent15').slideToggle(500);
//     });
//     $('.container .row .button16').click(function () {
//         $('.container .row .displayContent16').slideToggle(500);
//     });
//     $('.container .row .button17').click(function () {
//         $('.container .row .displayContent17').slideToggle(500);
//     });
//     $('.container .row .button18').click(function () {
//         $('.container .row .displayContent18').slideToggle(500);
//     });
//     $('.container .row .button19').click(function () {
//         $('.container .row .displayContent19').slideToggle(500);
//     });
//     $('.container .row .button20').click(function () {
//         $('.container .row .displayContent20').slideToggle(500);
//     });
//     $('.container .row .button21').click(function () {
//         $('.container .row .displayContent21').slideToggle(500);
//     });
//     $('.container .row .button22').click(function () {
//         $('.container .row .displayContent22').slideToggle(500);
//     });
//     $('.container .row .button23').click(function () {
//         $('.container .row .displayContent23').slideToggle(500);
//     });
//     $('.container .row .button24').click(function () {
//         $('.container .row .displayContent24').slideToggle(500);
//     });
//     $('.container .row .button25').click(function () {
//         $('.container .row .displayContent25').slideToggle(500);
//     });
//     $('.container .row .button26').click(function () {
//         $('.container .row .displayContent26').slideToggle(500);
//     });
//     $('.container .row .button27').click(function () {
//         $('.container .row .displayContent27').slideToggle(500);
//     });
//     $('.container .row .button28').click(function () {
//         $('.container .row .displayContent28').slideToggle(500);
//     });
//     $('.container .row .button29').click(function () {
//         $('.container .row .displayContent29').slideToggle(500);
//     });
//     $('.container .row .button30').click(function () {
//         $('.container .row .displayContent30').slideToggle(500);
//     });
//     $('.container .row .button31').click(function () {
//         $('.container .row .displayContent31').slideToggle(500);
//     });
//     $('.container .row .button32').click(function () {
//         $('.container .row .displayContent32').slideToggle(500);
//     });
//     $('.container .row .button33').click(function () {
//         $('.container .row .displayContent33').slideToggle(500);
//     });
//     $('.container .row .button34').click(function () {
//         $('.container .row .displayContent34').slideToggle(500);
//     });
//     $('.container .row .button35').click(function () {
//         $('.container .row .displayContent35').slideToggle(500);
//     });
//     $('.container .row .button36').click(function () {
//         $('.container .row .displayContent36').slideToggle(500);
//     });
//     $('.container .row .button37').click(function () {
//         $('.container .row .displayContent37').slideToggle(500);
//     });
//     $('.container .row .button38').click(function () {
//         $('.container .row .displayContent38').slideToggle(500);
//     });
//     $('.container .row .button39').click(function () {
//         $('.container .row .displayContent39').slideToggle(500);
//     });
//     $('.container .row .button40').click(function () {
//         $('.container .row .displayContent40').slideToggle(500);
//     });
//     $('.container .row .button41').click(function () {
//         $('.container .row .displayContent41').slideToggle(500);
//     });
//     $('.container .row .button42').click(function () {
//         $('.container .row .displayContent42').slideToggle(500);
//     });
//     $('.container .row .button43').click(function () {
//         $('.container .row .displayContent43').slideToggle(500);
//     });
//     $('.container .row .button44').click(function () {
//         $('.container .row .displayContent44').slideToggle(500);
//     });
//     $('.container .row .button45').click(function () {
//         $('.container .row .displayContent45').slideToggle(500);
//     });
//     $('.container .row .button46').click(function () {
//         $('.container .row .displayContent46').slideToggle(500);
//     });
//     $('.container .row .button47').click(function () {
//         $('.container .row .displayContent47').slideToggle(500);
//     });
//     $('.container .row .button48').click(function () {
//         $('.container .row .displayContent48').slideToggle(500);
//     });
//     $('.container .row .button49').click(function () {
//         $('.container .row .displayContent49').slideToggle(500);
//     });
//     $('.container .row .button50').click(function () {
//         $('.container .row .displayContent50').slideToggle(500);
//     });
//     $('.container .row .button51').click(function () {
//         $('.container .row .displayContent51').slideToggle(500);
//     });
//     $('.container .row .button52').click(function () {
//         $('.container .row .displayContent52').slideToggle(500);
//     });
//     $('.container .row .button53').click(function () {
//         $('.container .row .displayContent53').slideToggle(500);
//     });
// });

// // 2) Second plus button :
// $(document).ready(function () {
//     $('#plus2').click(function () {
//         $('#group2').slideToggle('slow');
//     });
// });

// // 3) Third plus button :
// $(document).ready(function () {
//     $('#plus3').click(function () {
//         $('#group3').slideToggle('slow');
//     });
// });

// 4) Fourth plus button :

$(document).ready(function () {
  $("#plus4").click(function () {
    $("#group4").slideToggle("slow");
  });
});

// =========================================================
// =========================================================
// =========================================================

// II] Functions buttons [4] main functions :
// 1] {text()} Functions button [ 5 ] Get/Set functions in a group :
// First text Get function => [Get the element content[textNode] as an alert meesage  ] :
$(document).ready(function () {
  $("#btn11").click(function () {
    var elem = $(".display").text();
    alert(elem);
  });
});
// ------------------------------------------------------

// 1] {text()} /  Second text Set function => [Set the element content[textNode] as another element content[textNode]  ] :
$(document).ready(function () {
  $("#btn12").click(function () {
    var elem = $(".display").text(),
      play = $(".play");
    play.text(elem);
    alert(
      "element [textnode] value has been changed by the [textnode] the of the another element"
    );
  });
});
// ---------------------------------------------------

// 1] {text()} / Third text Set function => [Set the element content[textNode] as another element content[Html]  ] :
$(document).ready(function () {
  $("#btn13").click(function () {
    var elem = $(".display").html(),
      play = $(".playhtml");

    play.text(elem);

    alert(
      "element [textnode] value has been changed by the [HTML] the of the another element"
    );
  });
});
// ----------------------------------------------
// 1] {text()} / Fourth text Set function => [Set the element content[textNode] as another element content[val]  ] :
$(document).ready(function () {
  $("#btn14").click(function () {
    var input = $(".input"),
      play = $(".playhtml");

    input.val("this the value of the input field by usiung the code ");

    play.text(input.val());

    // input.val(elem.text());

    alert("element [textnode] value has been changed by the [input value] ");
  });
});
// ----------------------------------------------
// 1] {text()} / Fifth text Set function => [Set the element content[textNode] as another element content[attribute : class]  ] :
$(document).ready(function () {
  $("#btn15").click(function () {
    var elem = $(".display"),
      play = $(".playhtml");
    play.text(elem.attr("class"));
    alert(
      "element [textnode] value has been changed by the [attribute] the of the another element"
    );
    // play.text(elem);
  });
});
// ----------------------------------------------
// ----------------------------------------------

// 2] {html()} Functions button [ 5 ] Get/Set functions in a group :
// First html Get function => [Get the element content[HTML] as an alert meesage  ] :
$(document).ready(function () {
  $("#btn21").click(function () {
    var elem = $(".display").html();
    alert(elem);
  });
});
// ------------------------------------------------------

// 2] {html()} / Second html Set function => [Set the element content[html] as another element content[html]  ] :
$(document).ready(function () {
  $("#btn22").click(function () {
    var elem = $(".display").html(),
      play = $(".play");

    play.html(elem);
    alert(
      "element [html] value has been changed by the [html] the of the another element"
    );
  });
});
// ---------------------------------------------------

// 2] {html()} / Third html Set function => [Set the element content[html] as another element content[textnode]  ] :
$(document).ready(function () {
  $("#btn23").click(function () {
    var elem = $(".display"),
      play = $(".playhtml");

    play.html(elem.text());
    alert(
      "element [html] value has been changed by the [textnode] the of the another element"
    );
  });
});
// ----------------------------------------------

// 2] {html()} / Fourth html Set function => [Set the element content[html] as another element content[val]  ] :
$(document).ready(function () {
  $("#btn24").click(function () {
    var input = $(".input"),
      play = $(".playhtml");

    play.html(input.val());
    alert("element [html] value has been changed by the [input value] ");
  });
});
// ----------------------------------------------
// 2] {html()} /  Fifth html Set function => [Set the element content[html] as another element content[attribute]] :
$(document).ready(function () {
  $("#btn25").click(function () {
    var elem = $(".display"),
      play = $(".playhtml");

    play.html(elem.attr("class"));
    alert(
      "element [html] value has been changed by the [attriubte] the of the another element"
    );
  });
});
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------

// 3] {val()} Functions button [ 5 ] Get/Set functions in a group :
// First value Get function => [Get the element content[val] as an alert meesage  ] :
$(document).ready(function () {
  $("#btn31").click(function () {
    var input = $(".input");

    input.val("From the JQ"); // [Setting a test value from the input field]

    alert(input.val());
  });
});
// ------------------------------------------------------

// 3] {val()} / Second value Set function => [Set the element content[val] as another element content[textNode]  ] :
$(document).ready(function () {
  $("#btn32").click(function () {
    var input = $(".input"),
      elem = $(".display");

    input.val(elem.text());

    alert(
      "input [val] value has been changed by the [textnode] the of the another element"
    );
  });
});
// ---------------------------------------------------

// 3] {val()} / Third value Set function => [Set the element content[val] as another element content[Html]  ] :
$(document).ready(function () {
  $("#btn33").click(function () {
    var input = $(".input"),
      elem = $(".display");

    input.val(elem.html());
    alert(
      "input [val] value has been changed by the [html] the of the another element"
    );
  });
});
// ----------------------------------------------
// 3] {val()} / Fourth value Set function => [Set the element content[val] as another element content[val]  ] :
$(document).ready(function () {
  $("#btn34").click(function () {
    var elem = $(".input"),
      elem2 = $(".input1");

    elem2.val(elem.val());
    alert(
      "input [val] value has been changed by the [val] the of the another input"
    );
  });
});
// ----------------------------------------------
// 3] {val()} / Fifth value Set function => [Set the element content[val] as another element content[attriubte] value  ] :
$(document).ready(function () {
  $("#btn35").click(function () {
    var elem = $(".input"),
      play = $(".playhtml");

    elem.val(play.attr("class"));
    alert(
      "input [val] value has been changed by the [attribute] value the of the another element"
    );
  });
});
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------

// 4] {attr()} Functions button [ 5 ] Get/Set functions in a group :
// First attribute  Get function => [Get the element content[attribute:class] value as an alert meesage  ] :
$(document).ready(function () {
  $("#btn41").click(function () {
    var elem = $(".display").attr("class");
    alert(elem);
  });
});
// ------------------------------------------------------

// 4] {attr()} / Second attribute Set function => [Set the element content[attribute: class] as another element content[textNode]  ] :
$(document).ready(function () {
  $("#btn42").click(function () {
    var elem = $(".shadi").text(),
      play = $(".play");

    play.attr("class", elem);

    alert(
      "element [attribute : class] value has been changed by the [textnode] the of the another element"
    );
  });
});
// ---------------------------------------------------

// 4] {attr()} / Third attribute Set function => [Set the element content[attribute : class] as another element content[Html]  ] :
$(document).ready(function () {
  $("#btn43").click(function () {
    var elem = $(".shadi").html(),
      play = $(".play");

    play.attr("class", elem);

    alert(
      "element [attribute : class] value has been changed by the [html] the of the another element"
    );
  });
});
// ----------------------------------------------

// 4] {attr()} / Fourth attribute Set function => [Set the element content[attribute:class] as another input content[val]  ] :
$(document).ready(function () {
  $("#btn44").click(function () {
    var elem = $(".input"),
      play = $(".play");

    // elem.val('testing value of input field');
    alert(elem.val());
    play.attr("class", elem.val());

    alert(
      "element [attribute : class] value has been changed by the [val] the of the another input"
    );
  });
});
// ----------------------------------------------
// 4] {attr()} / Fifth attribute Set function => [Set the element content[attribute:class] as another element content[attribute:class] value  ] :
$(document).ready(function () {
  $("#btn45").click(function () {
    var elem = $(".shadi"),
      play = $(".playhtml");

    play.attr("class", elem.attr("class"));
    alert(
      "element [attribute:class] value has been changed by the [attribute:class] value the of the another element"
    );
  });
});
// ---------------------------------------------
// 4] {attr()} / Sixth attribute Set function => [Set the element multiple attributes content[attribute: class |id | style] as given entires of the developer [attribute:class]  ] :
$(document).ready(function () {
  $("#btn46").click(function () {
    var play = $(".playhtml");

    play.attr({
      class: "new Class",
      id: "new id",
      style: "new style",
    });
    alert(
      "element [attribute:class] value has been changed by the [attribute:class] value the of the another element"
    );
  });
});
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// function display() {

// }
