import { render } from "@testing-library/react";
import IndexPage from "../index";

describe("IndexPage", () => {
	it("renders without crashing", () => {
		render(<IndexPage />);
	});
});
