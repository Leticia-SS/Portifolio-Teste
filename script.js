function abrir(x){
  let projeto = document.getElementsByClassName("cardprojetoconteudo");
  let setas = document.getElementsByClassName("setaicon");
  console.log(setas[x].src)
  console.log(setas[x].src.split("/"))
  
  for (let i=0;i<projeto.length;i++){
    if (projeto[i]!=projeto[x]){
       projeto[i].classList.add("esconder")
      setas[i].src="img/arrowdown.png"
    }
  }
      
    projeto[x].classList.toggle("esconder");

  let setasplit = setas[x].src.split("/")
  
  if(setasplit[setasplit.length-1]=="arrowdown.png"){
    setas[x].src="img/arrowup.png"
  }
  else{
    setas[x].src="img/arrowdown.png"
  }
}

