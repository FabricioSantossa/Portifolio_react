import { devBaseInf, prodBaseInf, baseInf } from './json';

export const getBaseConfig = () => {
  const isDev = baseInf.appMode === 'dev';
  
  return {
    baseLink: isDev ? devBaseInf.baselink : prodBaseInf.baselink,
    companyId: isDev ? devBaseInf.cd_empresa : prodBaseInf.cd_empresa,
    endpoints: baseInf.endpoints,
    environment: baseInf.appMode
  };
};
