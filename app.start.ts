import app from './app';
import config from './env.config';

app.listen(config.PORT, () => {
  console.log(
    `\n[SERVER]: Started on http://localhost:${config.PORT}\n[SERVER]: Use Ctrl + C to end proccess`
  )
})
