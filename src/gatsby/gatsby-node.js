const path = require('path');
const json = require('./src/data/Resume.json')

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ actions }) => {
      const { createPage } = actions
      const templatePage = path.resolve(`src/templates/page.js`)

      // Create page for / to default language/default section

      const defaultLang = Object.keys(json)[0]
      const defaultSection = Object.keys(json[defaultLang].data)[0]
      console.log("Creating Index")
      const index = await createPage({
        path:`/`,
        component: templatePage,
        context: {
          lang:defaultLang,
          meta:json[defaultLang].meta,
          section:defaultSection,
          canonical:`/${defaultLang}/${defaultSection.toLowerCase()}`,
          data:json[defaultLang].data[defaultSection]
        },
      });
      console.log(index)

      // Create pages for each lang.
      const langs = Object.keys(json)
      langs.forEach(( lang ) => {
        const path = lang.toLowerCase()
        const meta = json[lang].meta
        const data = json[lang].data

        //Creating page for /en and /fr + add canonical ref

        const defaultSection = Object.keys(data)[0];
        createPage({
          path:`/${path}`,
          component: templatePage,
          context: {
            lang,
            meta,
            section:defaultSection,
            canonical:`/${path}/${defaultSection.toLowerCase()}`,
            data:data[defaultSection]
          },
        })

        Object.keys(data).forEach((section)=>{
          createPage({
            path:`/${path}/${section.toLowerCase()}`,
            component: templatePage,
            context: {
              lang,
              meta,
              section,
              canonical:`/${path}/${section.toLowerCase()}`,
              data:data[section]
            },
          })
        })
    })
}