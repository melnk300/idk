-- CreateEnum
CREATE TYPE "AttachmentState" AS ENUM ('BEFORE', 'AFTER');

-- AlterTable
ALTER TABLE "Attachment" ADD COLUMN     "state" "AttachmentState" NOT NULL DEFAULT E'BEFORE';
