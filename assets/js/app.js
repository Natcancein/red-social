$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

$("#btn").click(function saveCom(){
    var comment = $("#comment").val();
    
    $("#post").append( "<div class='posteo'>"+"<img src='assets/img/contacts/animalista10.jpg' class='circle-min'>" + "<h5 class='lado-nombre'>Natalia Arancibia</h5>" +
comment + "</br>" +"</div>");
    
});

$("#seguir").mouseenter(function dejar(){
	$("#seguir").text("dejar de seguir").css("font-size","10px");

});

$("#seguir").mouseleave(function volver(){
	$("#seguir").text("Siguiendo").css("font-size","12px");
	
});

$("#seguir").mouseup(function remover(){
	$(this).parent().parent().parent().remove();
	
});

