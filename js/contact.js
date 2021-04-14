sendEmail = function (name, email, message) {

    const btnExist = document.querySelector('p.btn')
    if (btnExist) {
        btnExist.remove()
    }

    if (name != "" && email != "" && message != "" ) {
        let constructMessage = name + "\n" + email + "\n" + message
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
        const pDanger = document.createElement('p')
        pDanger.classList.add('btn', 'form-danger')
        pDanger.textContent = "L'email n'a pas pu être envoyeé!"
        document.querySelector('.container').prepend(pDanger)
    }

}

clearForm = function () {
    const inputs = document.querySelectorAll('input')
    const textA = document.querySelector('textarea')
    inputs.forEach(function (input) {
        input.value =""
    })
    textA.value = ""
}
