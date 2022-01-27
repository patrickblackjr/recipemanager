-- CreateTable
CREATE TABLE "Instruction" (
    "id" SERIAL NOT NULL,
    "recipeId" INTEGER NOT NULL,

    CONSTRAINT "Instruction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Instruction" ADD CONSTRAINT "Instruction_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
