const path = require('path');
const json = require('./src/data/Resume.json')

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions }) => {
  const { createPage } = actions
    const templateLang = path.resolve(`src/templates/lang.js`)
    const templatePage = path.resolve(`src/templates/page.js`)

    // Create pages for each markdown file.
    const langs = Object.keys(json)
    console.log("generating",langs)
    langs.forEach(( lang ) => {
      const path = lang.toLowerCase()
      const meta = json[lang].meta
      const data = json[lang].data
      createPage({
        path,
        component: templateLang,
        context: {
          lang,
          meta,
          sections:data
        },
      })

      Object.keys(data).forEach((section)=>{
        createPage({
          path:`${path}/${section.toLowerCase()}`,
          component: templatePage,
          context: {
            lang,
            meta,
            section,
            data:data[section]
          },
        })
      })

    })
}