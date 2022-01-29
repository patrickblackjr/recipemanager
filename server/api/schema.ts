import { makeSchema, asNexusMethod } from 'nexus'
import { DateTimeResolver } from 'graphql-scalars'
import { join } from 'path'
import * as types from './types'

const DateTime = asNexusMethod(DateTimeResolver, 'DateTime')

export const schema = makeSchema({
  types: [types, DateTime],
  shouldGenerateArtifacts: process.env.NODE_ENV === 'dev',
  outputs: {
    typegen: join(__dirname, '../node_modules/@types/nexus-typegen/index.d.ts'),
  },
  contextType: {
    module: join(__dirname, './context'),
    export: 'Context',
  },
})
