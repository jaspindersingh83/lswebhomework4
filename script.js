
document.body.style.backgroundColor = "red";
document.querySelector("h1").style.backgroundColor="blue";
document.body.style.fontFamily="sans-serif";
document.getElementById("nickname").innerHTML="Jaspinder"
document.getElementById("favorites").innerHTML="losangeles";
document.getElementById("hometown").innerHTML="Ludhiana";



var unorder_list=document.querySelectorAll("li")
for (var i =0;i<unorder_list.length;i++){
	unorder_list[i].className="listitem";
	unorder_list[i].style.backgroundColor="white";
	unorder_list[i].style.color="red";
}

var img= document.createElement("img");
 img.setAttribute("src", "sample.jpg");
 img.setAttribute("width", "304");
 img.setAttribute("height", "228");
document.body.appendChild(img); 

