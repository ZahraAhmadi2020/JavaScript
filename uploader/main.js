
var express = require('express');
var host = express();
var port = 5503;


host.use(express.static(`${__dirname}/components`));
host.get('/', (request, response) => {
    response.sendFile(`${__dirname}components/uploader.html`);
});

host.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});