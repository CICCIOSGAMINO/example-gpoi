Requirements
============
[TOC]

v0.0.1 03-11-2025

Task! Sviluppare almeno due strumenti, compilarli a cura degli utenti finali e inserire nella cartella

La tabella seguente riporta le tecniche principali che possono essere utilizzate nella fase di elaborazione per la raccolta dei requisiti legati al progetto d'impresa da sviluppare


| **STRUMENTI** | **OBIETTIVI** | **VANTAGGI** | **SVANTAGGI** |
|----------------|----------------|----------------|----------------|
| **Osservazioni sul campo** | Comprendere il contesto delle attività dell’utente. | Permettono di ottenere una consapevolezza sull’uso reale del prodotto che le altre tecniche non danno. | Possono essere difficili da effettuare e richiedere molto tempo e risorse. |
| **Suggerimenti spontanei degli utenti** | Individuare specifiche necessità di miglioramento di un prodotto. | Hanno bassi costi di raccolta. Possono essere molto specifici. | Hanno normalmente carattere episodico. |
| **Questionari** | Rispondere a domande specifiche. | Si possono raggiungere molte persone con poco sforzo. | Vanno progettati con grande accuratezza, altrimenti le risposte possono risultare poco informative. Il tasso di risposta può essere basso. |
| **Analisi della concorrenza e delle best practice** | Individuare le soluzioni migliori adottate nel settore di interesse. | Evitare di “reinventare la ruota” e ottenere vantaggio competitivo. | L’analisi è solitamente costosa (tempo e risorse). |
| **Scenari e casi d’uso** | Descrivere ogni singola operazione che il sistema deve effettuare. | Utili in fase di collaudo per verificare le funzionalità del sistema. | Gli intervistati spesso non sono in grado di descrivere le criticità. |
| **Interviste individuali** | Esplorare determinati aspetti del problema e determinati punti di vista. | L’intervistatore può controllare il corso dell’intervista, orientandola verso temi sui quali l’intervistato può fornire contributi utili. | Richiedono molto tempo. Gli intervistati potrebbero evitare di esprimersi con franchezza su aspetti delicati. |
| **Focus group** | Mettere a fuoco un determinato argomento su cui possono esserci diversi punti di vista. | Fanno emergere le aree di consenso e di conflitto. Possono far emergere soluzioni condivise dal gruppo. | La conduzione richiede esperienza. Possono emergere figure dominanti che monopolizzano la discussione. |

# Interviste individuali
La migliore fonte per reperire i requisiti è quella delle interviste individuali. L'indagine inizia con l'intervista al cliente/committente che è il maggior referente del progetto (anche perché "è lui che paga") e quindi ha chiari gli obiettivi che devono essere perseguiti e i tempi di 
realizzazione del sistema.
Sarà inoltre il cliente stesso a indicare al team di analisi gli stakeholder più significativi per ogni categoria 
di personale, con i quali procedere con le interviste. Sarà sempre lui che, alla fine della stesura 
del documento, verrà coinvolto nella revisione e validazione.

## Strutturazione delle interviste
È possibile effettuare interviste con diversi livelli di strutturazione.

- **Interviste non strutturate**
Sono dei dialoghi dove l’intervistatore pone un insieme di domande aperte prestabilite allo stakeholder e 
dalle risposte può prendere spunti per avviare un9indagine approfondita su eventuali nuovi re-
quisiti o aspetti diversi di operazioni già individuate.
Esempio
Domande da effettuare agli stakeholder
Il colloquio può iniziare semplicemente con una sequenza di domande del tipo:
- Quali sono le attività che svolgi regolarmente?
- Descrivi il flusso normale delle tue attività.
- Descrivi cosa può andar male nell9esecuzione del flusso normale.
- Cosa non funziona nel sistema attuale?
- Come intendi utilizzare il sistema?
- Come credi che il sistema debba essere utilizzato?
- Cosa ti aspetti quando il sistema parte?

- **Interviste strutturate**
Sono simili ai questionari (che tratteremo subito dopo), ma sono somministrate verbalmente dall’intervistatore e consistono in un insieme di domande specifiche su di una particolare funzione o requisito che è già stato individuato ma richiede un9indagine su tutti i possibili utilizzatori.
Proprio per la loro natura strutturata sono utilizzate per ricavarne dati statistici facilmente 
interpretabili.

