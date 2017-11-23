$(document).ready(function(){
    // Modal permettant de faire un avertissement
    $('.modal').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        opacity: .5
      }
    );
    $('#disclaimer').modal('open');

    // Datepicker pour la selection de la date de naissance
    $('.datepicker').pickadate({
        default: 'now',
        format: 'dd/mm/yyyy',
        monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthsShort: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        weekdaysFull: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        weekdaysShort: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 100, // Creates a dropdown of 15 years to control year,
        min:[1960,1,1],
        max:true,
        today: 'Aujourd\'hui',
        clear: 'Effacer',
        close: 'Ok',
        closeOnSelect: false, // Close upon selecting a date,
        firstDay:1,
        weekdaysLetter: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
    });

    // Initialisation des thumbnails
    for (let index = 0; index < diapo.length; index++) {
        const elt = diapo[index];
        $('#thumbnail').prepend('<img src="'+elt.image+'" alt="'+elt.titre+'">')
    }

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

    $('#checkBirthDay').on('click',function(){
        $('#msg-error').empty();

        var date_naissance = $('#birthday').val();
        var date_naissance = date_naissance.split('/');

        var today = new Date();
        var jour = parseInt(date_naissance[0]);
        var mois = parseInt(date_naissance[1]);
        var annee = parseInt(date_naissance[2]);

        if(annee<today.getFullYear()-18) 
        {
            $('#disclaimer').modal('close');
        }
        else if(annee==today.getFullYear()-18 && mois<today.getMonth()+1)
        {
            $('#disclaimer').modal('close');
        }
        else if(annee==today.getFullYear()-18 && mois==today.getMonth()+1 && jour<=today.getDate())
        {
            $('#disclaimer').modal('close');
        }
        else
        {
            $('#msg-error').html('Vous n\'avez pas l\'âge requis pour visiter le site !');
        }

    });
});

