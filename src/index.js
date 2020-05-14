var Body1, Body2, verb, Adjective, Noun;
function Next(){
 Body1 = document.getElementById("Body1").value;
 Body2 = document.getElementById("Body2").value;
 verb = document.getElementById("verb").value;
 Adjective = document.getElementById("Adjective").value;
 Noun = document.getElementById("Noun").value;
//noise = noise.toUpperCase();
document.getElementById("textbox").value= `To play, first spread your ${Body1} shoulder width apart, and get into a(n) ${Adjective} stance. Then, when the ${Noun} comes, you will try to ${verb} it with your ${Body2}.`;
//document.getElementById("results").style.display="flex";
document.getElementById("inputs").style.display="none";
};
function reset(){
  document.getElementById("Body1").value="";
  document.getElementById("Body2").value="";
  document.getElementById("verb").value="";
  document.getElementById("Adjective").value="";
  document.getElementById("Noun").value="";
  document.getElementById("textbox").value="";
  document.getElementById("inputs").style.display="initial";
  document.getElementById("results").style.display="initial";
 }

document.getElementById("nextBtn").addEventListener("click", Next);
document.getElementById("resetB").addEventListener("click", reset);
