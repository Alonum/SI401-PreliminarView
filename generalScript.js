function openPDF(string){
    window.open(string,'_blank');
}

  function expandButton(imageLocStringEx,imageLocStringClo, hiddenId, expandId) {
      var hiddenButtonsId = document.getElementById(hiddenId);
      var expandButtonsId = document.getElementById(expandId)
      //console.log(expandButtonsId);
      console.log(expandButtonsId.parentElement.id)
      var imgElement = expandButtonsId.querySelector('img');
      
    
      if (hiddenButtonsId.style.display === "none" || hiddenButtonsId.style.display === "") {
        hiddenButtonsId.style.display = "block";
          imgElement.src = imageLocStringClo;
          imgElement.alt = "Fechar";
          blurOthers(expandButtonsId.parentElement.id);
      } else {
          hiddenButtonsId.style.display = "none";
          imgElement.src = imageLocStringEx;
          imgElement.alt = "Expandir";
          unblurOthers(expandButtonsId.parentElement.id);
      }
  };
  function blur(id)
  {
    let divId = document.getElementById(id)
    divId.classList.add('blur')
  }
  function unblur(id)
  {
    let divId = document.getElementById(id)
    divId.classList.remove('blur')
  }
  function blurOthers(id){
    let divId = document.getElementById(id)
    //console.log(id);
    blur("returnButton");
    blur("pageTitle");

    if(divId == document.getElementById("PDFDiv")){
      blur("RefDiv")
      blur("ExDiv")
    }
    if(divId == document.getElementById("RefDiv")){
      blur("PDFDiv")
      blur("ExDiv")
    }
    if(divId == document.getElementById("ExDiv")){
      blur("PDFDiv")
      blur("RefDiv")
    }
  };

  function unblurOthers(id){
    let divId = document.getElementById(id)
    unblur("returnButton");
    unblur("pageTitle");
    if(divId == document.getElementById("PDFDiv")){
      unblur("RefDiv")
      unblur("ExDiv")
    }
    if(divId == document.getElementById("RefDiv")){
      unblur("PDFDiv")
      unblur("ExDiv")
    }
    if(divId == document.getElementById("ExDiv")){
      unblur("PDFDiv")
      unblur("RefDiv")
    }
  };

  function moveAbove(id){
    let elementId = document.getElementById(id);

    if(elementId.classList.contains("moveAbove")){
      elementId.classList.remove("moveAbove");
      
    }else{
      elementId.classList.add("moveAbove");   
    }
  }



  function transitionCat(buttonsId){
    var hiddenButtonsId = document.getElementById("hiddenButtons");
    var expandButtonsId = document.getElementById(buttonsId)
    console.log(expandButtonsId);
    console.log(expandButtonsId.parentElement.id)
    var imgElement = expandButtonsId.querySelector('img');
    
    if (hiddenButtonsId.style.display === "none" || hiddenButtonsId.style.display === "") {
        spinOut("openB")
        spinIn("closeB")
        hiddenButtonsId.style.display = "block";
        imgElement.alt = "Fechar";
        blurOthers(expandButtonsId.parentElement.id);
    } else {
        hiddenButtonsId.style.display = "none";
        spinOut("closeB")
        spinIn("openB")
        imgElement.alt = "Expandir";
        unblurOthers(expandButtonsId.parentElement.id);
    }
}
function spinIn(buttonElementId){
    let buttonElement = document.getElementById(buttonElementId)
    let imgElement = buttonElement.querySelector('img')
    imgElement.style.removeProperty("animation")
    imgElement.style.animation = "spinIn 2s"
    imgElement.style.opacity = "100"
    buttonElement.style.pointerEvents = "auto";
    imgElement.style.transition = "2s ease"

}
function spinOut(buttonElementId){
    let buttonElement = document.getElementById(buttonElementId)
    let imgElement = buttonElement.querySelector('img')
    imgElement.style.removeProperty("animation")
    imgElement.style.animation = "spinOut 2s"
    imgElement.style.opacity = "0"
    buttonElement.style.pointerEvents = "none";
    imgElement.style.transition = "2s ease"

}