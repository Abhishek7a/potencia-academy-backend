const Student = require('../model/infoSchema');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const Messages = require('../Changes/serverMessages');

const handleNewUser = async (req, res) => {

    const requestArray = req.body;
    const StudentName = requestArray.name;
    const StudentEmail = requestArray.email;
    const StudentFatherName = requestArray.fatherName;
    const StudentClass = requestArray.classs;
    const StudentContact = requestArray.contact;
    if (!StudentName || !StudentEmail || !StudentFatherName || !StudentClass || !StudentContact) {
        return res.status(422).json({ error: Messages.EmptyFields });
    }
    if (StudentName.length < 3) {
        return res.status(406).json({ error: Messages.InvalidCredentials });
    }
    if (StudentFatherName.length < 3) {
        return res.status(406).json({ error: Messages.InvalidCredentials });
    }
    if (StudentContact.length != 10) {
        return res.status(406).json({ error: Messages.InvalidCredentials });
    }
    const userExist = await Student.findOne({ StudentEmail: StudentEmail });
    if (userExist) {
        return res.status(409).json({ error: Messages.UserExist });
    }
    try {
        const student = await Student.create({
            StudentName: StudentName,
            StudentEmail: StudentEmail,
            StudentFatherName: StudentFatherName,
            StudentClass: StudentClass,
            StudentContact: StudentContact
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
module.exports = { handleNewUser };