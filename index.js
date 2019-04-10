// image change functions

function blueInvite() {
  function blueImage() {
    var image = document.getElementById("image");
    if (image.src.match("https://i.ibb.co/41PLhPJ/Cream-Florals-Wedding-Invitation-1.png")) {
        image.src = "https://i.ibb.co/4fHB8nW/Blue-Wedding-Invitation-1.png";
        }
    else if (image.src.match("https://i.ibb.co/48dx5qd/Fall-Wedding-Wedding-Invitation.png")) {
        image.src = "https://i.ibb.co/4fHB8nW/Blue-Wedding-Invitation-1.png";
        }
    else {
          image.src = "https://i.ibb.co/4fHB8nW/Blue-Wedding-Invitation-1.png";
              }
        }
  function blueFont() {
      var fontnameone = document.getElementById("addnameone");
      if (fontnameone.style.fontFamily == 'helvetica') {
          fontnameone.style.fontFamily = "Courier,sans-serif";
      }
      else if (fontnameone.style.fontFamily == 'georgia') {
          fontnameone.style.fontFamily = "Courier,sans-serif";
      }
      else {
          fontnameone.style.fontFamily = "Courier,sans-serif";
      }
      
      var fonttwo = document.getElementById("addnametwo");
      if (fonttwo.style.fontFamily == 'helvetica') {
          fonttwo.style.fontFamily = "Courier,sans-serif";
      }
      else if (fonttwo.style.fontFamily == 'georgia') {
          fonttwo.style.fontFamily = "Courier,sans-serif";
      }
      else {
          fonttwo.style.fontFamily = "Courier,sans-serif";
      }
      
      var fontlastname = document.getElementById("addlastname");
      if (fontlastname.style.fontFamily == 'helvetica') {
          fontlastname.style.fontFamily = "Courier,sans-serif";
      }
      else if (fontlastname.style.fontFamily == 'georgia') {
          fontlastname.style.fontFamily = "Courier,sans-serif";
      }
      else {
          fontlastname.style.fontFamily = "Courier,sans-serif";
      }
      var date = document.getElementById("adddate")
      if (date.style.fontFamily == 'helvetica') {
          date.style.fontFamily = "Courier,sans-serif";
      }
      else if (date.style.fontFamily == 'georgia') {
          date.style.fontFamily = "Courier,sans-serif";
      }
      else {
          date.style.fontFamily = "Courier,sans-serif";
      }
      var location = document.getElementById("location")
      if (location.style.fontFamily == 'helvetica') {
          location.style.fontFamily = "Courier,sans-serif";
      }
      else if (location.style.fontFamily == 'georgia') {
          location.style.fontFamily = "Courier,sans-serif";
      }
      else {
          location.style.fontFamily = "Courier,sans-serif";
      }
    }
    
    function fontColor() {
      var color = document.getElementById("addnameone");
      color.style.color = "#EBEEF1";
      var colornametwo = document.getElementById("addnametwo");
      colornametwo.style.color = "#EBEEF1";
      var lastname = document.getElementById("addlastname");
      lastname.style.color = "#EBEEF1";
      var date = document.getElementById("adddate");
      date.style.color = "#EBEEF1";
      var location = document.getElementById("location");
      location.style.color = "#EBEEF1";
    } 
    
    blueImage();
    blueFont();
    fontColor();
}
      
function blackInvite() {
  function blackImage() {
  var image = document.getElementById("image");
  if (image.src.match("https://i.ibb.co/4fHB8nW/Blue-Wedding-Invitation-1.png")) {
      image.src = "https://i.ibb.co/48dx5qd/Fall-Wedding-Wedding-Invitation.png";
      }
  else if (image.src.match("https://i.ibb.co/41PLhPJ/Cream-Florals-Wedding-Invitation-1.png")) {
      image.src = "https://i.ibb.co/48dx5qd/Fall-Wedding-Wedding-Invitation.png";
      }
  else {
        image.src = "https://i.ibb.co/48dx5qd/Fall-Wedding-Wedding-Invitation.png";
            }
      }
  function blackFont() {
    var font = document.getElementById("addnameone");
    if (font.style.fontFamily == 'helvetica') {
        font.style.fontFamily = "Verdana,Charcoal,sans-serif";
    }
    else if (font.style.fontFamily == 'georgia') {
        font.style.fontFamily = "Verdana,Charcoal,sans-serif";
    }
    else {
        font.style.fontFamily = "Verdana,Charcoal,sans-serif";
    }
    
    var fontnametwo = document.getElementById("addnametwo");
    if (fontnametwo.style.fontFamily == 'helvetica') {
        fontnametwo.style.fontFamily = "Verdana,Charcoal,sans-serif";
    }
    else if (fontnametwo.style.fontFamily == 'georgia') {
        fontnametwo.style.fontFamily = "Verdana,Charcoal,sans-serif";
    }
    else {
        fontnametwo.style.fontFamily = "Verdana,Charcoal,sans-serif";
    }
    
    var addlastname = document.getElementById("addlastname");
    if (addlastname.style.fontFamily == 'helvetica') {
        addlastname.style.fontFamily = "Verdana,Charcoal,sans-serif";
    }
    else if (addlastname.style.fontFamily == 'georgia') {
        addlastname.style.fontFamily = "Verdana,Charcoal,sans-serif";
    }
    else {
        addlastname.style.fontFamily = "Verdana,Charcoal,sans-serif";
    }
    
    var date = document.getElementById("adddate");
    if (date.style.fontFamily == 'helvetica') {
        date.style.fontFamily = "Verdana,Charcoal,sans-serif";
    }
    else if (date.style.fontFamily == 'georgia') {
        date.style.fontFamily = "Verdana,Charcoal,sans-serif";
    }
    else {
        date.style.fontFamily = "Verdana,Charcoal,sans-serif";
    }
    
    var location = document.getElementById("location");
    if (location.style.fontFamily == 'helvetica') {
        location.style.fontFamily = "Verdana,Charcoal,sans-serif";
    }
    else if (location.style.fontFamily == 'georgia') {
        location.style.fontFamily = "Verdana,Charcoal,sans-serif";
    }
    else {
        location.style.fontFamily = "Verdana,Charcoal,sans-serif";
    }
  }
  
  function fontColor() {
      var color = document.getElementById("addnameone");
      color.style.color = "#EBEEF1";
      var colornametwo = document.getElementById("addnametwo");
      colornametwo.style.color = "#EBEEF1";
      var lastname = document.getElementById("addlastname");
      lastname.style.color = "#EBEEF1";
      var date = document.getElementById("adddate");
      date.style.color = "#EBEEF1";
      var location = document.getElementById("location");
      location.style.color = "#EBEEF1";
    } 
    
  blackImage();
  blackFont();
  fontColor();
}
      
