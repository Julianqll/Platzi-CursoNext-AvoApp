import AvocadoCard from '@components/AvocadoCard/AvocadoCard'
import { Avocado } from '@components/SVGIcons'
import { Center, Container, Flex, Grid, Group, SimpleGrid, Text } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
    .fetch('/api/avo')
    .then((response) => response.json())
    .then(({ data, length }) => {
      setProductList(data)
    })
  }, [])

  return (
    <div>
      <Flex
        gap="xl"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <Group>
          <Text size={26} fw={700}>Platzi</Text>
          <Avocado/>
          <Text size={26} fw={700}>Avo</Text>
        </Group>
        <Center py="xl">
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            {productList.map((product) => (
              AvocadoCard({
                id: product.id, 
                title: product.name, 
                price: product.price, 
                source: product.image
              })
            ))}
          </SimpleGrid>
        </Center>
      </Flex>
    </div>
  )
}

export default HomePage
