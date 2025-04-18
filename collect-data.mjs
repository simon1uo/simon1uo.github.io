import fs from 'node:fs/promises'
import glob from 'fast-glob'
import matter from 'gray-matter'

function _convertDate(date = new Date().toString()) {
  const json_date = new Date(date).toJSON()
  return json_date.split('T')[0]
}

; (async () => {
  const articleData = await Promise.all(
    glob
      .sync('./docs/**/*.md', {
        onlyFiles: true,
        objectMode: true,
        ignore: [
          './docs/**/index.md',
          './docs/**/tags.md',
          './docs/**/archive.md',
          './docs/**/about.md',
        ],
      })
      .map(async (article) => {
        const file = matter.read(`${article.path}`)
        const { data, path } = file
        data.date = _convertDate(data.date)
        return {
          ...data,
          path: path.replace(/\.md$/, '.html').replace('./docs/', ''),
        }
      }),
  )

  await fs.writeFile(
    './docs/.vitepress/post-data.json',
    JSON.stringify(articleData),
    'utf-8',
  )
})()
