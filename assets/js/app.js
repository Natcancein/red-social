$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

$("#btn").click(function saveCom(){
    var comment = $("#comment").val();
    
    $("#post").append( "<div class='posteo'>"+"<img src='assets/img/contacts/animalista10.jpg' class='circle-min'>" + "<h5 class='lado-nombre'>Natalia Arancibia</h5>" +
comment + "</br>" +"</div>");
    
});




