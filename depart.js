/* Données de départ de Vigie : exemples de l'entreprise fictive Hexalis, exigences réglementaires et veille.
   Elles sont chargées uniquement si vous le choisissez à la première connexion. */
window.VIGIE_DEPART = {
 "app": "vigie",
 "type": "sauvegarde",
 "format": 1,
 "exporte": "2026-11-16T09:30:00Z",
 "collections": {
  "risques": {
   "r1": {
    "categorie": "Fraude et corruption",
    "description": "Fournisseur créé sans contrôle ou facture saisie deux fois, entraînant une sortie de trésorerie injustifiée.",
    "exemple": true,
    "impact": 4,
    "impactR": 4,
    "proba": 3,
    "probaR": 2,
    "processus": "Achats",
    "proprietaire": "Directeur des achats",
    "ref": "R-001",
    "titre": "Paiement de factures fictives ou en double",
    "traitement": "Réduire"
   },
   "r10": {
    "categorie": "Stratégique",
    "description": "Concentration du portefeuille clients, contrat renégocié tous les trois ans.",
    "exemple": true,
    "impact": 5,
    "impactR": 4,
    "proba": 2,
    "probaR": 2,
    "processus": "Direction générale",
    "proprietaire": "Directeur général",
    "ref": "R-010",
    "titre": "Perte d'un client représentant 22 % du chiffre d'affaires",
    "traitement": "Réduire"
   },
   "r11": {
    "categorie": "Ressources humaines",
    "description": "Savoir-faire de conception concentré sur quelques ingénieurs proches de la retraite.",
    "exemple": true,
    "impact": 3,
    "proba": 3,
    "processus": "Paie & RH",
    "proprietaire": "DRH",
    "ref": "R-011",
    "titre": "Départ non anticipé d'experts techniques clés",
    "traitement": "Réduire"
   },
   "r12": {
    "categorie": "RSE et environnement",
    "description": "Défaillance de la station de prétraitement, rejet non conforme dans le milieu naturel.",
    "exemple": true,
    "impact": 4,
    "impactR": 4,
    "proba": 2,
    "probaR": 1,
    "processus": "Production",
    "proprietaire": "Directeur industriel",
    "ref": "R-012",
    "titre": "Pollution accidentelle d'un site par les eaux de process",
    "traitement": "Réduire"
   },
   "r2": {
    "categorie": "Fraude et corruption",
    "description": "Fraude au changement de RIB par usurpation d'identité d'un fournisseur.",
    "exemple": true,
    "impact": 5,
    "impactR": 5,
    "proba": 4,
    "probaR": 3,
    "processus": "Trésorerie",
    "proprietaire": "Trésorier",
    "ref": "R-002",
    "titre": "Modification frauduleuse des coordonnées bancaires fournisseurs",
    "traitement": "Réduire"
   },
   "r3": {
    "categorie": "Financier et comptable",
    "description": "Erreur de séparation des exercices sur les livraisons de fin de mois.",
    "exemple": true,
    "impact": 3,
    "impactR": 3,
    "proba": 3,
    "probaR": 2,
    "processus": "Clôture comptable",
    "proprietaire": "Directeur administratif et financier",
    "ref": "R-003",
    "titre": "Chiffre d'affaires comptabilisé sur la mauvaise période",
    "traitement": "Réduire"
   },
   "r4": {
    "categorie": "Systèmes d'information et cyber",
    "description": "Droits d'accès non revus après départs ou mobilités, cumul de droits incompatibles.",
    "exemple": true,
    "impact": 4,
    "impactR": 4,
    "proba": 4,
    "probaR": 3,
    "processus": "Systèmes d'information",
    "proprietaire": "DSI",
    "ref": "R-004",
    "titre": "Accès non autorisés à l'ERP",
    "traitement": "Réduire"
   },
   "r5": {
    "categorie": "Ressources humaines",
    "description": "Éléments variables mal saisis ou salariés sortis toujours payés.",
    "exemple": true,
    "impact": 3,
    "impactR": 3,
    "proba": 2,
    "probaR": 1,
    "processus": "Paie & RH",
    "proprietaire": "Responsable paie",
    "ref": "R-005",
    "titre": "Erreurs dans le calcul de la paie",
    "traitement": "Réduire"
   },
   "r6": {
    "categorie": "Opérationnel",
    "description": "Démarque inconnue et stocks surévalués au bilan.",
    "exemple": true,
    "impact": 2,
    "proba": 3,
    "processus": "Stocks",
    "proprietaire": "Responsable logistique",
    "ref": "R-006",
    "titre": "Écarts d'inventaire non expliqués",
    "traitement": "Réduire"
   },
   "r7": {
    "categorie": "Conformité et juridique",
    "description": "Évaluation des tiers incomplète, absence de traçabilité des cadeaux et invitations.",
    "exemple": true,
    "impact": 5,
    "impactR": 4,
    "proba": 2,
    "probaR": 2,
    "processus": "Conformité & juridique",
    "proprietaire": "Responsable conformité",
    "ref": "R-007",
    "titre": "Non-conformité aux obligations anticorruption (Sapin II)",
    "traitement": "Réduire"
   },
   "r8": {
    "categorie": "Opérationnel",
    "description": "70 % des approvisionnements de la gamme reposent sur un seul fournisseur ; une rupture arrêterait une ligne de production.",
    "exemple": true,
    "impact": 4,
    "impactR": 4,
    "proba": 3,
    "probaR": 3,
    "processus": "Achats",
    "proprietaire": "Directeur des achats",
    "ref": "R-008",
    "titre": "Dépendance à un fournisseur unique de membranes",
    "traitement": "Réduire"
   },
   "r9": {
    "categorie": "Systèmes d'information et cyber",
    "description": "Chiffrement des serveurs de production et de l'ERP, indisponibilité de plusieurs semaines.",
    "exemple": true,
    "impact": 5,
    "impactR": 5,
    "proba": 3,
    "probaR": 2,
    "processus": "Systèmes d'information",
    "proprietaire": "DSI",
    "ref": "R-009",
    "titre": "Attaque par rançongiciel paralysant la production et la facturation",
    "traitement": "Réduire"
   }
  },
  "controles": {
   "c1": {
    "cle": true,
    "description": "Le système bloque toute facture sans commande et bon de réception correspondants (tolérance 2 %).",
    "exemple": true,
    "frequence": "À chaque opération",
    "nature": "Automatique",
    "preuve": "Paramétrage ERP et journal des blocages",
    "proprietaire": "Comptabilité fournisseurs",
    "ref": "CT-001",
    "risqueId": "r1",
    "titre": "Rapprochement à trois voies commande / réception / facture",
    "type": "Préventif"
   },
   "c10": {
    "cle": true,
    "description": "Analyses mensuelles par un laboratoire agréé, comparées aux seuils de l'arrêté préfectoral.",
    "exemple": true,
    "frequence": "Mensuelle",
    "nature": "Manuel",
    "preuve": "Rapports d'analyse et registre",
    "proprietaire": "Responsable HSE",
    "ref": "CT-010",
    "risqueId": "r12",
    "titre": "Autosurveillance mensuelle des rejets aqueux",
    "type": "Détectif"
   },
   "c2": {
    "cle": true,
    "description": "Toute demande de modification est validée par un appel au numéro connu du fournisseur, puis double validation.",
    "exemple": true,
    "frequence": "À chaque opération",
    "nature": "Manuel",
    "preuve": "Formulaire de changement signé et trace de l'appel",
    "proprietaire": "Trésorier",
    "ref": "CT-002",
    "risqueId": "r2",
    "titre": "Contre-appel du fournisseur avant tout changement de RIB",
    "type": "Préventif"
   },
   "c3": {
    "cle": false,
    "description": "Le DAF revoit l'extraction des RIB modifiés dans le mois.",
    "exemple": true,
    "frequence": "Mensuelle",
    "nature": "Manuel",
    "preuve": "Extraction visée et datée",
    "proprietaire": "DAF",
    "ref": "CT-003",
    "risqueId": "r2",
    "titre": "Revue mensuelle du fichier des modifications de RIB",
    "type": "Détectif"
   },
   "c4": {
    "cle": true,
    "description": "Contrôle des bons de livraison des 5 derniers et 5 premiers jours de la période.",
    "exemple": true,
    "frequence": "Mensuelle",
    "nature": "Manuel",
    "preuve": "Feuille de travail de cut-off",
    "proprietaire": "Contrôle de gestion",
    "ref": "CT-004",
    "risqueId": "r3",
    "titre": "Revue du cut-off des ventes à la clôture",
    "type": "Détectif"
   },
   "c5": {
    "cle": true,
    "description": "Chaque manager valide la liste des accès de son équipe ; la DSI retire les droits non confirmés.",
    "exemple": true,
    "frequence": "Semestrielle",
    "nature": "Semi-automatique",
    "preuve": "Campagne de recertification et tickets de retrait",
    "proprietaire": "DSI",
    "ref": "CT-005",
    "risqueId": "r4",
    "titre": "Revue semestrielle des habilitations ERP",
    "type": "Détectif"
   },
   "c6": {
    "cle": false,
    "description": "Analyse des variations supérieures à 10 % par salarié avant validation de la paie.",
    "exemple": true,
    "frequence": "Mensuelle",
    "nature": "Manuel",
    "preuve": "État des écarts annoté",
    "proprietaire": "Responsable paie",
    "ref": "CT-006",
    "risqueId": "r5",
    "titre": "Contrôle des écarts de paie d'un mois sur l'autre",
    "type": "Détectif"
   },
   "c7": {
    "cle": true,
    "description": "Questionnaire et recherches de réputation pour les tiers des pays à risque.",
    "exemple": true,
    "frequence": "À chaque opération",
    "nature": "Manuel",
    "preuve": "Fiche d'évaluation du tiers",
    "proprietaire": "Responsable conformité",
    "ref": "CT-007",
    "risqueId": "r7",
    "titre": "Évaluation des tiers à risque avant entrée en relation",
    "type": "Préventif"
   },
   "c8": {
    "cle": true,
    "description": "La DSI réalise une sauvegarde hors ligne hebdomadaire et teste la restauration d'un serveur critique chaque trimestre.",
    "exemple": true,
    "frequence": "Trimestrielle",
    "nature": "Semi-automatique",
    "preuve": "Rapport de test de restauration",
    "proprietaire": "DSI",
    "ref": "CT-008",
    "risqueId": "r9",
    "titre": "Sauvegardes déconnectées et test de restauration trimestriel",
    "type": "Correctif"
   },
   "c9": {
    "cle": false,
    "description": "Le directeur des achats suit la part du premier fournisseur par catégorie ; alerte au-delà de 60 %.",
    "exemple": true,
    "frequence": "Trimestrielle",
    "nature": "Manuel",
    "preuve": "Tableau de bord achats commenté",
    "proprietaire": "Directeur des achats",
    "ref": "CT-009",
    "risqueId": "r8",
    "titre": "Suivi trimestriel de la part du premier fournisseur",
    "type": "Détectif"
   }
  },
  "tests": {
   "t1": {
    "commentaire": "Blocage vérifié sur 25 factures sans écart.",
    "controleId": "c1",
    "date": "2026-07-08",
    "echantillon": 25,
    "exceptions": 0,
    "exemple": true,
    "methode": "Réexécution",
    "periode": "S1 2026",
    "ref": "T-001",
    "resultat": "Efficace",
    "testeur": "Contrôle interne",
    "typeTest": "Efficacité opérationnelle"
   },
   "t2": {
    "commentaire": "2 changements sans trace du contre-appel.",
    "controleId": "c2",
    "date": "2026-07-15",
    "echantillon": 15,
    "exceptions": 2,
    "exemple": true,
    "methode": "Échantillonnage",
    "periode": "S1 2026",
    "ref": "T-002",
    "resultat": "Partiellement efficace",
    "testeur": "Contrôle interne",
    "typeTest": "Efficacité opérationnelle"
   },
   "t3": {
    "commentaire": "Cut-off documenté pour les trois clôtures du trimestre.",
    "controleId": "c4",
    "date": "2026-08-28",
    "echantillon": 3,
    "exceptions": 0,
    "exemple": true,
    "methode": "Revue documentaire",
    "periode": "T2 2026",
    "ref": "T-003",
    "resultat": "Efficace",
    "testeur": "Contrôle interne",
    "typeTest": "Efficacité opérationnelle"
   },
   "t4": {
    "commentaire": "7 comptes de salariés sortis toujours actifs ; campagne non finalisée par deux directions.",
    "controleId": "c5",
    "date": "2026-09-10",
    "echantillon": 40,
    "exceptions": 7,
    "exemple": true,
    "methode": "Revue documentaire",
    "periode": "S1 2026",
    "ref": "T-004",
    "resultat": "Inefficace",
    "testeur": "Contrôle interne",
    "typeTest": "Efficacité opérationnelle"
   },
   "t5": {
    "commentaire": "Entretien réalisé avec la conformité, revue de la procédure en cours.",
    "controleId": "c7",
    "date": "2026-10-14",
    "exemple": true,
    "methode": "Entretien",
    "periode": "2026",
    "ref": "T-005",
    "resultat": "En cours",
    "testeur": "Contrôle interne",
    "typeTest": "Conception"
   },
   "t6": {
    "controleId": "c7",
    "date": "2026-11-20",
    "exemple": true,
    "methode": "Échantillonnage",
    "periode": "S2 2026",
    "ref": "T-006",
    "resultat": "Planifié",
    "testeur": "Contrôle interne",
    "typeTest": "Efficacité opérationnelle"
   },
   "t7": {
    "commentaire": "Trois tests de restauration documentés et réussis.",
    "controleId": "c8",
    "date": "2026-10-06",
    "echantillon": 3,
    "exceptions": 0,
    "exemple": true,
    "methode": "Réexécution",
    "periode": "T1-T3 2026",
    "ref": "T-007",
    "resultat": "Efficace",
    "testeur": "Contrôle interne",
    "typeTest": "Efficacité opérationnelle"
   }
  },
  "actions": {
   "a1": {
    "avancement": 60,
    "controleId": "c2",
    "description": "2 modifications de RIB sur 15 sans preuve du contre-appel.",
    "echeance": "2026-09-30",
    "exemple": true,
    "gravite": "Élevée",
    "recommandation": "Rendre obligatoire la pièce jointe de traçabilité de l'appel dans le workflow de modification.",
    "ref": "C-001",
    "responsable": "Trésorier",
    "risqueId": "r2",
    "source": "Test de contrôle",
    "statut": "En cours",
    "titre": "Contre-appels fournisseurs non tracés"
   },
   "a2": {
    "avancement": 40,
    "controleId": "c5",
    "description": "7 comptes non désactivés après départ.",
    "echeance": "2026-10-15",
    "exemple": true,
    "gravite": "Critique",
    "modifieLe": "2026-10-21T09:53:45.744Z",
    "recommandation": "Désactiver les comptes et automatiser la suppression à partir de la sortie RH.",
    "ref": "C-002",
    "responsable": "DSI",
    "risqueId": "r4",
    "source": "Test de contrôle",
    "statut": "En cours",
    "titre": "Comptes ERP actifs pour des salariés sortis"
   },
   "a3": {
    "avancement": 0,
    "description": "Les comptages tournants ne sont pas documentés et les écarts ne sont pas analysés.",
    "echeance": "2026-12-15",
    "exemple": true,
    "gravite": "Modérée",
    "recommandation": "Rédiger la procédure et mettre en place un contrôle des écarts significatifs.",
    "ref": "C-003",
    "responsable": "Responsable logistique",
    "risqueId": "r6",
    "source": "Commissaire aux comptes",
    "statut": "À lancer",
    "titre": "Procédure d'inventaire tournant à formaliser"
   },
   "a4": {
    "avancement": 100,
    "controleId": "c1",
    "description": "La tolérance de 2 % laisse passer des écarts de plusieurs milliers d'euros sur les grosses commandes.",
    "echeance": "2026-08-31",
    "exemple": true,
    "gravite": "Faible",
    "recommandation": "Ajouter un plafond en valeur absolue à la tolérance.",
    "ref": "C-004",
    "responsable": "Comptabilité fournisseurs",
    "risqueId": "r1",
    "source": "Auto-évaluation",
    "statut": "Réalisé",
    "titre": "Seuil de tolérance du rapprochement à revoir"
   },
   "a5": {
    "avancement": 25,
    "description": "Registre tenu uniquement par la direction commerciale.",
    "echeance": "2026-11-30",
    "exemple": true,
    "gravite": "Élevée",
    "recommandation": "Étendre le registre à toutes les directions et le revoir trimestriellement.",
    "ref": "C-005",
    "responsable": "Responsable conformité",
    "risqueId": "r7",
    "source": "Audit interne",
    "statut": "En cours",
    "titre": "Registre des cadeaux et invitations incomplet"
   }
  },
  "taches": {
   "k1": {
    "assigneId": "m3",
    "description": "Obtenir la preuve de désactivation des 7 comptes et l'analyse des connexions postérieures aux départs.",
    "echeance": "2026-10-21",
    "exemple": true,
    "lien": "actions:a2",
    "modifieLe": "2026-10-21T09:53:40.207Z",
    "priorite": "Urgente",
    "ref": "TK-001",
    "statut": "Terminée",
    "titre": "Relancer la DSI sur la désactivation des comptes ERP"
   },
   "k2": {
    "assigneId": "m3",
    "description": "Arbitrer les dates avec les responsables de contrôles et l'audit interne.",
    "echeance": "2026-10-22",
    "exemple": true,
    "modifieLe": "2026-10-21T09:53:57.466Z",
    "priorite": "Urgente",
    "ref": "TK-002",
    "statut": "Terminée",
    "titre": "Valider le planning des tests d'efficacité du second semestre"
   },
   "k3": {
    "assigneId": "m3",
    "description": "Rédiger la conclusion après l'entretien avec la conformité.",
    "echeance": "2026-10-24",
    "exemple": true,
    "lien": "tests:t5",
    "priorite": "Haute",
    "ref": "TK-003",
    "statut": "En cours",
    "titre": "Finaliser le test de conception de l'évaluation des tiers"
   },
   "k4": {
    "assigneId": "m3",
    "description": "Score de conformité, constats critiques, avancement des plans d'action.",
    "echeance": "2026-11-10",
    "exemple": true,
    "priorite": "Haute",
    "ref": "TK-004",
    "statut": "En cours",
    "titre": "Préparer le support du comité d'audit du 18 novembre"
   },
   "k5": {
    "assigneId": "m14",
    "echeance": "2026-11-05",
    "exemple": true,
    "priorite": "Normale",
    "ref": "TK-005",
    "statut": "À faire",
    "titre": "Évaluer les 8 exigences Sapin II avec la conformité"
   },
   "k6": {
    "assigneId": "m12",
    "echeance": "2026-10-27",
    "exemple": true,
    "priorite": "Normale",
    "ref": "TK-006",
    "statut": "À faire",
    "titre": "Transmettre les rapports d'analyse des rejets aqueux"
   },
   "k7": {
    "assigneId": "m7",
    "echeance": "2026-11-28",
    "exemple": true,
    "priorite": "Basse",
    "ref": "TK-007",
    "statut": "À faire",
    "titre": "Mettre à jour la délégation de pouvoirs achats"
   },
   "k8": {
    "assigneId": "m3",
    "echeance": "2026-10-10",
    "exemple": true,
    "priorite": "Normale",
    "ref": "TK-008",
    "statut": "Terminée",
    "titre": "Envoyer le questionnaire d'auto-évaluation aux directions"
   }
  },
  "equipe": {
   "m0": {
    "direction": "Conseil d'administration",
    "exemple": true,
    "fonction": "Président du comité d'audit",
    "ligne": "Gouvernance",
    "nom": "Bernard Lefort",
    "ref": "M-001",
    "roleCI": "Comité d'audit"
   },
   "m1": {
    "alias": "Directeur général, DG",
    "direction": "Direction générale",
    "exemple": true,
    "fonction": "Directrice générale",
    "ligne": "Direction générale",
    "localisation": "Lyon",
    "nom": "Hélène Marchal",
    "ref": "M-002",
    "roleCI": "Direction générale"
   },
   "m10": {
    "direction": "Ressources humaines",
    "exemple": true,
    "fonction": "Responsable paie",
    "ligne": "1re ligne",
    "managerId": "m9",
    "nom": "Claire Dumont",
    "ref": "M-011",
    "roleCI": "Responsable de contrôles"
   },
   "m11": {
    "direction": "Industrie",
    "exemple": true,
    "fonction": "Directeur industriel",
    "ligne": "1re ligne",
    "managerId": "m1",
    "nom": "Antoine Rousseau",
    "ref": "M-012",
    "roleCI": "Propriétaire de risques"
   },
   "m12": {
    "direction": "Industrie",
    "exemple": true,
    "fonction": "Responsable HSE",
    "ligne": "1re ligne",
    "managerId": "m11",
    "nom": "Inès Lambert",
    "ref": "M-013",
    "roleCI": "Responsable de contrôles"
   },
   "m13": {
    "direction": "Industrie",
    "exemple": true,
    "fonction": "Responsable logistique",
    "ligne": "1re ligne",
    "managerId": "m11",
    "nom": "Marc Olivier",
    "ref": "M-014",
    "roleCI": "Correspondant contrôle interne"
   },
   "m14": {
    "direction": "Juridique et conformité",
    "exemple": true,
    "fonction": "Responsable conformité",
    "ligne": "2e ligne",
    "managerId": "m1",
    "nom": "Sophie Renaud",
    "ref": "M-015",
    "roleCI": "Correspondant contrôle interne"
   },
   "m15": {
    "alias": "Audit interne",
    "direction": "Audit interne",
    "exemple": true,
    "fonction": "Responsable de l'audit interne",
    "ligne": "3e ligne",
    "nom": "Élodie Perrin",
    "ref": "M-016",
    "roleCI": "Auditeur interne"
   },
   "m16": {
    "exemple": true,
    "fonction": "Commissaire aux comptes",
    "ligne": "Externe",
    "nom": "Cabinet Arvel Audit",
    "ref": "M-017",
    "roleCI": "Commissaire aux comptes"
   },
   "m2": {
    "alias": "DAF",
    "direction": "Finance",
    "exemple": true,
    "fonction": "Directeur administratif et financier",
    "ligne": "1re ligne",
    "localisation": "Lyon",
    "managerId": "m1",
    "nom": "Olivier Peyrac",
    "ref": "M-003",
    "roleCI": "Propriétaire de risques"
   },
   "m3": {
    "alias": "Contrôle interne",
    "direction": "Finance",
    "exemple": true,
    "fonction": "Contrôleur interne",
    "ligne": "2e ligne",
    "localisation": "Lyon",
    "managerId": "m2",
    "nom": "Poste contrôle interne",
    "ref": "M-004",
    "roleCI": "Contrôleur interne"
   },
   "m4": {
    "alias": "Trésorier",
    "direction": "Finance",
    "exemple": true,
    "fonction": "Trésorière",
    "ligne": "1re ligne",
    "managerId": "m2",
    "nom": "Sandrine Vidal",
    "ref": "M-005",
    "roleCI": "Responsable de contrôles"
   },
   "m5": {
    "alias": "Comptabilité fournisseurs",
    "direction": "Finance",
    "exemple": true,
    "fonction": "Responsable comptabilité fournisseurs",
    "ligne": "1re ligne",
    "managerId": "m2",
    "nom": "Karim Benali",
    "ref": "M-006",
    "roleCI": "Responsable de contrôles"
   },
   "m6": {
    "alias": "Contrôle de gestion",
    "direction": "Finance",
    "exemple": true,
    "fonction": "Contrôleuse de gestion",
    "ligne": "1re ligne",
    "managerId": "m2",
    "nom": "Julie Moreau",
    "ref": "M-007",
    "roleCI": "Correspondant contrôle interne"
   },
   "m7": {
    "direction": "Achats",
    "exemple": true,
    "fonction": "Directeur des achats",
    "ligne": "1re ligne",
    "managerId": "m1",
    "nom": "Thomas Garnier",
    "ref": "M-008",
    "roleCI": "Propriétaire de risques"
   },
   "m8": {
    "alias": "DSI",
    "direction": "Systèmes d'information",
    "exemple": true,
    "fonction": "Directrice des systèmes d'information",
    "ligne": "1re ligne",
    "managerId": "m1",
    "nom": "Nadia Haddad",
    "ref": "M-009",
    "roleCI": "Propriétaire de risques"
   },
   "m9": {
    "alias": "DRH",
    "direction": "Ressources humaines",
    "exemple": true,
    "fonction": "Directeur des ressources humaines",
    "ligne": "1re ligne",
    "managerId": "m1",
    "nom": "Laurent Fabre",
    "ref": "M-010",
    "roleCI": "Propriétaire de risques"
   }
  },
  "exigences": {
   "alr1": {
    "ref": "ALR-1",
    "reference": "Loi n° 2022-401 du 21 mars 2022 ; décret n° 2022-1284",
    "referentiel": "Lanceurs d'alerte",
    "statut": "À évaluer",
    "titre": "Procédure interne de recueil et de traitement des signalements (entités de 50 salariés et plus)"
   },
   "cif1": {
    "ref": "CIF-1",
    "reference": "COSO 2013, principe 10",
    "referentiel": "Contrôle interne financier",
    "statut": "À évaluer",
    "titre": "Séparation des tâches sur les processus achats, ventes et trésorerie"
   },
   "cif2": {
    "ref": "CIF-2",
    "reference": "COSO 2013, principe 3",
    "referentiel": "Contrôle interne financier",
    "statut": "À évaluer",
    "titre": "Délégations de pouvoirs et de signature formalisées et à jour"
   },
   "cif3": {
    "ref": "CIF-3",
    "reference": "Cadre de référence AMF",
    "referentiel": "Contrôle interne financier",
    "statut": "À évaluer",
    "titre": "Procédure de clôture documentée avec revue analytique"
   },
   "fra1": {
    "ref": "FRA-1",
    "reference": "Bonne pratique",
    "referentiel": "Fraude aux paiements",
    "statut": "À évaluer",
    "titre": "Vérification par contre-appel de toute modification de coordonnées bancaires"
   },
   "fra2": {
    "ref": "FRA-2",
    "reference": "Bonne pratique",
    "referentiel": "Fraude aux paiements",
    "statut": "À évaluer",
    "titre": "Double validation des paiements au-delà d'un seuil défini"
   },
   "rgpd1": {
    "ref": "RGPD-1",
    "reference": "Règlement (UE) 2016/679, art. 30",
    "referentiel": "RGPD",
    "statut": "À évaluer",
    "titre": "Registre des activités de traitement à jour"
   },
   "rgpd2": {
    "ref": "RGPD-2",
    "reference": "Règlement (UE) 2016/679, art. 33",
    "referentiel": "RGPD",
    "statut": "À évaluer",
    "titre": "Procédure de notification des violations de données à la CNIL sous 72 heures"
   },
   "rgpd3": {
    "ref": "RGPD-3",
    "reference": "Règlement (UE) 2016/679, art. 35",
    "referentiel": "RGPD",
    "statut": "À évaluer",
    "titre": "Analyses d'impact pour les traitements à risque élevé"
   },
   "rgpd4": {
    "ref": "RGPD-4",
    "reference": "Règlement (UE) 2016/679, art. 28",
    "referentiel": "RGPD",
    "statut": "À évaluer",
    "titre": "Contrats conformes avec les sous-traitants de données"
   },
   "rgpd5": {
    "ref": "RGPD-5",
    "reference": "Règlement (UE) 2016/679, art. 13 et 14",
    "referentiel": "RGPD",
    "statut": "À évaluer",
    "titre": "Information des personnes concernées (salariés, clients, prospects)"
   },
   "rgpd6": {
    "ref": "RGPD-6",
    "reference": "Règlement (UE) 2016/679, art. 37",
    "referentiel": "RGPD",
    "statut": "À évaluer",
    "titre": "Désignation d'un délégué à la protection des données lorsqu'elle est obligatoire"
   },
   "sap1": {
    "ref": "SAP-1",
    "reference": "Loi n° 2016-1691, art. 17 II 1°",
    "referentiel": "Loi Sapin II",
    "statut": "À évaluer",
    "titre": "Code de conduite anticorruption intégré au règlement intérieur"
   },
   "sap2": {
    "ref": "SAP-2",
    "reference": "Loi n° 2016-1691, art. 17 II 2°",
    "referentiel": "Loi Sapin II",
    "statut": "À évaluer",
    "titre": "Dispositif d'alerte interne pour signaler les manquements au code de conduite"
   },
   "sap3": {
    "ref": "SAP-3",
    "reference": "Loi n° 2016-1691, art. 17 II 3°",
    "referentiel": "Loi Sapin II",
    "statut": "À évaluer",
    "titre": "Cartographie des risques de corruption, documentée et mise à jour"
   },
   "sap4": {
    "ref": "SAP-4",
    "reference": "Loi n° 2016-1691, art. 17 II 4°",
    "referentiel": "Loi Sapin II",
    "statut": "À évaluer",
    "titre": "Procédures d'évaluation des clients, fournisseurs et intermédiaires"
   },
   "sap5": {
    "ref": "SAP-5",
    "reference": "Loi n° 2016-1691, art. 17 II 5°",
    "referentiel": "Loi Sapin II",
    "statut": "À évaluer",
    "titre": "Procédures de contrôles comptables destinées à prévenir la corruption"
   },
   "sap6": {
    "ref": "SAP-6",
    "reference": "Loi n° 2016-1691, art. 17 II 6°",
    "referentiel": "Loi Sapin II",
    "statut": "À évaluer",
    "titre": "Formation des cadres et des personnels les plus exposés"
   },
   "sap7": {
    "ref": "SAP-7",
    "reference": "Loi n° 2016-1691, art. 17 II 7°",
    "referentiel": "Loi Sapin II",
    "statut": "À évaluer",
    "titre": "Régime disciplinaire sanctionnant les violations du code de conduite"
   },
   "sap8": {
    "ref": "SAP-8",
    "reference": "Loi n° 2016-1691, art. 17 II 8°",
    "referentiel": "Loi Sapin II",
    "statut": "À évaluer",
    "titre": "Dispositif de contrôle et d'évaluation interne des mesures anticorruption"
   },
   "ssi1": {
    "ref": "SSI-1",
    "reference": "Bonnes pratiques ANSSI",
    "referentiel": "Sécurité des SI",
    "statut": "À évaluer",
    "titre": "Authentification multifacteur sur les accès distants et les comptes à privilèges"
   },
   "ssi2": {
    "ref": "SSI-2",
    "reference": "Bonnes pratiques ANSSI",
    "referentiel": "Sécurité des SI",
    "statut": "À évaluer",
    "titre": "Sauvegardes hors ligne et restaurations testées"
   },
   "ssi3": {
    "ref": "SSI-3",
    "reference": "COSO 2013, principe 11",
    "referentiel": "Sécurité des SI",
    "statut": "À évaluer",
    "titre": "Revue périodique des habilitations et désactivation des comptes au départ"
   },
   "ssi4": {
    "ref": "SSI-4",
    "reference": "Bonnes pratiques ; NIS 2 pour les entités concernées",
    "referentiel": "Sécurité des SI",
    "statut": "À évaluer",
    "titre": "Plan de continuité et de reprise d'activité testé au moins une fois par an"
   }
  },
  "actualites": {
   "n1": {
    "actions": [
     {
      "detail": "Questionnaire aux directions finance, achats et RH : outils utilisés, données saisies, décisions influencées.",
      "echeance": "2026-11-30",
      "priorite": "Haute",
      "responsable": "Contrôleur interne avec la DSI",
      "titre": "Recenser les usages de l'IA générative dans les processus financiers"
     },
     {
      "detail": "Outils autorisés, interdiction d'y saisir des données confidentielles, obligation de relecture humaine.",
      "echeance": "2026-12-18",
      "priorite": "Normale",
      "responsable": "DSI et Juridique",
      "titre": "Faire adopter une charte d'usage de l'IA générative"
     },
     {
      "detail": "Pour les analyses de clôture et les rapports de gestion : trace du relecteur et des corrections apportées.",
      "echeance": "2027-01-29",
      "priorite": "Normale",
      "responsable": "DAF",
      "titre": "Ajouter un contrôle de revue humaine documentée sur les livrables produits avec l'IA"
     },
     {
      "detail": "Coter le risque et lui rattacher les contrôles définis lors de la mise à jour annuelle.",
      "echeance": "2027-02-26",
      "priorite": "Normale",
      "responsable": "Contrôleur interne",
      "titre": "Intégrer le risque « usage non maîtrisé de l'IA » à la cartographie"
     }
    ],
    "ajouteLe": "2026-10-21T10:30:00Z",
    "date": "2026-02-15",
    "impact": "Recensez les usages de l'IA dans les processus financiers, définissez des règles d'usage et exigez une revue humaine documentée des résultats utilisés pour décider.",
    "modifieLe": "2026-10-21T12:00:00Z",
    "ref": "A-001",
    "resume": "Publié en février 2026, le guide « Achieving Effective Internal Control Over Generative AI » étend le contrôle au-delà des résultats enregistrés : il faut aussi garder la trace de la façon dont les décisions influencées par l'IA ont été formées, revues et encadrées. Selon EY, il intègre le risque IA à la gestion des risques de l'entreprise et privilégie des réévaluations déclenchées par les événements.",
    "source": "COSO, analyse EY du 25 juin 2026",
    "theme": "IA",
    "titre": "Le COSO publie un guide sur le contrôle interne de l'IA générative",
    "url": "https://www.ey.com/en_us/cro-risk/coso-2026-and-the-shift-in-ai-governance"
   },
   "n2": {
    "actions": [
     {
      "detail": "Comparer la démarche de cartographie aux pratiques décrites par le nouveau guide COSO : intégration à la stratégie, gouvernance, suivi.",
      "echeance": "2027-01-29",
      "priorite": "Normale",
      "responsable": "Contrôleur interne",
      "titre": "Réaliser un autodiagnostic de maturité de la gestion des risques"
     },
     {
      "detail": "Ajouter l'objectif menacé dans la fiche de chaque risque critique ou élevé avant la mise à jour annuelle.",
      "echeance": "2027-02-26",
      "priorite": "Normale",
      "responsable": "Contrôleur interne avec les propriétaires de risques",
      "titre": "Relier chaque risque majeur à un objectif stratégique"
     },
     {
      "detail": "Une page de synthèse : risques majeurs, objectifs concernés, niveau de maîtrise.",
      "echeance": "2027-03-31",
      "priorite": "Basse",
      "responsable": "DAF et Contrôleur interne",
      "titre": "Présenter au comité d'audit le lien entre risques et stratégie"
     }
    ],
    "ajouteLe": "2026-10-21T10:30:00Z",
    "date": "2026-07-15",
    "impact": "Une bonne base pour comparer la maturité de votre cartographie aux pratiques observées et pour argumenter un rapprochement entre risques et objectifs stratégiques.",
    "modifieLe": "2026-10-21T12:00:00Z",
    "ref": "A-002",
    "resume": "Le COSO a publié « From Guidance to Action: Exploring Practical Enterprise Risk Management », fondé sur une enquête auprès des praticiens. Il dresse un état de la maturité de l'ERM, de ses difficultés et des pratiques avancées, et aborde l'intégration à la stratégie et le rôle de l'audit interne.",
    "source": "The IIA, webinaire du 15 juillet 2026",
    "theme": "Référentiels",
    "titre": "Nouveau guide COSO sur la pratique de la gestion des risques",
    "url": "https://www.theiia.org/en/products/learning-solutions/webinar/from-paper-to-practice-applying-cosos-new-2026-erm-guidance/"
   },
   "n3": {
    "actions": [
     {
      "detail": "Éviter les doublons et identifier les contrôles cyber sur lesquels l'audit pourra s'appuyer.",
      "echeance": "2026-11-27",
      "priorite": "Normale",
      "responsable": "Contrôleur interne et Audit interne",
      "titre": "Coordonner avec l'audit interne le calendrier de la mission cybersécurité"
     },
     {
      "detail": "Gouvernance, lien avec les risques métier, contrôles, résilience et incidents, tiers, pilotage et reporting.",
      "echeance": "2026-12-18",
      "priorite": "Haute",
      "responsable": "DSI",
      "titre": "Documenter les contrôles cyber selon les six domaines de l'IIA"
     },
     {
      "detail": "Hébergement, infogérance, éditeurs de l'ERP : clauses d'audit, notification d'incident, réversibilité.",
      "echeance": "2027-02-26",
      "priorite": "Haute",
      "responsable": "Achats et DSI",
      "titre": "Recenser les prestataires informatiques critiques et vérifier leurs clauses de sécurité"
     }
    ],
    "ajouteLe": "2026-10-21T10:30:00Z",
    "date": "2026-06-10",
    "impact": "Attendez-vous à ce que l'audit interne teste ces six domaines : vérifiez que vos contrôles cyber et la gestion des prestataires informatiques sont documentés.",
    "modifieLe": "2026-10-21T12:00:00Z",
    "ref": "A-003",
    "resume": "L'IIA a rendu obligatoire, dans le cadre des normes internationales d'audit interne, une exigence thématique sur la cybersécurité. Elle fixe six domaines à évaluer : gouvernance, alignement avec les risques métier, contrôles, résilience et réponse aux incidents, tiers, pilotage et reporting. D'autres exigences thématiques sont en préparation, notamment sur les tiers et la résilience organisationnelle.",
    "source": "Wolters Kluwer, 10 juin 2026",
    "theme": "Cyber et SI",
    "titre": "Audit interne : l'exigence thématique cybersécurité de l'IIA en pratique",
    "url": "https://wolterskluwer.com/en/expert-insights/iia-cybersecurity-topical-requirement"
   },
   "n4": {
    "actions": [
     {
      "detail": "Seuils cumulatifs après Omnibus : plus de 1 000 salariés et plus de 450 M€ de chiffre d'affaires.",
      "echeance": "2026-11-13",
      "priorite": "Haute",
      "responsable": "DAF",
      "titre": "Vérifier si l'entreprise reste dans le périmètre de la CSRD"
     },
     {
      "detail": "Identifier les données clés (énergie, émissions, effectifs) et les contrôles qui en garantissent la fiabilité.",
      "echeance": "2027-02-26",
      "priorite": "Normale",
      "responsable": "Contrôleur interne et Responsable RSE",
      "titre": "Si l'entreprise est concernée, cartographier les contrôles du reporting de durabilité"
     },
     {
      "detail": "Mettre à jour le calendrier de reporting dès la publication du texte national.",
      "echeance": "2027-03-19",
      "priorite": "Basse",
      "responsable": "Juridique",
      "titre": "Suivre la transposition française de la directive Omnibus"
     }
    ],
    "ajouteLe": "2026-10-21T10:30:00Z",
    "date": "2026-02-26",
    "impact": "Vérifiez si votre entreprise reste dans le périmètre. Si oui, le reporting de durabilité doit être couvert par des contrôles internes comparables au reporting financier.",
    "jalons": [
     {
      "date": "2027-03-19",
      "titre": "Date limite de transposition de l'Omnibus CSRD"
     },
     {
      "date": "2027-07-01",
      "titre": "Adoption attendue du standard d'assurance limitée"
     }
    ],
    "modifieLe": "2026-10-21T12:00:00Z",
    "ref": "A-004",
    "resume": "La directive Omnibus a été publiée au JOUE le 26 février 2026. La CSRD ne vise plus que les entreprises de plus de 1 000 salariés et 450 M€ de chiffre d'affaires (critères cumulatifs). Le devoir de vigilance européen (CS3D) est relevé à 5 000 salariés et 1,5 Md€. Transposition de la CSRD au plus tard le 19 mars 2027.",
    "source": "Deloitte Société d'Avocats, 4 mars 2026",
    "theme": "RSE et durabilité",
    "titre": "Directive Omnibus : le périmètre de la CSRD fortement réduit",
    "url": "https://blog.avocats.deloitte.fr/la-directive-omnibus-csrd-cs3d-est-publiee/?amp=1"
   },
   "n5": {
    "actions": [
     {
      "detail": "Croiser secteur d'activité, taille et services fournis avec les annexes de la directive.",
      "echeance": "2026-12-04",
      "priorite": "Haute",
      "responsable": "DSI et Juridique",
      "titre": "Déterminer si l'entreprise est une entité essentielle ou importante au sens de NIS 2"
     },
     {
      "detail": "Intégrer le risque de sanction et les nouvelles obligations de gouvernance.",
      "echeance": "2026-12-18",
      "priorite": "Normale",
      "responsable": "Contrôleur interne",
      "titre": "Mettre à jour le risque cyber dans la cartographie"
     },
     {
      "detail": "NIS 2 prévoit une alerte précoce sous 24 heures, une notification sous 72 heures et un rapport final sous un mois.",
      "echeance": "2027-01-29",
      "priorite": "Haute",
      "responsable": "DSI",
      "titre": "Préparer la procédure de notification des incidents cyber"
     }
    ],
    "ajouteLe": "2026-10-21T10:30:00Z",
    "date": "2026-10-06",
    "impact": "Anticipez sans attendre : gouvernance cyber, gestion des risques et procédure de notification des incidents seront exigées des entités concernées dès l'adoption.",
    "modifieLe": "2026-10-21T12:00:00Z",
    "ref": "A-005",
    "resume": "L'examen à l'Assemblée nationale du projet de loi qui transpose NIS 2, DORA et la directive REC, prévu le 7 octobre 2026, a de nouveau été reporté en raison d'un calendrier chargé. Le délai de transposition européen avait expiré le 17 octobre 2024. Le rapporteur espère une inscription dans les semaines suivantes.",
    "source": "Next, brief du 23 septembre 2026 mis à jour le 6 octobre",
    "theme": "Réglementation",
    "titre": "NIS 2 : l'examen du projet de loi « résilience » encore reporté",
    "url": "https://next.ink/briefs/le-brief-du-23-septembre-2026/"
   },
   "n6": {
    "actions": [
     {
      "detail": "Échantillon des changements de RIB des 6 derniers mois : preuve du contre-appel et de la double validation.",
      "echeance": "2026-11-20",
      "priorite": "Urgente",
      "responsable": "Contrôleur interne",
      "titre": "Tester le contrôle de modification des coordonnées bancaires fournisseurs"
     },
     {
      "detail": "Revoir la procédure de trésorerie et la faire valider par le DAF et la direction générale.",
      "echeance": "2026-11-27",
      "priorite": "Haute",
      "responsable": "Trésorier et DAF",
      "titre": "Confirmer qu'aucun paiement hors processus n'est possible, même à la demande de la direction"
     },
     {
      "detail": "Courte formation des équipes comptables et trésorerie, puis simulation d'appel ou d'e-mail frauduleux.",
      "echeance": "2026-12-11",
      "priorite": "Haute",
      "responsable": "Trésorier et DRH",
      "titre": "Lancer une campagne de sensibilisation à la fraude au président"
     }
    ],
    "ajouteLe": "2026-10-21T10:30:00Z",
    "date": "2026-06-24",
    "impact": "Testez en priorité le contrôle de modification des RIB fournisseurs et la procédure de paiement hors processus ; c'est là que se concentrent les pertes.",
    "modifieLe": "2026-10-21T12:00:00Z",
    "ref": "A-006",
    "resume": "Une entreprise sur trois déclare avoir subi une tentative de fraude en douze mois, et une tentative sur quatre aboutit. 88 % des fraudes sont externes et reposent surtout sur l'usurpation d'identité (faux fournisseurs, faux clients). Seules 55 % des entreprises vérifient les coordonnées bancaires et 16 % n'ont aucun dispositif spécifique.",
    "source": "Option Finance, baromètre Allianz Trade et Odoxa",
    "theme": "Fraude",
    "titre": "Baromètre fraude 2026 : une entreprise sur trois ciblée",
    "url": "https://www.optionfinance.fr/analyses/fraude-en-entreprise-le-veritable-risque-nest-plus-invisible-il-est-sous-estime.html"
   },
   "n7": {
    "actions": [
     {
      "detail": "Loi du 13 juin 2025 : certaines entreprises opérant en zone portuaire sont visées sans condition de taille.",
      "echeance": "2026-11-30",
      "priorite": "Normale",
      "responsable": "Responsable conformité",
      "titre": "Vérifier si des activités du groupe relèvent de l'extension portuaire de Sapin II"
     },
     {
      "detail": "Revoir les scénarios par processus, tiers et pays, documenter la méthode et la faire valider par la direction.",
      "echeance": "2027-02-26",
      "priorite": "Haute",
      "responsable": "Responsable conformité et Contrôleur interne",
      "titre": "Mettre à jour la cartographie des risques de corruption"
     },
     {
      "detail": "Vérifier que les intermédiaires et fournisseurs à risque sont évalués avant toute entrée en relation.",
      "echeance": "2027-03-31",
      "priorite": "Normale",
      "responsable": "Responsable conformité et Achats",
      "titre": "Revoir la procédure d'évaluation des tiers"
     }
    ],
    "ajouteLe": "2026-10-21T10:30:00Z",
    "date": "2026-07-01",
    "impact": "Si votre groupe a des activités portuaires, vérifiez votre assujettissement. Pour tous, la cartographie et l'évaluation des tiers restent les points d'attention majeurs.",
    "modifieLe": "2026-10-21T12:00:00Z",
    "ref": "A-007",
    "resume": "Le rapport rappelle que la loi du 13 juin 2025 sur le narcotrafic étend l'obligation de l'article 17 à certaines entreprises opérant en zone portuaire, sans condition de taille. L'AFA a reçu 2 257 signalements en 2025, dont 242 recevables, et a créé un pôle de suivi des programmes de conformité imposés par les CJIP.",
    "source": "Agence française anticorruption",
    "theme": "Réglementation",
    "titre": "Rapport d'activité 2025 de l'AFA : le champ de Sapin II s'élargit",
    "url": "https://www.agence-francaise-anticorruption.gouv.fr/files/2026-07/Rapport%20d%27activit%C3%A9%202025%20AFA.pdf"
   },
   "n8": {
    "actions": [
     {
      "detail": "Outils de tri de candidatures, d'évaluation ou de planification : fournisseur, usage, données traitées.",
      "echeance": "2027-03-31",
      "priorite": "Normale",
      "responsable": "DRH et DSI",
      "titre": "Inventorier les systèmes d'IA utilisés, en particulier en ressources humaines"
     },
     {
      "detail": "Identifier les systèmes à haut risque de l'annexe III et préparer leur mise en conformité.",
      "echeance": "2027-06-30",
      "priorite": "Normale",
      "responsable": "Juridique",
      "titre": "Classer les systèmes d'IA selon les niveaux de risque de l'AI Act et désigner un référent"
     }
    ],
    "ajouteLe": "2026-10-21T10:30:00Z",
    "date": "2026-06-22",
    "impact": "Profitez du délai pour inventorier vos usages d'IA, notamment en RH, et intégrer le risque de non-conformité à l'AI Act dans votre cartographie.",
    "jalons": [
     {
      "date": "2027-12-02",
      "titre": "AI Act : obligations pour les systèmes à haut risque (annexe III)"
     },
     {
      "date": "2028-08-02",
      "titre": "AI Act : obligations pour l'IA intégrée aux produits (annexe I)"
     }
    ],
    "modifieLe": "2026-10-21T12:00:00Z",
    "ref": "A-008",
    "resume": "Un accord provisoire du 7 mai 2026, voté par le Parlement européen le 16 juin, reporte les obligations sur les systèmes d'IA à haut risque : au 2 décembre 2027 pour ceux de l'annexe III (par exemple les outils RH de recrutement) et au 2 août 2028 pour ceux intégrés à des produits. L'adoption formelle restait à confirmer.",
    "source": "Sidley Austin, Data Matters, 22 juin 2026",
    "theme": "IA",
    "titre": "AI Act : accord pour reporter les obligations sur l'IA à haut risque",
    "url": "https://datamatters.sidley.com/2026/06/22/eu-lawmakers-reach-provisional-agreement-to-delay-key-eu-ai-act-obligations/"
   }
  }
 }
};
