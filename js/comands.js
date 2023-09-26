var slides=new Array("img/smite.jpg","img/dead.png", "img/valorant.png", "img/war.png", "img/minecraft.png", "img/ark.png");
var tam=slides.length;
var satual=0;
var tmpSlider;

function trocaAutomatica(){
	satual++;

	if(satual >= tam){
		satual=0;
	}

	document.getElementById("conteinerA").style.backgroundImage="url("+slides[satual]+")";
}
function iniciaSlider(){
	document.getElementById("conteinerA").style.backgroundImage="url('"+slides[satual]+"')";
	tmpSlider=setInterval(trocaAutomatica, 3000);
}

function parar(){
	clearInterval(tmpSlider);
}

function troca(dir){
	satual+=dir;

	if(satual < 0){
		satual=tam-1;
	}else if(satual >= tam){
		satual=0;
  }
	document.getElementById("conteinerA").style.backgroundImage="url('"+slides[satual]+"')";
	clearInterval(tmpSlider);
	tmpSlider=setInterval(trocaAutomatica,3000);
}
