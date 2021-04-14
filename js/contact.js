sendEmail = function () {
    Email.send({
        Host: "smtp.gmail.com.",
        Username: "kevinlegendre.dev@gmail.com",
        Password: "BravoTuAsTrouve34590",
        To: 'kevin.legendre705@gmail.com',
        From: "kevinlegendre.dev@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
        }).then(
        message => alert(message)
    );
}
