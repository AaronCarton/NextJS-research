A twitter clone using NextJS' [app router](https://nextjs.org/docs/getting-started/react-essentials) & React [server components](https://nextjs.org/docs/getting-started/react-essentials)

## Getting Started

First, create the `.env` file:
```env
GITHUB_ID=<id>
GITHUB_SECRET=<secret>
NEXTAUTH_SECRET=<some-secret-phrase>
NEXTAUTH_URL=http://localhost:3005
MONGODB_URI=mongodb://localhost:27008/next_app
```
For more info on how to get `GITHUB_ID` & `GITHUB_SECRET`, see [https://authjs.dev/getting-started/oauth-tutorial#2-configuring-oauth-provider](https://authjs.dev/getting-started/oauth-tutorial#2-configuring-oauth-provider)
the callback URL will be `http://localhost:3005/api/auth/callback/github`

Then, launch the mongodb docker container in `docker-compose.yml`

Lastly run the development server:

```bash
npm run dev
```
Open [http://localhost:3005](http://localhost:3005) with your browser


Or the production server:
```bash
npm run build

npm run start
```
and open [http://localhost:8080](http://localhost:8080) to see the result.
