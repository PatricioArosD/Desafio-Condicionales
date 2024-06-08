let verificar = document.querySelector("#verificar");

verificar.addEventListener("click", () => {

  let input1 = document.querySelector("#input1").value;
  let input2 = document.querySelector("#input2").value;
  let input3 = document.querySelector("#input3").value;
 
   if(isNaN(input1)){
    input1=0;
  }else if(input1<0){
    input1=0;
  }
  else{}
  if(isNaN(input2)){
    input2=0;
  }else if(input2<0){
    input2=0;
  }else{}
  if(isNaN(input3)){
    input3=0;
  }else if(input3<0){
    input3=0;
  }else{}

  let suma = Number(input1) + Number(input2) + Number(input3);
if (suma > 10) {
  document.querySelector("h2").innerHTML = "Tienes muchos Pines";
} else {
  document.querySelector("h2").innerHTML = ("Tienes " + suma +" Pines");
}
});
