$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

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

$("#btn2").click(function publicar(){
    var imagen = $("#img-guardar");
 $("#post-img").append("<div class='posteo'>"+"<img src='assets/img/contacts/perfil.jpg' class='circle-min'>" + "<h5 class='lado-nombre'>Natalia Arancibia</h5>" + "<img class='img-responsive' src="+imagen[0].src+">" );
});

$("#btn").click(function saveCom(){
    var comment = $("#comment").val();
    
    $("#post").append( "<div class='posteo'>"+"<img src='assets/img/contacts/animalista10.jpg' class='circle-min'>" + "<h5 class='lado-nombre'>Natalia Arancibia</h5>" +
comment + "</br>" +"</div>");
    
});

$("#file").hide();

$("#seguir").mouseenter(function dejar(){
    
    $("#seguir").text("dejar de seguir").css("font-size","10px");

});

$("#seguir").mouseleave(function volver(){
    $("#seguir").text("Siguiendo").css("font-size","12px");
    
});

$("#seguir").mouseup(function remover(){
    $(this).parent().parent().parent().remove();
    
});

