Gestione codice sorgente
========================
[TOC]

v0.0.1 - 06/10/25

Le principali pratiche di gestione del codice includono:
- **Branching**: Utilizzo di branch per lo sviluppo di nuove funzionalità, correzioni di bug, e versioni stabili <br>
- **Commit**: Messaggi di commit chiari e descrittivi per tracciare le modifiche <br>
- **Pull Requests**: Revisione del codice tramite pull requests prima della fusione nei branch principali <br>
- **Versioning**: Utilizzo di tag per marcare le versioni rilasciate del progetto <br>
- **Documentazione**: Mantenimento di una documentazione aggiornata nel repository, inclusi README e CHANGELOG <br>
- **Issue Tracking**: Utilizzo del sistema di issue di GitHub per tracciare bug, richieste di funzionalità, e attività di sviluppo <br><br>

Esempi di comandi Git (CLI - Command Line Interface):

```bash
# git installed??
git --version

# create a new repository
git init
git status

touch index.html
git status

# Configurare le informazioni utente
git config --global user.email "your_email@example.com"
git config --global user.name "your_github_username"

# list of configurations
git config --list

# Clonare il repository
git clone <repository_url>

# Project status
cd <repository_directory>
git status

# Add to stage (preparing to commit)
git add <file1> <file2> ...
git add . 

# Commit changes
git commit -m "Descrizione delle modifiche"

# log of commits
git log --oneline

# Push changes to remote repository
git push origin <branch_name>
git push origin main
```

# Microsoft docs
Getting start intro
https://youtu.be/9uGS1ak_FGg?si=mQ_wK7Fq7j2mZ38Y
