
const header=document.getElementsByTagName("header")[0];

console.log(header);


window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

    // YOUR CODE HERE

    // If the page's scroll position (scrollPosition) is higher than, say, 65
    // add the class `active`.
    // Otherwise, remove it.
    if (scrollPosition > 65){

    	header.classList.add("active");
    }else{
    	header.classList.remove("active");
    }


    document.querySelectorAll("section").forEach(section =>{

    	const getRect= section.getBoundingClientRect()

		if (getRect.top<window.innerHeight){
			
			section.classList.add('active');

		}else{
			section.classList.remove('active');
		}


    })

	


});



let counter=0;
const images= [...document.querySelectorAll(".carousel-image")];
setInterval(() => {

   if (counter<images.length-1){
   		images[counter].className+=" hidden";
   	  	counter++;
   	  	images[counter].className="carousel-image"
   }else{
   		images[counter].className+= " hidden";
   		counter =0;
   		images[counter].className="carousel-image"
   }


}, 5000)



