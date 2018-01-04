$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

/**
* SUBIR FOTOS
* mediante #file-select
*/
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
});

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

/**
* PUBLICAR FOTO
* Al presionar #btn2 se publica la imagen subida mediante append
*/
$("#btn2").click(function publicar(){
  var imagen = $("#img-guardar");
 $("#post-img").append("<div class='posteo'>"+"<img src='assets/img/contacts/perfil.jpg' class='circle-min'>" + "<h5 class='lado-nombre'>Natalia Arancibia</h5>" + "<img class='img-responsive' src="+imagen[0].src+">" );
});

/**
* PUBLICAR COMENTARIO
* Al presionar #btn se publica el comentario mediante append
*/
$("#btn").click(function saveCom(){
  var comment = $("#comment").val();
  $("#post").append( "<div class='posteo'>"+"<img src='assets/img/contacts/animalista10.jpg' class='circle-min'>" + "<h5 class='lado-nombre'>Natalia Arancibia</h5>" +
comment + "</br>" +"</div>");
    
});

/**
* ESCONDER INPUT FILE
*/
$("#file").hide();


/**
* Mediante ciclo for se recorren los id de #friend (contacto para dejar de seguir)
*/

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
			if ($('.col-xs-4').length ===0){
			$("#sinAmigos").text("Quedaste sin amigos!");
			}

		});
	
	}

/**
*Añadir Comentarios a posts maqueta
*/
  $('.comments').keyup(function(e){
    if(e.keyCode == 13){
      var newComment = $(this).val();      
      $("<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12 newComment'>" 
        + "<p class='col-lg-10'>" + newComment + "</p>" 
        + "<p class='col-lg-10 lado-nombre'>" + "Natalia Arancibia" + "</p>" 
        + "<span class='col-lg-1 glyphicon glyphicon-heart icons-newComment '>" + "</span>" 
        + "<span class='col-lg-1 glyphicon glyphicon-trash icons-newComment '>" + "</span>" 
        +"</div>").insertBefore(this).closest("div");
      $(this).val("");
     
    }
  });
/**
*ver comentarios de post
*/
  $(".allComments p").click(function(){
    $(".newComment").show();
  });

/**
*AÑADIR CONTACTO
*/
var i=162;
for(var i=0;i< $('.col-xs-4').length; ++i){
  var id="#contact"+i;
    $(id).find("a").mouseenter(function(){
      $(this).css("background-color","#1C4C79");
  });
    $(id).find("a").mouseleave(function(){
      $(this).css("background-color","green");
  });
    $(id).find("a").click(function(){
     $(this).text("Siguiendo").css("background-color","blue").addClass("btn-default");
        i++;
        document.getElementById("numberFollowing").innerHTML = i +152;
      //$(this).parent().parent().parent().parent().remove();

      });

    }
