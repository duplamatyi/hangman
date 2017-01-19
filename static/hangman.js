$(document).ready(function() {
    var guessButton = $( '#guess-btn'),
        guess = $('#guess'),
        word = $('#word'),
        lastGuess,
        misses = 0;

    guessButton.click(sendForm);

    guess.keydown(function(event){
        if (event.keyCode == 13) {
            event.preventDefault();
            sendForm();

            return false;
        }
    });

    function sendForm() {
        lastGuess = guess.val();
        $.ajax({
          type: "POST",
          url: 'guess',
          data: $( "#guess-form" ).serialize(),
          success: function(data) {
              guess.val('');
              if (data.hits.length > 0) {
                  for (var i in data.hits) {
                      word.find('span:eq(' + data.hits[i] + ')').text(lastGuess);
                  }

                  if (0 === $('#word').find('span:contains("_")').length) {
                      guessButton.prop('disabled', true);
                      $('h2').css('color', 'green').text('You Won!!!');
                  }
              } else {
                 if (5 === ++misses) {
                    guessButton.prop('disabled', true);
                    guess.prop('disabled', true);

                    $('h2').css('color', 'red').text('You Lost!!!');
                 }
              }
          },
          dataType: 'json'
        });
    }
});
