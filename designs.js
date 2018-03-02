const canvas = $('#pixel_canvas');
const colorPicker = $('#colorPicker');
const linesOnOff = $('#grid_switch');
const eraser = $('#erase_grid');

// clicking the submit button
$('#sizePicker').submit(function(event) {
  makeGrid(); // creating the grid
  resetButtonVisibility(); // making the reset button visible/hidden
  hideAnimation(); // covering the animation/running pixel with the grid
  event.preventDefault(); // making sure the grid won't disapper
});

// making the grid
function makeGrid(){
  canvas.children().remove(); // erases the previous grid
  let rows = $('#input_height').val(); // gets the number of entered rows
  let cols = $('#input_width').val();  // gets the number of entered columns

  // the loop: one row - several column cells - and so so ...
  for (let i = 1; i <= rows; i++) { 
    canvas.append('<tr></tr>'); // rows are formed

    for (let j = 1; j <= cols; j++) {
      canvas.children().last().append('<td></td'); // columns are added only to the last row
      $('td').addClass('cells visible_grids'); // each cell can be targeted and has lines
    }
  }

    // clicking the grid's cell - filling the cell with colour
    $('.cells').click(function() { 
      let paint = colorPicker.val();
      $(this).css('background-color', paint);
    });

    // doubleclicking the grid's cell - erasing the cell
    $('.cells').dblclick(function() { 
      $(this).css('background-color', '#eee');
    });
  }

// reloading the page to see the intro decoration
$('#reloadPage').click(function() {
    location.reload(true);
});

// clicking the button to change grid lines ON/OFF
linesOnOff.click(function() {
  if ($('td').hasClass('visible_grids')) {
    canvas.find('*').css('border','1px solid #eee');
    $('td').removeClass('visible_grids'); // using a class removal
  } else {
    canvas.find('*').css('border','1px solid black');
    $('td').addClass('visible_grids'); // and adding the class back
  }
});

// erasing painting
eraser.click(function() {     
  $('.cells').css('background', '#eee');
});

//resetting the input values
$('#reset_btn').click(function() { 
  $('#input_width, #input_height').val('10');
  if ($('#input_width').val()==10 && $('#input_height').val()==10) {
    $(this).css('visibility', 'hidden');
  } else {
    $(this).css('visibility', 'visible');
  }
});

// making sure that the reset button is visible/hidden
function resetButtonVisibility() {
  if ($('#input_width').val()==10 && $('#input_height').val()==10) {
    $('#reset_btn').css('visibility', 'hidden');
  } else {
    $('#reset_btn').css('visibility', 'visible');
  }
}

// getting rid of the introductory "welcome"
function hideAnimation() {
  $('#gridLocation').css('display', 'none');
}

// getting the help slide down
$('#info').on('click', function() {
  $('.infoPanel').slideDown();
});

// closing the info Panel
$('.closePanelButton').click(function() {
  $('.infoPanel').slideUp();
});