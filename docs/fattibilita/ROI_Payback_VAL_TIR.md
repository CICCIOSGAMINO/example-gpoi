Indicatori di Redditività
=========================
[TOC]

# ROI - Return on Investment
Misura la percentuale di ritorno economico generato dall'investimento iniziale. Un indicatore semplice per capire la resa del progetto.

`ROI = (Guadagno Netto dall'Investimento / Costo dell'Investimento) x 100`

**Esempio**
Investi **€ 50.000** in un nuovo macchinario.
In 5 anni, questo macchinario genera ricavi aggiuntivi (o risparmi) per **€ 120.000**
I costi operativi diretti (manutenzione, energia) per quei 5 anni sono **€ 20.000**

**Guadagno Netto = € 120.000 - € 20.000 = € 100.000**
**ROI = (€ 100.000 / € 50.000) x 100 = 200%**

Per ogni euro investito, l'azienda ha guadagnato 2 euro (un ritorno del 200% sull'investimento iniziale)


# Payback Period
Il tempo necessario affinché i flussi di cassa netti generati dal progetto ripaghino l'investimento iniziale. Indica la "velocità" di ritorno dell'investimento.

`Payback Period = Investimento Iniziale / Flusso di Cassa Annuale Netto`

**Esempio:**
Investimento iniziale: **€ 100.000**
Flusso di cassa netto annuale (ricavi - costi): **€ 25.000** all'anno
**Payback Period = € 100.000 / € 25.000 = 4 anni**

**Analisi più avanzata (Payback Period con flussi variabili):**
Il problema della formula semplice (Investimento / Flusso Annuale) è che presuppone flussi di cassa costanti ogni anno. Nella realtà, i flussi di cassa sono quasi sempre variabili (il primo anno si guadagna meno, poi si cresce, ecc.). La tabella serve proprio a gestire questa situazione più realistica.

Immaginiamo di aprire un nuovo negozio, investimento Iniziale (anno 0): € 100.000
(Per "anno 0" si intende l'istante iniziale, quando escono i soldi)

Flussi di Cassa Netti Annuali (stime):
- Anno 1: € 20.000
- Anno 2: € 35.000
- Anno 3: € 40.000
- Anno 4: € 45.000

| Anno | Investimento / Flusso di Cassa | Flusso di Cassa Cumulativo | Spiegazione |
| :--- | :--- | :--- | :--- |
| **0** | **€ (100.000)** | **€ (100.000)** | Investimento iniziale |
| **1** | € 20.000 | € (80.000) | -100.000 + 20.000 = **-80.000** |
| **2** | € 35.000 | € (45.000) | -80.000 + 35.000 = **-45.000** |
| **3** | € 40.000 | € (5.000) | -45.000 + 40.000 = **-5.000** |
| **4** | € 45.000 | € 40.000 | -5.000 + 45.000 = **+40.000** |

## Calcolo del Payback Period esatto:
- Mancano € 5.000 all'inizio del 4° anno
- Flusso anno 4: € 45.000
- Frazione di anno: € 5.000 / € 45.000 = 0,11 anni
- 0,11 × 12 mesi = 1,32 mesi (circa 1 mese e 10 giorni)

`Payback Period = 3 anni + 1,32 mesi = 3 anni, 1 mese e 10 giorni`



## Perché è importante questo calcolo?
- Decisioni di Investimento: Un payback di 3,1 anni è molto più attraente di un payback di 3,9 anni. Ti aiuta a confrontare progetti diversi.
- Gestione del Rischio: Un ritorno più veloce dell'investimento significa meno tempo in cui i tuoi soldi sono "a rischio" nel progetto.
- Liquidità: Capire quando i flussi di cassa tornano positivi è fondamentale per la pianificazione della tesoreria aziendale.

# VAL - Valore Attuale Netto (Net Present Value - NPV)
Il valore attuale di tutti i flussi di cassa futuri (positivi e negativi) generati dal progetto, "attualizzati" al loro valore odierno. L'attualizzazione è necessaria perché un euro oggi vale più di un euro domani (a causa dell'inflazione e del costo-opportunità del capitale).

`VAN = Σ [Flusso di Cassa anno n / (1 + tasso di sconto)^n] - Investimento Iniziale`

(Esempio):

