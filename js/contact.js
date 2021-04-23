sendEmail = function (name, email, message) {
    let errors = []
    const errorUl = document.querySelector('ul')
    if (errorUl) {
        errorUl.remove()
    }


    if (name != "" && (email != "" && emailIsValid(email)) && message != "") {
        let constructMessage = "<h1>Email de mon site</h1><ul><li>Nom: " + name + "</li><li>Email: " + email + "</li><li>Message: " + message + "</li></ul>"
        Email.send({
            SecureToken: "912383e2-5358-4b1a-880d-7c7efa193e9f",
            To: 'kevinlegendre.dev@gmail.com',
            From: "kevinlegendre.dev@gmail.com",
            Subject: "Contact depuis mon site",
            Body: constructMessage,
        }).then(message => message)
        const pSuccess = document.createElement('p')
        pSuccess.classList.add('btn', 'form-success')
        pSuccess.textContent = "L'email a été envoyé avec succès!"
        document.querySelector('.container').prepend(pSuccess)
        clearForm()

    } else {
        if (name == '') {
            errors.push("Le nom est vide")
        }
        if (!emailIsValid(email)) {
            errors.push("L'email n'est pas valide")
        }
        if (message == '') {
            errors.push("Le message est vide")
        }
        const ulDanger = document.createElement('ul')
        ulDanger.classList.add('btn', 'form-danger')
        errors.map(function (error) {
            ulDanger.innerHTML += "<li>" + error + "</li>"
        })
        document.querySelector('.container').prepend(ulDanger)
    }

}

clearForm = function () {
    const inputs = document.querySelectorAll('input')
    const textA = document.querySelector('textarea')
    inputs.forEach(function (input) {
        input.value = ""
    })
    textA.value = ""
}

emailIsValid = function (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}