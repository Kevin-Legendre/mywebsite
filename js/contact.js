sendEmail = function (name, email, message) {
    let constructMessage = name + "\n" + email + "\n" + message
    Email.send({
        SecureToken: "912383e2-5358-4b1a-880d-7c7efa193e9f",
        To: 'kevinlegendre.dev@gmail.com',
        From: "kevinlegendre.dev@gmail.com",
        Subject: "Contact depuis mon site",
        Body: constructMessage,
    }).then(
        message => alert(message));

}
