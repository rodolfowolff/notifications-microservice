-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "category" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "readAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Notification_recipientId_idx" ON "Notification"("recipientId");
