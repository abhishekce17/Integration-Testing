docker compose up -d
echo "Waiting for DB ready for connection"
bash ./scripts/wait-for-it.sh "postgresql://postgres:mysecretpassword@localhost:5432/postgres"
echo "DB is ready for connection"
npx prisma migrate dev --name init
npm run test
docker compose down
