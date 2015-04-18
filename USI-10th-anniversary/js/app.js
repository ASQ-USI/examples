$(function(){
  $('.asq-option input[type="radio"]').on('change', function(){
    var action = this.checked? 'addClass': 'removeClass';
    $(this).closest('label')[action]('checked');
   });

   $('.asq-exercise button[type="submit"].btn-success').text("Invia");
   $('.asq-confidence-label').text("Quanto sei sicuro?");

   function start(evt) {
     evt.preventDefault();
     var countdown = 3;
     var tick = function() {
       var d = document.getElementById("countdown");
       d.innerHTML = countdown;
       countdown--;
       if (countdown == 0) {
         setTimeout(function() {
           window.location.hash = "sq2";
         }, 1000);
         d.innerHTML = "go!"
       } else {
         setTimeout(tick,1000);
       }
     }
     tick();
   }


   function goToHref(evt) {
     evt.preventDefault();
     evt.stopImmediatePropagation();
     evt.stopPropagation();
     var el = evt.currentTarget;
     var api = impress();
     api.next();
   }

   $('#playername-form').submit(function(evt){
     evt.preventDefault();
   })

   //Mobile events
   //Check for touchstart
  if('ontouchstart' in document.documentElement) {
    $('#start-btn').on('touchstart', start);
    $('.btn.btn-primary.href-nav').on('touchstart', goToHref);

    $('.step').on('touchstart', function(){
      $('#playername').blur();
    });

    $('input[type="submit"] , button[type="submit"]').on('touchstart', function(){
      var $form = $(this).closest('form');
      $form.submit();
    });
     $('input[type="submit"] , button[type="submit"]').on('click', function(evt){
     evt.preventDefault();
    });
  }else{
    $('#start-btn').on('click', start);
    $('.btn.btn-primary.href-nav').on('click', goToHref);
  }  
});
