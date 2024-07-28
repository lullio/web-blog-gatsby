// src/utils/analytics/index.js
import { trackPWAInstall } from './pwa';

export const initAnalytics = () => {
  trackPWAInstall();
  // Adicione outros rastreamentos aqui, conforme necessário
};