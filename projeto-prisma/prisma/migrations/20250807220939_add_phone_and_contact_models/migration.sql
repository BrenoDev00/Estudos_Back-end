-- CreateTable
CREATE TABLE "public"."phone" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(54) NOT NULL,
    "number" TEXT NOT NULL,
    "contact_id" TEXT NOT NULL,

    CONSTRAINT "phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."street" (
    "id" TEXT NOT NULL,
    "street" VARCHAR(64) NOT NULL,
    "zip_code" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "contact_id" TEXT NOT NULL,

    CONSTRAINT "street_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "street_contact_id_key" ON "public"."street"("contact_id");

-- AddForeignKey
ALTER TABLE "public"."phone" ADD CONSTRAINT "phone_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "public"."contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."street" ADD CONSTRAINT "street_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "public"."contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
