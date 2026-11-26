# Vigie — pilotage du contrôle interne

Vigie réunit tout le dispositif de contrôle interne en un seul outil : cartographie des risques et des risques majeurs, incidents, indicateurs clés de risque, référentiel de contrôles, plan de tests, auto-évaluation, séparation des tâches, plans d'action, **PCIF (plan de contrôle des filiales)**, score de conformité et son évolution, rapport au comité d'audit, tâches et organisation de l'équipe, formations interactives et veille réglementaire.

Cette version fonctionne **sans serveur et sans installation** :

- l'application (ce dépôt) est publiée sur **GitHub Pages** et s'installe comme une application depuis Microsoft Edge ;
- les données de l'équipe restent dans un **dossier SharePoint**, synchronisé sur chaque ordinateur par **OneDrive**.

Aucune donnée n'est envoyée à GitHub ni à un service tiers : GitHub ne sert qu'à distribuer le code de l'application.

---

## Comment fonctionne le travail en équipe

```
SharePoint  ──  dossier « Vigie » de l'équipe
                 ├─ vigie-claire-martin-x7k2.json     ← écrit uniquement par le poste de Claire
                 ├─ vigie-sophie-renaud-ab12.json     ← écrit uniquement par le poste de Sophie
                 └─ vigie-mony-assare-q9f1.json       ← écrit uniquement par votre poste
      ▲ synchronisé par OneDrive sur chaque PC
      │
Vigie (dans Edge) lit tous les fichiers vigie-*.json, les fusionne et affiche le résultat.
```

- Chaque ordinateur écrit **uniquement son propre fichier**. Personne n'écrit dans le fichier d'un autre, donc OneDrive ne crée jamais de « copies en conflit ».
- Pour chaque élément (un risque, une tâche, une actualité…), **la version modifiée le plus récemment l'emporte**. Une suppression est elle aussi datée et l'emporte sur les versions plus anciennes.
- Vigie relit le dossier **toutes les 15 secondes** et à chaque retour sur la fenêtre. Les modifications d'un collègue apparaissent dès qu'OneDrive a synchronisé son fichier, en général en quelques secondes.
- Chaque fiche indique qui l'a modifiée en dernier et quand.

---

## Mise en place (une seule fois)

### 1. Créer le dossier partagé dans SharePoint

1. Dans le site SharePoint de l'équipe, créez un dossier, par exemple **Contrôle interne › Vigie**.
2. Donnez l'accès en **modification** aux collègues qui utiliseront Vigie.

### 2. Publier l'application sur GitHub Pages

1. Créez un dépôt sur GitHub, par exemple `vigie`.
2. Déposez-y le contenu de ce dossier (bouton **Add file › Upload files**, ou `git push`). Le fichier indispensable est `index.html`, qui contient toute l'application ; les autres servent à l'installation comme application.
3. Dans le dépôt : **Settings › Pages › Build and deployment › Source : Deploy from a branch**, choisissez la branche `main` et le dossier `/ (root)`, puis **Save**.
4. Après une minute, l'adresse de l'application s'affiche, par exemple `https://votre-compte.github.io/vigie/`.

