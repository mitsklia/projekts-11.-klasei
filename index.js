document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});


const datums = new Date();
document.querySelector("h4").innerHTML = datums ;

const d = new Date();
otr.innerHTML = d.getDate() + "." +
 (d.getMonth() + 1) + "." + d.getFullYear() + ".";



 function poga() {
    const ievaditieDati = document.getElementById("ievade").value 
    const ievaditaKrasa = document.getElementById("krasa").value
    if(document.getElementById("atzime").checked) {
        document.getElementById("izvade").style.color = ievaditaKrasa
    } else{
        document.getElementById("izvade").style.color = "black"
    }
    document.getElementById("izvade").innerHTML = "Sveiki, " + ievaditieDati + "!"}
