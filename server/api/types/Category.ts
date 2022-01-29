import { objectType, extendType, stringArg, nonNull, intArg } from 'nexus'
import { Context } from '../context'

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.int('id')
    t.string('title')
    t.string('description')
  },
})
