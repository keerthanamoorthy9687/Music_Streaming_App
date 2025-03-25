const multer = require('multer');
const path = require('path');

// Set storage engine
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// File type filter (only allow MP3 files)
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'audio/mpeg' || file.mimetype === 'audio/wav') {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type, only MP3/WAV allowed!'), false);
    }
};

// Initialize Multer
const upload = multer({ 
    storage, 
    fileFilter,
    limits: { fileSize: 10000000 } // Limit file size to 10MB
});

module.exports = upload;
