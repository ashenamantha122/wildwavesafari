function loadData(name) {
  if (name=="btn1"){
    document.getElementById("image1").src ="images/pic1.jpg";
  }
  else if (name=="btn2") {

    document.getElementById("image1").src ="images/pic2.jpg";
  }
  else if(name=="btn3"){
    document.getElementById("image1").src="images/pic3.jpg";
  }
  else{
      alert("Invalid!!!");
    }
  
  }