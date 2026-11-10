export const APP_NAME = "Indicadores Económicos";
export const CONTACT_EMAIL = "code.mobile.development@gmail.com";
export const LAST_UPDATED = "9 de noviembre de 2026";

/** Enlaces a las tiendas. Mientras estén vacíos, los botones se muestran como "Próximamente". */
export const APP_STORE_URL = "";
export const PLAY_STORE_URL = "";

/** Fuentes de datos que usa la app (se muestran en la landing, privacidad y términos). */
export const DATA_SOURCES = [
  {
    name: "mindicador.cl",
    url: "https://mindicador.cl",
    use: "Dólar, euro, UF, UTM, IPC, TPM, Imacec, tasa de desempleo, libra de cobre e históricos.",
  },
  {
    name: "CoinGecko",
    url: "https://www.coingecko.com",
    use: "Precios y variación de criptomonedas en pesos chilenos.",
  },
  {
    name: "Twelve Data",
    url: "https://twelvedata.com",
    use: "Cotizaciones de ETFs y acciones.",
  },
  {
    name: "TradingView",
    url: "https://www.tradingview.com",
    use: "Gráfico del IPSA.",
  },
];
