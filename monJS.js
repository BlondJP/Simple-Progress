$( "#monBouton" ).click(function() {

  // on récupère l'avancement
  var avancement = $( "#maBarre" ).attr('aria-valuenow');

  // On l'augmente
  if (avancement == 100)
  {
  	var nouvelAvancement = 0;
  }
  else
  {
  	var nouvelAvancement = parseInt(avancement) + 1;
  }

  // On applique les changement sur le DOM
  $( "#maBarre" ).attr('aria-valuenow', nouvelAvancement);
  $( "#maBarre" ).attr('style', 'width:'+nouvelAvancement+'%');
  $( "#maBarre" ).html(nouvelAvancement+'%');

});