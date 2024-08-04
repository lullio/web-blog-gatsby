// src/utils/analytics/index.js
import { trackPWAInstall, trackPWAOpen } from './pwa';

export const initAnalytics = () => {
  trackPWAInstall();
  trackPWAOpen();
  // Adicione outros rastreamentos aqui
};