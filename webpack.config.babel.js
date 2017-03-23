import localConfig from './webpack/local';
import productionConfig from './webpack/production';

const config = process.env.NODE_ENV === 'production'
  ? productionConfig
  : localConfig;


export default config;