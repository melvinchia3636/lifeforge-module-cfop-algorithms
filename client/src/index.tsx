import { Link } from 'react-router'

import { Card, Grid, Image, ModuleHeader, Text } from '@lifeforge/ui'

function CFOPAlgorithms() {
  return (
    <>
      <ModuleHeader />
      <Grid
        gap="lg"
        mt="lg"
        templateCols={{ base: 1, md: 2, lg: 3 }}
        width="100%"
      >
        {Object.entries({
          F2L: 'First Two Layers',
          OLL: 'Orientation of the Last Layer',
          PLL: 'Permutation of the Last Layer'
        }).map(([key, value]) => (
          <Card
            key={key}
            align="center"
            as={Link}
            justify="center"
            to={`./${key.toLowerCase()}`}
          >
            <Image
              alt={key}
              fallback={null}
              fit="contain"
              height="12rem"
              mb="xl"
              src={`/assets/apps/CFOPAlgorithms/landing-${key.toLowerCase()}.webp`}
              width="12rem"
            />
            <Text
              align="center"
              as="h2"
              size="5xl"
              tracking="wider"
              weight="semibold"
            >
              {key}
            </Text>
            <Text align="center" as="p" color="muted" mt="sm" size="xl">
              {value}
            </Text>
          </Card>
        ))}
      </Grid>
    </>
  )
}

export default CFOPAlgorithms
