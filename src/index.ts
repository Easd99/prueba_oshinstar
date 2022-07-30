const dotenv = require('dotenv-yaml');

dotenv.config();

console.log(process.env.POSTGRES_USER)

import app from './app'


const server = app.listen(app.get('port'))


console.log('Server on port ', app.get('port'))

export {app, server}