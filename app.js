const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("this is devops practical class");
})

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})