$(document).ready(function(){
    // Modal permettant de faire un avertissement
    $('.modal').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        opacity: .5
      }
    );
    $('#disclaimer').modal('open');

    // initialisation du slider
    var numDiapo=0;
    $('#title').html(diapo[0].titre);
    $('#description').append(diapo[0].description);
    $('.imgSlider').attr('data-diapo',0);
    $('#image img').attr('src',diapo[0].image);
    $('#image img').attr('alt',diapo[0].titre);

    // Clic sur image précédente
    $('#pred').on('click',function(){
        $('#description').empty();                                  // on vide la description
        $('#description').append('<h3 id="title"></h3>');           // on ajoute un titre
        numDiapo = parseInt($('.imgSlider').attr('data-diapo'));    // Récupération et conversion du numéro de diapo en cours
        if(numDiapo>0)
        {
            numDiapo=numDiapo-1;
        }
        else
        {
            numDiapo=diapo.length-1;
        }

        // changement des différentes infos de la diapo
        $('#title').html(diapo[numDiapo].titre);
        $('#description').append('<div>' + diapo[numDiapo].description + '</div>');
        $('.imgSlider').attr('data-diapo',numDiapo);
        $('#image img').attr('src',diapo[numDiapo].image);
        $('#image img').attr('alt',diapo[numDiapo].titre);
    });

    $('#suiv').on('click',function(){
        $('#description').empty();                                  // On vide la description
        $('#description').append('<h3 id="title"></h3>');           // on Ajoute un titre
        numDiapo = parseInt($('.imgSlider').attr('data-diapo'));    // Récupération et conversion du numéro de diapo en cours
        if(numDiapo<diapo.length-1)
        {
            numDiapo=numDiapo+1;
        }
        else
        {
            numDiapo=0;
        }
    
        // Changement des différentes infos de la diapo
        $('#title').html(diapo[numDiapo].titre);
        $('#description').append('<div>' + diapo[numDiapo].description + '</div>');
        $('.imgSlider').attr('data-diapo',numDiapo);
        $('#image img').attr('src',diapo[numDiapo].image);
        $('#image img').attr('alt',diapo[numDiapo].titre);
    });

});

