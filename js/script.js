$(document).ready(function(){

    initialize();

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

        $('#thumbnail_corps img').css('opacity',0.5);
        $('#thumbnail_corps img[data-diapo="'+numDiapo+'"]').css('opacity',1);
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

        $('#thumbnail_corps img').css('opacity',0.5);
        $('#thumbnail_corps img[data-diapo="'+numDiapo+'"]').css('opacity',1);
    });


    // Navigation dans les miniatures
    $('#pred_thumbnail').on('click',function(){
        var first = parseInt($('#thumbnail_corps img:first-child').attr('data-diapo'));
        var last = parseInt($('#thumbnail_corps img:last-child').attr('data-diapo'));
        var num = parseInt($('.imgSlider').attr('data-diapo'));

        if(first!=0)
        {
            $('#thumbnail_corps').empty();
            for (let index = first-1; index < first+5; index++) {
                const elt = diapo[index];
                $('#thumbnail_corps').append('<img src="'+elt.image+'" alt="'+elt.titre+'" data-diapo="'+index+'">');
            }

            $('#thumbnail_corps img[data-diapo="'+num+'"]').css('opacity',1);
            clicImage();
        }
        else
        {
            $('#prev_thumbnail').animate({color:'red'},700).delay(1000).animate({color:'white'},700)
        }

    });

    $('#next_thumbnail').on('click',function(){
        var first = parseInt($('#thumbnail_corps img:first-child').attr('data-diapo'));
        var last = parseInt($('#thumbnail_corps img:last-child').attr('data-diapo'));
        var num = parseInt($('.imgSlider').attr('data-diapo'));

        if(last!=diapo.length-1)
        {
            $('#thumbnail_corps').empty();
            for (let index = first+1; index < last+2; index++) {
                const elt = diapo[index];
                $('#thumbnail_corps').append('<img src="'+elt.image+'" alt="'+elt.titre+'" data-diapo="'+index+'">');
            }

            $('#thumbnail_corps img[data-diapo="'+num+'"]').css('opacity',1);
            clicImage();
        }
        else
        {
            $('#suiv_thumbnail').animate({color:'red'},700).delay(1000).animate({color:'white'},700)
        }
    });

    // Vérification de la majorité
    $('#checkBirthDay').on('click',function(){
        $('#msg-error').empty();

        var annee = parseInt($('#birthday').val());

        var today = new Date();

        if(annee<today.getFullYear()-18) 
        {
            $('#disclaimer').modal('close');
        }
        else
        {
            $('#msg-error').html('Vous n\'avez pas l\'âge requis pour visiter le site !');
        }

    });
});



function clicImage()
{
    // Accès à une image en cliquant sur une miniature
    $('#thumbnail_corps img').on('click',function(){
        var numDiapo = $(this).attr('data-diapo');
        $('#description').empty();                                  // On vide la description
        $('#description').append('<h3 id="title"></h3>');           // on Ajoute un titre

        $('#title').html(diapo[numDiapo].titre);
        $('#description').append('<div>' + diapo[numDiapo].description + '</div>');
        $('.imgSlider').attr('data-diapo',numDiapo);
        $('#image img').attr('src',diapo[numDiapo].image);
        $('#image img').attr('alt',diapo[numDiapo].titre);

        $('#thumbnail_corps img').css('opacity',0.5);
        $('#thumbnail_corps img[data-diapo="'+numDiapo+'"]').css('opacity',1);
    });
}


function initialize()
{
    // Modal permettant de faire un avertissement
    $('.modal').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        opacity: .5
      }
    );
    $('#disclaimer').modal('open');

    // Initialisation des thumbnails
    for (let index = 0; index < 6; index++) {
        const elt = diapo[index];
        $('#thumbnail_corps').append('<img src="'+elt.image+'" alt="'+elt.titre+'" data-diapo="'+index+'">');
    }

    $('#thumbnail_corps img[data-diapo="0"]').css('opacity',1);

    // initialisation du slider
    var numDiapo=0;
    $('#title').html(diapo[0].titre);
    $('#description').append(diapo[0].description);
    $('.imgSlider').attr('data-diapo',0);
    $('#image img').attr('src',diapo[0].image);
    $('#image img').attr('alt',diapo[0].titre);

    clicImage();

}