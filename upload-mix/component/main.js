
var express = require('express');
const { append } = require('express/lib/response');
var host = express();
var port = 5004;

host.use(express.static(__dirname));
host.get('/', (request, response) => {
    response.sendFile(`${__dirname}/component/upload.html`);
});



host.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});


