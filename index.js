function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  function responsiveFunction() {
    var x = document.getElementById("navbarSupportedContent");
    if (x.className === "collapse") {
      x.className += "responsive";
    } else {
      x.className = "collapse";
    }
  }

  let flag=1;
  slides(flag);
  function controller(X){
      flag=flag+X;
      slides(flag);
  }
  function slides(num){
      let slide = document.getElementsByClassName("slide");
      console.log(slide);
      for(let y of slide){
          y.style.display="none";
      }
      if(num==slide.length){
          flag=0;
          num=0;
      }
      if(num<0){
          flag=slide.length-1;
          num= slide.length-1;
      }
      slide[num].style.display="block";
  }