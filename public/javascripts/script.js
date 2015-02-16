function deleteCall(id) {
	var xhr = new XMLHttpRequest();
	xhr.open("DELETE", document.referrer+"reviews/"+id, true);
	xhr.send();
}