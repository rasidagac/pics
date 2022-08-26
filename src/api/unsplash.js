import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID nWQ6zhQSb1g1LmgEZgu9hG27SrnXFfxmeiI7X_eBnMM",
	},
});
