export const NavData = [
	{
		"text": "Home",
		"url": "/"
	},
	{
		"text": "About",
		"url": "/about"
	},
	{
		"text": "Topics",
		"url": "/topics",
		"submenu": [
			{
				"text": "Sublink 1",
				"url": "#",
				"submenu": [
					{
						"text": "SubSublink 1",
						"url": "#"
					}
				]
			},
			{
				"text": "Sublink 2",
				"url":"#",
				"submenu": [
					{
					"text": "SubSublink 2",
					"url": "#"
					}
				]
			}
		]
	}
]