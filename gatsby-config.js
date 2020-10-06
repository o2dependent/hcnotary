module.exports = {
	siteMetadata: {
		title: `Ethan Olsen`,
		description: `Ethan Olsen's freelance web development portfolio site. High end and affordable web development and design in the Pacific Northwest.`,
		author: `Ethan Olsen`,
		siteUrl: `https://eolsen.dev`,
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
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'image',
				path: `${__dirname}/static/img`,
			},
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				// Available options and their defaults:
				base64Width: 20,
				forceBase64Format: ``, // valid formats: png,jpg,webp
				useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
				stripMetadata: true,
				defaultQuality: 50,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-remark-images`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/pages`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-styled-components`,
		},
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-netlify`, // Must be last
	],
}
