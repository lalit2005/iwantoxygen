import NextLink from "next/link";
import {
	Box,
	Center,
	Heading,
	Text,
	Link,
	Flex,
	Image,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
} from "@chakra-ui/react";

export default function Home() {
	return (
		<Box
			as="div"
			minHeight="100vh"
			color="black"
			bg="white"
			pt="100px"
			pb="200px"
			textAlign="center"
			px="10px">
			<Flex direction="column">
				<Image src="/covid-19.svg" alt="" w="150px" mx="auto" mb="40px" />

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
			<Accordion
				allowToggle
				as="div"
				maxW="xl"
				mx="auto"
				mt="80px"
				textAlign="left">
				<Heading mb="20px">FAQs</Heading>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box flex="1" textAlign="left">
								Is this website official
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						No. This is not an official website. It's made by{" "}
						<Link color="blue.600" href="https://github.com/lalit2005">
							Lalit
						</Link>
						, a 10th grade student from Bangalore, Karnataka, India
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box flex="1" textAlign="left">
								Is this website open source
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						No. This website is not open source currently.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box flex="1" textAlign="left">
								Is the data on this website reliable?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						However I regularly check the data posted on this website, some data
						might be untrue. So please do verify once before talking any
						decisions. Report any fake data{" "}
						<Link color="blue.700" href="https://tally.so/r/m6e4Yn">
							here
						</Link>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box flex="1" textAlign="left">
								How frequently is the data updated on the website
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						The data on the website is updated every 5 minutes.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Box>
	);
}
