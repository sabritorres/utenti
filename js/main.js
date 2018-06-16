$(function(){
//mi recupero la lista degli utenti
    $.ajax({
        url:"https://randomuser.me/api/?results=10",
        dataType: 'json'
    })
        .then(function(data){
            let utenti=data.results;
            let lista_utenti=$("#lista_utenti");
            utenti.forEach(utente => {
                let contenitore= $('<div></div>').addClass("col-md-4 mt-3");
                let row1= $('<div></div>').addClass("row");
                let row2 = $('<div></div>').addClass("row");
                let row3 = $('<div></div>').addClass("row");
                let divimmagine = $('<div></div>').addClass("col-md-12 text-center");
                let immagine = $('<img></img>').addClass("img-fluid rounded-circle").attr("src",utente.picture.medium);

                let divnome = $('<div></div>').addClass("col-md-12 text-center");
                let nome = $('<h2></h2>').html(`${utente.name.title.charAt(0).toUpperCase()}${utente.name.title.slice(1).toLowerCase()}
                ${utente.name.first.charAt(0).toUpperCase()}${utente.name.first.slice(1).toLowerCase()}
                ${utente.name.last.charAt(0).toUpperCase()}${utente.name.last.slice(1).toLowerCase()}`);

                immagine.appendTo(divimmagine);
                divimmagine.appendTo(row1);
                row1.appendTo(contenitore);
                contenitore.appendTo(lista_utenti);

                nome.appendTo(divnome);
                divnome.appendTo(row2);
                row2.appendTo(contenitore);




            })
        })
})