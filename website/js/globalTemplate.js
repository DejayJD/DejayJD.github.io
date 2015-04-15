$(function(){
    $("#body").text("");
    $.get('navbar.mst', function(template) {
    var data = {"title":"Dota2Drafts", 
                "logo":"website/img/logo.jpg",
                "nav":[
                    {"title":"Assignment7", "href":"heroes"},
                    {"title":"Heroes", "href": "heroes"},
                    {"title":"Draft", "href": "draft"},
                    {"title":"About", "href": "about"}
                    ],
                "admin": currentUser
                };
    var rendered = Mustache.render(template,data);
    $('#navigation').html(rendered);
    });
});