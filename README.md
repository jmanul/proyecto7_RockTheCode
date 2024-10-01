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

> GET /api/v1/characters

- Descripción: Obtiene la lista de todos los personajes.
- Respuesta:
  
```json

[
	{
		"_id": "66f84d933aa0c83a021addd5",
		"name": "Tate Langdon",
		"image": "https://static.wikia.nocookie.net/americanhorrorstory/images/9/9a/Tate_Langdon.jpg",
		"description": "Tate Langdon es un joven problemático que aparece en la primera temporada de AHS: Murder House. Es un espíritu perturbado y oscuro que tuvo una trágica vida antes de su muerte.",
		"__v": 0,
		"createdAt": "2024-09-28T18:40:19.745Z",
		"updatedAt": "2024-09-28T18:40:19.745Z"
	},
	{
		"_id": "66f84d933aa0c83a021addd6",
		"name": "Fiona Goode",
		"image": "https://static.wikia.nocookie.net/americanhorrorstory/images/9/9a/Tate_Langdon.jpg",
		"description": "Fiona Goode es la Suprema del aquelarre en AHS: Coven. Es poderosa, egoísta y hará lo que sea necesario para mantener su poder y juventud.",
		"__v": 0,
		"createdAt": "2024-09-28T18:40:19.746Z",
		"updatedAt": "2024-10-01T19:04:39.833Z",
		"actor": {
			"_id": "66faf309097a28e9234c9970",
			"name": "Jessica Lange"
		},
		"season": {
			"_id": "66f84d9ccbf39570e326ece5",
			"number": 1,
			"name": "Murder House"
		}
	}

]

```

> GET /api/v1/characters/actor/:actor

- Descripción: Obtiene la lista de personajes por el actor. 
- Parámetros:
  
  - :actor = _id del actor.
  
- Respuesta:
  
```json

[
	{
		"_id": "66f84d933aa0c83a021addd6",
		"name": "Fiona Goode",
		"image": "https://static.wikia.nocookie.net/americanhorrorstory/images/9/9a/Tate_Langdon.jpg",
		"description": "Fiona Goode es la Suprema del aquelarre en AHS: Coven. Es poderosa, egoísta y hará lo que sea necesario para mantener su poder y juventud.",
		"__v": 0,
		"createdAt": "2024-09-28T18:40:19.746Z",
		"updatedAt": "2024-10-01T19:04:39.833Z",
		"actor": {
			"_id": "66faf309097a28e9234c9970",
			"name": "Jessica Lange"
		},
		"season": "66f84d9ccbf39570e326ece5"
	}
]


```

> GET /api/v1/characters/season/:season

- Descripción: Obtiene la lista de personajes por temporada. 
- Parámetros:
  
  - :season = _id de la temporada.
  
- Respuesta:
  
```json

[
	{
		"_id": "66f84d933aa0c83a021addd6",
		"name": "Fiona Goode",
		"image": "https://static.wikia.nocookie.net/americanhorrorstory/images/9/9a/Tate_Langdon.jpg",
		"description": "Fiona Goode es la Suprema del aquelarre en AHS: Coven. Es poderosa, egoísta y hará lo que sea necesario para mantener su poder y juventud.",
		"__v": 0,
		"createdAt": "2024-09-28T18:40:19.746Z",
		"updatedAt": "2024-10-01T19:04:39.833Z",
		"actor": {
			"_id": "66faf309097a28e9234c9970",
			"name": "Jessica Lange"
		},
		"season": {
			"_id": "66f84d9ccbf39570e326ece5",
			"number": 1,
			"name": "Murder House"
		}
	},
	{
		"_id": "66fc4d64b306d3ea14349dec",
		"name": "The Countess",
		"image": "https://static.wikia.nocookie.net/americanhorrorstory/images/9/9a/Tate_Langdon.jpg",
		"actor": {
			"_id": "66faf309097a28e9234c9970",
			"name": "Jessica Lange"
		},
		"season": {
			"_id": "66f84d9ccbf39570e326ece5",
			"number": 1,
			"name": "Murder House"
		},
		"description": "The Countess, interpretada por Lady Gaga en AHS: Hotel, es una vampira elegante y despiadada que se alimenta de sangre humana para mantener su inmortalidad.",
		"createdAt": "2024-10-01T19:28:36.796Z",
		"updatedAt": "2024-10-01T19:28:36.796Z",
		"__v": 0
	}
]


```

