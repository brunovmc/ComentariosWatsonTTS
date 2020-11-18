
# Watson text-to-speech app

[EN](https://github.com/brunovmc/ComentariosWatsonTTS#installation)[#PT](https://github.com/brunovmc/ComentariosWatsonTTS#instalar)

Summary:
  - Node web app with MySQL database.
  - Uses Text to Speech API from IBM Watson.
  - Backend containerized using Docker.
  - Frontend using React

## Installation

Follow these steps for first time installation.

```sh
$ git clone https://github.com/brunovmc/ComentariosWatsonTTS.git
$ cd ComentariosWatsonTTS
```

First setup the backend

```sh
$ docker-compose build
$ docker-compose up
```

- You should keep this terminal running the backend.
- Note that the DB is droped when the container is initialized to prevent cluttering the DB.
- If you want to change this behaviour you'll need to edit the server.js file in the backend folder.

Open a new terminal for the frontend

```sh
$ cd frontend
$ npm install
$ npm start
```

- React will try to open your default browser on https://localhost/3001
- Some operating systems or user configuration may prevent this and display an error, if so simply use the link above.

License
----

MIT


Resumo:
  - aplicação web com Node.js e banco de dados MySQL.
  - utiliza API Text to Speech do IBM Watson.
  - backend utiliza Docker para iniciar.
  - frontend utilizando React

## instalação

Siga estes passos para instalar pela primeira vez.

```sh
$ git clone https://github.com/brunovmc/ComentariosWatsonTTS.git
$ cd ComentariosWatsonTTS
```

Primeiro inicialize o backend.

```sh
$ docker-compose build
$ docker-compose up
```

- Voce deve manter este terminal rodando com o backend.
- Perceba que o banco de dados reinicializa quando o backend inicia.
- Se voce quiser mudar este comportamento voce precisara editar o arquivo server.js na pasta backend.

Abra um novo terminal para o frontend.

```sh
$ cd frontend
$ npm install
$ npm start
```

- React tentara abrir o endereço https://localhost/3001 no seu browser padrão.
- Alguns sistemas operacionais ou configurações de usuarios impedem essa acao e um erro aparace, se for o caso use o link acima.

Licença
----

MIT
