// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8081;

const cors_proxy = require('cors-anywhere');

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
    // helpFile: path.join(__dirname, 'index.html')
}).listen(port, host, function() {
    console.log('Running CORS Anywhere Server on ' + host + ':' + port);
});


// console.log(server);