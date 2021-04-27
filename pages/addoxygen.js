import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
	Text,
	Input,
	FormLabel,
	Box,
	Heading,
	Button,
	Textarea,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
} from "@chakra-ui/react";

const addoxygen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [litre, setLitre] = useState("");
	const [location, setLocation] = useState("");
	const [description, setDescription] = useState("");
	const { isOpen, onOpen, onClose } = useDisclosure();

	const router = useRouter();

	const floor = (x) => Math.round(Math.floor(x));

	const handlePost = (event) => {
		event.preventDefault();
		if (phoneNumber.length !== 10) {
			alert("Invalid phone number");
			return;
		}
		if (location.indexOf(",") < 0) {
			alert(
				"Invalid location. Please separate district and state with a comma (,)"
			);
			return;
		}
		if (password.length < 6) {
			alert("Password should atleast be 6 characters long");
			return;
		}
		fetch("/api/addRecord", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				email,
				password,
				phoneNumber,
				name,
				price_per_litre: floor(floor(price) / floor(litre)),
				location,
				description,
			}),
		})
			.then((res) => res.json)
			.then((data) => {
				console.log(data);
				router.push("/thanks");
			});
		console.log(email, phoneNumber, name, price, litre, location, description);
	};

	useEffect(() => {
		router.prefetch("/thanks");
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		onOpen();
	};

	return (
		<div>
			<Box
				pb="50px"
				maxW="600px"
				mx="auto"
				as="div"
				minHeight="100vh"
				color="black"
				bg="white"
				pt="100px"
				px="40px">
				<Heading fontWeight="extrabold" mb="50px">
					Please fill out this Form to add a new{" "}
					<Box
						as="div"
						display="inline-block"
						bgClip="text"
						color="transparent"
						bgGradient="linear(to-r, blue.600, green.300)">
						Oxygen
					</Box>{" "}
					source
				</Heading>

				<form mt="50px" onSubmit={handleSubmit}>
					<FormLabel>Email address</FormLabel>
					<Input
						type="email"
						mb="30px"
						isRequired
						placeholder="Eg. modi@india.com"
						onChange={(e) => setEmail(e.target.value)}
					/>
					{/* ----- */}
					<FormLabel>Password</FormLabel>
					<Text fontSize="sm" color="gray.500">
						A password is required to edit the post in future
					</Text>
					<Input
						type="password"
						mb="30px"
						isRequired
						placeholder="A strong password please"
						autoComplete="current-password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					{/* ----- */}
					<FormLabel>Phone/Contact Number</FormLabel>
					<Input
						type="number"
						isRequired
						mb="30px"
						placeholder="9999999999"
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
					{/* ----- */}
					<FormLabel>Name</FormLabel>
					<Input
						type="text"
						isRequired
						mb="30px"
						placeholder="Narendra Modi"
						onChange={(e) => setName(e.target.value)}
					/>
					{/* ----- */}
					{/* <Box display="flex" flexDirection="row" alignItems="center" mb="30px"> */}
					<FormLabel>Price (in ₹)</FormLabel>
					<Input
						type="text"
						isRequired
						w="90px"
						placeholder="300"
						mb="5px"
						onChange={(e) => setPrice(e.target.value)}
					/>
					{/* ----- */}
					<FormLabel>Per </FormLabel>
					<Input
						type="text"
						isRequired
						w="90px"
						placeholder="20"
						mb="5px"
						onChange={(e) => setLitre(e.target.value)}
					/>
					<p style={{ paddingBottom: 35, fontWeight: "semibold" }}>litres</p>
					{/* </Box> */}
					<FormLabel>District, State</FormLabel>
					<Input
						type="text"
						isRequired
						mb="30px"
						placeholder="Pune, Maharashtra"
						onChange={(e) => setLocation(e.target.value)}
					/>
					{/* ----- */}
					<FormLabel>Description (optional)</FormLabel>
					<Textarea
						placeholder="2000 litres of oxygen remaining more...."
						mb="30px"
						onChange={(e) => setDescription(e.target.value)}
					/>
					{/* ----- */}
					<Button
						as="button"
						type="submit"
						w="full"
						bg="black"
						color="white"
						border="2px"
						_hover={{ bg: "white", color: "black" }}>
						Post
					</Button>
				</form>
			</Box>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>SMALL AGREEMENT</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Heading fontSize="xl" fontWeight="bold" color="red">
							Please agree to the condition below 👇
						</Heading>
						<Text>
							By submitting the form, I agree as well as promise that I am not
							providing any fake data and thereby not playing with the lives of
							people.
						</Text>
					</ModalBody>

					<ModalFooter>
						{/* <NextLink href="/thanks?subject=oxygen"> */}
						<Button
							as="button"
							bg="black"
							color="white"
							mr={3}
							onClick={handlePost}>
							<a>I AGREE 👍</a>
						</Button>
						{/* </NextLink> */}
						<NextLink href="/">
							<Button variant="ghost">I do not agree 👎</Button>
						</NextLink>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default addoxygen;
