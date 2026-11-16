@echo off
rem ------------------------------------------------------------------
rem  Lance Vigie dans une fenetre d application Microsoft Edge.
rem
rem  Si Vigie est publiee sur GitHub Pages, collez son adresse apres
rem  le signe = ci-dessous, par exemple :
rem    set "ADRESSE_EN_LIGNE=https://votre-compte.github.io/vigie/"
rem  Laissez vide pour ouvrir la copie de Vigie contenue dans ce dossier.
rem ------------------------------------------------------------------
set "ADRESSE_EN_LIGNE="

if not "%ADRESSE_EN_LIGNE%"=="" goto enligne
set "CHEMIN=%~dp0index.html"
set "CHEMIN=%CHEMIN:\=/%"
start "" msedge --app="file:///%CHEMIN%"
goto :eof

:enligne
start "" msedge --app="%ADRESSE_EN_LIGNE%"
