import { Basket } from '@components/SVGIcons'
import { Group, Text } from '@mantine/core';
import React from 'react'

type ShoppingCartIconProps = {
    cartCount: number
  }

const ShoppingCartIcon = ({ cartCount }: ShoppingCartIconProps) => {
    const showCartCount = () => {
    if (!cartCount) {
        return `(0)`
    }
    if (cartCount > 9) {
        return (
        <span>
            9<sup>+</sup>
        </span>
        )
    }
    return `(${cartCount})`
    }

    return (
        <Group spacing="sm">
            <Basket/>
            <Text>Canasta {showCartCount()}</Text>
        </Group>
    )
}

export default ShoppingCartIcon