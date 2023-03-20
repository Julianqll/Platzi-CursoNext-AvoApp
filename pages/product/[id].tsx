import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { IconShoppingCart } from '@tabler/icons-react';
import { Center, Flex, SimpleGrid, Image, Text, Group, Badge, Button, NumberInput, Divider, Table} from '@mantine/core'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>()
  const { query } = useRouter()

  useEffect(() => {
    window
      .fetch(`/api/avo/${query.id}`)
      .then((response) => response.json())
      .then(({ data }) => {
        setProduct(data)
      })
  }, [query.id])

  return (
      <Center py="xl" m={50}>
        <SimpleGrid cols={1} maw={700} >
          <Center>
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <Image
            mx="auto"
            src={product?.image}
            maw={250}
            alt="Norway"
          />
        <Flex
          mih={50}
          gap="sm"
          justify="center"
          align="flex-start"
          direction="column"
          wrap="nowrap"
        >
          <Text size={26} weight={700}>{product?.name}</Text>
          <Text size={20} weight={400}>{product?.price}</Text>
          <Badge color="gray" variant="filled">{product?.sku}</Badge>
          <Group >
            <NumberInput
              maw={150}
              defaultValue={18}
              placeholder="Your age"
              withAsterisk
            />
            <Button color="green" leftIcon={<IconShoppingCart size="1rem" />}>
              Add to cart
            </Button>
          </Group>
        </Flex>
        </SimpleGrid>
          </Center>
          <Text size={20} weight={700}>About this avocado</Text>
          <Text size={16} >{product?.attributes.description}</Text>
          <Divider my="sm" />
          <Flex
            justify="center"
            align="center"
            direction="row"
          >
            <Table withBorder withColumnBorders>
              <thead>
              <tr>
                  <th colSpan={2} style={{ textAlign: 'left' }}>
                      Attributes
                  </th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shape</td>
                  <td>{product?.attributes.shape}</td>
                </tr>
                <tr>
                  <td>Hardiness</td>
                  <td>{product?.attributes.hardiness}</td>
                </tr>
                <tr>
                  <td>Taste</td>
                  <td>{product?.attributes.taste}</td>
                </tr>
              </tbody>
            </Table>
          </Flex>
        </SimpleGrid>
      </Center>
    // <section>
    //   <h1>Página producto: {product?.name}</h1>
    //   <h1>Precio producto: {product?.price}</h1>
    // </section>
  )
}

export default ProductPage
