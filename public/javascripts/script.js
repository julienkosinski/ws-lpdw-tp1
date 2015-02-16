function deleteThisReview(id) {
	var xhr = new XMLHttpRequest();
	xhr.open("DELETE", "/reviews/"+id, true);
	xhr.send();
	location.reload();
}

function editThisReview(id) {
	var Review = {
		name: document.getElementById('name').value,
		placeType: document.getElementById('placeType').value,
		stars: Number.parseInt(document.getElementById('stars').value)
	};
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function(id) {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				window.location.reload();
			}
		}
	}
	httpRequest.open('PUT', '/reviews/' + id, true);
	httpRequest.setRequestHeader("Content-Type", "application/json");
	httpRequest.send(JSON.stringify(Review));
}