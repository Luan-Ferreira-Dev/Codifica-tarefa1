# Sobre
Repositório contém a lista de exercícios 1 do **Módulo 1 - Introdução à Lógica de Programação** do curso Full Stack da +PraTi e Codifica.
## Configurações
Necessário instalar Node.js.
### Linux (Ubuntu)
#### nvm
nvm é o gerenciador de versões para Node.js
```sh
sudo apt install curl
```
```sh
sudo apt update && sudo apt upgrade
```
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
#### Node.js
```sh
nvm install --lts
```
### Windows
Download [Node.js](https://nodejs.org/en/download/current)
## Execução
Clone o repositório.
```sh
git clone https://github.com/Luan-Ferreira-Dev/maisPraTi_lista1
```
Instale as dependências.
```sh
npm i prompt-sync
```
Execute a atividade de acordo com o número:
```sh
node ./atividade_01.js
```
