import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starwars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Resident Evil 4, Sobrevivencia terror',
    title: 'Residente Evil 4',
    system: 'Windows, Linux',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description: 'Star Wars, Primeira pessoa',
    title: 'Star Wars',
    system: 'Windows, Linux',
    infos: ['10%', 'R$ 250,00'],
    image: starwars
  },
  {
    id: 3,
    category: 'RPG',
    description: 'Diablo IV, RPG Coop',
    title: 'Diablo IV',
    system: 'Windows, Linux',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 4,
    category: 'RPG',
    description: 'Zelda, RPG Solo',
    title: 'Zelda',
    system: 'Windows, Linux',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'Resident Evil 4, Sobrevivencia terror',
    title: 'Residente Evil 4',
    system: 'Windows, Linux',
    infos: ['17/05/24'],
    image: resident
  },
  {
    id: 6,
    category: 'Esportes',
    description: 'Fifa, Fotebol',
    title: 'Residente Evil 4',
    system: 'Windows, Linux',
    infos: ['17/05/24'],
    image: diablo
  },
  {
    id: 7,
    category: 'Luta',
    description: 'Street Fighter VI, Luta',
    title: 'Residente Evil 4',
    system: 'Windows, Linux',
    infos: ['17/05/24'],
    image: starwars
  },
  {
    id: 8,
    category: 'Ação',
    description: 'Resident Evil 4, Sobrevivencia terror',
    title: 'Residente Evil 4',
    system: 'Windows, Linux',
    infos: ['17/05/24'],
    image: resident
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em Breve" background="black" />
  </>
)

export default Home
