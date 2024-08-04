// Função para rastrear a instalação do PWA
export const trackPWAInstall = () => {
  if (typeof window === "undefined") return

  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault()
    window.deferredPrompt = e
  })

  window.addEventListener("appinstalled", () => {
    window.deferredPrompt = null
    if (window.gtag) {
      window.gtag("event", "pwa_app_install", {
        event_category: "pwa",
        event_label: "aplicativo instalado",
      })
    }
    //   window.dataLayer.push({
    //     event: 'pwa_install',
    //     category: 'PWA',
    //     action: 'install',
    //     label: 'App Installed',
    //   });
  })
}
// Função para rastrear quando o PWA está aberto
export const trackPWAOpen = () => {
  if (typeof window === "undefined") return

  const isStandalone = () =>
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone ||
    document.referrer.startsWith("android-app://")

  if (isStandalone()) {
    window.gtag("event", "pwa_app_open", {
      event_category: "pwa",
      event_action: "open",
      event_label: "aplicativo aberto",
    })
  }
  document.addEventListener("DOMContentLoaded", () => {
    if (isStandalone()) {
      window.gtag("event", "pwa_open", {
        event_category: "PWA",
        event_action: "open",
        event_label: "App Opened",
      })
    }
  })

}
