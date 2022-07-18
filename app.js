$.getJSON("https://api.adviceslip.com/advice", function(data){

    var id = data.slip.id;
    var advice = data.slip.advice;

    $(".advice-id").append(id);
    $(".advice-txt").append(advice);

    $(".btn").click(function() {
        location.reload(true);
    })
})