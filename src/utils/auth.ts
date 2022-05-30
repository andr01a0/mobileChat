export const validateEmail = (email: string) => {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
};

export const isButtonDisabled = (emailError: string, email: string, passwordError: string, password: string) : boolean => {
	if(emailError !== "" || email.length <= 0 || passwordError !== "" || password.length <= 0 || rPassword.length <= 0) {
		return true;
	}
	return false;
};