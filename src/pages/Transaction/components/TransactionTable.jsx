import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Text,
  Tag,
  Box,
  useBreakpointValue,
  Flex,
  Badge,
  Heading,
} from "@chakra-ui/react";

const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+₹81,123",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];

  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  const TableView = () => (
    <TableContainer w="100%" overflowX="auto">
      <Table variant="simple" colorScheme="gray" size={useBreakpointValue({ base: "sm", lg: "md" })}>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody color="p.black">
          {tableData.map((data) => (
            <Tr key={data.id}>
              <Td fontSize="sm" fontWeight="medium">
                {data.id}
              </Td>
              <Td>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.date}
                  </Text>
                  <Text fontSize="xs" color="black.60">
                    {data.time}
                  </Text>
                </Stack>
              </Td>
              <Td>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.type.name}
                  </Text>
                  {data.type?.tag && (
                    <Text fontSize="xs" color="black.60">
                      {data.type.tag}
                    </Text>
                  )}
                </Stack>
              </Td>
              <Td fontSize="sm" fontWeight="medium">
                {data.amount}
              </Td>
              <Td fontSize="sm" fontWeight="medium">
                <Tag
                  bg={statusColor[data.status]}
                  color="white"
                  borderRadius="full"
                  px={3}
                  py={1}
                >
                  {data.status}
                </Tag>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );

  const CardView = () => (
    <Stack spacing={4} w="100%">
      {tableData.map((data) => (
        <Box 
          key={data.id} 
          borderWidth="1px" 
          borderRadius="md" 
          p={4}
          shadow="sm"
        >
          <Flex justify="space-between" align="center" mb={3}>
            <Text fontSize="sm" fontWeight="bold">
              {data.id}
            </Text>
            <Tag
              bg={statusColor[data.status]}
              color="white"
              borderRadius="full"
              size="sm"
            >
              {data.status}
            </Tag>
          </Flex>
          
          <Stack spacing={2}>
            <Flex justify="space-between">
              <Text fontSize="xs" color="gray.500">Date & Time</Text>
              <Stack spacing={0} align="flex-end">
                <Text fontSize="sm" fontWeight="medium">{data.date}</Text>
                <Text fontSize="xs" color="gray.500">{data.time}</Text>
              </Stack>
            </Flex>
            
            <Flex justify="space-between">
              <Text fontSize="xs" color="gray.500">Type</Text>
              <Stack spacing={0} align="flex-end">
                <Text fontSize="sm" fontWeight="medium">{data.type.name}</Text>
                {data.type?.tag && (
                  <Text fontSize="xs" color="gray.500">{data.type.tag}</Text>
                )}
              </Stack>
            </Flex>
            
            <Flex justify="space-between">
              <Text fontSize="xs" color="gray.500">Amount</Text>
              <Text fontSize="sm" fontWeight="medium">{data.amount}</Text>
            </Flex>
          </Stack>
        </Box>
      ))}
    </Stack>
  );

  return (
    <Box w="100%">
      {isMobile ? <CardView /> : <TableView />}
    </Box>
  );
};

export default TransactionTable;