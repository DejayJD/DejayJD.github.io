Parse.initialize("v9DMFfQAx93SwJy7TFkKv6piDETcNm2sVNZUmy35", "aciXZFwU9b9s15QAooQkmfLjcZYjvThfUldSW0J3");

//Connect to my Parse data
var heroes = Parse.Object.extend("Heroes");
var currentUser = Parse.User.current();

//Add a new hero
function addHero() {
	var newHero = new heroes();
	var name=document.getElementById('createName').value;
	var range=document.getElementById('createRange').value;
	newHero.set("name", name);
	newHero.set("range", range);

	//Save my new hero
	newHero.save(null, {
	  success: function(newHero) {
	  	alert(newHero.get("name") + " was added to Parse")
	  },
	  error: function(newHero, error) {
	    alert(newHero.get("name") + " wasn't added to Parse :(");
	  }
	});
}

function updateHero() {
	var id=document.getElementById('updateId').value;
	var range=document.getElementById('updateRange').value;
	var query = new Parse.Query(heroes);
	query.get(id, {
	  success: function(hero) {
	    // The object was retrieved successfully.
	    alert("Found the hero " + hero.get("name"));
	    hero.set("range", range);
	    hero.save();
	  },
	  error: function(object, error) {	  }
	});
}

function getHero() {
	var id=document.getElementById('getId').value;
	var query = new Parse.Query(heroes);
	query.get(id, {
	  success: function(hero) {
	    // The object was retrieved successfully.
	    alert("That is the id of the hero " + hero.get("name"));
	  },
	  error: function(object, error) {	  }
	});
}

function deleteHero() {
	var id = document.getElementById('deleteId').value;
	var query = new Parse.Query(heroes);
	query.get(id, {
	  success: function(hero) {
	    // The object was retrieved successfully.
	    alert("Found the hero " + hero.get("name"));
	    hero.destroy({
		  success: function(hero) {
		    alert("Hero is gone");
		  },
		  error: function(hero, error) {
		   	alert("It didnt work!");
		  }
		});
	  },
	  error: function(object, error) {	  }
	});
}

function register() {
	var user = new Parse.User();
	var username = document.getElementById('registerUser').value;
	var password = document.getElementById('registerPass').value;
	user.set("username", username);
	user.set("password", password);
	user.signUp();
}

function logout() {
	Parse.User.logOut();
	var currentUser = Parse.User.current();  // this will now be null
}
//Retrieve all heroes
var query = new Parse.Query(heroes);
query.find({
  success: function(hero) {
    for (var i = 0; i < hero.length; i++) {
    	var name = hero[i].get("name");
    	var range = hero[i].get("range");
    	//Writing some hero data to the screen
    	document.getElementById("heroData").innerHTML += "<li>" + name + " : " + range + "</li>";
    }
  },
  error: function(object, error) {
    console.log("Couldn't load Parse object :(");
  }
});

