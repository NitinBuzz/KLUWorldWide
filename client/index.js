var socket = io();

jQuery('.news-letter').on('submit', function(e) {
  e.preventDefault();
  var email = jQuery('#subscribe-email').val();
  socket.emit(
    'postUser',
    {
      text: email
    },
    function(error) {
      if (error) {
        $('.alert-warning')
          .html('Unable to sign you up, Please try again after sometime')
          .fadeIn()
          .delay(3000)
          .fadeOut();
        console.log('unable to save email to db');
      } else {
        $('.alert-success')
          .html('You are signed up, BOOM!')
          .fadeIn()
          .delay(3000)
          .fadeOut();
      }
    }
  );
});
