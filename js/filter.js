var inputSearch = document.getElementById("input-search");
boxFilter = document.getElementById("box-filter");
lupa = document.getElementById("lupa");
document.getElementById("input-search").addEventListener("keyup", buscadorInterno);

lupa.addEventListener('click', function(){

    if(inputSearch.value === "como hacer tacos" || inputSearch.value === "como hacer taquitos" || inputSearch.value === "como hacer taquitos al pastor" || inputSearch.value === "tacos de arroz"){
        location.href = "busqueda";
    }else{
        location.href = "noresults";
    }

});

function buscadorInterno(){

    filter = inputSearch.value.toUpperCase();
    li = boxFilter.getElementsByTagName("li");

    for(i=0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.contentText || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            boxFilter.style.display = "block";

            inputSearch.addEventListener('keydown', (e) => {
                if(e.keyCode === 13){
                    if(inputSearch.value === "como hacer tacos" || inputSearch.value === "como hacer taquitos" || inputSearch.value === "como hacer taquitos al pastor" || inputSearch.value === "tacos de arroz"){
                        location.href = "busqueda";
                    }else{
                        location.href = "noresults";
                    }
                }
            });

            if(inputSearch.value === ""){
                boxFilter.style.display  = "none";
            }

        }else{
            li[i].style.display = "none";
        }

    }
}

 