- **Interviste semistrutturate**
Sono una via di mezzo delle prime due, cioè sono interviste che contengono sia risposte aperte che 
domande specifiche a risposta chiusa. 
Non è semplice condurre una buona intervista: un fattore importante è l’esperienza dell’intervistatore che deve avere ottime capacità di relazione e deve essere in grado di mettere l9intervistato a proprio agio, garantirne l9anonimato delle risposte, parlare con lo stesso linguaggio dell9intervistato, senza suggerire le soluzioni ma cercando di individuare i requisiti.
La maggior difficoltà è quella di individuare i requisiti impliciti che le persone considerano ovvi, e quindi non evidenziano nel colloquio poiché spesso rivelano come le operazioni dovrebbero essere svolte "in teoria= e non come sono svolte "in pratica".

# Osservazioni sul campo
L'osservazione sul campo consiste nell’affiancare l’utente nelle sue operazioni quotidiane per visionare direttamente quali operazioni svolge nell'attività quotidiana: frequentemente l'attore fatica a descrivere il proprio lavoro, soprattutto se questo utilizza strumenti software 
dei quali non ha particolari conoscenze tecniche ma solo operative.
Spesso l’utente non è in grado di evidenziare le criticità delle sue funzioni e quindi l'analisi congiunta "sul campo" con il responsabile dello sviluppo permette di scoprire dettagli importanti per la definizione dei requisiti.
È un’attività molto onerosa, che richiede parecchio tempo e una conoscenza preventiva delle singole attività per individuare quando è più significativo effettuare l'osservazione; inoltre vengono 
osservate le funzioni "già presenti" e quindi difficilmente permette di individuare nuove funzioni che potrebbero migliorare il lavoro.

# Questionari
I questionari sono il metodo più semplice per ottenere con bassi costi delle informazioni in forma strutturata, facilmente elaborabili in modo automatico per ottenere delle statistiche. Sono composti da un insieme di domande alle quali gli utenti rispondono scegliendo una risposta tra le cinque 
proposte secondo la scala di Likert:

1. completamente d'accordo;
2. d'accordo;
3. incerto;
4. in disaccordo; 
5. in completo disaccordo

A ciascuna risposta è associato un numero compreso fra 1 e 5 e con questi valori si potrà calcolare la media delle risposte a ciascun gruppo di affermazioni correlate a uno stesso argomento.

Possono essere utilizzati solo in fase di consuntivazione per ottenere un giudizio sul sistema ap-
pena realizzato, prima della sua messa in funzione, anche perché sono facilmente realizzabili e 
somministrabili a tutti gli utenti (esistono software che realizzano questionari da sottoporre online 
producendo direttamente i risultati). L’attendibilità delle risposte, però, generalmente è bassa.

# Suggerimenti spontanei degli utenti
Gli utenti suggeriscono come il prodotto deve essere realizzato anche nella fase delle interviste, inoltre pos-
sono ulteriormente contribuire fornendo indicazioni su appositi forum che vengono aperti sul web 
contestualmente all9inizio dell9attività di sviluppo: gli utenti segnalano spontaneamente migliora-
menti desiderabili e condividono o meno i suggerimenti proposti dagli altri utenti.

# Analisi della Concorrenza
Tra le attività svolte nella fase di esplorazione dei requisiti è di fondamentale importanza il confronto con prodotti concorrenti simili già presenti sul mercato per attingere dalle best practice qualche indicazione preziosa, nonché compararne i prezzi, i punti 
di forza e riconoscere i punti di debolezza.
Questa operazione è particolarmente difficile da effet-
tuarsi nelle situazioni di sviluppo ad hoc altamente spe-
cializzato, dove è difficile, se non impossibile, trova-
re altre realizzazioni già implementate: in generale, 
però, parte del sistema da sviluppare lo si può tro-
vare già realizzato, e quindi da queste realizzazioni si possono trarre preziose indicazioni.
La ricerca di soluzioni già esistenti o simili deve essere fatta all9inizio del progetto, non appena 
sono definiti gli obiettivi essenziali; è importante anche sottoporre le soluzioni adottate da terzi 
agli stakeholder in modo che possano valutarle e commentarle per verificare la loro possibile in-
tegrazione nel nuovo sistema e la loro applicabilità nel contesto corrente.