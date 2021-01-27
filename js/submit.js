var submit = document.getElementById('rec-submit');
tema = document.getElementById('input-tema');
link = document.getElementById('input-link');

submit.addEventListener("click", function(){
    if(tema.value === ""){

        alert("Debes completar por lo menos el campo del tema.");
        submit.addEventListener("submit", (e) => {
            e.preventDefault();
        });

    }
});