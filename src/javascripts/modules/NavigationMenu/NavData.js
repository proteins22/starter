export const NavData = [
	{
		"text": "Home",
		"url": "/"
	},
	{
		"text": "About",
		"url": "/about",
		"submenu": [
			{
				"text": "Sublink 1",
				"url": "/about/about1",
				"submenu": [
					{
						"text": "SubSublink 1",
						"url": "/about/about1/about3"
					}
				]
			},
			{
				"text": "Sublink 2",
				"url":"/about/about2",
				"submenu": [
					{
					"text": "SubSublink 2",
					"url": "/about/about2/about3"
					}
				]
			}
		]
	},
	{
		"text": "Contact",
		"url": "/contact"
	}
]