> Avec un compte GitHub gratuit, GitHub Pages impose un dépôt **public** : le code de l'application est visible, mais **aucune donnée** n'y figure (le fichier `.gitignore` empêche d'y publier un fichier de données par erreur). Si votre entreprise dispose de GitHub Enterprise, le dépôt peut rester privé.

### 3. Sur chaque ordinateur (vous et chaque collègue)

1. Dans SharePoint, ouvrez le dossier **Vigie** et cliquez sur **Ajouter un raccourci à Mes fichiers**. Le dossier apparaît dans l'Explorateur Windows sous **OneDrive - *votre entreprise***.
2. Conseillé : clic droit sur ce dossier dans l'Explorateur › **Toujours conserver sur cet appareil**, pour que les fichiers soient disponibles même hors connexion.
3. Ouvrez l'adresse de l'application dans **Microsoft Edge** (ou Google Chrome).
4. Installez-la comme une application : menu **…** › **Applications** › **Installer ce site en tant qu'application**. Vigie obtient alors son icône sur le bureau et dans le menu Démarrer, et s'ouvre dans sa propre fenêtre.
5. Au premier lancement, indiquez votre nom, puis cliquez sur **Choisir le dossier** et sélectionnez le dossier **Vigie** dans OneDrive. Acceptez l'autorisation de modification demandée par le navigateur.

La première personne trouve un dossier vide et choisit par quoi commencer : **données de départ** (exigences réglementaires, veille et un exemple de dispositif sur une entreprise fictive, facile à effacer), **sauvegarde** à importer, ou **dispositif vide**. Les suivantes retrouvent directement les données de l'équipe.

> À chaque ouverture, le navigateur peut vous demander de confirmer l'accès au dossier : un clic sur **Autoriser l'accès** suffit. Si le navigateur propose l'option **Autoriser à chaque visite**, choisissez-la pour ne plus avoir la question.

---

## Variante sans GitHub

Vous pouvez aussi déposer ce dossier d'application lui-même dans SharePoint, à côté du dossier de données. Chaque collègue lance alors **`Lancer Vigie.bat`** depuis l'Explorateur : Vigie s'ouvre dans une fenêtre Edge sans barre d'adresse. Les mises à jour de l'application se font en remplaçant les fichiers dans SharePoint.

`Lancer Vigie.bat` peut aussi ouvrir la version GitHub Pages : renseignez son adresse dans la ligne `ADRESSE_EN_LIGNE` du fichier.

---

## Les fonctions de pilotage

- **Présentation** : charte Égide (menu clair, une couleur par fonctionnalité), sélecteur **Jour / Nuit / Auto** en haut à droite, bouton **Retour** en haut de chaque page (ou Alt + ←).
- **Registre des risques opérationnels** : présenté **par type de processus**, avec filtres en pastilles (type de processus, impact, niveau de maîtrise) ; chaque risque se déplie en trois cartes : Processus, Risque, Dispositif de maîtrise, qui reprennent les rubriques de votre cartographie Excel.
- **Risques opérationnels** : bouton **Importer** pour reprendre une cartographie Excel existante (Vigie reconnaît les colonnes et vous laisse corriger la correspondance), bouton **Exporter** en Excel, Word ou PDF.
- **Risques majeurs** : **Regrouper par catégorie** crée un risque majeur par catégorie à partir des risques opérationnels ; vous renommez, fusionnez et réaffectez ensuite. Chaque risque majeur prend la cotation de son risque opérationnel le plus critique.
- **Incidents**, **Indicateurs de risque** (avec seuils d'alerte et valeurs mensuelles), **Auto-évaluation** des contrôles, **Séparation des tâches** (matrice des tâches incompatibles et détection des cumuls).
- **Évolution et journal** : un état est enregistré chaque trimestre, et chaque modification est tracée (qui, quoi, quand).
- **Rapport comité d'audit** (tableau de bord) en Word ou PDF, et **Relancer les retards** : un e-mail prêt à envoyer par responsable.
- **Preuves** : sur les tests et les plans d'action, collez les liens SharePoint des pièces justificatives.

## PCIF — plan de contrôle des filiales

1. Ouvrez **PCIF filiales** et cliquez sur **Importer le classeur PCIF**. Choisissez votre classeur Excel : Vigie lit les feuilles « PCIF » (code, question, critères S/A/M/I, pièces attendues, priorité, type de grille), « PCIF RGPD » et « PCIF GRILLE DE MATURITE », et reprend les **personnes en charge** et les commentaires des onglets par processus (Achats, RH, SI…). La feuille en anglais et le récapitulatif ne sont pas importés.
2. Indiquez l'exercice et la date limite, puis importez. Chaque point devient une fiche : critères d'évaluation, pièces attendues, résultat (S/A/M/I, Oui/Non ou taux), statut, justification et liens vers les pièces.
3. **Récapitulatif** reprend le tableau par processus de votre onglet « Récapitulatif » (clés, secondaires, total) avec l'avancement et le niveau de maîtrise. **Par personne** liste ce qu'il reste à chacun et prépare les e-mails de relance.
4. **Exporter** produit le PCIF rempli en Excel et une synthèse en PDF ou Word. **+ Exercice** reconduit le référentiel l'année suivante (personnes conservées, résultats remis à zéro).

Réimporter le classeur met à jour les libellés, critères et personnes **sans effacer** les résultats déjà saisis. Le classeur n'est jamais copié sur GitHub : son contenu est enregistré uniquement dans le dossier partagé de l'équipe.

## Stratégie de traitement des risques

Dans la fiche d'un risque, le choix de la stratégie fait apparaître les informations qui lui sont propres :

- **Réduire** : mesures prévues, porteur et échéance (alerte dans Aujourd'hui en cas de retard).
- **Accepter** : qui accepte, date de la décision, justification, ce qui remettrait l'acceptation en cause et date de réexamen (alerte à cette date).
- **Transférer** : moyen (assurance, contrat, externalisation…), à qui, référence du contrat ou de la police, échéance (alerte 60 jours avant), couverture et ce qui reste à votre charge.
- **Éviter** : décision prise, qui l'a prise, date d'effet et conséquences de l'arrêt.

Ces informations s'affichent dans le registre (carte « Dispositif de maîtrise »), avec la mention « À documenter » quand l'essentiel manque, et dans la colonne « MODALITES DU TRAITEMENT » de l'export Excel.

## Risques majeurs

Dans « Risques majeurs », le bouton **Identifier les risques majeurs** analyse vos risques opérationnels : intitulé, description, conséquences, processus et catégorie. Il les rapproche d'un référentiel d'une trentaine de risques majeurs types : fraude externe, fraude interne, corruption, achats, fournisseurs, cyberattaque, habilitations, continuité informatique, données personnelles, information financière, trésorerie, recouvrement, fiscalité, paie, compétences, santé-sécurité, climat social, conformité, litiges, continuité d'activité, qualité, stocks, environnement, réputation, stratégie, gouvernance et projets.

La proposition s'affiche avant toute modification. Pour chaque risque majeur, vous voyez le nombre de risques, la cotation et les mots qui ont permis le rapprochement. Vous pouvez renommer ou décocher chaque risque majeur. Les réglages disponibles :

- **Méthode** : par thème (recommandé), par processus ou par catégorie.
- **Taille minimale** d'un risque majeur, et finesse du **rapprochement** (large, équilibré, strict).
- **Portée** : « Compléter l'existant » ne rattache que les risques encore libres, en réutilisant vos risques majeurs actuels. « Tout refaire » recalcule la cartographie.

Un risque majeur « Non coté » signifie qu'aucun des risques rattachés n'a encore de probabilité ni d'impact.

## Procédures et politiques

Le référentiel documentaire regroupe vos procédures, politiques, chartes et modes opératoires.

**Deux façons de rattacher un fichier, cumulables sur une même fiche :**

- **Copie dans le dossier Vigie.** Cliquez sur **Charger des documents**, ou glissez des fichiers Word ou PDF sur la page. Vigie les copie dans le sous-dossier **Documents** du dossier partagé, sous le nom `AAAA-MM-JJ nom du fichier`. Toute l'équipe les retrouve donc via OneDrive.
- **Lien.** Collez l'adresse SharePoint ou Teams du document dans le champ **Lien** de la fiche. Le fichier reste à son emplacement d'origine.

Le texte des fichiers Word et PDF est extrait au chargement. Vous retrouvez ainsi un document par un mot de son contenu, dans la recherche de la page ou avec Ctrl+K.

Pour ajouter une nouvelle version, ouvrez la fiche et déposez le nouveau fichier. Les versions précédentes restent consultables dans la fiche.

**Liens avec le reste de Vigie :**

- **Risques.** Une procédure peut couvrir plusieurs risques, et un risque peut avoir plusieurs procédures. Le lien se fait depuis la fiche du document ou depuis la fiche du risque, et il est visible des deux côtés.
- **Registre des risques.** Les procédures apparaissent sur chaque risque. Le filtre **Procédure : sans** liste les risques non couverts.
- **Contrôles, tests et PCIF.** Un contrôle, un test ou un point PCIF peut citer ses procédures justificatives. Depuis la page d'un document, vous voyez les contrôles qui s'y rattachent et les tests déjà menés.

**Revue des documents :**

- La date de prochaine revue est calculée à partir de la date d'approbation et de la périodicité.
- Les documents à réviser remontent dans **Aujourd'hui**.
- **Relancer les propriétaires** prépare les e-mails de relance.

**Autres fonctions de la page :**

- **Reprendre l'existant** transforme le texte libre « Procédure(s) » de vos risques en fiches, déjà rattachées aux risques concernés.
- **Exporter** produit le référentiel en Excel, avec une feuille des documents et une feuille des liens avec les risques.

Dans la version en ligne (claude.ai), seuls les PDF et les liens sont acceptés : les fichiers Word ne peuvent pas y être déposés.

## Si vos données semblent avoir disparu

Vos données ne sont jamais stockées dans le navigateur : elles sont dans le dossier partagé, dans le fichier `vigie-votre-nom-xxxx.json`.

1. **Ne modifiez rien dans Vigie** tant que vous n'avez pas retrouvé vos données.
2. **Connectez vous-même votre fichier.** Ouvrez l'adresse de Vigie suivie de `#connexion` (par exemple `https://votre-compte.github.io/Vigie/#connexion`). Vous pouvez aussi passer par le panneau « Dossier partagé », bouton **Connexion des données**. La page liste les fichiers `vigie-….json` du dossier, avec leur auteur, leur date et leur contenu. Cliquez sur **C'est mon fichier**, ou sur **Choisir mon fichier vigie-….json** pour le sélectionner dans l'Explorateur.
3. **Vérifiez le mode.** Si l'indicateur en bas du menu affiche « Mode démonstration », ou un autre dossier que celui de l'équipe, cliquez dessus et reconnectez le bon dossier.
4. **Vérifiez OneDrive.** L'icône OneDrive doit afficher « À jour ». Faites un clic droit sur le dossier partagé, puis **Toujours conserver sur cet appareil**.
5. **Si votre fichier a été écrasé** (fichier récent et petit), ouvrez le dossier dans SharePoint, faites un clic droit sur le fichier, choisissez **Historique des versions**, puis restaurez la version d'avant le problème.

Depuis la version 6.6 :

- Vigie n'écrit jamais dans le dossier tant que votre fichier n'a pas été lu. Si OneDrive ne répond pas dans les 20 secondes, ou si la lecture échoue, il affiche « Vos données ne peuvent pas être lues pour l'instant », avec un bouton **Réessayer**.
- Si les données du navigateur ont été effacées, Vigie retrouve votre fichier dès que vous saisissez le même nom.
- Une copie de sécurité de votre fichier est faite chaque jour dans le sous-dossier **Sauvegardes**. Les 30 dernières sont conservées.

## Sauvegardes

- Cliquez sur l'état de synchronisation, en bas de la barre latérale, puis **Exporter une sauvegarde** : vous obtenez un fichier `sauvegarde-vigie-AAAA-MM-JJ.json` contenant toutes les données de l'équipe. **Importer une sauvegarde** permet de les recharger.
- SharePoint conserve en plus l'historique des versions de chaque fichier.

## Mettre à jour l'application

Remplacez les fichiers sur GitHub. Chaque utilisateur reçoit la nouvelle version à l'ouverture suivante. Les données, elles, ne sont pas touchées.

## Ce qu'il faut savoir

- **Navigateur** : Microsoft Edge ou Google Chrome sur ordinateur. Firefox et Safari ne permettent pas encore à une application web d'écrire dans un dossier ; ils ouvrent Vigie en mode démonstration.
- **Même fiche modifiée au même moment** par deux personnes : la dernière enregistrée l'emporte. Les fiches différentes ne se gênent jamais.
- **Progression en formation, prénom affiché et préférences** : enregistrés sur chaque ordinateur, pas dans le dossier partagé.
- **Actions de la veille** : saisissez-les dans la fiche de l'actualité (bouton **Modifier**), une par ligne : `15/01/2027 ; Haute ; Mettre à jour la cartographie ; Contrôleur interne`. Le plan d'action de la veille s'imprime ou s'enregistre en PDF avec le bouton **Imprimer ou PDF**.
- **Hors connexion** : Vigie s'ouvre et enregistre sur l'ordinateur ; OneDrive envoie les modifications au retour du réseau.

## Contenu du dépôt

| Fichier | Rôle |
|---|---|
| `index.html` | **Toute l'application** en un seul fichier : pages, styles, formations, stockage partagé, données de départ et bibliothèques d'export et de lecture (SheetJS, jsPDF, pdf.js) |
| `manifest.webmanifest`, `sw.js`, `icon.svg`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` | Installation comme application et ouverture hors connexion |
| `Lancer Vigie.bat` | Lanceur Windows (fenêtre Edge sans barre d'adresse) |
