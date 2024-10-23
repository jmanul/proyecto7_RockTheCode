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
    "userName": "jose",
		"password" : "jose"
  } 

```

- Respuesta:
  
```json
{
	"message": "Autenticación correcta",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTcwNjRlZTdjMTEzOTVhZTMwNDVmMSIsImlhdCI6MTcyOTY1MzA4NCwiZXhwIjoxNzI5NjU2Njg0fQ.pH7WBSRIOpSthzsr7gl0RdXHPcwet-ZKqt4djnRbUmI",
	"user": {
		"_id": "6717064ee7c11395ae3045f1",
		"userName": "jose",
		"roll": "administrator",
		"vehicles": [
			{
				"_id": "670d9c251620708441ad7329",
				"plate": "XYZ789",
				"brand": "Ford",
				"model": "F-150",
				"engine": "diesel"
			}
		]
	}
}

```

## Endpoints de users

> GET /api/v1/

- Descripción: Obtiene la lista de todos
  
- Respuesta:
  
```json



```

> GET /api/v1/

- Descripción: 
- Parámetros:
  
  - :id = _id 
  
- Respuesta:
  
```json


```

> POST /api/v1/

- Descripción: Crea un nuevo .
- Cuerpo de la solicitud:
  
```json


```
- Respuesta:
  
```json

```

> PUT /api/v1/

- Descripción: Actualiza .
- Parámetros:
  
  - :id = _id .
  
- Cuerpo de la solicitud:
  
```json



```
- Respuesta:
  
```json


```

> DELETE /api/v1/

 
- Descripción: Elimina 
- Parámetros:
  
  - :Id = _id .
 
  
- Respuesta:
  
```json


```

