import fs from 'fs'
import type { Plugin } from 'vite'
export default function vitePluginLibInsertUnocss(): Plugin {
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