Investimento Iniziale (anno 0): **€ 200.000**.
Tasso di Sconto (costo del capitale): **10%**.
Flussi di Cassa: Anno 1: € 80.000, Anno 2: € 90.000, Anno 3: € 100.000.

## Calcolo del VAN:
Valore Attuale Anno 1: € 80.000 / (1 + 0.10)^1 = € 72.727
Valore Attuale Anno 2: € 90.000 / (1 + 0.10)^2 = € 74.380
Valore Attuale Anno 3: € 100.000 / (1 + 0.10)^3 = € 75.131

Totale Valore Attuale dei Flussi Futuri = € 72.727 + € 74.380 + € 75.131 = € 222.238
VAN = € 222.238 - € 200.000 = + € 22.238

## Interpretazione:
VAN > 0 (Positivo): Il progetto genera valore per l'azienda, oltre a coprire il costo dell'investimento e il costo del capitale. ACCETTARE.
<br>
VAN = 0: Il progetto è in pareggio, copre esattamente i costi. VALUTARE
<br>
VAN < 0 (Negativo): Il progetto distrugge valore. RIFIUTARE

# TIR (Tasso Interno di Rendimento) / IRR (Internal Rate of Return)
Il tasso di sconto che rende il VAN del progetto pari a zero. In pratica, è il tasso di rendimento "effettivo" generato dall'investimento.

Non esiste una formula algebrica diretta. Si calcola per tentativi (o con la funzione "IRR" in Excel).La formula di base è: 

`0 = Σ [Flusso di Cassa anno n / (1 + TIR)^n] - Investimento Iniziale`

(Esempio) (usando gli stessi dati del VAN):
Investimento Iniziale: **€ 200.000**.
Flussi di Cassa: Anno 1: € 80.000, Anno 2: € 90.000, Anno 3: € 100.000.
Dobbiamo trovare il tasso `TIR` che soddisfa questa equazione:

`0 = [€80.000/(1+TIR)^1] + [€90.000/(1+TIR)^2] + [€100.000/(1+TIR)^3] - €200.000`

Utilizzando Excel o un calcolatore finanziario, si trova che il **TIR ≈ 16.1%**

## Interpretazione:
Si confronta il TIR con il **"Costo del Capitale" (o tasso di soglia)** dell'azienda.

**Se TIR > Costo del Capitale:** Il progetto genera un rendimento superiore al minimo richiesto > ACCETTABILE <br>
**Se TIR = Costo del Capitale:** Progetto in pareggio > VALUTARE <br>
**Se TIR < Costo del Capitale:** Il progetto non soddisfa il rendimento minimo. RIFIUTARE <br>

Nell'esempio, se il costo del capitale è del 10%, un TIR del 16.1% indica un progetto molto attraente.

# Riepilogo e Interpretazione per la Decisione

| Indicatore | Esempio Calcolato | Valore Soglia (Esempio) | Interpretazione per il Progetto |
| :--- | :--- | :--- | :--- |
| **ROI** | 200% | > 15% | **Eccellente.** Ritorno molto alto. |
| **Payback Period** | 3,25 anni | < 4 anni | **Accettabile.** Rientro investimento in tempi brevi. |
| **VAN** | + € 22.238 | > 0 | **Positivo.** Il progetto crea valore. |
| **TIR** | 16.1% | > 10% (Costo Capitale) | **Eccellente.** Rendimento superiore alla soglia. |

**Raccomandazione Finanziaria Finale:** Se tutti gli indicatori puntano nella stessa direzione (come in questo esempio), la decisione è chiara. **Il progetto è finanziariamente fattibile e molto attraente.**


# Note Aggiuntive Importanti:
Orizzonte Temporale: Assicurati che l'orizzonte temporale per il calcolo di VAN e TIR sia lo stesso (es. 3, 5, 10 anni).

Stime Conservative: Utilizza sempre stime di ricavi conservative e di costi "pessimistiche" per evitare un eccessivo ottimismo.

Costo del Capitale: Il "Costo del Capitale" è un dato cruciale. Se non lo conosci, puoi usare come proxy il tasso di interesse a cui l'azienda si indebita o un tasso di rendimento minimo atteso dagli azionisti.

Excel è tuo amico: Excel ha funzioni integrate VAN() (o NPV()) e TIR() (o IRR()) che automatizzano questi calcoli complessi.

