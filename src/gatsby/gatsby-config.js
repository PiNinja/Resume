const protocol = process.env.PROTOCOL || 'http'
const domain = process.env.DOMAIN || 'localhost'


module.exports = {
    siteMetadata:{
        title: 'Resume',
        siteUrl: `${protocol}://${domain}`,
        description: 'My Resume online',
        image: '/android-chrome-512x512.png'
    },
    plugins:[`gatsby-plugin-sass`,`gatsby-plugin-react-helmet`]
}