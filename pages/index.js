import NextLink from "next/link";
import {
	Box,
	Center,
	Heading,
	Text,
	Link,
	Flex,
	Image,
} from "@chakra-ui/react";

export default function Home() {
	return (
		<Box
			as="div"
			minHeight="100vh"
			color="black"
			bg="white"
			pt="100px"
			textAlign="center"
			px="10px">
			<Flex direction="column">
				<Image
					src="https://www.un.org/sites/un2.un.org/files/covid-19.svg"
					alt=""
					w="150px"
					mx="auto"
					mb="40px"
				/>

				<Heading fontWeight="black" fontSize="5xl" as="h1">
					Save lives from COVID-19
				</Heading>
			</Flex>
			<Center>
				<Text as="div" fontSize="lg">
					By providing oxygen and beds for the people who are in need
				</Text>
			</Center>

			<Flex mt="50px" flexWrap="wrap" justify="center" gridGap="10px">
				<NextLink href="/addoxygen">
					<Link
						textDecoration="none"
						py="10px"
						px="8px"
						rounded="10px"
						border="2px"
						borderColor="black"
						fontSize="20px"
						fontWeight="semibold"
						color="black"
						bg="white"
						transition="ease-in"
						transitionDuration="0.2s"
						_hover={{ bg: "black", color: "white" }}>
						I have oxygen ⛽️
					</Link>
				</NextLink>
				<NextLink href="/oxygen">
					<Link
						textDecoration="none"
						py="10px"
						px="8px"
						rounded="10px"
						border="2px"
						borderColor="black"
						fontSize="20px"
						fontWeight="semibold"
						color="black"
						bg="white"
						transition="ease-in"
						transitionDuration="0.2s"
						_hover={{ bg: "black", color: "white" }}>
						View Oxygen suppliers ⛽️
					</Link>
				</NextLink>
			</Flex>
			<Box mt="50px" w="60%" mx="auto" h="2px" bg="blackAlpha.300" />
			<Flex mt="50px" flexWrap="wrap" justify="center" gridGap="10px">
				<NextLink href="/addbed">
					<Link
						textDecoration="none"
						py="10px"
						px="8px"
						rounded="10px"
						border="2px"
						borderColor="black"
						fontSize="20px"
						fontWeight="semibold"
						color="black"
						bg="white"
						transition="ease-in"
						transitionDuration="0.2s"
						_hover={{ bg: "black", color: "white" }}>
						I have a bed 🛌
					</Link>
				</NextLink>
				<NextLink href="/bed">
					<Link
						textDecoration="none"
						py="10px"
						px="8px"
						rounded="10px"
						border="2px"
						borderColor="black"
						fontSize="20px"
						fontWeight="semibold"
						color="black"
						bg="white"
						transition="ease-in"
						transitionDuration="0.2s"
						_hover={{ bg: "black", color: "white" }}>
						View available beds 🛏
					</Link>
				</NextLink>
			</Flex>
		</Box>
	);
}
