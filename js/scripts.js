// $(document).ready(function() {
// });
// var result = $("input:radio[name=question1]:checked").val();

$(document).ready(function() {
  $("form#answers").submit(function() {
      event.preventDefault();
      var q1 = parseInt($("input:radio[name=question1]:checked").val());
      var q2 = parseInt($("input:radio[name=question2]:checked").val());
      var q3 = parseInt($("input:radio[name=question3]:checked").val());
      var total = q1+q2+q3;
      alert(q1+q2+q3);
    });
  });
