import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "w8nlqrwa",
	dataset: "production",
	useCdn: true,
});