function greenInvite() {
    function greenImage() {
        var image = document.getElementById("image");
      if (image.src.match("https://i.ibb.co/4fHB8nW/Blue-Wedding-Invitation-1.png")) {
          image.src = "https://i.ibb.co/41PLhPJ/Cream-Florals-Wedding-Invitation-1.png";
          }
      else if (image.src.match("https://i.ibb.co/48dx5qd/Fall-Wedding-Wedding-Invitation.png")) {
          image.src = "https://i.ibb.co/41PLhPJ/Cream-Florals-Wedding-Invitation-1.png";
          }
      else {
            image.src = "https://i.ibb.co/41PLhPJ/Cream-Florals-Wedding-Invitation-1.png";
                }
          }
          
    function greenFont() {
        var fontnameone = document.getElementById("addnameone");
        if (fontnameone.style.fontFamily == 'helvetica') {
            fontnameone.style.fontFamily = "georgia";
        }
        else if (fontnameone.style.fontFamily == 'impact') {
            fontnameone.style.fontFamily = "georgia";
        }
        else {
            fontnameone.style.fontFamily = "georgia";
        }
        
        var fontnametwo = document.getElementById("addnametwo");
        if (fontnametwo.style.fontFamily == 'helvetica') {
            fontnametwo.style.fontFamily = "georgia";
        }
        else if (fontnametwo.style.fontFamily == 'impact') {
            fontnametwo.style.fontFamily = "georgia";
        }
        else {
            fontnametwo.style.fontFamily = "georgia";
        }
        
        var fontlastname = document.getElementById("addlastname");
        if (fontlastname.style.fontFamily == 'helvetica') {
            fontlastname.style.fontFamily = "georgia";
        }
        else if (fontlastname.style.fontFamily == 'impact') {
            fontlastname.style.fontFamily = "georgia";
        }
        else {
            fontlastname.style.fontFamily = "georgia";
        }
        
        var date = document.getElementById("adddate");
        if (date.style.fontFamily == 'helvetica') {
            date.style.fontFamily = "georgia";
        }
        else if (date.style.fontFamily == 'impact') {
            date.style.fontFamily = "georgia";
        }
        else {
            date.style.fontFamily = "georgia";
        }
        
        var location = document.getElementById("location");
        if (location.style.fontFamily == 'helvetica') {
            location.style.fontFamily = "georgia";
        }
        else if (location.style.fontFamily == 'impact') {
            location.style.fontFamily = "georgia";
        }
        else {
            location.style.fontFamily = "georgia";
        }
      }
    
    function fontColor() {
      var color = document.getElementById("addnameone");
      color.style.color = "#050F0B";
      var colornametwo = document.getElementById("addnametwo");
      colornametwo.style.color = "#050F0B";
      var lastname = document.getElementById("addlastname");
      lastname.style.color = "#050F0B";
      var date = document.getElementById("adddate");
      date.style.color = "#050F0B";
      var location = document.getElementById("location");
      location.style.color = "#050F0B";
    }  
    
    greenImage();
    greenFont();
    fontColor();
}  
  

      
// on keyDown

function firstName() {
  var name = document.getElementById("formfirstname").value
  document.getElementById('addnameone').innerHTML = `${name}  &`;
}

function secondName() {
  var name = document.getElementById("formsecondname").value
  document.getElementById('addnametwo').innerHTML = `${name}`;
}

function lastName() {
  var name = document.getElementById("formlastname").value
  document.getElementById('addlastname').innerHTML = `${name}`;
}

function addDate() {
  var name = document.getElementById("formdate").value
  document.getElementById('adddate').innerHTML = `${name}`;
}

function addLocation() {
  var name = document.getElementById("formlocation").value
  document.getElementById('location').innerHTML = `${name}`;
}

