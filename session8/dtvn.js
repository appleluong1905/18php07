function showPlayer(player) {
	switch (player) {
		case 'cp':
				document.getElementById('name').innerHTML = "Cong Phuong";
				document.getElementById('age').innerHTML  = 23;
				document.getElementById('img_show').src  = 'congphuong.jpg';
				break;
		case 'vd':
				document.getElementById('name').innerHTML = "Van Duc";
				document.getElementById('age').innerHTML  = 22;
				document.getElementById('img_show').src  = 'vanduc.jpg';
				break;
		case 'qh':
				document.getElementById('name').innerHTML = "Quang Hai";
				document.getElementById('age').innerHTML  = 21;
				document.getElementById('img_show').src  = 'quanghai.jpg';
				break;
		case 'xt':
				document.getElementById('name').innerHTML = "Xuan Truong";
				document.getElementById('age').innerHTML  = 23;
				document.getElementById('img_show').src  = 'xuantruong.jpg';
				break;
		default:
				break;

	}
}
document.getElementById('content').style.display = 'none';
function checkScore() {
	var yes_score, no_score;
	yes_score = document.getElementById('yes_score').checked;
	no_score  = document.getElementById('no_score').checked;
	if(yes_score) {
		document.getElementById('content').style.display = 'block';
	}
	if(no_score) {
		document.getElementById('content').style.display = 'none';
	}
}