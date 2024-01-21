-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "churchId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Members" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "memberCode" VARCHAR(255) NOT NULL,
    "churchId" INTEGER NOT NULL,

    CONSTRAINT "Members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Churches" (
    "id" SERIAL NOT NULL,
    "churchName" VARCHAR(255) NOT NULL,
    "churchCode" VARCHAR(255) NOT NULL,

    CONSTRAINT "Churches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entries" (
    "id" SERIAL NOT NULL,
    "memberId" INTEGER NOT NULL,
    "churchId" INTEGER NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "payment" VARCHAR(255) NOT NULL,
    "cash" JSONB,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Entries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Members_memberCode_key" ON "Members"("memberCode");

-- CreateIndex
CREATE UNIQUE INDEX "Churches_churchCode_key" ON "Churches"("churchCode");

-- CreateIndex
CREATE UNIQUE INDEX "Entries_memberId_key" ON "Entries"("memberId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_churchId_fkey" FOREIGN KEY ("churchId") REFERENCES "Churches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Members" ADD CONSTRAINT "Members_churchId_fkey" FOREIGN KEY ("churchId") REFERENCES "Churches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entries" ADD CONSTRAINT "Entries_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entries" ADD CONSTRAINT "Entries_churchId_fkey" FOREIGN KEY ("churchId") REFERENCES "Churches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
