$(document).ready(function(){
  $("#btnSignUp").click(function(){
    window.location.replace("register.html")
  });

  $('#login_form').on('submit', function(event) {
    event.preventDefault();
    /*const json = serialize_form(this);*/
    const user = $("#inputUser").val();
    const password = $("#inputPassword").val();
    var obj = { uname: user, pswrd: password};
    var myJSON = JSON.stringify(obj);

    console.log(myJSON);
    $.ajax({
      accepts: {
        mycustomtype: 'text/html,application/xhtml+xml,application/json,application/xml;q=0.9,image/webp,/;q=0.8'
      },
      type: 'POST',
      url: 'http://147.83.7.208:8080/dsaApp/Authentication/Login',
      dataType: 'json',
      data: myJSON,
      contentType: 'application/json',
      success: function(data) {
        alert(data)
      },
      error: function(xhr,resp,text){
        console.log(xhr,resp,text);
      }
    });
  });
});
