import "@fontsource/inter/variable.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Head>
				<title>Find oxygen and bed sources near you</title>
				<meta property="og:url" content="https://iwantoxygen.vercel.app/" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Find oxygen and bed sources near you with ease."
				/>
				<meta
					property="twitter:description"
					content="Find oxygen and bed sources near you with ease. Help others by adding new data about sources for beds and oxygen"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@lalitcodes" />
				<meta
					property="og:description"
					content="Hurray!! Yes Social Media Preview is Working"
				/>
				<meta
					property="og:image"
					content="https://cdn.hashnode.com/res/hashnode/image/upload/v1620285991254/6K4ttpoQxV.png"
				/>
				<meta
					name="twitter:image"
					content="https://cdn.hashnode.com/res/hashnode/image/upload/v1620285991254/6K4ttpoQxV.png"
				/>
				<meta name="twitter:url" content="https://iwantoxygen.vercel.app/" />
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
