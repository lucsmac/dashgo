import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex
      align="center"
    >
      <Box mr="4" textAlign="right">
        <Text>Lucas Macedo</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          lucasmdc57@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Lucas Macedo"
        src="https://github.com/lucsmac.png"
      />
    </Flex>
  )
}
