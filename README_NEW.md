# 🦁 Leone Rapiti - Sito di Nascita e Celebrazione

Un sito web dedicato alla celebrazione della nascita di Leone, con lista nascita interattiva, mini-giochi e una scatola del tempo per messaggi speciali.

## 🌐 Domini

- **Produzione**: https://leonerapiti.com
- **Sviluppo**: https://keyserdsoze.github.io/leone

## 🚀 Caratteristiche

- ✅ Lista nascita interattiva con filtri e ordinamento
- ✅ Mini-gioco Connect Four personalizzato
- ✅ Scatola del Tempo con integrazione GitHub Issues
- ✅ Supporto per acquisti presso Mondo Bimbo con guida dedicata
- ✅ Design responsive ottimizzato per mobile
- ✅ Gestione automatica degli URL per diversi ambienti di deploy
- ✅ Integrazione con dominio personalizzato leonerapiti.com

## 🏗️ Struttura del Progetto

```text
├── public/
│   ├── CNAME              # Configurazione dominio personalizzato
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── content/
│   │   └── lista-nascita/ # Prodotti della lista nascita
│   ├── pages/
│   │   ├── index.astro    # Homepage
│   │   ├── lista-nascita.astro
│   │   ├── mini-gioco.astro
│   │   ├── scatola-tempo.astro
│   │   └── mondo-bimbo-guida.astro
│   └── utils/
│       └── urls.ts        # Gestione URL per diversi ambienti
├── astro.config.mjs       # Configurazione Astro con supporto domini
└── package.json
```

## 🧞 Comandi

| Comando                   | Descrizione                                      |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installa le dipendenze                          |
| `npm run dev`             | Avvia server di sviluppo su `localhost:4321`    |
| `npm run build`           | Build di produzione in `./dist/`                |
| `npm run build:custom`    | Build per dominio personalizzato (leonerapiti.com) |
| `npm run build:github`    | Build per GitHub Pages (keyserdsoze.github.io/leone) |
| `npm run preview`         | Anteprima locale del build di produzione        |

## 🚀 Deploy

Il sito supporta deploy automatico su:

1. **leonerapiti.com** (dominio personalizzato) - Deploy automatico tramite GitHub Actions
2. **GitHub Pages** - Fallback per sviluppo e testing

### Configurazione Domini

Il sistema gestisce automaticamente i percorsi base per i diversi ambienti:
- `leonerapiti.com` → nessun percorso base
- `keyserdsoze.github.io/leone` → percorso base `/leone`

La configurazione avviene tramite:
- File `public/CNAME` per il dominio personalizzato
- Variabili d'ambiente `DEPLOY_TARGET` per forzare specifici build

## 🔧 Configurazione DNS

Per utilizzare il dominio personalizzato leonerapiti.com:

1. Configurare i record DNS:
   ```
   Tipo: CNAME
   Nome: leonerapiti.com (o @)
   Valore: keyserdsoze.github.io
   ```

2. Il file `public/CNAME` è già configurato con `leonerapiti.com`

3. GitHub Pages rileverà automaticamente il dominio personalizzato al prossimo deploy

## 🎮 Funzionalità Principali

### Lista Nascita
- Filtri per negozio e stato (regalato/da regalare)
- Ordinamento per prezzo e nome
- Supporto per prezzi variabili (buoni spesa)
- Integrazione speciale per Mondo Bimbo

### Scatola del Tempo
- Messaggi persistenti tramite GitHub Issues
- Sistema di colori pastello rotativi
- Anti-cache per aggiornamenti in tempo reale

### Mini-Gioco
- Connect Four personalizzato
- Interfaccia touch-friendly per mobile
