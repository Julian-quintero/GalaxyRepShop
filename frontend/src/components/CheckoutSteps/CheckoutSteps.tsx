import React from 'react'
import { Box, HStack } from '@chakra-ui/react'
import { Step } from './Step'


interface Props {
    step1?:boolean,
    step2?:boolean,
    step3?:boolean,
    step4?:boolean
}

export const CheckoutSteps = ({ step1=false, step2=false, step3=false, step4=false }:Props) => {

    
    return (
        <Box
        mx="auto"
        maxW="3xl"
        py="10"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <nav aria-label="Progress steps">
          <HStack as="ol" listStyleType="none" spacing="0">
            <Step isCurrent={step1}>Log in</Step>
            <Step isCurrent={step2}>Shipping</Step>
            <Step isCurrent={step3}>Payment</Step>
            <Step isCurrent={step4}>Place order</Step>
          </HStack>
        </nav>
      </Box>
    )
}
