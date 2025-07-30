-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_registration_id_fkey";

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_registration_id_fkey" FOREIGN KEY ("registration_id") REFERENCES "registration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
