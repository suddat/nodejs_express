const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.send("/ being hit");
});

router.get('/example', (req, res)=>{
    res.send("/example being hit");
});

router.use((req, res, next)=>{
    console.log("middleware is being used Router");
    next();
});

module.exports = router;