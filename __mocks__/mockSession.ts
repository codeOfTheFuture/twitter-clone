export const mockSession = {
	user: {
		name: "John Doe",
		email: "john.doe@example.com",
		image: "https://example.com/avatar.png",
	},
	accessToken: "mock_access_token",
	expires: (new Date().getTime() + 30).toLocaleString(),
};
