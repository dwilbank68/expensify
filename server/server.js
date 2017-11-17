const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');
const app = express();
const port = process.env.PORT;

app.use(express.static(publicPath));

app.get('*', function(req,res) {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port || 3000, function() {
    console.log('listening on port 3000');
});