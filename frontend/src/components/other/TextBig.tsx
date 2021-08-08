import React from 'react'
import {
    Text,
    Heading,
    Center,
  } from "@chakra-ui/react";

export const TextBig = () => {
    return (
        <Center>
        <Heading
          lineHeight={1.1}
          fontWeight={700}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "red.400",
              zIndex: -1,
            }}
          >
            Nuevo
          </Text>

          <br />
          <Text as={"span"} color={"red.400"}>
            En promocion!
          </Text>
        </Heading>
      </Center>

    )
}
