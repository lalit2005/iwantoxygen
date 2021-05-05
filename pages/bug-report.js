const { Heading, Button, Box } = require("@chakra-ui/react");
import NextLink from "next/link";

const bugReport = () => {
	return (
		<Box textAlign="center" mt="100px">
			<Heading>Thanks for reporting!!</Heading>
			<NextLink href="/">
				<Button my="30px">Go Home</Button>
			</NextLink>
		</Box>
	);
};

export default bugReport;
