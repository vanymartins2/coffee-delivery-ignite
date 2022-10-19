import { useContext } from 'react'
import { Card } from '../../components/Card'
import { CoffeeShopContext } from '../../context/CoffeeShopContext'
import { Intro } from './components/Intro'
import { CardList, Title } from './styles'

export function Home() {
  const { products } = useContext(CoffeeShopContext)

  return (
    <>
      <Intro />
      <main>
        <Title>Nossos cafés</Title>

        <CardList>
          {products.map(product => (
            <Card key={product.id} {...product} />
          ))}
        </CardList>
      </main>
    </>
  )
}
