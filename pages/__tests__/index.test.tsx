import { render } from "@testing-library/react";
import Home from "../index";
import * as nextAuthReact from "next-auth/react";
import { UseSessionOptions } from "next-auth/react";
import { SessionProvider } from "next-auth/react";

jest.mock("next-auth/react");
const nextAuthReactMocked = nextAuthReact as jest.Mocked<typeof nextAuthReact>;

nextAuthReactMocked.useSession.mockImplementation(
  (_options?: UseSessionOptions<boolean> | undefined) => {
    return { data: null, status: "loading" };
  }
);

const { data: session } = nextAuthReactMocked.useSession();

describe("Home page", () => {
  test("renders home component without crashing", () => {
    render(
      <SessionProvider session={session}>
        <Home tweets={[]} />
      </SessionProvider>
    );
  });
});
