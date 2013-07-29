var mainapp = {

	showAlert: function (message, title) {
    if (navigator.notification) {
      navigator.notification.alert(message, null, title, 'OK');
    } else {
      alert(title ? (title + ": " + message) : message);
    }
  },

  renderHomeView: function() {
    var html =
    "<div class='header'><h1>Home</h1></div>" +
    "<div><p>Hello World!</p><br />" +
    "<a id='openReg' href='#' data-role='button' data-icon='star'>Open Register</a>" +
    "</div>"
    $('body').html(html);
    $('#openReg').bind('click', $.proxy(this.renderRegisterView, this));
  },

  renderRegisterView: function(){
    var html = 
    "<div class='header'><h1>Register</h1></div>" +
    "<form action='_self' method ='post'>" +
    "<label>Name</label>" +
    "<input type='text' name='username' id='username'/><br />" + 
    "<label>Email</label>" +
    "<input type='text'/><br />" + 
    "<label>Password</label>" +
    "<input type='password' name='password' id='password'/><br />" + 
    "<label>Password Confirmation</label>" +
    "<input type='password' name='passconfirm' id='passconfirm'/><br />" + 
    "<input type='submit' value='submit'/>" +
    "</form>" +
    "<br /> <p><a class='back' href='#'>Go Home</a>"
    $('body').html(html);
    $('.back').bind('click', $.proxy(this.renderHomeView, this));
  },

  initialize: function() {
    this.renderHomeView();
    // $('#openReg').bind('click', $.proxy(this.renderRegisterView, this));
  }
}

// mainapp.initialize();