import { Box, Heading, Flex, Spacer, Button, Text } from "@chakra-ui/react";
import OxygenCard from "../components/OxygenCard";
import NextLink from "next/link";

export async function getStaticProps() {
	const res = await fetch("https://iwantoxygen.vercel.app/api/allRecords");
	const records = await res.json();

	return {
		props: {
			records,
		},
		revalidate: 900, // In seconds
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
						Oxygen suppliers
					</Heading>
					<Spacer />
					<NextLink href="/addoxygen">
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
						price_per_litre,
						address,
						desc,
						created_at,
					}) => {
						return (
							<OxygenCard
								key={id}
								email={email}
								name={name}
								phoneNumber={phone_number}
								pricePerLitre={price_per_litre}
								address={address}
								desc={desc}
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