> GET /api/v1/characters/:id

- Descripción: Obtiene un personaje por su id.
- Parámetros:
  
  - :id = _id del personaje.
  
- Respuesta:
  
```json

{
	"_id": "66f84d933aa0c83a021addd6",
	"name": "Fiona Goode",
	"image": "https://static.wikia.nocookie.net/americanhorrorstory/images/9/9a/Tate_Langdon.jpg",
	"description": "Fiona Goode es la Suprema del aquelarre en AHS: Coven. Es poderosa, egoísta y hará lo que sea necesario para mantener su poder y juventud.",
	"__v": 0,
	"createdAt": "2024-09-28T18:40:19.746Z",
	"updatedAt": "2024-09-28T18:40:19.746Z"
}


```

> POST /api/v1/characters

- Descripción: Crea un nuevo personaje.
- Cuerpo de la solicitud:
  
```json

	{
		
		"name": "The Countess",
		"image": "https://static.wikia.nocookie.net/americanhorrorstory/images/9/9a/Tate_Langdon.jpg",
		"description": "The Countess, interpretada por Lady Gaga en AHS: Hotel, es una vampira elegante y despiadada que se alimenta de sangre humana para mantener su inmortalidad.",
		"actor": "66faf309097a28e9234c9970",
		"season": "66f84d9ccbf39570e326ece5"
	}


```

- Respuesta:
  
```json

{
	"name": "The Countess",
	"image": "https://static.wikia.nocookie.net/americanhorrorstory/images/9/9a/Tate_Langdon.jpg",
	"actor": "66faf309097a28e9234c9970",
	"season": "66f84d9ccbf39570e326ece5",
	"description": "The Countess, interpretada por Lady Gaga en AHS: Hotel, es una vampira elegante y despiadada que se alimenta de sangre humana para mantener su inmortalidad.",
	"_id": "66fc4d64b306d3ea14349dec",
	"createdAt": "2024-10-01T19:28:36.796Z",
	"updatedAt": "2024-10-01T19:28:36.796Z",
	"__v": 0
}


```

> PUT /api/v1/characters/:id

- Descripción: Actualiza un personaje.
- Parámetros:
  
  - :id = _id del personaje.
  
- Cuerpo de la solicitud:
  
```json

{
	"actor": "66faf309097a28e9234c9970",
	"season": "66f84d9ccbf39570e326ece5"
}

```

- Respuesta:
  
```json

{
	"_id": "66f84d933aa0c83a021addd6",
	"name": "Fiona Goode",
	"image": "https://static.wikia.nocookie.net/americanhorrorstory/images/9/9a/Tate_Langdon.jpg",
	"description": "Fiona Goode es la Suprema del aquelarre en AHS: Coven. Es poderosa, egoísta y hará lo que sea necesario para mantener su poder y juventud.",
	"__v": 0,
	"createdAt": "2024-09-28T18:40:19.746Z",
	"updatedAt": "2024-10-01T19:04:39.833Z",
	"actor": "66faf309097a28e9234c9970",
	"season": "66f84d9ccbf39570e326ece5"
}


```

> DELETE /api/v1/characters/:id

- Descripción: Elimina un personaje.
- Parámetros:
  
  - :id = _id del personaje.

- Respuesta:
  
```json
{
	"message": "El personaje fue eliminado",
	"character": {
		"_id": "66f84d933aa0c83a021addda",
		"name": "Queenie",
		"image": "https://static.wikia.nocookie.net/americanhorrorstory/images/5/50/Frances_Conroy.jpg",
		"description": "Queenie es una bruja que tiene la habilidad de ser una muñeca vudú humana, infligiendo dolor a otros a través de sí misma. Aparece en AHS: Coven y Hotel.",
		"__v": 0,
		"createdAt": "2024-09-28T18:40:19.746Z",
		"updatedAt": "2024-09-28T18:40:19.746Z"
	}
}

```

