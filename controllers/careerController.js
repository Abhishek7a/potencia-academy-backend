const careerSchema = require('../model/careerSchema');
const Messages = require('../Changes/serverMessages');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
// const { mongo } = mongoose.mongo;
// const { GridFSBucket } = require('mongodb');


// const storeFile = async (filePath) => {
//     const db = mongoose.connection.db;
//     const bucket = new mongo.GridFSBucket(db);

//     const fileId = await new Promise((resolve, reject) => {
//         const uploadStream = bucket.openUploadStream('file.txt');
//         const readStream = fs.createReadStream(filePath);

//         readStream.pipe(uploadStream)
//             .on('error', reject)
//             .on('finish', () => resolve(uploadStream.id));
//     });

//     return fileId;
// };

const handleCareerUser = async (req, res) => {

    const requestArray = req.body;
    const Name = requestArray.name;
    const Specialization = requestArray.specialization;
    const Experience = parseInt(requestArray.experience);
    const Resume = requestArray.resume;
    const LastSalary = parseInt(requestArray.lastSalary);
    // if (requestArray.resume)
        //  Resume = requestArray.resume;

    console.log(req.body)
    console.log(Experience)
    if (!Name || !Specialization || !Experience || !LastSalary)
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