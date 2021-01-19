function validateEmail() {
	let email = document.getElementById('email').value;
	let errorImg = document.querySelector('.error-img');
	let err = document.querySelector('.error-message');

	const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (!regEx.test(String(email).toLowerCase())) {
		err.innerHTML = 'Please Enter valid Email';
		errorImg.style.visibility = 'visible';
		document.getElementById('email').classList.add('error');
		return false;
	} else {
		errorImg.style.visibility = 'hidden';
		document.getElementById('email').classList.remove('error');
	}

	err.innerHTML = 'Success!';
	return true;
}
