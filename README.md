# Rental Cars
Rental cars es una web creada para rentar autos en línea

### Vista en vivo
[Proximamente](#)

### Tecnologías usadas
- Next.js
- React.js
- Prisma
- PostgreSQL
- Zod
- Stripe
- TypeScript
- Clerk
- Shadcn

### Instalación
1. Clona el repositorio `git clone https://github.com/EnocDE/rental-cars.git`
2. Instala las dependencias del proyecto `npm install`
3. Crea el archivo .env y agrega las siguientes variables de entorno:
```
NEXT_PUBLIC_FRONTEND_STORE_URL = http://localhost:3000
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = yourClerkPublishableKey
CLERK_SECRET_KEY = yourClerkSecretKey

NEXT_PUBLIC_CLERK_SIGN_IN_URL = /sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL = /sign-up

DATABASE_URL = yourDatabaseUrl

UPLOADTHING_SECRET = yourUploadthingUrl
UPLOADTHING_APP_ID = yourUploadthingId

STRIPE_API_KEY = yourStripeapiKey
STRIPE_SECRET_KEY = yourStripeSecretKey
```
4. Inicia el servidor de pruebas `npm run dev`