## Endpoints de temporadas

> GET /api/v1/seasons

- Descripción: Obtiene la lista de todas las temporadas.
- Respuesta:
  
```json

[
	{
		"_id": "66f84d9ccbf39570e326ece5",
		"number": 1,
		"name": "Murder House",
		"image": "https://static.wikia.nocookie.net/americanhorrorstory/images/2/23/Murder_House.jpg",
		"chapters": 12,
		"__v": 0,
		"createdAt": "2024-09-28T18:40:28.597Z",
		"updatedAt": "2024-09-28T18:40:28.597Z"
	},
	{
		"_id": "66f84d9ccbf39570e326ece7",
		"number": 3,
		"name": "Coven",
		"image": "https://static.wikia.nocookie.net/americanhorrorstory/images/2/26/Coven.jpg",
		"chapters": 13,
		"__v": 0,
		"createdAt": "2024-09-28T18:40:28.598Z",
		"updatedAt": "2024-09-28T18:40:28.598Z"
	}
]

```

> GET /api/v1/seasons/:id

- Descripción: Obtiene una temporada por su id.
- Parámetros:
  
  - :id = _id de la temporada.
  
- Respuesta:
  
```json

{
	"_id": "66f84d9ccbf39570e326ece8",
	"number": 4,
	"name": "Freak Show",
	"image": "https://static.wikia.nocookie.net/americanhorrorstory/images/1/1b/Freak_Show.jpg",
	"chapters": 13,
	"__v": 0,
	"createdAt": "2024-09-28T18:40:28.599Z",
	"updatedAt": "2024-09-28T18:40:28.599Z"
}

```

> POST /api/v1/seasons

- Descripción: Crea una nueva temporada.
- Cuerpo de la solicitud:
  
```json

{
	
	"number": 20,
	"name": "end of the ",
	"image": "https://static.wikia.nocookie.net/americanhorrorstory/images/1/1b/Freak_Show.jpg",
	"chapters": 10

}

```

- Respuesta:
  
```json

{
	"number": 20,
	"name": "end of the ",
	"image": "https://static.wikia.nocookie.net/americanhorrorstory/images/1/1b/Freak_Show.jpg",
	"chapters": 10,
	"_id": "66fc52a1b306d3ea14349df3",
	"createdAt": "2024-10-01T19:50:57.291Z",
	"updatedAt": "2024-10-01T19:50:57.291Z",
	"__v": 0
}

```

> PUT /api/v1/seasons/:id

- Descripción: Actualiza una temporada.
- Parámetros:
  
  - :id = _id de la temporada.
  
- Cuerpo de la solicitud:
  
```json

{
	
	"name": "end of the series ",
	"chapters": 12

}

```

- Respuesta:
  
```json

{
	"_id": "66fc52a1b306d3ea14349df3",
	"number": 20,
	"name": "end of the series ",
	"image": "https://static.wikia.nocookie.net/americanhorrorstory/images/1/1b/Freak_Show.jpg",
	"chapters": 12,
	"createdAt": "2024-10-01T19:50:57.291Z",
	"updatedAt": "2024-10-01T19:54:19.283Z",
	"__v": 0
}

```

> DELETE /api/v1/seasons/:id

- Descripción: Elimina una temporada.
- Parámetros:
  
  - :id = _id de la temporada.

- Respuesta:
  
```json

{
	"message": "La temporada fue eliminada",
	"season": {
		"_id": "66f84d9ccbf39570e326ecef",
		"number": 11,
		"name": "NYC",
		"image": "https://static.wikia.nocookie.net/americanhorrorstory/images/6/6c/NYC.jpg",
		"chapters": 10,
		"__v": 0,
		"createdAt": "2024-09-28T18:40:28.599Z",
		"updatedAt": "2024-09-28T18:40:28.599Z"
	}
}

```
