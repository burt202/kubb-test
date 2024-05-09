const {defineConfig} = require('@kubb/core')

module.exports = defineConfig(() => {
  return {
    root: '.',
    input: {
      path: 'docs/main.yml'
    },
    output: {
      path: 'generated/',
      clean: true
    },
    plugins: [
      [
        '@kubb/swagger',
        {
          output: false
        }
      ],
      [
        '@kubb/swagger-zod',
        {
          output: {
            path: './zod.ts'
          }
        }
      ],
      [
        '@kubb/swagger-ts',
        {
          output: {
            path: './types.ts'
          }
        }
      ],
    ]
  }
})