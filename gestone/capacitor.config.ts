import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.gestone',
  appName: 'gestone',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
