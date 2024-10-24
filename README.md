# proyecto7_RockTheCode : API REST AUTH de Gestión de Usuarios, Vehículos y Servicios

![logo](https://res.cloudinary.com/dn6utw1rl/image/upload/v1729644440/mecanico_lrmnou.png
)

#### Esta API permite gestionar usuarios, vehículos, y servicios realizados a los vehículos en un entorno de taller automotriz. Está construida utilizando Node.js, Express y Mongoose para la base de datos MongoDB. Además, la autenticación y autorización se manejan mediante JWT (JSON Web Tokens) para garantizar que solo los usuarios autenticados y autorizados puedan acceder a los diferentes recursos de la API

## Endpoints de registro y login

> POST /api/v1/register

- Descripción: Cualquiera usuario puede registrarse con la contraseña y el nombre que elija, siempre y cuando ese nombre no exista ya para otro usuario, su roll por defecto es user
  
- Cuerpo de la solicitud:
  
```json

 {
    "userName": "j@se",
    "password": "0123"
  }

```
 
- Respuesta:
  
```json
{
	"message": "Usuario registrado exitosamente",
	"user": {
		"userName": "j@se",
		"password": "$2b$10$U7heILi6nnACmYZLv3BCGOQaKdcKylUyxFNeoxJE.5vUePOMlGvQe",
		"roll": "user",
		"vehicles": [],
		"_id": "671863a1fa1546fc2b5edff5",
		"createdAt": "2024-10-23T02:46:57.496Z",
		"updatedAt": "2024-10-23T02:46:57.496Z",
		"__v": 0
	}
}

```

> GET /api/v1/register/login

- Descripción: Autentica a un usuario y retorna un token JWT.
  
- Cuerpo de la solicitud:
  
```json

  {
    "userName": "maria",
    "password": "1234"
  }

```

- Respuesta:
  
```json
{
	"message": "Autenticación correcta",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTg3YTNmODEzMDgzM2QzNThmOWRkNSIsImlhdCI6MTcyOTY1ODA2NSwiZXhwIjoxNzI5NjYxNjY1fQ.6ZlY1hX-YbyHUqI55dJbmmrBlYrtpb24eteMpRED1_k",
	"user": {
		"_id": "67187a3f8130833d358f9dd5",
		"userName": "maria",
		"roll": "user",
		"vehicles": [
			{
				"_id": "670d9c251620708441ad7329",
				"plate": "XYZ789",
				"brand": "Ford",
				"model": "F-150",
				"engine": "diesel"
			},
			{
				"_id": "670d9c251620708441ad732b",
				"plate": "QRS321",
				"brand": "Honda",
				"model": "Civic",
				"engine": "gasoline"
			}
		]
	}
}

```

## Endpoints de users

> GET /api/v1/users

- Descripción: Obtiene la lista de todos los usuarios
- Restricciones: Solo disponible para administradores
   
- Respuesta:
  
```json

[
	{
		"_id": "6717064ee7c11395ae3045f1",
		"userName": "jose",
		"password": "$2b$10$iddMBMctNFgQFIDGzHEqfuzA2.6IFTY66nUYuXewFw3qgy4yMxyZG",
		"roll": "administrator",
		"vehicles": [
			{
				"_id": "670d9c251620708441ad7329",
				"plate": "XYZ789",
				"brand": "Ford",
				"model": "F-150",
				"engine": "diesel",
				"services": [
					{
						"serviceId": {
							"_id": "670d9997adb7d10304361898",
							"name": "Cambio de pastillas de freno",
							"price": 120,
							"time": 60,
							"pieces": [
								{
									"_id": "67170a07e963f82db1b3f489",
									"name": "Pastillas de freno",
									"price": 70
								}
							]
						},
						"date": "2024-10-22T02:38:46.812Z",
						"_id": "67171036269f4ddcb0669a02"
					}
				]
			}
		],
		"createdAt": "2024-10-22T01:56:30.596Z",
		"updatedAt": "2024-10-22T01:56:30.596Z",
		"__v": 0
	},
	{
		"_id": "67170688e7c11395ae3045f7",
		"userName": "jose_manuel",
		"password": "$2b$10$EN4hhkLJwnnz1pclLVhEAOuf36CLVvHD1aFg4PhybK0.5e7d4lYlu",
		"roll": "user",
		"vehicles": [
			{
				"_id": "670d9c251620708441ad7329",
				"plate": "XYZ789",
				"brand": "Ford",
				"model": "F-150",
				"engine": "diesel",
				"services": [
					{
						"serviceId": {
							"_id": "670d9997adb7d10304361898",
							"name": "Cambio de pastillas de freno",
							"price": 120,
							"time": 60,
							"pieces": [
								{
									"_id": "67170a07e963f82db1b3f489",
									"name": "Pastillas de freno",
									"price": 70
								}
							]
						},
						"date": "2024-10-22T02:38:46.812Z",
						"_id": "67171036269f4ddcb0669a02"
					}
				]
			}
		],
		"createdAt": "2024-10-22T01:57:28.444Z",
		"updatedAt": "2024-10-22T01:57:28.444Z",
		"__v": 0
	}
]  

```

