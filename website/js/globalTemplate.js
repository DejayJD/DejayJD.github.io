function loadBody(type) {
    $.get('rightcontainer.mst', function(template) {
        var data;
        if (type===1)
            data = {"search":true,
                    "about":false, 
                    "draft":false};
        if (type===2)
            data = {"search":false,
                    "about":true,
                    "draft":false};
        if (type===3)
            data = {"search":false,
                    "about":false,
                    "draft":true};
        var rendered = Mustache.render(template,data);
       $('#body').html(rendered);
    });
}

function heroById(id) {
$.get('hero.mst', function(template) {
    $.getJSON(
        'http://private-e5fa4-gui2015.apiary-mock.com/heroes/'+id,
        {}, 
        function(json, textStatus) {
            var data = {"hero":json};
            var rendered = Mustache.render(template,data);
            $('#body').html(rendered);
        });
    });
}

function loadHeroes() {
    $.get('hero-list.mst', function(template) {
        $.getJSON(
            'http://private-e5fa4-gui2015.apiary-mock.com/heroes', 
        {}, 
        function(json, textStatus) {
            var data = {"heroes":json};
            console.log(data);
            var rendered = Mustache.render(template,data);
            $('#body').html(rendered);
        }); 
    });
}

function urlHash(){
    var num = /heroes-\d+/g;
    var id = location.hash.match( num );
    if (id) {
        console.log("getting hero id data");
        heroById(id);
        return;
    }
    switch(location.hash) {
        case '#home':
            loadBody(1);
        break;
        case '#draft':
            loadBody(3);
        break;
        case '#heroes':
            loadHeroes();
        break;
        case '#about':
            loadBody(2);
        break;
        default:
          location.hash = "home";
      }
}

$(function(){
    $("#body").text("");
    $.get('navbar.mst', function(template) {
    var data = {"title":"Dota2Drafts", 
                "logo":"website/img/logo.jpg",
                "nav":[
                    {"title":"About", "href": "about"},
                    {"title":"Draft", "href": "draft"},
                    {"title":"Heroes", "href": "heroes"}
                    ],
                };
    var rendered = Mustache.render(template,data);
    $('#navigation').html(rendered);
    });
    window.onhashchange = function(){
      urlHash();
    };
    urlHash();
});