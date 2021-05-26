/*
  Warnings:

  - You are about to drop the `Coffee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Coffee";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "password" TEXT NOT NULL,
    "avatarURL" TEXT,
    "githubUsername" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.username_unique" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
