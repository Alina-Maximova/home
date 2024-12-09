const path = require("path");
const express = require("express");
const fileUploads = require("express-fileupload");
const uuid = require("uuid").v4

const db = require("../db");
const router = express.Router();

router.post(
    "/upload",
    fileUploads({tempFileDir: true}),
    (req, res) => {
        console.log(req.files.file)
        if(!req.files.file){
            res.send({success: false});
            return;
        }

        const fileId=uuid()+ ".jpg";

        const filePath = path.join(
            __dirname,
            "..",
            "/static",
            fileId
        );
        req.files.file.mv(filePath);

        const mimetype = req.files.file.mimetype;

        
        db.push(`/files/${fileId}`, {mimetype, filePath});

    

        res.send({success: true, fileId})
    }

);

router.get("/:fileId", (req,res) =>{
    const fileId = req.params.fileId;
    const file=  db.getData(`/files/${fileId}`);


    if (!file){
        res.sendStatus(404);
        return;
    
    }
    
    res.setHeader("Content-Type", file.mimetype)
    res.sendFile(file.filePath);
})

module.exports = router;