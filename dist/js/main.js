/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
function switchMode (){
	var privateMode = document.getElementById("privateMode");
	var body = document.getElementsByTagName("body");
	var header = document.getElementsByTagName("header");
	var slider = document.getElementById("slider");
	var profilePicture = document.getElementById("profilePicture");
	var hi = document.getElementById("hi");
	var IAm = document.getElementById("IAm");
	var private = document.getElementsByClassName("private");
	var block = document.getElementsByClassName("block");
	var cardContainer = document.getElementById("cardContainer");
	var hiContainer = document.getElementById("hiContainer");
	var whereToFind = document.getElementById("whereToFind");
	var footerImg = document.getElementById("footerImg");
	
	

	  if (privateMode.checked == true){
		//change background and font colors
		body[0].classList.remove("white");
		body[0].classList.add("black");
		header[0].classList.remove("black");
		header[0].classList.add("white");

		//change image and position
		profilePicture.src = "/img/sarah_privat.png";
		profilePicture.classList.remove("left");
		profilePicture.classList.add("right");

		hiContainer.classList.remove("right");
		hiContainer.classList.add("left");
		cardContainer.classList.remove("right");
		cardContainer.classList.add("left");
		

		//change text and text position
		hi.innerHTML = "Halo!";
		IAm.innerHTML = "I bims Sarah!";
		whereToFind.innerHTML = "Dinge, die ich sonst nutze"

		
		for (elem of block) {
			elem.style.display = "none";
		  }
		  for (elem of private) {
			elem.style.display = "unset";
	  }

		//show footer image
		footerImg.style.display = "unset";
		
	  } else {
		body[0].classList.remove("black");
		body[0].classList.add("white");
		header[0].classList.remove("white");
		header[0].classList.add("black");

		//change image and position
		profilePicture.src = "/img/sarah_business.png";
		profilePicture.classList.remove("right");
		profilePicture.classList.add("left");

		hiContainer.classList.remove("left");
		hiContainer.classList.add("right");
		cardContainer.classList.remove("left");
		cardContainer.classList.add("right");
		

		//change text and text position
		hi.innerHTML = "Hi!";
		IAm.innerHTML = "Ich bin Sarah."
		whereToFind.innerHTML = "Wo ich sonst zu finden bin"

		for (elem of block) {
			elem.style.display = "unset";
		  }
		  for (elem of private) {
			elem.style.display = "none";
	  }

		//show footer image
		footerImg.style.display = "none";

	  } 
		}