/* Vigie — contenu des parcours de formation */
/* Parcours de formation Vigie — contenu pédagogique.
   Entreprise fictive des cas pratiques : Hexalis, ETI industrielle. */
const HEXALIS = "Hexalis est une ETI industrielle fictive qui conçoit et fabrique des systèmes de filtration : 1 200 salariés, 380 M€ de chiffre d'affaires, quatre usines en France et une filiale de distribution au Maroc. Elle entre dans le champ de l'article 17 de la loi Sapin II.";

const FORMATIONS = [
/* ================================================================ */
{ id:"p1", titre:"Les fondamentaux du contrôle interne", court:"Fondamentaux", niveau:"Initiation", duree:"1 h 30", tone:"form",
  resume:"Comprendre ce qu'est réellement le contrôle interne, maîtriser le référentiel COSO 2013 et le modèle des trois lignes, et savoir positionner votre rôle de contrôleur interne.",
  objectifs:["Définir le contrôle interne et ses limites","Citer les 5 composantes et les 17 principes du COSO 2013","Situer le contrôle interne dans le modèle des trois lignes","Organiser le cycle annuel d'un contrôleur interne"],
  modules:[
  { id:"p1l1", type:"lecon", titre:"Ce que recouvre le contrôle interne", duree:"15 min", html:`
<p class="lead">Le contrôle interne est un <strong>processus</strong> mis en œuvre par le conseil, la direction et l'ensemble du personnel, pour donner une <strong>assurance raisonnable</strong> que l'entreprise atteindra ses objectifs. Ce n'est ni un service, ni un audit, ni une pile de procédures : c'est la manière dont l'entreprise s'organise pour maîtriser ses activités.</p>
<h3>Trois familles d'objectifs</h3>
<ul>
<li><strong>Opérations</strong> : efficacité et efficience des activités, protection des actifs contre les pertes.</li>
<li><strong>Reporting</strong> : fiabilité des informations financières et non financières, internes comme externes.</li>
<li><strong>Conformité</strong> : respect des lois et règlements applicables.</li>
</ul>
<p>Le cadre de référence de l'AMF, publié en 2007 et actualisé en 2010, retient une formulation proche, adaptée au contexte français. Il assigne au contrôle interne quatre finalités : la conformité aux lois et règlements, l'application des instructions de la direction générale, le bon fonctionnement des processus internes, notamment ceux qui concourent à la sauvegarde des actifs, et la fiabilité des informations financières.</p>
<h3>Une assurance raisonnable, jamais absolue</h3>
<p>Même bien conçu, un dispositif ne peut pas tout empêcher. Ses limites sont connues et doivent être assumées devant la direction :</p>
<ul>
<li><strong>L'erreur humaine</strong> : fatigue, mauvaise interprétation, contrôle fait « de mémoire ».</li>
<li><strong>La collusion</strong> : deux personnes complices neutralisent une double validation.</li>
<li><strong>Le contournement par la direction</strong> : un dirigeant peut forcer une écriture ou une dérogation.</li>
<li><strong>L'arbitrage coût / bénéfice</strong> : un contrôle ne doit pas coûter plus que le risque qu'il couvre.</li>
<li><strong>Le changement</strong> : un nouvel ERP, une acquisition ou une réorganisation rendent obsolètes des contrôles qui fonctionnaient.</li>
</ul>
<div data-w="flash"></div>
<div class="callout terrain"><b>Sur le terrain</b><p>Un DAF vous dit : « Nous avons des procédures pour tout, donc nous sommes couverts. » Une procédure n'est qu'une intention. Le contrôle interne existe quand la procédure est appliquée, que son application laisse une preuve, et que quelqu'un vérifie que c'est le cas.</p></div>
<div class="callout retenir"><b>À retenir</b><ul><li>Le contrôle interne est l'affaire de tous, pas seulement du contrôleur interne.</li><li>Il vise trois familles d'objectifs : opérations, reporting, conformité.</li><li>Il apporte une assurance raisonnable : la collusion et le contournement par la direction restent ses limites majeures.</li></ul></div>` },

  { id:"p1l2", type:"lecon", titre:"Le référentiel COSO 2013", duree:"25 min", html:`
<p class="lead">Publié en 1992 par le <em>Committee of Sponsoring Organizations of the Treadway Commission</em> et mis à jour en mai 2013, le COSO est le référentiel de contrôle interne le plus utilisé au monde. Les commissaires aux comptes, les auditeurs internes et les régulateurs le connaissent tous : parler COSO, c'est parler la langue commune.</p>
<h3>Le cube COSO</h3>
<p>Le référentiel se représente sous forme de cube à trois dimensions : les <strong>objectifs</strong> (opérations, reporting, conformité), les <strong>composantes</strong> du contrôle interne, et la <strong>structure</strong> de l'entité (groupe, division, filiale, fonction). Chaque composante s'applique à chaque objectif, à chaque niveau de l'organisation.</p>
<h3>Cinq composantes, dix-sept principes</h3>
<p>Cliquez sur chaque composante pour découvrir ses principes.</p><div data-w="coso"></div><details class="recap"><summary>Voir le tableau récapitulatif des 17 principes</summary><div class="tablewrap"><table class="ltable"><thead><tr><th>Composante</th><th>Principes</th></tr></thead><tbody>
<tr><td><b>1. Environnement de contrôle</b><span class="sub">Le socle : culture, éthique, gouvernance</span></td><td>1. L'organisation démontre son engagement en faveur de l'intégrité et de valeurs éthiques.<br>2. Le conseil fait preuve d'indépendance vis-à-vis de la direction et supervise le contrôle interne.<br>3. La direction définit les structures, les rattachements, les pouvoirs et les responsabilités.<br>4. L'organisation attire, développe et fidélise des personnes compétentes.<br>5. Chacun est tenu responsable de ses missions de contrôle interne.</td></tr>
<tr><td><b>2. Évaluation des risques</b></td><td>6. Les objectifs sont définis avec suffisamment de clarté.<br>7. Les risques sont identifiés et analysés.<br>8. Le risque de fraude est pris en compte.<br>9. Les changements significatifs sont identifiés et évalués.</td></tr>
<tr><td><b>3. Activités de contrôle</b></td><td>10. Des activités de contrôle sont choisies et développées pour réduire les risques.<br>11. Des contrôles généraux sur les technologies sont mis en place.<br>12. Les contrôles sont déployés au moyen de politiques et de procédures.</td></tr>
<tr><td><b>4. Information et communication</b></td><td>13. L'information utilisée est pertinente et de qualité.<br>14. L'information sur le contrôle interne circule en interne.<br>15. L'organisation communique avec les tiers externes.</td></tr>
<tr><td><b>5. Activités de pilotage</b></td><td>16. Des évaluations continues ou ponctuelles vérifient le fonctionnement des composantes.<br>17. Les déficiences sont évaluées et communiquées à temps aux personnes en charge des actions correctives.</td></tr>
</tbody></table></div></details>
<h3>Quand le dispositif est-il « efficace » ?</h3>
<p>Selon le COSO, le contrôle interne est efficace lorsque <strong>les cinq composantes sont présentes et fonctionnent</strong>, et qu'elles <strong>opèrent ensemble</strong> de façon intégrée. Une faiblesse majeure dans une composante ne peut pas être compensée par l'excellence d'une autre.</p>
<div class="callout terrain"><b>Sur le terrain</b><p>Beaucoup d'entreprises concentrent leurs efforts sur la composante 3 (les contrôles) et négligent la composante 1. Or un code de conduite ignoré, une délégation de pouvoirs jamais mise à jour ou un comité d'audit qui ne pose aucune question fragilisent tous les contrôles qui reposent dessus.</p></div>
<div class="callout retenir"><b>À retenir</b><ul><li>5 composantes : environnement de contrôle, évaluation des risques, activités de contrôle, information et communication, pilotage.</li><li>17 principes, dont le principe 8 dédié au risque de fraude et le principe 11 aux contrôles informatiques.</li><li>Efficace = toutes les composantes présentes, fonctionnelles et intégrées.</li></ul></div>` },

  { id:"p1l3", type:"lecon", titre:"Le modèle des trois lignes", duree:"20 min", html:`
<p class="lead">En juillet 2020, l'Institute of Internal Auditors (IIA) a remplacé le modèle des « trois lignes de défense » par le <strong>modèle des trois lignes</strong>. Le changement de nom compte : il ne s'agit plus seulement de se défendre, mais de contribuer à la création de valeur.</p>
<div class="lines">
<div class="line l0"><b>Organe de gouvernance</b><span>Conseil d'administration, comité d'audit. Rend compte aux parties prenantes, supervise, fixe l'appétence au risque.</span></div>
<div class="line l1"><b>1<sup>re</sup> ligne · Direction opérationnelle</b><span>Achats, ventes, production, trésorerie… <em>Possède et gère les risques</em>, exécute les contrôles au quotidien.</span></div>
<div class="line l2"><b>2<sup>e</sup> ligne · Expertise et surveillance</b><span>Contrôle interne, gestion des risques, conformité, sécurité des SI. Conçoit le cadre, outille, conseille, challenge et surveille.</span></div>
<div class="line l3"><b>3<sup>e</sup> ligne · Audit interne</b><span>Assurance et conseil indépendants et objectifs sur l'ensemble du dispositif, rattachement direct à l'organe de gouvernance.</span></div>
<div class="line lx"><b>Prestataires d'assurance externes</b><span>Commissaires aux comptes, régulateurs, certificateurs : une assurance complémentaire, hors des trois lignes.</span></div>
</div>
<h3>À vous de jouer : qui est dans quelle ligne ?</h3><p>Placez chaque acteur dans la bonne ligne. Touchez une étiquette puis une colonne, ou faites-la glisser.</p><div data-w="sort-lines"></div>
<h3>Où se situe le contrôleur interne ?</h3>
<p>Dans la grande majorité des entreprises, la fonction contrôle interne est une <strong>deuxième ligne</strong>. Elle définit la méthode (cartographie, référentiel de contrôles, auto-évaluation), accompagne les opérationnels et teste les contrôles clés. Elle <strong>ne possède pas</strong> les contrôles : ceux-ci appartiennent aux opérationnels de première ligne.</p>
<h3>Les pièges à éviter</h3>
<ul>
<li><strong>Devenir l'exécutant</strong> : si vous réalisez vous-même un contrôle opérationnel, vous ne pouvez plus l'évaluer avec recul.</li>
<li><strong>Doublonner l'audit interne</strong> : coordonnez les plans de travail pour que chaque ligne s'appuie sur les travaux de l'autre.</li>
<li><strong>Déresponsabiliser la première ligne</strong> : « c'est au contrôle interne de vérifier » est une phrase à corriger immédiatement.</li>
</ul>
<div class="callout retenir"><b>À retenir</b><ul><li>1<sup>re</sup> ligne : possède le risque et le contrôle. 2<sup>e</sup> ligne : cadre et surveille. 3<sup>e</sup> ligne : assurance indépendante.</li><li>Le contrôleur interne est en général en 2<sup>e</sup> ligne ; il conçoit et teste, il n'exécute pas.</li></ul></div>` },

  { id:"p1l4", type:"lecon", titre:"Le métier : cadre légal et cycle annuel", duree:"20 min", html:`
<p class="lead">Un contrôleur interne efficace travaille selon un calendrier connu de tous, aligné sur celui du comité d'audit et de la clôture des comptes.</p>
<h3>Ce que la loi attend, en France</h3>
<ul>
<li><strong>Sociétés cotées</strong> : le rapport de gestion décrit les principaux risques et les principales caractéristiques des procédures de contrôle interne et de gestion des risques relatives à l'information comptable et financière (Code de commerce, art. L. 22-10-35).</li>
<li><strong>Comité d'audit</strong> : il assure le suivi de l'efficacité des systèmes de contrôle interne et de gestion des risques.</li>
<li><strong>Loi Sapin II, article 17</strong> : les sociétés d'au moins 500 salariés, ou appartenant à un groupe de cette taille dont la société mère est française, et dont le chiffre d'affaires dépasse 100 M€ doivent déployer huit mesures anticorruption, dont une cartographie des risques et des contrôles comptables dédiés.</li>
<li><strong>Lanceurs d'alerte</strong> : depuis la loi du 21 mars 2022, toute entité d'au moins 50 salariés doit disposer d'une procédure interne de recueil et de traitement des signalements.</li>
</ul>
<h3>Le cycle annuel type</h3>
<div class="timeline">
<div><b>Janvier – mars</b><span>Mise à jour de la cartographie des risques et validation du plan de contrôle interne annuel par le comité d'audit.</span></div>
<div><b>Mars – juin</b><span>Actualisation du référentiel de contrôles, tests de conception des contrôles nouveaux ou modifiés.</span></div>
<div><b>Juin – septembre</b><span>Campagne d'auto-évaluation des opérationnels, tests d'efficacité sur les contrôles clés.</span></div>
<div><b>Septembre – novembre</b><span>Restitution des constats, définition des plans d'action avec les responsables.</span></div>
<div><b>Décembre</b><span>Reporting au comité d'audit, suivi des actions, préparation de l'exercice suivant.</span></div>
</div>
<h3>Vrai ou faux ?</h3><p>Balayez la carte vers la droite si l'affirmation est vraie, vers la gauche si elle est fausse.</p><div data-w="swipe-legal"></div>
<h3>La posture qui fait la différence</h3>
<p>Le contrôleur interne n'est pas « la police ». Son influence vient de sa capacité à expliquer pourquoi un contrôle protège l'opérationnel lui-même, à proposer des solutions proportionnées, et à rester factuel quand il remonte un constat à la direction.</p>
<div class="callout retenir"><b>À retenir</b><ul><li>Sapin II : 500 salariés et 100 M€ de CA. Alerte interne : 50 salariés.</li><li>Un cycle annuel calé sur le comité d'audit rend le contrôle interne prévisible et crédible.</li></ul></div>` },

  { id:"p1c", type:"cas", titre:"Cas pratique : vos 30 premiers jours chez Hexalis", duree:"15 min",
    contexte: HEXALIS + " Vous venez d'être recruté comme premier contrôleur interne, rattaché au DAF, avec un accès direct au comité d'audit. Le directeur général attend « un dispositif solide d'ici un an ».",
    etapes:[
    { q:"Lundi matin, première semaine. Par où commencez-vous ?", choix:[
      {t:"Rédiger les procédures de tous les processus pour disposer d'une base documentaire complète.", ok:false, fb:"C'est un chantier de plusieurs mois, non priorisé par les risques. Vous risquez de documenter en détail des processus peu risqués et de passer à côté des vrais enjeux."},
      {t:"Rencontrer les directeurs, collecter l'existant (cartographie, rapports d'audit, incidents) et identifier les risques majeurs.", ok:true, fb:"Bonne approche. Vous construisez votre légitimité, comprenez les enjeux réels et pourrez prioriser votre plan sur les risques, comme l'attend le principe 7 du COSO."},
      {t:"Lancer immédiatement des tests sur les paiements fournisseurs, car c'est là que se trouvent les fraudes.", ok:false, fb:"Les paiements sont souvent un vrai sujet, mais tester sans vision d'ensemble est prématuré. Vous ne savez pas encore quels contrôles existent ni quels sont les autres risques majeurs."} ]},
    { q:"Le directeur des achats part trois semaines en congés et vous demande de valider à sa place les commandes de plus de 50 k€.", choix:[
      {t:"Accepter : c'est l'occasion de montrer votre utilité.", ok:false, fb:"Vous deviendriez un acteur de première ligne. Vous ne pourriez plus évaluer ce contrôle avec indépendance, et vous créeriez un précédent difficile à défaire."},
      {t:"Refuser, et l'aider à formaliser une délégation temporaire à son adjoint, avec un plafond et une trace.", ok:true, fb:"Exactement. Vous restez en deuxième ligne tout en apportant une solution concrète. La délégation formalisée renforce aussi l'environnement de contrôle (principe 3)."},
      {t:"Accepter, mais seulement pour les commandes de plus de 200 k€.", ok:false, fb:"Le problème n'est pas le seuil mais le rôle. Même limitée, cette validation fait de vous l'exécutant d'un contrôle que vous devrez ensuite évaluer."} ]},
    { q:"En observant la comptabilité fournisseurs, vous constatez que la même personne crée les fournisseurs, saisit les factures et prépare les fichiers de virement.", choix:[
      {t:"Signaler l'incompatibilité et proposer une séparation des tâches ou, à défaut, un contrôle compensatoire : revue mensuelle des créations et modifications de fournisseurs par une autre personne.", ok:true, fb:"C'est la bonne réponse. Si l'effectif ne permet pas une séparation complète, un contrôle compensatoire documenté réduit le risque à un niveau acceptable."},
      {t:"Demander à la DRH de changer cette personne de poste.", ok:false, fb:"Rien n'indique une fraude : le problème est l'organisation, pas la personne. Réagir ainsi abîmerait votre crédibilité et la confiance des équipes."},
      {t:"Ne rien faire : le service est petit, la séparation des tâches y est impossible.", ok:false, fb:"La taille du service explique la situation mais ne supprime pas le risque. Il existe toujours une solution compensatoire."} ]},
    { q:"Premier comité d'audit dans six semaines. Que présentez-vous ?", choix:[
      {t:"La liste exhaustive des anomalies relevées depuis votre arrivée.", ok:false, fb:"Un inventaire non hiérarchisé noie le comité. Il a besoin de comprendre les enjeux principaux et votre plan pour les traiter."},
      {t:"Rien pour l'instant : mieux vaut attendre d'avoir un dispositif complet.", ok:false, fb:"Le comité d'audit doit suivre l'efficacité du contrôle interne. Se présenter tôt avec une démarche claire renforce votre légitimité."},
      {t:"Un diagnostic des risques majeurs, un plan pluriannuel priorisé et les deux ou trois premiers constats significatifs.", ok:true, fb:"Parfait. Le comité valide votre démarche, vous obtenez son soutien et vous fixez un cap mesurable."} ]}
  ]},

  { id:"p1q", type:"quiz", titre:"Quiz de validation", duree:"10 min", questions:[
    { q:"Lequel de ces éléments n'est pas une composante du COSO 2013 ?", c:["Environnement de contrôle","Activités de pilotage","Audit externe","Information et communication"], a:2, e:"Les cinq composantes sont : environnement de contrôle, évaluation des risques, activités de contrôle, information et communication, activités de pilotage. L'audit externe est un prestataire d'assurance extérieur au dispositif."},
    { q:"Combien de principes compte le COSO 2013 ?", c:["5","12","17","20"], a:2, e:"17 principes répartis entre les 5 composantes. Le chiffre 20 correspond aux principes du COSO ERM de 2017."},
    { q:"Que signifie « assurance raisonnable » ?", c:["Le dispositif garantit l'absence d'erreur","Le dispositif réduit les risques sans pouvoir les éliminer totalement","Le dispositif est validé par les commissaires aux comptes","Le dispositif coûte moins de 1 % du chiffre d'affaires"], a:1, e:"Le contrôle interne a des limites intrinsèques (erreur humaine, collusion, contournement par la direction) : il ne peut jamais garantir une assurance absolue."},
    { q:"Dans le modèle des trois lignes, qui « possède » les contrôles opérationnels ?", c:["L'audit interne","Le contrôle interne","La direction opérationnelle de première ligne","Le comité d'audit"], a:2, e:"La première ligne possède et gère ses risques et exécute les contrôles. Le contrôle interne, en deuxième ligne, conçoit le cadre et surveille."},
    { q:"Deux salariés s'entendent pour contourner une double signature. Quelle limite du contrôle interne est illustrée ?", c:["L'erreur humaine","La collusion","L'arbitrage coût / bénéfice","Le changement d'environnement"], a:1, e:"La collusion neutralise les contrôles fondés sur l'intervention de plusieurs personnes."},
    { q:"Quels seuils déclenchent l'obligation de l'article 17 de la loi Sapin II ?", c:["50 salariés et 10 M€ de CA","250 salariés et 50 M€ de CA","500 salariés et plus de 100 M€ de CA","1 000 salariés et 450 M€ de CA"], a:2, e:"Au moins 500 salariés et un chiffre d'affaires supérieur à 100 M€. Les seuils de 1 000 salariés et 450 M€ sont ceux de la CSRD depuis la directive Omnibus de 2026."},
    { q:"Quel principe du COSO 2013 traite explicitement du risque de fraude ?", c:["Principe 1","Principe 8","Principe 11","Principe 16"], a:1, e:"Le principe 8, dans la composante évaluation des risques, impose de considérer le potentiel de fraude."},
  ]}
]},
/* ================================================================ */
{ id:"p2", titre:"Identifier et évaluer les risques", court:"Risques", niveau:"Intermédiaire", duree:"2 h", tone:"risk",
  resume:"Construire une cartographie des risques utile à la décision : formuler, coter, hiérarchiser, choisir un traitement et suivre les risques dans le temps, y compris les risques de corruption.",
  objectifs:["Distinguer cause, événement et conséquence","Construire une cartographie par catégories et par processus","Coter de façon cohérente avec des échelles calibrées","Bâtir une cartographie anticorruption conforme aux attentes de l'AFA"],
  modules:[
  { id:"p2l1", type:"lecon", titre:"Le langage du risque", duree:"20 min", html:`
<p class="lead">La norme ISO 31000:2018 définit le risque comme l'<strong>effet de l'incertitude sur les objectifs</strong>. Pas d'objectif, pas de risque : un risque se décrit toujours par rapport à ce que l'entreprise cherche à atteindre.</p>
<h3>Cause, événement, conséquence</h3>
<p>La méthode du nœud papillon sépare trois éléments que l'on confond souvent :</p>
<div data-w="bowtie"></div>
<p>Les contrôles <strong>préventifs</strong> agissent à gauche, sur les causes. Les contrôles <strong>détectifs et correctifs</strong> agissent à droite, pour limiter les conséquences.</p>
<h3>Inhérent, résiduel, cible</h3>
<ul>
<li><strong>Risque inhérent</strong> (ou brut) : le niveau de risque en l'absence de tout contrôle.</li>
<li><strong>Risque résiduel</strong> (ou net) : le niveau qui subsiste compte tenu des contrôles existants et réellement efficaces.</li>
<li><strong>Risque cible</strong> : le niveau visé après mise en œuvre des plans d'action.</li>
</ul>
<p>L'écart entre inhérent et résiduel mesure la valeur de vos contrôles. Un résiduel égal à l'inhérent signifie qu'aucun contrôle efficace ne couvre le risque.</p>
<h3>Appétence et tolérance</h3>
<p>L'<strong>appétence au risque</strong> est le niveau de risque que l'entreprise accepte de prendre pour atteindre ses objectifs ; elle est fixée par la direction et validée par le conseil. La <strong>tolérance</strong> est l'écart acceptable autour de cette appétence. Exemple : « Nous n'acceptons aucune tolérance sur la corruption, mais acceptons une perte de démarque de 0,5 % des stocks. »</p>
<h3>Les référentiels à connaître</h3>
<ul><li><strong>ISO 31000:2018</strong> : principes et lignes directrices de management du risque.</li><li><strong>COSO ERM 2017</strong> : 5 composantes et 20 principes qui relient risques, stratégie et performance. Le COSO a publié en 2026 un guide pratique sur la mise en œuvre de l'ERM, fondé sur une enquête auprès des praticiens.</li></ul>
<div class="callout retenir"><b>À retenir</b><ul><li>Un risque se rattache toujours à un objectif.</li><li>Inhérent − contrôles efficaces = résiduel.</li><li>L'appétence au risque se décide au plus haut niveau, pas dans le service contrôle interne.</li></ul></div>` },

  { id:"p2l2", type:"lecon", titre:"Construire la cartographie", duree:"30 min", html:`
<p class="lead">Une cartographie utile n'est pas une liste de 300 lignes : c'est une photographie lisible des 20 à 50 risques qui comptent vraiment, partagée et validée par la direction.</p>
<h3>Les six étapes</h3>
<ol class="steps">
<li><b>Cadrer</b> : périmètre, objectifs de l'entreprise, échelles de cotation validées par la direction.</li>
<li><b>Définir l'univers des risques</b> : les catégories communes à tout le groupe.</li>
<li><b>Identifier</b> : entretiens avec les directeurs, ateliers par processus, analyse des incidents, des pertes et des rapports d'audit.</li>
<li><b>Évaluer</b> : coter le risque inhérent, recenser les contrôles, coter le risque résiduel.</li>
<li><b>Valider</b> : revue par le comité de direction, présentation au comité d'audit.</li>
<li><b>Faire vivre</b> : propriétaires, plans d'action, mise à jour annuelle et sur événement.</li>
</ol>
<h3>Ranger les risques par catégories</h3>
<div class="tablewrap"><table class="ltable"><thead><tr><th>Catégorie</th><th>Exemples</th></tr></thead><tbody>
<tr><td><b>Stratégique</b></td><td>Dépendance à un client majeur, échec d'une acquisition, rupture technologique.</td></tr>
<tr><td><b>Opérationnel</b></td><td>Rupture d'approvisionnement, défaut qualité, arrêt de production.</td></tr>
<tr><td><b>Financier et comptable</b></td><td>Erreur de cut-off, dépréciation non comptabilisée, risque de change, liquidité.</td></tr>
<tr><td><b>Fraude et corruption</b></td><td>Faux fournisseur, fraude au président, commission occulte versée à un intermédiaire.</td></tr>
<tr><td><b>Conformité et juridique</b></td><td>Sapin II, RGPD, droit de la concurrence, contentieux.</td></tr>
<tr><td><b>Systèmes d'information et cyber</b></td><td>Rançongiciel, accès non autorisés, perte de données.</td></tr>
<tr><td><b>Ressources humaines</b></td><td>Départ de compétences clés, accident du travail, climat social.</td></tr>
<tr><td><b>RSE et environnement</b></td><td>Pollution d'un site, reporting de durabilité erroné, devoir de vigilance.</td></tr>
</tbody></table></div>
<h3>Classez ces risques</h3><p>Rangez chaque risque dans sa catégorie.</p><div data-w="sort-cats"></div>
<h3>Bien formuler un risque</h3>
<p>Une formulation utile tient en une phrase : <em>risque de [événement] dû à [cause] entraînant [conséquence]</em>.</p>
<div class="compare"><div class="bad"><small>À éviter</small><p>« Achats »<br>« Manque de contrôle »<br>« Fraude »</p></div><div class="good"><small>À privilégier</small><p>« Risque de paiement de factures fictives dû à l'absence de rapprochement commande / réception, entraînant une perte financière. »</p></div></div>
<h3>Des échelles calibrées sur votre entreprise</h3>
<p>Exemple pour une ETI de 380 M€ de chiffre d'affaires. Les seuils financiers sont à adapter à votre taille.</p>
<div class="tablewrap"><table class="ltable"><thead><tr><th>Note</th><th>Probabilité</th><th>Impact financier</th><th>Impact réputation / réglementaire</th></tr></thead><tbody>
<tr><td><b>1</b></td><td>Rare : moins d'une fois en 10 ans</td><td>&lt; 50 k€</td><td>Sans écho externe</td></tr>
<tr><td><b>2</b></td><td>Peu probable : une fois en 5 à 10 ans</td><td>50 à 250 k€</td><td>Plainte isolée d'un client</td></tr>
<tr><td><b>3</b></td><td>Possible : une fois en 2 à 5 ans</td><td>250 k€ à 1 M€</td><td>Presse locale, mise en demeure</td></tr>
<tr><td><b>4</b></td><td>Probable : environ une fois par an</td><td>1 à 5 M€</td><td>Presse nationale, sanction administrative</td></tr>
<tr><td><b>5</b></td><td>Quasi certain : plusieurs fois par an</td><td>&gt; 5 M€</td><td>Poursuites pénales, perte d'un agrément</td></tr>
</tbody></table></div>
<p>Quand un risque touche plusieurs dimensions, on retient <strong>la plus élevée</strong>.</p>
<div class="callout retenir"><b>À retenir</b><ul><li>Une cartographie lisible : 20 à 50 risques, rangés par catégories et par processus.</li><li>Une phrase par risque : événement, cause, conséquence.</li><li>Des échelles validées par la direction avant toute cotation.</li></ul></div>` },

  { id:"p2l3", type:"lecon", titre:"Hiérarchiser, traiter et suivre", duree:"25 min", html:`
<p class="lead">Coter un risque n'a de sens que si la cotation débouche sur une décision : on traite, on accepte, ou on surveille.</p>
<h3>La criticité</h3>
<p>Criticité = probabilité × impact, sur une matrice 5 × 5. Dans Vigie, les zones sont : <span class="score c1">1–4</span> faible, <span class="score c2">5–9</span> modéré, <span class="score c3">10–14</span> élevé, <span class="score c4">15–25</span> critique.</p>
<p>Testez l'effet des contrôles sur un risque de fraude au paiement : réglez la cotation inhérente, puis activez des contrôles et observez le risque résiduel se déplacer.</p><div data-w="matrix"></div>
<h3>Les biais à surveiller en atelier</h3>
<ul>
<li><strong>Tout à 3</strong> : la note médiane rassure. Demandez un exemple concret qui justifie la note.</li>
<li><strong>L'ancrage</strong> : la première note annoncée influence toutes les suivantes. Faites voter individuellement avant d'en débattre.</li>
<li><strong>L'optimisme du propriétaire</strong> : le responsable d'un processus sous-estime souvent ses risques. Confrontez sa note aux incidents passés.</li>
</ul>
<h3>Quatre stratégies de traitement</h3>
<div class="tablewrap"><table class="ltable"><thead><tr><th>Stratégie</th><th>Principe</th><th>Exemple</th></tr></thead><tbody>
<tr><td><b>Réduire</b></td><td>Ajouter ou renforcer des contrôles</td><td>Contre-appel systématique avant tout changement de RIB</td></tr>
<tr><td><b>Transférer</b></td><td>Faire porter le risque par un tiers</td><td>Assurance fraude, assurance cyber, clause contractuelle</td></tr>
<tr><td><b>Éviter</b></td><td>Renoncer à l'activité à l'origine du risque</td><td>Ne pas vendre via un intermédiaire dans un pays à très haut risque</td></tr>
<tr><td><b>Accepter</b></td><td>Prendre le risque en connaissance de cause</td><td>Démarque inférieure au seuil d'appétence, surveillée par indicateur</td></tr>
</tbody></table></div>
<h3>Suivre avec des indicateurs clés de risque</h3>
<p>Un indicateur clé de risque (KRI) signale qu'un risque augmente <em>avant</em> qu'il ne se réalise. Exemples :</p>
<ul>
<li>Nombre de modifications de coordonnées bancaires fournisseurs par mois.</li>
<li>Part des factures reçues sans commande préalable.</li>
<li>Nombre de comptes à privilèges actifs dans l'ERP.</li>
<li>Part du premier fournisseur dans les achats d'une catégorie.</li>
</ul>
<h3>Quand mettre à jour ?</h3>
<p>Au moins une fois par an, et à chaque <strong>événement déclencheur</strong> : acquisition, nouveau pays, changement d'ERP, incident majeur, évolution réglementaire importante.</p>
<div class="callout retenir"><b>À retenir</b><ul><li>Chaque risque critique ou élevé a un propriétaire, une stratégie de traitement et un plan.</li><li>Un KRI anticipe ; un incident constate.</li></ul></div>` },

  { id:"p2l4", type:"lecon", titre:"La cartographie des risques de corruption", duree:"20 min", html:`
<p class="lead">La cartographie des risques de corruption est l'une des huit mesures de l'article 17 de la loi Sapin II. C'est aussi la pierre angulaire du dispositif : les autres mesures, comme l'évaluation des tiers, la formation ou les contrôles comptables, doivent en découler.</p>
<h3>Ce qu'attend l'Agence française anticorruption</h3>
<ul>
<li>Une cartographie <strong>spécifique</strong> à la corruption et au trafic d'influence, distincte de la cartographie générale ou articulée avec elle.</li>
<li>Des <strong>scénarios de risque</strong> concrets, identifiés par processus et par fonction exposée.</li>
<li>La prise en compte des <strong>tiers</strong> (clients, fournisseurs, intermédiaires) et des <strong>zones géographiques</strong>.</li>
<li>Une évaluation brute puis nette, qui tient compte des mesures existantes.</li>
<li>Un <strong>plan d'action</strong>, une validation par l'instance dirigeante et une mise à jour régulière.</li>
</ul>
<h3>Exemples de scénarios</h3>
<ul>
<li>Un commercial verse une commission à un agent local pour remporter un appel d'offres public à l'étranger.</li>
<li>Un acheteur favorise un fournisseur en échange d'un voyage offert.</li>
<li>Un mécénat est versé à une association liée à un élu qui instruit une autorisation d'exploiter.</li>
<li>Un transitaire règle un « paiement de facilitation » pour accélérer un dédouanement.</li>
</ul>
<h3>Un champ qui s'élargit</h3>
<p>D'après le rapport d'activité 2025 de l'AFA, la loi du 13 juin 2025 relative au narcotrafic étend l'obligation de l'article 17 à certaines entreprises opérant en zone portuaire, sans condition de taille.</p>
<h3>Scénario à risque ou non ?</h3><p>Balayez à droite les situations qui constituent un scénario de corruption à cartographier, à gauche celles qui ne posent pas de problème particulier.</p><div data-w="swipe-cor"></div>
<div class="callout terrain"><b>Sur le terrain</b><p>Lors d'un contrôle, l'AFA demande souvent comment la cartographie a été construite : liste des personnes interrogées, critères de cotation, lien entre chaque risque et les mesures prises. Conservez ces éléments de méthode : ils comptent autant que le résultat.</p></div>
<div class="callout retenir"><b>À retenir</b><ul><li>Des scénarios concrets, par processus, par tiers et par pays.</li><li>Une méthode documentée et traçable.</li><li>Les autres mesures Sapin II s'appuient sur cette cartographie.</li></ul></div>` },

  { id:"p2c", type:"cas", titre:"Cas pratique : l'atelier cartographie des achats", duree:"15 min",
    contexte: HEXALIS + " Vous animez l'atelier de cartographie de la direction des achats avec le directeur, deux acheteurs seniors et le responsable de la comptabilité fournisseurs.",
    etapes:[
    { q:"Un acheteur propose d'inscrire le risque « Fournisseurs ». Comment le reformulez-vous ?", choix:[
      {t:"« Risque fournisseurs important »", ok:false, fb:"La formulation reste vague : on ne sait ni quel événement redouter, ni pourquoi, ni avec quelles conséquences. Impossible d'y rattacher un contrôle."},
      {t:"« Risque de rupture d'approvisionnement en membranes dû à la dépendance à un fournisseur unique, entraînant un arrêt de ligne et des pénalités clients. »", ok:true, fb:"Événement, cause et conséquence sont explicites. On sait quoi surveiller et quels contrôles ou actions envisager."},
      {t:"« Manque de contrôle sur les fournisseurs »", ok:false, fb:"C'est une cause supposée, pas un risque. Et elle présume déjà de la solution."} ]},
    { q:"Le fournisseur unique de membranes représente 70 % des approvisionnements de la gamme. Une rupture il y a trois ans a arrêté une ligne pendant trois semaines, pour une perte de marge de 1,2 M€. Quelle cotation inhérente retenez-vous ?", choix:[
      {t:"Probabilité 1, impact 2 : l'incident est passé et le fournisseur s'est engagé à faire mieux.", ok:false, fb:"C'est le biais d'optimisme. L'historique montre une occurrence en trois ans et une perte supérieure à 1 M€ : les notes 1 et 2 ne correspondent pas aux échelles."},
      {t:"Probabilité 3, impact 4 : criticité 12, élevée.", ok:true, fb:"Une fois en 2 à 5 ans donne une probabilité 3. Une perte de 1 à 5 M€ donne un impact 4. Les échelles validées sont appliquées objectivement."},
      {t:"Probabilité 5, impact 5 : criticité 25, critique.", ok:false, fb:"La surcotation est aussi un biais : elle banalise les vrais risques critiques et décrédibilise la cartographie."} ]},
    { q:"Quelle stratégie de traitement recommandez-vous ?", choix:[
      {t:"Accepter : le fournisseur est le meilleur du marché.", ok:false, fb:"Un risque élevé ne s'accepte que si la direction le décide explicitement, en connaissance de cause et dans les limites de l'appétence au risque."},
      {t:"Réduire : qualifier un second fournisseur et constituer un stock de sécurité de six semaines.", ok:true, fb:"Le double sourcing réduit la probabilité ; le stock de sécurité réduit l'impact. Le coût de ces actions reste proportionné à une perte de plus d'1 M€."},
      {t:"Éviter : arrêter la gamme concernée.", ok:false, fb:"Disproportionné : la gamme est rentable et le risque peut être réduit à un coût raisonnable."} ]},
    { q:"Quel indicateur clé de risque proposez-vous au directeur des achats ?", choix:[
      {t:"Part du premier fournisseur dans les achats de membranes, suivie chaque trimestre avec un seuil d'alerte à 60 %.", ok:true, fb:"Cet indicateur mesure directement la cause (la dépendance). Il anticipe le risque et vérifie l'avancement du double sourcing."},
      {t:"Nombre total de commandes passées dans le mois.", ok:false, fb:"C'est un indicateur d'activité. Il ne dit rien de l'exposition au risque de rupture."},
      {t:"Chiffre d'affaires de la gamme.", ok:false, fb:"Indicateur de performance, pas de risque : il ne bouge pas avant la rupture."} ]}
  ]},

  { id:"p2q", type:"quiz", titre:"Quiz de validation", duree:"10 min", questions:[
    { q:"Selon l'ISO 31000:2018, le risque est…", c:["Une perte financière probable","L'effet de l'incertitude sur les objectifs","Un événement contraire à la loi","Une faiblesse de contrôle"], a:1, e:"La définition ISO relie toujours le risque aux objectifs de l'organisation."},
    { q:"Le risque résiduel correspond…", c:["Au risque avant tout contrôle","Au risque restant compte tenu des contrôles efficaces","Au risque transféré à l'assureur","Au risque accepté par le conseil"], a:1, e:"Résiduel = niveau qui subsiste après prise en compte des contrôles existants et réellement efficaces."},
    { q:"Quelle formulation de risque est la plus utile ?", c:["Trésorerie","Risque de fraude","Risque de virement frauduleux dû à l'absence de contre-appel lors d'un changement de RIB, entraînant une perte financière","Manque de procédures en trésorerie"], a:2, e:"Elle précise l'événement, la cause et la conséquence."},
    { q:"Un risque a une probabilité 4 et un impact 4. Sa criticité est…", c:["8, modérée","12, élevée","16, critique","20, critique"], a:2, e:"4 × 4 = 16, ce qui le place dans la zone critique (15 à 25)."},
    { q:"Souscrire une assurance cyber relève de quelle stratégie ?", c:["Réduire","Transférer","Éviter","Accepter"], a:1, e:"Le risque financier est transféré à l'assureur. Le risque opérationnel, lui, reste à gérer."},
    { q:"Lequel de ces éléments n'est pas attendu par l'AFA pour la cartographie anticorruption ?", c:["Des scénarios de risque par processus","La prise en compte des tiers et des pays","Une certification ISO 37001 obligatoire","Une mise à jour régulière"], a:2, e:"La certification ISO 37001 peut être utile mais n'est pas exigée par la loi Sapin II."},
  ]}
]},
/* ================================================================ */
{ id:"p3", titre:"Prévenir et maîtriser les risques", court:"Prévention", niveau:"Intermédiaire", duree:"2 h", tone:"ctrl",
  resume:"Concevoir des contrôles qui fonctionnent, organiser la séparation des tâches, prévenir la fraude et les risques cyber, et réagir efficacement face à une tentative de fraude.",
  objectifs:["Rédiger un contrôle avec ses six attributs","Construire une matrice de séparation des tâches","Reconnaître les schémas de fraude et leurs signaux d'alerte","Mettre en place les mesures d'hygiène cyber essentielles"],
  modules:[
  { id:"p3l1", type:"lecon", titre:"Concevoir des contrôles qui fonctionnent", duree:"25 min", html:`
<p class="lead">Un contrôle mal décrit est un contrôle invérifiable. La qualité de la rédaction conditionne la possibilité de l'exécuter de façon constante et de le tester.</p>
<h3>Typologie</h3>
<div class="tablewrap"><table class="ltable"><thead><tr><th>Selon le moment</th><th>Selon le mode</th></tr></thead><tbody>
<tr><td><b>Préventif</b> : empêche l'erreur ou la fraude de se produire (validation avant paiement, blocage ERP).<br><b>Détectif</b> : repère après coup (rapprochement bancaire, revue analytique).<br><b>Correctif</b> : rétablit la situation (rappel de fonds, régularisation).</td><td><b>Manuel</b> : exécuté par une personne, sensible à l'erreur.<br><b>Automatique</b> : exécuté par le système, fiable si les contrôles informatiques généraux sont efficaces.<br><b>Semi-automatique</b> : le système produit un état, une personne l'analyse.</td></tr>
</tbody></table></div>
<p>Un <strong>contrôle clé</strong> est un contrôle qui, à lui seul ou presque, ramène un risque significatif à un niveau acceptable. C'est sur eux que portent en priorité les tests annuels.</p>
<p>Entraînez-vous : à quel moment agit chacun de ces contrôles ?</p><div data-w="sort-types"></div>
<h3>Les six attributs d'un contrôle bien décrit</h3>
<ol class="steps">
<li><b>Qui</b> : la fonction qui exécute, pas un prénom.</li>
<li><b>Quoi</b> : l'objet précis du contrôle.</li>
<li><b>Quand</b> : la fréquence ou l'événement déclencheur.</li>
<li><b>Comment</b> : la méthode et le seuil de déclenchement.</li>
<li><b>Preuve</b> : la trace qui permettra de démontrer l'exécution.</li>
<li><b>Anomalie</b> : ce qui se passe quand un écart est détecté, et sous quel délai.</li>
</ol>
<div class="compare"><div class="bad"><small>Avant</small><p>« La comptabilité vérifie les factures. »</p></div><div class="good"><small>Après</small><p>« Chaque mois, le responsable de la comptabilité fournisseurs analyse l'état ERP des factures de plus de 5 k€ payées sans bon de réception. Il documente la justification de chaque écart dans le fichier de suivi et transmet au DAF, sous 5 jours ouvrés, tout écart non justifié. Preuve : état visé et fichier de suivi. »</p></div></div>
<div class="callout terrain"><b>Sur le terrain</b><p>Privilégiez les contrôles préventifs et automatiques sur les flux à fort volume, comme les paiements ou les créations de fournisseurs. Réservez les revues manuelles aux zones de jugement, comme les provisions ou les opérations inhabituelles.</p></div>
<div class="callout retenir"><b>À retenir</b><ul><li>Qui, quoi, quand, comment, preuve, anomalie : sans ces six attributs, un contrôle n'est pas testable.</li><li>Un contrôle automatique ne vaut que si les accès et les changements informatiques sont maîtrisés.</li></ul></div>` },

  { id:"p3l2", type:"lecon", titre:"Séparation des tâches et habilitations", duree:"25 min", html:`
<p class="lead">La séparation des tâches est le contrôle préventif le plus puissant contre la fraude interne : aucune personne ne doit pouvoir initier, enregistrer et dissimuler une opération à elle seule.</p>
<h3>Les quatre fonctions incompatibles</h3>
<div class="sod"><div><b>Autoriser</b><span>Valider une commande, un paiement</span></div><div><b>Enregistrer</b><span>Saisir une facture, une écriture</span></div><div><b>Détenir</b><span>Avoir accès aux fonds, aux stocks</span></div><div><b>Contrôler</b><span>Rapprocher, réviser</span></div></div>
<h3>Exemple de matrice sur le processus achats</h3>
<div class="tablewrap"><table class="ltable center"><thead><tr><th></th><th>Créer un fournisseur</th><th>Valider une commande</th><th>Saisir une facture</th><th>Émettre un paiement</th></tr></thead><tbody>
<tr><td><b>Créer un fournisseur</b></td><td>—</td><td class="x">✕</td><td class="x">✕</td><td class="x">✕</td></tr>
<tr><td><b>Valider une commande</b></td><td class="x">✕</td><td>—</td><td class="x">✕</td><td class="x">✕</td></tr>
<tr><td><b>Saisir une facture</b></td><td class="x">✕</td><td class="x">✕</td><td>—</td><td class="x">✕</td></tr>
</tbody></table></div>
<p>Chaque croix signale un cumul à interdire dans les habilitations ERP, ou à défaut à compenser.</p>
<h3>Compatible ou incompatible ?</h3><p>Une même personne peut-elle cumuler ces deux tâches ? Balayez à droite si c'est compatible, à gauche si c'est incompatible.</p><div data-w="swipe-sod"></div>
<h3>Dans une petite équipe : les contrôles compensatoires</h3>
<p>Quand l'effectif ne permet pas de séparer les fonctions, on compense par une revue indépendante a posteriori : revue mensuelle par le DAF de la liste des fournisseurs créés ou modifiés, double signature bancaire, rapprochement bancaire réalisé par une autre personne.</p>
<h3>Les contrôles informatiques généraux</h3>
<ul>
<li><strong>Gestion des accès</strong> : création sur demande validée, retrait au départ, revue périodique des droits et des comptes à privilèges.</li>
<li><strong>Gestion des changements</strong> : toute modification de paramétrage ou de programme est demandée, testée, approuvée, puis mise en production par une autre personne que le développeur.</li>
<li><strong>Exploitation</strong> : sauvegardes testées, surveillance des traitements, gestion des incidents.</li>
</ul>
<div class="callout retenir"><b>À retenir</b><ul><li>Autoriser, enregistrer, détenir, contrôler : jamais tout dans les mêmes mains.</li><li>Faute de séparation, un contrôle compensatoire documenté.</li><li>La revue des habilitations est un contrôle clé dans presque toutes les entreprises.</li></ul></div>` },

  { id:"p3l3", type:"lecon", titre:"Prévenir et détecter la fraude", duree:"30 min", html:`
<p class="lead">La fraude n'est pas un risque théorique. Selon le baromètre fraude 2026 d'Allianz Trade et Odoxa, une entreprise sur trois a été ciblée par une tentative au cours des douze derniers mois, une tentative sur quatre aboutit, et 88 % des fraudes sont d'origine externe, le plus souvent par usurpation d'identité.</p>
<h3>Le triangle de la fraude</h3>
<div data-w="triangle"></div>
<p>Décrit par le criminologue Donald Cressey, ce modèle montre que la fraude survient quand les trois conditions sont réunies. Le contrôle interne agit surtout sur <strong>l'opportunité</strong> ; la culture éthique et le management agissent sur les deux autres.</p>
<h3>Les schémas les plus fréquents</h3>
<div class="tablewrap"><table class="ltable"><thead><tr><th>Schéma</th><th>Mode opératoire</th><th>Parade principale</th></tr></thead><tbody>
<tr><td><b>Fraude au président</b></td><td>Un faux dirigeant ou un faux avocat exige un virement urgent et confidentiel.</td><td>Aucun paiement hors processus, contre-appel sur un numéro connu</td></tr>
<tr><td><b>Faux changement de RIB</b></td><td>Un faux fournisseur annonce de nouvelles coordonnées bancaires.</td><td>Contre-appel, double validation, délai avant premier paiement</td></tr>
<tr><td><b>Faux fournisseur interne</b></td><td>Un salarié crée un fournisseur fictif et fait payer de fausses factures.</td><td>Séparation des tâches, revue des créations de fournisseurs</td></tr>
<tr><td><b>Notes de frais</b></td><td>Dépenses fictives, doublons, dépenses personnelles.</td><td>Justificatifs, plafonds, analyses de données</td></tr>
<tr><td><b>Manipulation comptable</b></td><td>Revenus anticipés, provisions minorées pour atteindre un objectif.</td><td>Revue des écritures manuelles, comité d'audit indépendant</td></tr>
</tbody></table></div>
<h3>Les signaux d'alerte</h3>
<ul><li>Urgence et confidentialité exigées en même temps.</li><li>Demande de contourner la procédure « pour une fois ».</li><li>Nouveau compte bancaire dans un pays sans lien avec le fournisseur.</li><li>Collaborateur qui refuse de prendre ses congés ou de déléguer.</li><li>Écritures manuelles passées tard, en fin de période, par une personne inhabituelle.</li></ul>
<h3>Exercice : repérez les signaux d'alerte</h3><p>Cet e-mail est arrivé vendredi à 17 h 40 dans la boîte de la trésorière. Cliquez sur tous les éléments suspects.</p><div data-w="phish"></div>
<h3>Un dispositif en trois temps</h3>
<ul><li><strong>Prévenir</strong> : sensibilisation régulière, procédures de paiement strictes, séparation des tâches.</li><li><strong>Détecter</strong> : analyses de données (doublons, RIB partagés entre fournisseur et salarié), dispositif d'alerte interne.</li><li><strong>Réagir</strong> : procédure de crise, rappel des fonds immédiat auprès de la banque, dépôt de plainte, retour d'expérience.</li></ul>
<div class="callout retenir"><b>À retenir</b><ul><li>Pression, opportunité, rationalisation : le contrôle interne agit sur l'opportunité.</li><li>La parade universelle de la fraude externe : vérifier par un autre canal que celui du demandeur.</li><li>En cas de virement frauduleux, chaque heure compte pour le rappel des fonds.</li></ul></div>` },

  { id:"p3l4", type:"lecon", titre:"Cyber, continuité d'activité et IA", duree:"25 min", html:`
<p class="lead">Les risques numériques sont devenus des risques d'entreprise. Un rançongiciel peut arrêter la production, la facturation et la paie en quelques heures.</p>
<h3>Les mesures d'hygiène essentielles</h3>
<ul>
<li><strong>Authentification multifacteur</strong> sur les accès distants, la messagerie et les comptes à privilèges.</li>
<li><strong>Sauvegardes</strong> régulières, dont au moins une copie déconnectée du réseau, et des restaurations testées.</li>
<li><strong>Mises à jour</strong> de sécurité appliquées rapidement, en priorité sur les systèmes exposés à Internet.</li>
<li><strong>Moindre privilège</strong> : chacun dispose uniquement des droits nécessaires à sa fonction.</li>
<li><strong>Sensibilisation</strong> : campagnes d'hameçonnage simulées et formation régulière.</li>
</ul>
<h3>Bon réflexe ou risque ?</h3><p>Balayez à droite les bons réflexes, à gauche les pratiques risquées.</p><div data-w="swipe-cyber"></div>
<h3>Continuité d'activité</h3>
<p>Le plan de continuité d'activité (PCA) définit comment maintenir les activités essentielles en mode dégradé ; le plan de reprise informatique (PRI) définit comment restaurer les systèmes. Un plan non testé n'est qu'une hypothèse : programmez au moins un exercice par an et documentez les écarts.</p>
<h3>Le cadre réglementaire bouge</h3>
<p>La directive européenne NIS 2 élargit fortement le nombre d'entités soumises à des obligations de cybersécurité. En France, le projet de loi « résilience » qui la transpose n'était pas encore adopté en octobre 2026 : surveillez son calendrier, car il fixera vos obligations de gouvernance, de gestion des risques et de notification des incidents.</p>
<h3>L'IA générative, un nouveau sujet de contrôle</h3>
<p>En février 2026, le COSO a publié un guide sur le contrôle interne appliqué à l'IA générative. L'idée centrale : il ne suffit plus de contrôler les résultats, il faut aussi garder la preuve que les jugements influencés par l'IA ont été revus et encadrés. Concrètement :</p>
<ul><li>Recenser les usages de l'IA dans les processus, notamment comptables et financiers.</li><li>Fixer des règles d'usage, en particulier sur les données confidentielles.</li><li>Exiger une revue humaine documentée des résultats utilisés pour décider.</li></ul>
<div class="callout retenir"><b>À retenir</b><ul><li>MFA, sauvegardes hors ligne testées, mises à jour, moindre privilège, sensibilisation.</li><li>Un PCA non testé ne protège pas.</li><li>L'IA générative entre dans le périmètre du contrôle interne.</li></ul></div>` },

  { id:"p3c", type:"cas", titre:"Cas pratique : vendredi, 17 h 40", duree:"15 min",
    contexte: HEXALIS + " Vendredi, 17 h 40. Claire, trésorière, reçoit l'appel d'un « avocat d'affaires » qui dit agir pour le PDG dans une acquisition confidentielle au Maroc. Quelques minutes plus tard, un e-mail signé du PDG arrive depuis l'adresse pdg@hexalis-group.com (l'adresse habituelle est en @hexalis.fr). Il demande un virement de 1,8 M€ avant 18 h 30, dans la plus stricte confidentialité.",
    etapes:[
    { q:"Que doit faire Claire ?", choix:[
      {t:"Exécuter le virement : la demande vient du PDG et le délai est très court.", ok:false, fb:"Tous les signaux d'une fraude au président sont réunis : urgence, confidentialité, nom de domaine différent, opération hors processus. Exécuter serait perdre 1,8 M€."},
      {t:"Appeler le PDG sur son numéro habituel, connu en interne, et appliquer la procédure de paiement sans exception.", ok:true, fb:"La vérification par un autre canal que celui du demandeur est la parade la plus efficace. Une procédure bien conçue prévoit qu'aucune urgence ne justifie de la contourner, même à la demande de la direction."},
      {t:"Répondre à l'e-mail pour demander une confirmation écrite au PDG.", ok:false, fb:"Répondre à l'e-mail revient à interroger le fraudeur lui-même : il confirmera aussitôt."} ]},
    { q:"Le PDG confirme ne rien avoir demandé. En vérifiant, Claire découvre qu'un virement de 480 k€ est parti la veille vers un « nouveau RIB » d'un fournisseur. Quelle est la première action ?", choix:[
      {t:"Contacter immédiatement la banque pour demander le rappel des fonds, puis déposer plainte.", ok:true, fb:"Les fonds sont souvent transférés en cascade en quelques heures. La demande de rappel immédiate offre la meilleure chance de récupération ; la plainte permet ensuite l'enquête et les réquisitions."},
      {t:"Ouvrir une enquête interne pour comprendre ce qui s'est passé avant toute démarche externe.", ok:false, fb:"L'enquête est nécessaire, mais après. Chaque heure perdue réduit les chances de récupérer les fonds."},
      {t:"Prévenir d'abord les commissaires aux comptes.", ok:false, fb:"Ils devront être informés, mais ce n'est pas l'urgence : la priorité est de stopper la fuite des fonds."} ]},
    { q:"Quel contrôle aurait empêché le virement de 480 k€ ?", choix:[
      {t:"Un plafond de 2 M€ par virement.", ok:false, fb:"Le virement de 480 k€ serait passé sous ce plafond. Un seuil ne remplace pas la vérification de l'identité du demandeur."},
      {t:"Un contre-appel au fournisseur, sur un numéro déjà connu, avant toute modification de RIB, avec double validation et sans dérogation possible.", ok:true, fb:"C'est la parade de référence contre le faux changement de RIB. Le contre-appel doit utiliser un numéro issu du dossier fournisseur, jamais celui figurant dans la demande."},
      {t:"Une formation des nouveaux arrivants à la trésorerie.", ok:false, fb:"La sensibilisation est utile mais doit concerner toutes les personnes exposées, et elle ne remplace pas un contrôle préventif bloquant."} ]},
    { q:"Un mois plus tard, quel retour d'expérience organisez-vous ?", choix:[
      {t:"Rappeler publiquement la responsabilité de la personne qui a validé le changement de RIB.", ok:false, fb:"Pointer un individu décourage les signalements futurs. La défaillance est d'abord celle du dispositif."},
      {t:"Partager le cas de façon anonymisée, renforcer la procédure, lancer une campagne de sensibilisation testée par une simulation, et réévaluer le risque de fraude au paiement dans la cartographie.", ok:true, fb:"Le retour d'expérience transforme l'incident en amélioration durable du dispositif. La cartographie et le référentiel de contrôles sont mis à jour en conséquence."},
      {t:"Ne rien faire de plus : la fraude au président a été déjouée.", ok:false, fb:"480 k€ ont été perdus et une faille a été démontrée. Sans action, la même attaque réussira à nouveau."} ]}
  ]},

  { id:"p3q", type:"quiz", titre:"Quiz de validation", duree:"10 min", questions:[
    { q:"Un rapprochement bancaire mensuel est un contrôle…", c:["Préventif","Détectif","Correctif","Compensatoire uniquement"], a:1, e:"Il détecte a posteriori des écarts entre la comptabilité et la banque."},
    { q:"Lequel de ces attributs manque à la description « Le DAF revoit les paiements » ?", c:["Qui","Quoi","Fréquence, seuil, preuve et traitement des anomalies","Aucun, la description est complète"], a:2, e:"Sans fréquence, seuil, preuve et traitement des anomalies, le contrôle n'est ni exécutable de façon constante ni testable."},
    { q:"Sur quel côté du triangle de la fraude le contrôle interne agit-il principalement ?", c:["La pression","L'opportunité","La rationalisation","Aucun"], a:1, e:"Les contrôles réduisent les occasions de frauder sans être détecté."},
    { q:"Quelle est la meilleure parade contre un faux changement de RIB ?", c:["Vérifier le logo sur le courrier","Rappeler le numéro indiqué dans la demande","Contre-appeler le fournisseur sur un numéro déjà connu","Attendre une seconde relance du fournisseur"], a:2, e:"Seul un canal indépendant de la demande permet de vérifier l'identité du demandeur."},
    { q:"Dans une équipe de deux personnes, la séparation des tâches est impossible. Que faites-vous ?", c:["On accepte le risque sans autre mesure","On met en place un contrôle compensatoire, par exemple une revue indépendante a posteriori","On externalise toute la comptabilité","On supprime les habilitations ERP"], a:1, e:"Le contrôle compensatoire, documenté et exécuté par une personne indépendante, réduit le risque résiduel."},
    { q:"Quelle mesure de sécurité limite le plus l'impact d'un rançongiciel ?", c:["Un antivirus à jour","Des sauvegardes déconnectées du réseau et testées","Un mot de passe complexe","Un pare-feu"], a:1, e:"Seule une sauvegarde hors d'atteinte du rançongiciel, et dont la restauration a été testée, permet de reprendre l'activité sans payer."},
  ]}
]},
/* ================================================================ */
{ id:"p4", titre:"Tester les contrôles et piloter les plans d'action", court:"Tests et suivi", niveau:"Avancé", duree:"2 h", tone:"test",
  resume:"Réaliser des tests de conception et d'efficacité probants, échantillonner correctement, qualifier les déficiences et rédiger des constats qui débouchent sur des actions.",
  objectifs:["Distinguer test de conception et test d'efficacité","Choisir une taille d'échantillon adaptée à la fréquence","Qualifier une déficience","Rédiger un constat structuré et un plan d'action mesurable"],
  modules:[
  { id:"p4l1", type:"lecon", titre:"Conception ou efficacité : deux tests, deux questions", duree:"20 min", html:`
<p class="lead">Tester un contrôle, c'est répondre successivement à deux questions différentes. Inverser l'ordre fait perdre du temps.</p>
<div class="compare"><div class="good"><small>Test de conception</small><p><b>Le contrôle, s'il fonctionne comme décrit, couvre-t-il le risque ?</b><br>Méthode : le test de cheminement (<em>walkthrough</em>). On suit une opération de bout en bout, on interroge l'exécutant, on observe, on inspecte un exemple de preuve.</p></div><div class="good"><small>Test d'efficacité opérationnelle</small><p><b>Le contrôle a-t-il fonctionné de façon constante sur toute la période ?</b><br>Méthode : sur un échantillon, on vérifie la preuve de chaque exécution et la pertinence du traitement des anomalies.</p></div></div>
<p>Si la conception est défaillante, inutile de tester l'efficacité : le constat porte directement sur la conception.</p>
<h3>Les techniques, de la moins à la plus probante</h3>
<ol class="steps">
<li><b>Entretien</b> : utile pour comprendre, jamais suffisant seul.</li>
<li><b>Observation</b> : on voit le contrôle s'exécuter, mais à un instant donné.</li>
<li><b>Inspection</b> : on examine la preuve documentaire (état visé, workflow d'approbation).</li>
<li><b>Réexécution</b> : on refait le contrôle soi-même et on compare. C'est la plus probante.</li>
</ol>
<p>Classez les quatre techniques de la moins probante à la plus probante : touchez-les dans l'ordre.</p><div data-w="order-tech"></div>
<div class="callout terrain"><b>Sur le terrain</b><p>Une signature sur un état ne prouve pas que l'état a été analysé. Demandez à voir ce qui a été fait des écarts : annotations, échanges, régularisations. C'est là que se révèle un contrôle « tamponné » sans réelle revue.</p></div>
<div class="callout retenir"><b>À retenir</b><ul><li>Conception d'abord, efficacité ensuite.</li><li>L'entretien seul ne suffit jamais à conclure.</li></ul></div>` },

  { id:"p4l2", type:"lecon", titre:"Échantillonner et documenter", duree:"25 min", html:`
<p class="lead">Un test n'a de valeur que si la population est complète, l'échantillon sélectionné sans biais et le travail documenté de façon à être compris par un tiers.</p>
<h3>1. S'assurer de la complétude de la population</h3>
<p>Avant de tirer un échantillon, vérifiez que l'extraction est exhaustive : rapprochez le nombre de lignes avec une source indépendante (total comptable, liste RH, journal système).</p>
<h3>2. Choisir la taille de l'échantillon</h3>
<div class="tablewrap"><table class="ltable"><thead><tr><th>Fréquence du contrôle</th><th>Taille usuelle</th></tr></thead><tbody>
<tr><td>Annuelle</td><td>1</td></tr><tr><td>Trimestrielle</td><td>2</td></tr><tr><td>Mensuelle</td><td>2 à 5</td></tr><tr><td>Hebdomadaire</td><td>5 à 15</td></tr><tr><td>Quotidienne</td><td>20 à 40</td></tr><tr><td>Plusieurs fois par jour</td><td>25 à 60</td></tr>
</tbody></table></div>
<p>Ces repères sont ceux couramment utilisés par la profession. Prenez la borne haute quand le risque est élevé ou que le contrôle est nouveau. Pour un <strong>contrôle automatique</strong>, un test par scénario peut suffire, à condition que les contrôles informatiques généraux soient efficaces.</p>
<h3>3. Sélectionner sans biais</h3>
<p>Sélection aléatoire ou systématique (un élément tous les <em>n</em>) sur toute la période. Jamais de sélection de convenance, comme « les dossiers que l'on m'a préparés ».</p>
<h3>Simulation : testez un contrôle quotidien</h3><p>Le contrôle étudié est exécuté chaque jour ouvré. Suivez les étapes du test.</p><div data-w="sample"></div>
<h3>4. Documenter la feuille de travail</h3>
<ul><li>Objectif du test et risque couvert.</li><li>Population, source, contrôle de complétude.</li><li>Méthode de sélection et échantillon retenu.</li><li>Attributs testés pour chaque élément.</li><li>Résultats, exceptions et explications obtenues.</li><li>Conclusion, date et nom du testeur.</li></ul>
<div class="callout retenir"><b>À retenir</b><ul><li>Pas de population complète, pas de test valable.</li><li>La taille dépend de la fréquence et du risque.</li><li>Un tiers doit pouvoir refaire le test à partir de votre documentation.</li></ul></div>` },

  { id:"p4l3", type:"lecon", titre:"Qualifier les résultats", duree:"20 min", html:`
<p class="lead">Toute exception n'est pas une déficience, et toute déficience n'a pas la même gravité. La qualification doit être argumentée, car elle détermine qui sera informé.</p>
<h3>Exception ou déficience ?</h3>
<p>Une <strong>exception</strong> est un écart observé sur un élément testé. Elle devient une <strong>déficience</strong> lorsque le contrôle ne permet pas de prévenir ou de détecter à temps une anomalie. Sur un petit échantillon, une seule exception conduit en général à conclure que le contrôle n'est pas efficace.</p>
<h3>Trois niveaux de gravité</h3>
<div class="tablewrap"><table class="ltable"><thead><tr><th>Niveau</th><th>Définition</th><th>Destinataire</th></tr></thead><tbody>
<tr><td><span class="pill p-warn">Déficience</span></td><td>Le contrôle présente une faiblesse, sans exposition significative.</td><td>Responsable du processus</td></tr>
<tr><td><span class="pill p-high">Déficience significative</span></td><td>Faiblesse suffisamment importante pour mériter l'attention de la gouvernance.</td><td>Direction générale, comité d'audit</td></tr>
<tr><td><span class="pill p-crit">Faiblesse majeure</span></td><td>Possibilité raisonnable qu'une anomalie significative ne soit ni prévenue ni détectée à temps.</td><td>Comité d'audit, commissaires aux comptes</td></tr>
</tbody></table></div>
<p>Ces niveaux reprennent la terminologie anglo-saxonne (<em>deficiency, significant deficiency, material weakness</em>) largement utilisée par les auditeurs.</p>
<h3>Qualifiez ces situations</h3><p>Rangez chaque résultat de test dans le bon niveau de gravité.</p><div data-w="sort-qualif"></div>
<h3>Les critères d'appréciation</h3>
<ul><li>La probabilité qu'une anomalie survienne et passe inaperçue.</li><li>L'ampleur potentielle de cette anomalie.</li><li>L'existence de contrôles compensatoires efficaces.</li><li>La nature de la cause : ponctuelle (absence d'un salarié) ou systémique (processus mal conçu).</li><li>Un indice de fraude, qui aggrave toujours la qualification.</li></ul>
<div class="callout retenir"><b>À retenir</b><ul><li>Exception = fait observé ; déficience = jugement sur le contrôle.</li><li>La qualification dépend de l'exposition, pas du nombre d'exceptions seul.</li></ul></div>` },

  { id:"p4l4", type:"lecon", titre:"Rédiger un constat et piloter les actions", duree:"25 min", html:`
<p class="lead">Un constat sert à déclencher une action. S'il n'est pas compris, accepté et suivi, le test n'a servi à rien.</p>
<h3>La structure d'un constat</h3>
<ol class="steps">
<li><b>Critère</b> : ce qui est attendu (la procédure, la règle).</li>
<li><b>Constat</b> : ce qui a été observé, chiffré et daté.</li>
<li><b>Cause</b> : pourquoi l'écart existe.</li>
<li><b>Conséquence</b> : le risque concret pour l'entreprise.</li>
<li><b>Recommandation</b> : ce qu'il faut faire, proportionné au risque.</li>
</ol>
<p>À vous : remettez ce constat dans l'ordre en touchant les blocs successivement.</p><div data-w="order-constat"></div><h3>Le constat complet</h3>
<div class="callout terrain"><b>Exemple rédigé</b><p><b>Critère</b> : la procédure prévoit la désactivation des accès ERP le jour du départ du salarié.<br><b>Constat</b> : sur 40 comptes testés, 7 appartiennent à des salariés partis depuis 2 à 9 mois, dont 2 disposent de droits de paiement.<br><b>Cause</b> : la DSI n'est pas informée automatiquement des départs.<br><b>Conséquence</b> : risque d'utilisation frauduleuse d'un compte, notamment pour émettre des paiements.<br><b>Recommandation</b> : désactiver les 7 comptes, analyser les connexions postérieures aux départs, automatiser l'envoi des sorties RH à la DSI.</p></div>
<h3>Un plan d'action mesurable</h3>
<p>Chaque action comporte un <strong>responsable nommé</strong>, une <strong>échéance réaliste</strong> et un <strong>livrable vérifiable</strong>. « Renforcer la sécurité » n'est pas une action ; « Désactiver automatiquement les comptes ERP à la date de sortie RH, d'ici le 31 janvier » en est une.</p>
<h3>Clôturer sur preuve</h3>
<p>Une action n'est clôturée qu'après examen d'une preuve de mise en œuvre, et, pour les constats importants, un test de suivi qui confirme l'efficacité du nouveau contrôle.</p>
<h3>Rendre compte</h3>
<p>Le comité d'audit attend une vision synthétique : taux de réalisation, actions en retard, constats critiques ouverts, tendances. Les tableaux de bord de Vigie sont construits pour cela.</p>
<div class="callout retenir"><b>À retenir</b><ul><li>Critère, constat, cause, conséquence, recommandation.</li><li>Une action = un responsable, une échéance, un livrable.</li><li>On clôture sur preuve, pas sur déclaration.</li></ul></div>` },

  { id:"p4c", type:"cas", titre:"Cas pratique : la revue des habilitations ERP", duree:"15 min",
    contexte: HEXALIS + " Vous testez l'efficacité du contrôle clé CT-005 : la revue semestrielle des habilitations ERP. La DSI vous transmet une extraction de 412 comptes actifs.",
    etapes:[
    { q:"Que faites-vous avant de tirer votre échantillon ?", choix:[
      {t:"Vérifier que l'extraction est exhaustive en la rapprochant du nombre de comptes affiché par l'ERP et de la liste des salariés fournie par la DRH.", ok:true, fb:"Sans population complète, des comptes à risque peuvent avoir été exclus, volontairement ou non, et le test perd toute valeur."},
      {t:"Choisir les comptes des personnes que vous connaissez, pour faciliter les vérifications.", ok:false, fb:"Sélection de convenance : elle introduit un biais et n'est pas représentative de la population."},
      {t:"Rien : la DSI est de confiance.", ok:false, fb:"La confiance ne remplace pas la vérification. Le contrôle de complétude fait partie de toute feuille de travail."} ]},
    { q:"Sur 40 comptes tirés au hasard, 7 appartiennent à des salariés partis depuis 2 à 9 mois, dont 2 ont des droits de paiement. Quelle conclusion ?", choix:[
      {t:"Contrôle partiellement efficace : 33 comptes sur 40 sont conformes.", ok:false, fb:"Raisonner en pourcentage de conformité est trompeur : 7 exceptions sur 40, dont 2 avec des droits sensibles, montrent que la revue ne remplit pas son objectif."},
      {t:"Contrôle inefficace.", ok:true, fb:"Le nombre d'exceptions et leur gravité ne laissent pas de doute : la revue semestrielle n'a pas permis de détecter des comptes qui auraient dû être désactivés."},
      {t:"Contrôle efficace : les comptes n'ont peut-être pas été utilisés.", ok:false, fb:"Le test porte sur le fonctionnement du contrôle, pas sur l'absence de dommage. Et l'utilisation des comptes reste à vérifier."} ]},
    { q:"Comment qualifiez-vous cette déficience ?", choix:[
      {t:"Simple déficience, à traiter par la DSI.", ok:false, fb:"Deux comptes actifs avec droits de paiement exposent l'entreprise à un risque de fraude : la gouvernance doit en être informée."},
      {t:"Déficience significative à remonter au comité d'audit, avec une analyse immédiate des connexions survenues après les départs.", ok:true, fb:"Bonne qualification. Si l'analyse révélait une utilisation frauduleuse, la qualification serait encore aggravée et une enquête serait ouverte."},
      {t:"Aucune qualification tant que la DSI n'a pas donné son accord.", ok:false, fb:"Le dialogue avec la DSI est nécessaire pour comprendre la cause, mais la qualification relève du jugement indépendant du contrôle interne."} ]},
    { q:"Quelle recommandation retenez-vous ?", choix:[
      {t:"Renforcer la sécurité informatique.", ok:false, fb:"Trop vague : ni responsable, ni échéance, ni livrable vérifiable."},
      {t:"Former les équipes de la DSI aux bonnes pratiques.", ok:false, fb:"La cause identifiée n'est pas un manque de compétence mais l'absence d'information automatique sur les départs."},
      {t:"Désactiver les 7 comptes sous 48 h, analyser leurs connexions, automatiser la transmission des sorties RH à la DSI d'ici le 31 janvier, et revoir les comptes à privilèges chaque trimestre.", ok:true, fb:"Les actions sont immédiates sur les comptes concernés, traitent la cause racine et renforcent la surveillance. Chacune est mesurable."} ]}
  ]},

  { id:"p4q", type:"quiz", titre:"Quiz de validation", duree:"10 min", questions:[
    { q:"Un test de cheminement (walkthrough) sert principalement à évaluer…", c:["L'efficacité opérationnelle sur l'année","La conception du contrôle","La complétude de la population","Le coût du contrôle"], a:1, e:"Il vérifie que le contrôle, tel que décrit et mis en place, est capable de couvrir le risque."},
    { q:"Quelle technique de test est la plus probante ?", c:["L'entretien","L'observation","L'inspection","La réexécution"], a:3, e:"Refaire le contrôle soi-même apporte la preuve la plus forte."},
    { q:"Taille d'échantillon usuelle pour un contrôle mensuel ?", c:["1","2 à 5","20 à 40","60"], a:1, e:"Pour un contrôle mensuel (12 occurrences par an), on teste en général 2 à 5 occurrences."},
    { q:"Que faut-il vérifier avant de tirer un échantillon ?", c:["La complétude de la population","L'avis du responsable du contrôle","Le budget du test","Rien de particulier"], a:0, e:"Une population incomplète rend le test non probant."},
    { q:"Laquelle de ces actions est correctement formulée ?", c:["Améliorer le suivi des fournisseurs","Sensibiliser davantage","Mettre en place d'ici le 31 mars un contre-appel obligatoire, tracé dans l'ERP, pour toute modification de RIB (responsable : trésorier)","Être plus vigilant sur les paiements"], a:2, e:"Elle précise le livrable, l'échéance et le responsable."},
    { q:"Quand une action corrective peut-elle être clôturée ?", c:["Dès que le responsable l'indique","Après examen d'une preuve de mise en œuvre","À la fin de l'exercice","Après validation du commissaire aux comptes"], a:1, e:"On clôture sur preuve. Pour les constats importants, un test de suivi confirme l'efficacité."},
  ]}
]}
];
