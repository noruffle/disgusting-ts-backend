import app from './app';

app

.listen(3000)
.on('listening', () => console.log('Server connection was successful'))
.once('error', (err) => console.log(`An error: ${[err]}`))