import localConfig from './webpack/local';
import productionConfig from './webpack/production';

const config = process.NODE_ENV === 'production'
  ? productionConfig
  : localConfig;


export default config;