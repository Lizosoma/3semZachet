$(document).ready(function() {

   $('.js-tab-trigger').click(function() {
      var id = $(this).attr('data-tab'),
          content = $('.js-tab-content[data-tab="'+ id +'"]');
      
      $('.js-tab-trigger.active').removeClass('active');
      $(this).addClass('active');
      
      $('.js-tab-content.active').removeClass('active');
      content.addClass('active');

      if (id == 2) {
         $(this).css("border-radius", "0 50px 50px 0");
      };
   });

   $.validator.addMethod("EMAIL", function(value, element) {
       return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,3}$/i.test(value);
   }, "Некорректный адрес электронной почты");

   $.validator.addMethod("PASSWORD",function(value,element){
       return this.optional(element) || /^(?=.+\d)(?=.+[A-Z])(?=.+[a-z])(?=.+[\!\@\$\%\&\?\*\_\#\(\)\+\<\>\=\^\~]).{8,16}$/i.test(value);
   },"Пароль должен содержать 8-16 символов, прописные и строчные латинские буквы, хотя бы одну цифру и специальный знак");

   $("#register").validate({
      rules: {
         userEmail: {
            required: true,
            EMAIL: true
         },
         password: {
            required: true,
            PASSWORD: true
         },
         username: {
            required: true,
            minlength: 4
         }
      }
   })

      $("#login").validate({
      rules: {
         password: {
            required: true,
            PASSWORD: true
         },
         userName: {
            required: true,
            minlength: 4
         }
      }
   })

      jQuery.extend(jQuery.validator.messages, {
    required: "Необходимо заполнить это поле",
    minlength: jQuery.validator.format("Пожалуйста, введите не менее 4 символов"),
 });

   $('body').on('click', '.password-control', function(){
   if ($('#password-input').attr('type') == 'password'){
      $(this).addClass('view');
      $('#password-input').attr('type', 'text');
   } else {
      $(this).removeClass('view');
      $('#password-input').attr('type', 'password');
   }
   return false;
   });

   $('body').on('click', '.password-control-login', function(){
   if ($('#password-input-login').attr('type') == 'password'){
      $(this).addClass('view');
      $('#password-input-login').attr('type', 'text');
   } else {
      $(this).removeClass('view');
      $('#password-input-login').attr('type', 'password');
   }
   return false;
   });
})
