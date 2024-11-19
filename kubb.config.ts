import {defineConfig}  from '@kubb/core'
import {pluginOas}  from '@kubb/plugin-oas'
import {pluginTs}  from '@kubb/plugin-ts'

export default defineConfig({
  root: '.',
  input: {
    path: 'docs/main.yml'
  },
  output: {
    path: 'generated/',
    barrelType: 'all',
    extension: {
      '.ts': ''
    },
    clean: true
  },
  plugins: [
    pluginOas({
      generators: [],
    }),
    pluginTs({
      output: {
        path: "./types.ts",
        barrelType: 'propagate'
      },
      enumSuffix: ''
    })
  ]
})