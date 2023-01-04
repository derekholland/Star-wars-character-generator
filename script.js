$(document).ready(function () {
	//select the html elements
	// $('#name').text('')
	// $('#species').text('')
	// $('#homeworld').text('')
	// $('#image').text('')

	//get a random number
	let randomNumber = Math.round(Math.random() * 82)
	console.log(randomNumber)

	let randomCharacter = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`

	$.get(randomCharacter, function (data) {
		console.log(data["name"])

		//change card data

		//assign image URL to a variable
		let characterImageURL = `${data["image"]}`
		//change the source value attribute to
		$("#image").attr("src", characterImageURL)

		//character name
		let characterName = `Name: ${data["name"]}`
		$("#name").text(characterName)
		//character species
		let characterSpecies = `Species: ${data["species"]}`
		$("#species").text(characterSpecies)
		//character world
		let characterWorld = `Home World: ${data["homeworld"]}`
		$("#homeworld").text(characterWorld)

		//change card data when the button is clicked
		$("#button").click(function () {
			$.get(randomCharacter, function (data) {
				//assign image URL to a variable
				characterImageURL = `${data["image"]}`
				//change the source value attribute to
				$("#image").attr("src", characterImageURL)

				//character name
				characterName = `Name: ${data["name"]}`
				$("#name").text(characterName)
				//character species
				characterSpecies = `Species: ${data["species"]}`
				$("#species").text(characterSpecies)
				//character world
				characterWorld = `Home World: ${data["homeworld"]}`
				$("#homeworld").text(characterWorld)
			})
		})
	})
})
