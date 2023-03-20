import React from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

interface AvocadoCardProps {
  id: string;
  title: string;
  source: string;
  price: number;
}

export function AvocadoCard ({
  id,
  title,
  source,
  price,
} : AvocadoCardProps) {
  return (
    <Card key={id} shadow="sm" padding="lg" m="xl" maw={300} radius="md" withBorder>
      <Card.Section>
        <Image
          src={source}
          height={300}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Badge color="lime" variant="filled">{price}</Badge>
      </Group>
    </Card>
  );
}

export default AvocadoCard