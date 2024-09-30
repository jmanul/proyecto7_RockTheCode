# proyecto6_RockTheCode

![logo American Horror Story](https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Ecran_Titre_d%27American_Horror_Story.png/800px-Ecran_Titre_d%27American_Horror_Story.png)

## Descripción

API con CRUD completo de actores, personajes y temporadas de American Horror Story.

## Endpoints de actores

> GET /api/v1/actors

- Descripción: Obtiene la lista de todos los actores.
- Respuesta:
  
```json
[
{
		"_id": "66faf309097a28e9234c996f",
		"name": "Evan Peters",
		"image": "https://www.imdb.com/title/tt1844624/mediaviewer/rm2779688448/",
		"birthdate": "1987-01-20T00:00:00.000Z",
		"seasons": [],
		"__v": 0,
		"createdAt": "2024-09-30T18:50:49.592Z",
		"updatedAt": "2024-09-30T22:34:45.926Z"
	},
	{
		"_id": "66faf309097a28e9234c9970",
		"name": "Jessica Lange",
		"image": "https://www.imdb.com/title/tt1844624/mediaviewer/rm2607727616/",
		"birthdate": "1949-04-20T00:00:00.000Z",
		"seasons": [],
		"__v": 0,
		"createdAt": "2024-09-30T18:50:49.593Z",
		"updatedAt": "2024-09-30T18:50:49.593Z"
	}
]


```

> GET /api/v1/actors/:name

- Descripción: Obtiene la lista de actores por su nombre. 
- Parámetros:
  
  - :name = name del actor.
  
- Respuesta:
  
```json
[
	{
		"_id": "66d8aa2afa53c8fd2355c4a9",
		"name": "Jessica Lange",
		"image": "https://es.web.img2.acsta.net/c_300_300/pictures/18/11/20/00/44/4082500.jpg",
		"birthdate": "1949-04-19T23:00:00.000Z",
		"createdAt": "2024-09-04T18:42:50.198Z",
		"updatedAt": "2024-09-04T20:14:26.132Z",
		"__v": 0
	}
]

```

> GET /api/v1/actors/id/:id

- Descripción: Obtiene un actor por su id.
- Parámetros:
  
  - :id = _id del actor.
  
- Respuesta:
  
```json
{
	"_id": "66fb0009ce735a69b794c81d",
	"name": "Angela Bassett",
	"image": "https://www.imdb.com/title/tt1844624/mediaviewer/rm2607727616/",
	"birthdate": "1949-04-20T00:00:00.000Z",
	"seasons": [
		{
			"number": 1,
			"name": "Murder House"
		},
		{
			"number": 2,
			"name": "Asylum"
		}
	],
	"createdAt": "2024-09-30T19:46:17.278Z",
	"updatedAt": "2024-09-30T19:46:17.278Z",
	"__v": 0
}

```

> POST /api/v1/actors

- Descripción: Crea un nuevo actor.
- Cuerpo de la solicitud:
  
```json
{"name": "Angela Bassett",
"image": "https://www.imdb.com/title/tt1844624/mediaviewer/rm2607727616/",
"birthdate": "1949-04-20T00:00:00.000Z",
"seasons": ["66f84d9ccbf39570e326ece5", "66f84d9ccbf39570e326ece6"]}

```
- Respuesta:
  
```json
{
	"name": "Angela Bassett",
	"image": "https://www.imdb.com/title/tt1844624/mediaviewer/rm2607727616/",
	"birthdate": "1949-04-20T00:00:00.000Z",
	"seasons": [
		"66f84d9ccbf39570e326ece5",
		"66f84d9ccbf39570e326ece6"
	],
	"_id": "66fb0009ce735a69b794c81d",
	"createdAt": "2024-09-30T19:46:17.278Z",
	"updatedAt": "2024-09-30T19:46:17.278Z",
	"__v": 0
}

```

> PUT /api/v1/actors/:id

- Descripción: Actualiza un actor.
- Parámetros:
  
  - :id = _id del actor.
  
- Cuerpo de la solicitud:
  
```json
{
	"seasons" : ["66f84d9ccbf39570e326ece7"]
}

```
- Respuesta:
  
```json
{
	"_id": "66fb0009ce735a69b794c81d",
	"name": "Angela Bassett",
	"image": "https://www.imdb.com/title/tt1844624/mediaviewer/rm2607727616/",
	"birthdate": "1949-04-20T00:00:00.000Z",
	"seasons": [
		"66f84d9ccbf39570e326ece5",
		"66f84d9ccbf39570e326ece6",
		"66f84d9ccbf39570e326ece7"
	],
	"createdAt": "2024-09-30T19:46:17.278Z",
	"updatedAt": "2024-09-30T21:42:57.884Z",
	"__v": 0
}

```

> DELETE /api/v1/actors/:actorId/seasons/:seasonId

- Descripción: Elimina una temporada de la lista de temporadas en la que aprece el actor.
- Parámetros:
  
  - :ActorId = _id del actor.
  - :seasonId = _id de la season.
  
- Respuesta:
  
```json
{
	"_id": "66fb0009ce735a69b794c81d",
	"name": "Angela Bassett",
	"image": "https://www.imdb.com/title/tt1844624/mediaviewer/rm2607727616/",
	"birthdate": "1949-04-20T00:00:00.000Z",
	"seasons": [
		"66f84d9ccbf39570e326ece5",
		"66f84d9ccbf39570e326ece6"
	],
	"createdAt": "2024-09-30T19:46:17.278Z",
	"updatedAt": "2024-09-30T22:04:22.883Z",
	"__v": 0
}

```

> DELETE /api/v1/actors/:id

- Descripción: Elimina un actor.
- Parámetros:
  
  - :id = _id del actor.

- Respuesta:
  
```json
{
	"message": "El actor fue eliminado",
	"actor": {
		"_id": "66faf309097a28e9234c9972",
		"name": "Lady Gaga",
		"image": "https://static.wikia.nocookie.net/americanhorrorstory/images/5/50/Frances_Conroy.jpg",
		"birthdate": "1986-03-28T00:00:00.000Z",
		"seasons": [],
		"__v": 0,
		"createdAt": "2024-09-30T18:50:49.593Z",
		"updatedAt": "2024-09-30T18:50:49.593Z"
	}
}

```

## Endpoints de personajes




## Endpoints de temporadas