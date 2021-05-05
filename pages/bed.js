import { Box, Heading, Flex, Spacer, Button, Text } from "@chakra-ui/react";
import BedCard from "../components/BedCard";
import NextLink from "next/link";

export async function getStaticProps() {
	const res = await fetch("https://iwantoxygen.vercel.app/api/allBedRecords");
	const records = await res.json();

	return {
		props: {
			records,
		},
		revalidate: 300, // In seconds
	};
}

const oxygen = ({ records }) => {
	// console.table(records.data);
	return (
		<Box minHeight="100vh" mx="auto" overflowX="hidden">
			<Box as="nav" bg="black" position="fixed" zIndex="10" w="full">
				<Flex
					maxW="4xl"
					mx="auto"
					px={-500}
					color="white"
					flexWrap="wrap"
					py="10px"
					alignItems="center">
					<Heading fontSize="xl" ml="5px">
						<NextLink href="/">Bed suppliers</NextLink>
					</Heading>
					<Spacer />
					<NextLink href="/addbed">
						<Button color="black" mr="5px">
							Add +
						</Button>
					</NextLink>
				</Flex>
			</Box>
			<Flex wrap="wrap" mx="15px" maxW="4xl" mx="auto" mt="100px">
				{records.data.map(
					({
						id,
						email,
						phone_number,
						name,
						number_of_beds,
						address,
						description,
						created_at,
					}) => {
						return (
							<BedCard
								key={id}
								email={email}
								name={name}
								phoneNumber={phone_number}
								number_of_beds={number_of_beds}
								address={address}
								desc={description}
								createdAt={created_at}
							/>
						);
					}
				)}
				{/* <ol>
					{records.data.map((post) => {
						return (
							<li>
								{new Date(post.created_at).toLocaleString().substring(0, 17) +
									" IST"}
							</li>
						);
					})} */}
			</Flex>
		</Box>
	);
};

export default oxygen;
