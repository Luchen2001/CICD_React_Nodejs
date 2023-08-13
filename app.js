const express = require('express');
const app = express();

app.get('/names', (req, res)=>{
    res.send('luchen');
});

app.listen(8000, ()=>{
    console.log('Server is running on port 8000');
});