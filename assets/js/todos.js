// Check off Specific todos by clicking
$("ul").on("click","li",function () {
    $(this).toggleClass("completed");
});

//Clicked on X
$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove()
    });
    event.stopPropagation(); //stop bobblint up
});

//Adding Input
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
       var newTodoText = $(this).val();
       $(this).val(""); // empty input
       //create new li and add to ul
       $("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + newTodoText +"</li>")
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})