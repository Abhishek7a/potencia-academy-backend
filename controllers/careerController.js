const careerSchema = require('../model/careerSchema');
const Messages = require('../Changes/serverMessages');

const handleCareerUser = async (req, res) => {

    const requestArray = req.body;
    const Name = requestArray.name;
    const Specialization = requestArray.specialization;
    const Experience = requestArray.experience;
    const Resume = requestArray.resume;
    const LastSalary = requestArray.lastSalary;

    console.log(req.body)
    // if (!Name || !Subject || !Experience  || !LastSallary)
    //     return res.status(422).json({ error: Messages.EmptyFields });

    if (Name.length < 3)
        return res.status(406).json({ error: Messages.InvalidCredentials });

    // if (LastSallary.length == 0)
        // return res.status(406).json({ error: Messages.InvalidCredentials });
    try {
        const student = await careerSchema.create({
            Name: Name,
            Specialization: Specialization,
            Experience: Experience,
            Resume: Resume,
            LastSalary: LastSalary
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
module.exports = { handleCareerUser };