import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { SessionProvider, useSession } from "next-auth/react";
import IndexPage from "../pages/index";

const mockSession = {
	user: {
		name: "John Doe",
		email: "john.doe@example.com",
		image: "https://example.com/avatar.png",
	},
	accessToken: "mock_access_token",
	expires: (new Date().getTime() + 30).toLocaleString(),
};

jest.mock("next-auth/react", () => ({
	...jest.requireActual("next-auth/react"),
	useSession: jest.fn(),
}));

describe("IndexPage", () => {
	it("renders without crashing", async () => {
		(useSession as jest.Mock).mockReturnValue([mockSession, false]);

		await act(async () => {
			render(
				<SessionProvider session={mockSession}>
					<IndexPage tweets={[]} />
				</SessionProvider>
			);
		});
	});
});
