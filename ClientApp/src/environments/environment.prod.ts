import { getServerConfig } from './server-config';

let isDev: boolean = true;

export const environment = {
  production: !isDev,
  appVersion: 'v713demo2',
  USERDATA_KEY: 'authf649fc9a5f55',
  isMockEnabled: true,
  apiUrl: 'api',
  serverConfig: getServerConfig(isDev)
};