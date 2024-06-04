const express = require('express');
const app = express();
const fs = require('fs');
const { exec } = require('child_process');
const multer = require('multer');
const request = require('request');
const upload = multer({ dest: '/image/' });
const cors = require('cors');



const port = 5000;

// Utilisez cors comme middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/engine', upload.single('image'), (req, res) => {
    const image = req.body.image;

    // Convert the base64 image to a buffer
    const imageBuffer = Buffer.from(image, 'base64');

    // Save the image buffer to a file
    fs.writeFile('/image/image-to-test.jpeg', imageBuffer, (err) => {
        if (err) {
            console.error(`Error saving the image: ${err}`);
            res.status(500).send('Internal Server Error');
            return;
        }
        console.log(`Image saved`);
        // Execute cURL command
        const options = {
            url: 'http://engine:11434/api/generate',
            method: 'POST',
            json: {
                model: 'llama2-uncensored:7b-chat-fp16',
                prompt: 'You are an AI expert in pneumonia detection. Tell me if the patient on the X-Ray /image/image-to-test.jpeg has pneumonia or not. To help you, find an X-ray of patients without pneumonia in folder images/test/NORMAL/ and patients with pneumonia in images/test/PNEUMONIA/ It s ok if you are not 100% sure just give me your best answer and the percentage of confidence you have. Your answer should follow the template {"answer":"yes or no","message": "Your explaination","confidence":"Your confidence in %"}. Your explaiantion should be concise and not contain any informations as PATH or images name. Here is how you detect pneumonia on an X-ray : When interpreting the x-ray, the radiologist will look for white spots in the lungs (called infiltrates) that identify an infection. This exam will also help determine if you have any complications related to pneumonia such as abscesses or pleural effusions (fluid surrounding the lungs).',
                format: 'json',
                stream: false
            }
        };
        request(options, (error, response, body) => {
            if (error) {
                console.error(`Error sending the request: ${error}`);
                res.status(500).send('Internal Server Error');
                return;
            }
            // Send the response from the engine
            console.log(`Response from the engine: ${body.response}`);
            res.send(body);
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});