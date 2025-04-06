import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react'


const InfoCard = ({imageUrl,text,tagText, inverted}) => {
  return (
    <CustomCard bgImage={imageUrl} bgColor={inverted ? "p.purple" : "white"} bgSize="cover" bgRepeat="no-repeat">
        <Tag color={inverted ? "p.purple" : "white"} bg={inverted ? "white" : "p.purple"}borderRadius="full">{tagText}</Tag>
        <Text mt="4" color={inverted ? "white" : "black"} fontWeight="medium" textStyle="h5">{text}</Text>
    </CustomCard>
  )
}

export default InfoCard