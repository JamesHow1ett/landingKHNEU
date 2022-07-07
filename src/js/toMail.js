// $(document).ready(() => {
//   // E-mail Ajax Send
//   $('form').submit(function () { // Change
//     const th = $(this);
//     $.ajax({
//       type: 'POST',
//       url: './mail.php', // Change
//       data: th.serialize(),
//     }).done(() => {
//       alert('Дякуемо за реєстрацію!');
//       setTimeout(() => {
//         // Done Functions
//         th.trigger('reset');
//       }, 1000);
//     });
//     return false;
//   });
// });
