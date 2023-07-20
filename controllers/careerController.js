const careerSchema = require('../model/careerSchema');
const Messages = require('../Changes/serverMessages');

const handleCareerUser = async (req, res) => {

    const requestArray = req.body;
    const Name = requestArray.name;
    const Specialization = requestArray.specialization;
    const Experience = parseInt(requestArray.experience);
    const Resume = req.file.path;
    const LastSalary = parseInt(requestArray.lastSalary);

    if (!Name || !Specialization || !Experience||!Resume || !LastSalary)
        return res.status(422).json({ error: Messages.EmptyFields });

    if (Name.length < 3)
        return res.status(406).json({ error: Messages.InvalidCredentials });

    if (LastSalary.length == 0)
        return res.status(406).json({ error: Messages.InvalidCredentials });
    try {
        const student = await careerSchema.create({
            Name: Name,
            Specialization: Specialization,
            Experience: Experience,
            Resume: Resume,
            LastSalary: LastSalary
        })
        res.status(201).json({ message: Messages.Success });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({ error: Messages.ServerErr });
    }
}
module.exports = { handleCareerUser };