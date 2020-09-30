module.exports = {
	siteMetadata: {
		title: `Michaela Archie`,
		description: `Michaela Archie Portfolio site`,
		author: `Ethan Olsen`,
		siteUrl: `https://olsen-test.netlify.app/`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown`,
				path: `${__dirname}/src/markdown`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-styled-components`,
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				// CommonMark mode (default: true)
				commonmark: true,
				// Footnotes mode (default: true)
				footnotes: true,
				// Pedantic mode (default: true)
				pedantic: true,
				// GitHub Flavored Markdown mode (default: true)
				gfm: true,
				// Plugins configs
				plugins: [],
			},
		},
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-netlify`, // Must be last
	],
}
