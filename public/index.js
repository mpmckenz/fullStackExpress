const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")

function createUser(event) {
    event.preventDefault()
    const Fname = document.getElementById("fullName").value
    const email = document.getElementById("email").value
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const userInfo = {Fname: Fname, email: email, username: username, password: password}
    const stringifiedUserInfo = JSON.stringify(userInfo)
    console.log(stringifiedUserInfo)

    fetch("/api/user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: stringifiedUserInfo
    })
        .then(response => {
            if (response.status === 201) {
                alert("Success! Your profile has been created!")
            } else {
                alert("Username already exists, please try a different username")
            }
        })
}

userCreateForm.addEventListener("submit", createUser)