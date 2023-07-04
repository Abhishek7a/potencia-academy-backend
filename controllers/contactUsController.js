const ContactUsSchema = require('../model/ContactUsSchema');
const Messages = require('../Changes/serverMessages');

const handleContactUsUser = async (req, res) => {

    const requestArray = req.body;
    const Name = requestArray.name;
    const email = requestArray.email;
    const subject = requestArray.subject;
    const message = requestArray.message;

    console.log(req.body)
    if (!Name || !subject || !email || !message)
        return res.status(422).json({ error: Messages.EmptyFields });

    if (Name.length < 3)
        return res.status(406).json({ error: Messages.InvalidCredentials });

    if (subject.length < 5)
        return res.status(406).json({ error: Messages.InvalidCredentials });

    if (message.length < 5)
        return res.status(406).json({ error: Messages.InvalidCredentials });
    try {
        const student = await ContactUsSchema.create({
            name: Name,
            email: email,
            subject: subject,
            message: message
        })
        const userID = student._id;
        console.log("User ID", userID);
        res.status(201).json({ message: Messages.Success });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: Messages.ServerErr });
    }
}
module.exports = { handleContactUsUser };