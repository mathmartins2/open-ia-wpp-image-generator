import { Configuration, OpenAIApi } from 'openai';
import 'dotenv/config'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const createImage = prompt =>
  openai.createImage({
    prompt,
    n: 1,
    size: '1024x1024'
  });

export default createImage;