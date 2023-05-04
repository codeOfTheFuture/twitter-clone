import { act, render } from "@testing-library/react";
import IndexPage from "../pages/index";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

describe("IndexPage", () => {
	const session = {} as Session;

	it("renders without crashing", async () => {
		await act(() => {
			render(
				<SessionProvider session={session}>
					<IndexPage tweets={[]} />
				</SessionProvider>
			);
		});
	});
});
