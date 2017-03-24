import localConfig from './webpack/local';
import productionConfig from './webpack/production';

const isProduction = process.env.NODE_ENV === 'production';
const config = isProduction ? productionConfig : localConfig;

export default config;