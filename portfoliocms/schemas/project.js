export default {
	name: "projects",
	title: "Projects",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "projectPicture",
			title: "Project Picture",
			type: "image",
			options: { hotspot: true },
		},
		{
			name: "skills",
			title: "Skills",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "description",
			title: "Description",
			type: "blockContent",
		},
		{
			name: "githubLink",
			title: "Github Link",
			type: "string",
		},
		{
			name: "liveLink",
			title: "Live Link",
			type: "string",
		},
		{
			name: "featured",
			title: "Featured",
			type: "boolean",
		},
		{
			name: "order",
			title: "Order",
			type: "number",
		},
		{
			name: "type",
			title: "Type",
			type: "string",
			options: {
				list: [
					{ title: "Project", value: "project" },
					{ title: "Freelance", value: "freelance" },
				],
				layout: "dropdown",
			},
		},
	],
};
