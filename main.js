let scrollUp = document.getElementById("scrollUp");

window.onscroll = function () {

    console.log(scrollY)

    if (scrollY >= 670){

        scrollUp.style.display='block';

    }else{

        scrollUp.style.display='none';

    }
    
}

scrollUp.onclick = function() {
    window.scrollTo(0,0);
}















