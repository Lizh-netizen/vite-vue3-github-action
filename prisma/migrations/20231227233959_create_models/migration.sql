-- CreateTable
CREATE TABLE "courses" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "subTitle" TEXT,
    "url" TEXT,
    "coverId" INTEGER NOT NULL,
    "author" INTEGER NOT NULL,
    "originPrice" INTEGER,
    "price" INTEGER,
    "status" INTEGER NOT NULL DEFAULT 0,
    "counts" INTEGER DEFAULT 0,
    "desc" TEXT,
    "module" TEXT,
    "type" TEXT,
    "detail" TEXT,
    "order" INTEGER NOT NULL DEFAULT 1000,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courses_contents" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "author" INTEGER NOT NULL,
    "pid" INTEGER,
    "status" INTEGER NOT NULL DEFAULT 0,
    "counts" INTEGER DEFAULT 0,
    "tagId" TEXT[],
    "type" TEXT,
    "detail" TEXT,
    "order" INTEGER NOT NULL DEFAULT 1000,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "courses_contents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attachments" (
    "id" SERIAL NOT NULL,
    "type" TEXT,
    "location" TEXT NOT NULL,
    "name" TEXT,
    "ossType" TEXT,
    "usersId" INTEGER NOT NULL,
    "status" INTEGER,
    "desc" TEXT,
    "order" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attachments_attributes" (
    "id" SERIAL NOT NULL,
    "attachmentId" INTEGER NOT NULL,
    "attributeId" INTEGER NOT NULL,
    "value" TEXT,
    "desc" TEXT NOT NULL,
    "order" INTEGER,

    CONSTRAINT "attachments_attributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dict_attachments_attributes" (
    "id" SERIAL NOT NULL,
    "type" TEXT,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "dict_attachments_attributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dict_course_tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "typeId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 1000,
    "status" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "dict_course_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dict_course_types" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "order" INTEGER NOT NULL DEFAULT 1000,
    "status" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "dict_course_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courses_on_tags" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "courses_on_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "pid" INTEGER,
    "userId" INTEGER NOT NULL,
    "content" TEXT,
    "hands" INTEGER NOT NULL DEFAULT 0,
    "status" INTEGER NOT NULL DEFAULT 1,
    "isBest" INTEGER NOT NULL DEFAULT 0,
    "author" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courses_comments" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER NOT NULL,
    "commentId" INTEGER NOT NULL,

    CONSTRAINT "courses_comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contents_comments" (
    "id" SERIAL NOT NULL,
    "contentId" INTEGER NOT NULL,
    "commentId" INTEGER NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "contents_comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "courses_coverId_key" ON "courses"("coverId");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_author_fkey" FOREIGN KEY ("author") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_coverId_fkey" FOREIGN KEY ("coverId") REFERENCES "attachments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses_contents" ADD CONSTRAINT "courses_contents_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses_contents" ADD CONSTRAINT "courses_contents_pid_fkey" FOREIGN KEY ("pid") REFERENCES "courses_contents"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attachments" ADD CONSTRAINT "attachments_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attachments_attributes" ADD CONSTRAINT "attachments_attributes_attachmentId_fkey" FOREIGN KEY ("attachmentId") REFERENCES "attachments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attachments_attributes" ADD CONSTRAINT "attachments_attributes_attributeId_fkey" FOREIGN KEY ("attributeId") REFERENCES "dict_attachments_attributes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dict_course_tags" ADD CONSTRAINT "dict_course_tags_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "dict_course_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses_on_tags" ADD CONSTRAINT "courses_on_tags_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses_on_tags" ADD CONSTRAINT "courses_on_tags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "dict_course_tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_pid_fkey" FOREIGN KEY ("pid") REFERENCES "Comments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses_comments" ADD CONSTRAINT "courses_comments_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses_comments" ADD CONSTRAINT "courses_comments_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contents_comments" ADD CONSTRAINT "contents_comments_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "courses_contents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contents_comments" ADD CONSTRAINT "contents_comments_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
