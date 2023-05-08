import "@testing-library/jest-dom/extend-expect";

import { SessionProvider } from "next-auth/react";
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { mockSession } from "./__mocks__/mockSession";

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "queries">) => {
	return render(<SessionProvider session={mockSession}>{ui}</SessionProvider>, options);
};

export * from "@testing-library/react";

export { customRender as render };
