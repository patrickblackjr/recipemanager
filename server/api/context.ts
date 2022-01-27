import { PrismaClient } from '@prisma/client'

export interface Context {
  db: PrismaClient
}

export const db = new PrismaClient()

export const context = {
  db,
}
