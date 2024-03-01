-- CreateTable
CREATE TABLE "home_resources" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "subTitle" TEXT,
    "url" TEXT,
    "image" TEXT,
    "desc" TEXT,
    "module" TEXT NOT NULL DEFAULT 'home',
    "type" TEXT,
    "icon" TEXT,

    CONSTRAINT "home_resources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT,
    "name" TEXT,
    "type" INTEGER NOT NULL DEFAULT 0,
    "expired" TIMESTAMP(3) NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0,
    "phone" INTEGER NOT NULL DEFAULT 0,
    "email" TEXT,
    "password" TEXT,
    "unionId" TEXT NOT NULL,
    "openId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
