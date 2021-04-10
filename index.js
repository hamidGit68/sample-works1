const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.PORT || 5000;
// for manual start "node index.js"

app.use('/', router);

app.use(express.static('works'));

/* defining the rout directory */
router.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname+'/works/index.html'));
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});