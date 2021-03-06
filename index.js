const express = require("express");
const path = require('path');
const app = express();

// Set a Static Folder
app.use(express.static(path.join(__dirname,'public')));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
