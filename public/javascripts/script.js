function deleteCall(id) {
	var xhr = new XMLHttpRequest();
	xhr.open("DELETE", "/reviews/"+id, true);
	xhr.send();
	location.reload();
}