> GET /api/v1/users/:id

- Descripción: Busca un usuario por su id
- Restricciones: Solo disponible para administradores y usuarios a su propio id
  
- Parámetros:
  
  - :id = _id del usuario
  
- Respuesta:
  
```json

{
	"_id": "67170688e7c11395ae3045f7",
	"userName": "jose_manuel",
	"password": "$2b$10$EN4hhkLJwnnz1pclLVhEAOuf36CLVvHD1aFg4PhybK0.5e7d4lYlu",
	"roll": "user",
	"vehicles": [
		{
			"_id": "670d9c251620708441ad7329",
			"plate": "XYZ789",
			"brand": "Ford",
			"model": "F-150",
			"engine": "diesel",
			"services": [
				{
					"serviceId": {
						"_id": "670d9997adb7d10304361898",
						"name": "Cambio de pastillas de freno",
						"price": 120,
						"time": 60,
						"pieces": [
							{
								"_id": "67170a07e963f82db1b3f489",
								"name": "Pastillas de freno",
								"price": 70
							}
						]
					},
					"date": "2024-10-22T02:38:46.812Z",
					"_id": "67171036269f4ddcb0669a02"
				}
			]
		}
	],
	"createdAt": "2024-10-22T01:57:28.444Z",
	"updatedAt": "2024-10-22T01:57:28.444Z",
	"__v": 0
}

```

> GET /api/v1/users/vehicles/:plate

- Descripción: Busca un usuario por la matricula de un vehiculo
- Restricciones: Solo disponible para administradores
  
- Parámetros:
  
  - :plate = plate del vehiculo 
  
- Respuesta:
  
```json

{
	"_id": "6717064ee7c11395ae3045f1",
	"userName": "jose",
	"password": "$2b$10$iddMBMctNFgQFIDGzHEqfuzA2.6IFTY66nUYuXewFw3qgy4yMxyZG",
	"roll": "administrator",
	"vehicles": [
		{
			"_id": "670d9c251620708441ad7329",
			"plate": "XYZ789",
			"brand": "Ford",
			"model": "F-150",
			"engine": "diesel",
			"services": [
				{
					"serviceId": {
						"_id": "670d9997adb7d10304361898",
						"name": "Cambio de pastillas de freno",
						"price": 120,
						"time": 60,
						"pieces": [
							{
								"_id": "67170a07e963f82db1b3f489",
								"name": "Pastillas de freno",
								"price": 70
							}
						]
					},
					"date": "2024-10-22T02:38:46.812Z",
					"_id": "67171036269f4ddcb0669a02"
				}
			]
		},
		{
			"_id": "670d9c251620708441ad732a",
			"plate": "LMN456",
			"brand": "Tesla",
			"model": "Model 3",
			"engine": "electric",
			"services": []
		}
	],
	"createdAt": "2024-10-22T01:56:30.596Z",
	"updatedAt": "2024-10-24T03:35:39.327Z",
	"__v": 0
}

```

> POST /api/v1/users

- Descripción: Crea un nuevo usuario
- Restricciones: solo disponible para administradores
- Cuerpo de la solicitud:
  
```json

	{

"userName": "Laura_p",
"password": "123",
"vehicles":["670d9c251620708441ad7329"]
}

```
- Respuesta:
  
```json

{
	"message": "usuario creado correctamente",
	"user": {
		"userName": "Laura_p",
		"password": "$2b$10$MrPBj0iWQ/XLa3G3Tx9nHu.JmT93d.H5gwbD7QKEHDGcwdmzgbV92",
		"roll": "user",
		"vehicles": [
			"670d9c251620708441ad7329"
		],
		"_id": "6719c6c139e6db984e34981d",
		"createdAt": "2024-10-24T04:02:09.552Z",
		"updatedAt": "2024-10-24T04:02:09.552Z",
		"__v": 0
	}
}

```

> PUT /api/v1/users/roll/:id

- Descripción: Actualiza el roll de un usuario
- Restricciones: solo disponible para administradores
- Parámetros:
  
  - :id = _id del usuario
  
- Cuerpo de la solicitud:
  
```json

{
	"roll" : "administrator"
}

```
- Respuesta:
  
```json

{
	"_id": "6719c6c139e6db984e34981d",
	"userName": "Laura_p",
	"password": "$2b$10$MrPBj0iWQ/XLa3G3Tx9nHu.JmT93d.H5gwbD7QKEHDGcwdmzgbV92",
	"roll": "administrator",
	"vehicles": [
		"670d9c251620708441ad7329"
	],
	"createdAt": "2024-10-24T04:02:09.552Z",
	"updatedAt": "2024-10-24T04:07:17.627Z",
	"__v": 0
}

```

