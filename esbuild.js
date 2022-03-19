(function() {
  const mode = process.argv.splice(2)[0]

  const configBase = {
    outfile: './public/app.js',
    bundle: true,
    entryPoints: ['src/app.ts'],
    target: 'ES5'
  }

  const start = (config) => {
    require('esbuild')
      .build(config)
      .then(() => {
        if (config.watch) {
          console.log('watching...')
        } else {
          console.log('done!')
        }
      })
  }

  if (mode === 'development') {
    start({
      ...configBase,
      watch: true,
      sourcemap: true
    })
  } else {
    start({
      ...configBase,
      sourcemap: true
    })
  }
})();
