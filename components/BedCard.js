import { Box, Text } from "@chakra-ui/layout";

const OxygenCard = ({
  email,
  name,
  number_of_beds,
  address,
  desc,
  createdAt,
}) => {
  return (
    <Box
      as="div"
      mb="30px"
      mx="auto"
      px="5px"
      py="20px"
      bgColor="#f9fbfc"
      border="1px"
      borderColor="black"
      rounded="10px"
      shadow="md"
      w="350px"
      h="200px"
      overflow="scroll"
    >
      <Box mx="10px" overflow="scroll" my="auto">
        <Box mb="8px">
          <Text
            as="p"
            display="inline-block"
            fontWeight="semibold"
            mr="5px"
            bgColor="pink.100"
          >
            EMAIL:{" "}
          </Text>
          <Text as="p" display="inline-block">
            {email}
          </Text>
        </Box>
        <Box mb="8px">
          <Text
            as="p"
            display="inline-block"
            fontWeight="semibold"
            mr="5px"
            bgColor="pink.100"
          >
            NAME:{" "}
          </Text>
          <Text as="p" display="inline-block">
            {name}
          </Text>
        </Box>
        <Box mb="8px">
          <Text
            as="p"
            display="inline-block"
            fontWeight="semibold"
            mr="5px"
            rounded="sm"
            bgColor="pink.100"
          >
            No. of BEDS:{" "}
          </Text>
          <Text as="p" display="inline-block">
            {number_of_beds}
          </Text>
        </Box>
        <Box mb="8px">
          <Text
            as="p"
            display="inline-block"
            fontWeight="semibold"
            mr="5px"
            rounded="sm"
            bgColor="pink.100"
          >
            ADDRESS:{" "}
          </Text>
          <Text as="p" display="inline-block">
            {address}
          </Text>
        </Box>
        <Box mb="8px">
          <Text
            as="p"
            display="inline-block"
            fontWeight="semibold"
            mr="5px"
            bgColor="pink.100"
          >
            DESCRIPTION:{" "}
          </Text>
          <Text as="p" display="inline-block">
            {desc}
          </Text>
        </Box>
        <Box bottom="0">
          <Text
            as="p"
            rounded="sm"
            bgColor="pink.100"
            display="inline-block"
            fontWeight="medium"
            mr="5px"
            fontSize="13px"
          >
            POSTED AT:{" "}
          </Text>
          <Text as="p" display="inline-block" fontSize="15px">
            {new Date(createdAt).toLocaleString().substring(0, 17) + " IST"}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default OxygenCard;