> PUT /api/v1/users/password/:userName

- Descripción: Actualiza el password de un usuario
- Restricciones: solo disponible para administradores y usuarios a su propio password
- Parámetros:
  
  - :userName = userName del usuario
  
- Cuerpo de la solicitud:
  
```json

{
	
	"password":"1234"
}

```
- Respuesta:
  
```json

{
	"_id": "67187a3f8130833d358f9dd5",
	"userName": "maria",
	"password": "$2b$10$C6K9RB9BnAoL/0eqDBwciufbeYMZxsP7cG3tnDuiFdpH1fq1y6f/q",
	"roll": "user",
	"vehicles": [
		"670d9c251620708441ad7329",
		"670d9c251620708441ad732b"
	],
	"createdAt": "2024-10-23T04:23:27.400Z",
	"updatedAt": "2024-10-24T02:50:40.863Z",
	"__v": 0
}

```

> PUT /api/v1/users/:id

- Descripción: Actualiza los datos de un usuario, menos el roll, userName y vehicles
- Restricciones: solo disponible para administradores y usuarios a su propia información
- Parámetros:
  
  - :id = _id del usuario
  
- Cuerpo de la solicitud:
  
```json

{
	"password": "123456"
}

```
- Respuesta:
  
```json

{
	"_id": "67187a3f8130833d358f9dd5",
	"userName": "maria",
	"password": "$2b$10$b.RnW1vNSs/wzc1o904nnORBFLuRX9VrhWq31gXL7VcYp0MFzEqgu",
	"roll": "user",
	"vehicles": [
		"670d9c251620708441ad7329",
		"670d9c251620708441ad732b"
	],
	"createdAt": "2024-10-23T04:23:27.400Z",
	"updatedAt": "2024-10-24T04:19:14.039Z",
	"__v": 0
}

```

> PUT /api/v1/users/:id/vehicles

- Descripción: Añade vehiculos a un usuario
- Restricciones: solo disponible para administradores
- Parámetros:
  
  - :id = _id del usuario
  
- Cuerpo de la solicitud:
  
```json

{
	
	"vehicles" : ["670d9c251620708441ad732a"]
}

```
- Respuesta:
  
```json

{
	"message": "Vehículos añadidos con éxito",
	"updatedUser": {
		"_id": "6717064ee7c11395ae3045f1",
		"userName": "jose",
		"password": "$2b$10$iddMBMctNFgQFIDGzHEqfuzA2.6IFTY66nUYuXewFw3qgy4yMxyZG",
		"roll": "administrator",
		"vehicles": [
			{
				"_id": "670d9c251620708441ad7329",
				"plate": "XYZ789",
				"brand": "Ford",
				"model": "F-150",
				"engine": "diesel"
			},
			{
				"_id": "670d9c251620708441ad732a",
				"plate": "LMN456",
				"brand": "Tesla",
				"model": "Model 3",
				"engine": "electric"
			}
		],
		"createdAt": "2024-10-22T01:56:30.596Z",
		"updatedAt": "2024-10-24T03:35:39.327Z",
		"__v": 0
	}
}

```

> DELETE /api/v1/users/:idUser/vehicles/:idVehicle

 
- Descripción: Elimina un vehiculo de un usuario
- Restricciones: solo disponible para administradores
- Parámetros:
  
  - :idUser = _id del usuario
  - :idVehicle = _id del Vehiculo
 
  
- Respuesta:
  
```json

{
	"message": "El vehiculo fue eliminado",
	"vehicle": "670d9c251620708441ad732c",
	"user": {
		"_id": "671150610ec166075e186639",
		"userName": "antonia",
		"password": "$2b$10$18.X5.p4UP6XuvQCENc6AeSO1Nb08CLFMuM1Ygsm6vlPabCiKjuyW",
		"roll": "user",
		"vehicles": [],
		"createdAt": "2024-10-17T17:58:57.818Z",
		"updatedAt": "2024-10-20T18:49:30.589Z",
		"__v": 0
	}
}

```

> DELETE /api/v1/users/:id

 
- Descripción: Elimina un usuario
- Restricciones: solo disponible para administradores
- Parámetros:
  
  - :id = _id del usuario
  
- Respuesta:
  
```json

{
	"message": "El usuario fue eliminado",
	"user": {
		"_id": "67187690c9956b24b4748da3",
		"userName": "maria",
		"password": "$2b$10$b1XQsqJdIJ3HOyQtVL0I3eAo/e0Cd.5asOrVDaZ5OU8XDuHt8celm",
		"roll": "user",
		"vehicles": [],
		"createdAt": "2024-10-23T04:07:44.985Z",
		"updatedAt": "2024-10-23T04:07:44.985Z",
		"__v": 0
	}
}

```

