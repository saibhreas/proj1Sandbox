var formEl = $('#pizza-form');
function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();

    // Select all checked options
  var checkedEl = $('input:checked');
  var selected = [];
console.log(checkedEl);
  // Loop through checked options to store in array
  $.each(checkedEl, function () {
    selected.push($(this).val());
  });
  console.log('Requests ', selected.join(', '));

  // Clear input fields

  $('input[type="checkbox"]').prop('checked', false);
}

// Submit event on the form
formEl.on('submit', handleFormSubmit);
