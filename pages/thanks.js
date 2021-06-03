import NextLink from "next/link";
import { useRouter } from "next/router";
import { Heading, Box, Text, Button, Flex } from "@chakra-ui/react";

const Thanks = () => {
  const router = useRouter();
  const subject = router.query.subject;

  return (
    <Box textAlign="center" mt="60px" px="20px">
      <Heading fontWeight="extrabold">
        🎉🎉Thanks a lot for your contribution!!!🎉🎉
      </Heading>
      <Heading fontWeight="semibold" fontSize="xl" mt="20px">
        Your post has been successfully added to the database. It will appear on
        this website once it's verified...
      </Heading>
      <Text mt="20px">
        Anyone in need of {subject} may call you with the number you have
        provided(at any time).
      </Text>
      <NextLink href="/">
        <Button mt="30px" mx="10px">
          Go Home
        </Button>
      </NextLink>
      <NextLink href="/oxygen">
        <Button mt="30px" mx="10px">
          See all available oxygen suppliers
        </Button>
      </NextLink>
      <NextLink href="/bed">
        <Button mt="30px" mx="10px">
          See all available bed suppliers
        </Button>
      </NextLink>
    </Box>
  );
};

export default Thanks;
