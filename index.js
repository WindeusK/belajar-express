const app = require('./app');

require('dotenv').config();
port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`express is listening on port ${port}`)
});
