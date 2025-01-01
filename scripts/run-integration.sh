docker compose up -d
echo "Waiting for DB ready for connection"
./scripts/wait-for-it.sh "postgresql://postgres:mysecretpassword@localhost:5432/postgres"
echo "DB is ready for connection"
npx prisma migrate dev --name init
npm run test