$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

// SUBIR FOTOS

$('#preview').hover(
    function() {
        $(this).find('a').fadeIn();
    }, function() {
        $(this).find('a').fadeOut();
    }
)
$('#file-select').on('click', function(e) {
     e.preventDefault();
    
    $('#file').click();
})


$('#file').hide();

$('input[type=file]').change(function() {
    var file = (this.files[0].name).toString();
    var reader = new FileReader();
    
    $('#file-info').text('');
    $('#file-info').text(file);
    
     reader.onload = function (e) {
         $('#preview img').attr('src', e.target.result);
     }
     
     reader.readAsDataURL(this.files[0]);
});

// PUBLICAR FOTO
$("#btn2").click(function publicar(){
    var imagen = $("#img-guardar");
 $("#post-img").append("<div class='posteo'>"+"<img src='assets/img/contacts/perfil.jpg' class='circle-min'>" + "<h5 class='lado-nombre'>Natalia Arancibia</h5>" + "<img class='img-responsive' src="+imagen[0].src+">" );
});

// PUBLICAR COMENTARIO
$("#btn").click(function saveCom(){
    var comment = $("#comment").val();
    
    $("#post").append( "<div class='posteo'>"+"<img src='assets/img/contacts/animalista10.jpg' class='circle-min'>" + "<h5 class='lado-nombre'>Natalia Arancibia</h5>" +
comment + "</br>" +"</div>");
    
});


// ESCONDER INPUT FILE
$("#file").hide();

$("#seguir").mouseenter(function dejar(){
    
    $("#seguir").text("dejar de seguir").css("font-size","10px");

});

	
	for(var i=0;i< $('.col-xs-4').length; ++i){
		var id="#friend"+i;
		$(id).find("a").mouseenter(function(){
			$(this).text("Dejar de seguir").css("font-size","10px");
		});
		$(id).find("a").mouseleave(function(){
			$(this).text("Siguiendo").css("font-size","12px");
		});
		$(id).find("a").mouseup(function(){
			$(this).parent().parent().parent().parent().remove();

		});
		if $(id===0){
				$("#sinAmigos").text("Quedaste sin amigos");
			}
	}

