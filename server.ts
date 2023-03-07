import app from './app';
import {port} from './config';

app.listen(port , () => {
  console.log(
    `\nStarted on http://localhost:${port}\nUse Ctrl + C to end proccess`
  )
})