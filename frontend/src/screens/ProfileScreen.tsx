import {
  Stack,
  SimpleGrid,
  Box,
  Image,
  Center,
  Heading,
  Text,
  StatNumber,
  Stat,
  Divider,
  Select,
  Flex,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export const ProfileScreen = () => {
  return (
    <>
      <SimpleGrid columns={[1, 1, 2]} spacing={10} m={10}>
        <Box w="100%" p={4} color="white">

        <Heading mb={4} color="green" fontWeight={700}>User Profile</Heading>
          <FormControl id="name" color="green" mt={3}>
            <FormLabel>Name</FormLabel>
            <Input type="email" />
          </FormControl>

          <FormControl id="email" color="green" mt={3}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>

          <FormControl id="password" color="green" mt={3}>
            <FormLabel>Password</FormLabel>
            <Input type="email" />
          </FormControl>

          <Button mt={4} colorScheme="teal" type="submit">
            Update
          </Button>
        </Box>

        <Box  w="100%" p={4} color="white">
        <Heading mb={4} color="green" fontWeight={700}>My orders</Heading>

        <Table variant="simple">
  <TableCaption>Imperial to metric conversion factors</TableCaption>
  <Thead>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th isNumeric>multiply by</Th>
    </Tr>
  </Thead>
  <Tbody color="black">
    <Tr>
      <Td>inches</Td>
      <Td>millimetres (mm)</Td>
      <Td isNumeric>25.4</Td>
    </Tr>
    <Tr>
      <Td>feet</Td>
      <Td>centimetres (cm)</Td>
      <Td isNumeric>30.48</Td>
    </Tr>
    <Tr>
      <Td>yards</Td>
      <Td>metres (m)</Td>
      <Td isNumeric>0.91444</Td>
    </Tr>
  </Tbody>
  <Tfoot>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th isNumeric>multiply by</Th>
    </Tr>
  </Tfoot>
</Table>



        </Box>
        
      </SimpleGrid>
    </>
  );
};
