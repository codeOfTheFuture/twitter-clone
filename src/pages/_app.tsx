import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import ModalProvider from "@/src/contexts/ModalContext";

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
	return (
		<SessionProvider session={session}>
			<ModalProvider>
				<Component {...pageProps} />;
			</ModalProvider>
		</SessionProvider>
	);
};

export default MyApp;
