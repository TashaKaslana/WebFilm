const loginValidation = (user) => {
    const storedUsers = JSON.parse(localStorage.getItem('userData'));
    const storedUser = storedUsers[user.email]

    console.log(user.email + " " + user.password);
    console.log(storedUser);
    if (!storedUser) {
        console.log("AccountSection doesn't exists")
        return false;
    }

    if (user.password === storedUser.password) {
        console.log("AccountSection already exists")
        return true;
    } else {
        console.log("AccountSection doesn't exists")
        return false;
    }
}

export { loginValidation }