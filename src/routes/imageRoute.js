import venom from 'venom-bot';
import createAndDownloadImage from '../services/imageService.js';

venom
  .create({
    session: 'session-name',
    multidevice: true
  })
  .then(client => start(client))
  .catch(error => {
    console.error(error);
  });

const start = async client => {
  try {
    client.onMessage(async message => {
      const msg = message.body.includes('crie uma imagem com');
      if (msg && !message.isGroupMsg) {
        const request = message.body.replace('crie uma imagem com: ', '');
        const imagePath = await createAndDownloadImage(request);
        await client.sendImage(message.from, imagePath, 'image', img)
      }
    });
  } catch (error) {
    console.log(error)
  }
};