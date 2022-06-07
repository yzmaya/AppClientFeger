
/*
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
  
  
      // User is signed in.
  
      var user = firebase.auth().currentUser;
      console.log('usuario autentificado');
      window.location.href = 'home.html';
  
      if(user != null){
  
      }
  
    } else {
      // No user is signed in.
  
      console.log('usuario no logueado')
  
    }
  });
  -*/
  function login(){
  
    var userEmail = document.getElementById('campo_email').value;
    var userPwd = document.getElementById('campo_pwd').value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPwd).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }


 
  function loginHARD(){
  
    var userEmail = document.getElementById('campo_email').value;
    var userPwd = document.getElementById('campo_pwd').value;
  
   if ((userEmail == "luisangel.duron@feger.com.mx") && (userPwd == "Feger2022")){
    localStorage.setItem("UserID", "GsIAhi9LeIVctMWBlhYSzKbCRef1");
    localStorage.setItem("UserName", "Luis Angel Durón");
  
    window.location.href = "home.html"

   }else if((userEmail == "atnclientesfeger@gmail.com") && (userPwd == "Feger2022")){
    localStorage.setItem("UserID", "0CQXGjrqrdNIEBDpcUZzMTg5ARZ2");
    localStorage.setItem("UserName", "Verónica Flores");
  
    window.location.href = "home.html"

   }else if((userEmail == "asistentefeger@gmail.com") && (userPwd == "Feger2022")){
    localStorage.setItem("UserID", "DxotYIXpNlaYMpd1G2owqR76iy32");
    localStorage.setItem("UserName", "Areli Muñoz");
  
    window.location.href = "home.html"

   }else if((userEmail == "asesorventasfeger@gmail.com") && (userPwd == "Feger2022")){
    localStorage.setItem("UserID", "ZCZa6bwW8uQNjkdLyNPBqpNjyp13");
    localStorage.setItem("UserName", "Asesor ventas");
  
    window.location.href = "home.html"

   }else if((userEmail == "ivonnemtzsoto@gmail.com") && (userPwd == "Feger2022")){
    localStorage.setItem("UserID", "CBNvrE3hCpNxquJSN4WOyDQj23D2");
    localStorage.setItem("UserName", "Ivonne Martínez");
  
    window.location.href = "home.html"
   
   }else if((userEmail == "baruch.beltran@belsua.com") && (userPwd == "Feger2022")){
    localStorage.setItem("UserID", "uAG41FLLXJaw2iUnIRyoOUCc8WF3");
    localStorage.setItem("UserName", "Baruch Beltrán");
  
    window.location.href = "home.html"
   }
   else{
    {
       alert("algo anda mal con tu correo electrónico")
   }
  


}
  }


 
  
  function cuentaNueva(){
  
    var newEmail = document.getElementById('nuevo_email').value;
    var newPwd = document.getElementById('nuevo_pwd').value;
  
    firebase.auth().createUserWithEmailAndPassword(newEmail, newPwd).catch(function(error) {
    // Handle Errors here.
  
  
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  
    window.alert(errorMessage);
  });
  }
  
  
  function restablecePwd(){
    var auth = firebase.auth();
    
  var correo = document.getElementById('restablece_email').value;
  
  auth.sendPasswordResetEmail(correo).then(function() {
    $('#mensajito').show();
    // Email sent.
  }).catch(function(error) {
    // An error happened.
    window.alert(error);
  });
  
  }
  
  
  
  // Añadir un listener en tiempo real
   //  firebase.auth().onAuthStateChanged( firebaseUser => {
  //Si existe autenticación hacer.....
     // if(firebaseUser) {
       //    window.location.href = "form.html";
      //} else {
        //console.log('no logueado');
  
      //}    
    //});
  
  
  
  