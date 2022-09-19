import fs from 'fs'
export default function vitePluginLibInsertUnocss() {
  return {
    name: 'vite-plugin-lib-insert-unocss',
    writeBundle(options: any, bundle: any) {
      const name = options.entryFileNames
      const dirname = `${options.dir}/${name}`
      const { code } = bundle[name]
      fs.writeFile(dirname, `// @unocss-include
${code}`, (err: any) => {
        if (err)
          throw err
      })
    },
  }
}
