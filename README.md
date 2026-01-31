# ShortURL

> Un acortador de enlaces simple, rápido y eficiente construido con el stack MERN.

![Project Status](https://img.shields.io/badge/status-active-success)

## Live Demo

- **Frontend (Vercel):** [https://short-url-eight-rho.vercel.app](https://short-url-eight-rho.vercel.app)
- **Backend (Render):** [https://shorturl-n09k.onrender.com](https://shorturl-n09k.onrender.com)

---

## Tecnologías Utilizadas

Este proyecto utiliza una arquitectura separada (Frontend y Backend):

### Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

---

## Características

- **Acortamiento de URLs:** Convierte enlaces largos en URLs cortas y manejables.
- **Redirección Rápida:** Redirección automática al enlace original mediante el ID corto.
- **Persistencia de Datos:** Las URLs se almacenan en MongoDB.
- **Validación:** Comprobación de formato de URL válido.
- **Generación de ID Único:** Uso de `nanoid` para generar identificadores cortos (5 caracteres) únicos.
- **CORS Configurado:** Seguridad habilitada para permitir peticiones solo desde dominios autorizados.
- **Diseño Responsive:** Interfaz amigable para móviles y escritorio.

---

## Instalación y Configuración Local

Sigue estos pasos para correr el proyecto en tu máquina local.

### Prerrequisitos

- Node.js instalado (v14 o superior).
- Una cuenta de MongoDB Atlas (o MongoDB local).

### 1. Clonar el repositorio

```bash
git clone https://github.com/champagneplease/shortURL
cd shortURL

```

### 2. Configuración del Backend

Navega a la carpeta del servidor e instala las dependencias:

```bash
cd backend  # (o el nombre de tu carpeta del servidor)
npm install

```

Crea un archivo `.env` en la raíz del backend con el siguiente contenido:

```env
PORT=3001
MONGO_URI=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/shorturl
BASE_URL=http://localhost:3001

```

Ejecuta el servidor:

```bash
npm run dev
# O si usas el script estándar:
npm start

```

### 3. Configuración del Frontend

Abre una nueva terminal, navega a la carpeta del cliente e instala dependencias:

```bash
cd frontend # (o el nombre de tu carpeta de React)
npm install

```

Crea un archivo `.env` en la raíz del frontend:

```env
VITE_API_URL=http://localhost:3001

```

Ejecuta el cliente:

```bash
npm run dev

```

---

## API Endpoints

### 1. Crear URL Corta

- **Ruta:** `POST /`
- **Descripción:** Recibe una URL original y devuelve la URL acortada.
- **Body:**

```json
{
  "url": "[https://www.google.com](https://www.google.com)"
}
```

- **Respuesta:**

```json
{
  "originalUrl": "[https://www.google.com](https://www.google.com)",
  "shortUrl": "http://localhost:3001/abcde"
}
```

### 2. Redireccionar
* **Ruta:** `GET /:shortId`
* **Descripción:** Busca el `shortId` en la base de datos y redirecciona a la URL original.


## Despliegue (Deploy)

### Backend (Render)

El backend está configurado como un **Web Service**.

- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Variables de Entorno en Render:**
- `MONGO_URI`: Tu conexión a MongoDB.
- `BASE_URL`: `https://shorturl-n09k.onrender.com` (Sin barra al final).

### Frontend (Vercel)

El frontend se despliega como un sitio estático.

- **Variables de Entorno en Vercel:**
- `VITE_API_URL`: `https://shorturl-n09k.onrender.com`

---

## Autor

**Nacho Miranda (@champagne)**

- Backend Developer en formación.
