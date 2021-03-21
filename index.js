var ButtonNO=document.querySelectorAll(".drum").length;
// alert(ButtonNO);
for(var i=0;i< ButtonNO;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
 var innerText=(this.innerHTML);
 // alert(innerText);
 switch (innerText) {
   case "stalin":
      var b= new Audio('sounds/stalin.mp3');
      b.play();
      break;
   case "Bahubali":
      var b= new Audio('sounds/bb.mp3');
      b.play();
      break;
   case "Money Heist":
      var b= new Audio('sounds/mh.m4a');
      b.play();
      break;
   case "Jack sprrow":
      var b= new Audio('sounds/jd.mp3');
      b.play();
      break;
   case "fearless":
      var b= new Audio('sounds/fearless.m4a');
      b.play();
      break;
   case "Bahubali 2":
      var b= new Audio('sounds/bb1.mp3');
      b.play();
      break;
   case "Money Heist 2":
      var b= new Audio('sounds/mh1.mp3');
      b.play();
      break;
   case "Peaky Blinders":
      var b= new Audio('sounds/pb.m4a');
      b.play();
      break;
   default:
      alert("NO Match Found");
      break;

 }
});
}
toggle()
