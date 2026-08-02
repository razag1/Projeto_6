import bannerMacarraoImage from '../assets/images/banner-macarrao.webp'
import bannerSushiImage from '../assets/images/banner-sushi.webp'
import carbonaraImage from '../assets/images/carbonara.webp'
import combinadoHiokiImage from '../assets/images/combinado-hioki.webp'
import hotRollImage from '../assets/images/hot-roll.webp'
import pizzaMargheritaImage from '../assets/images/pizza-margherita.webp'
import risottoFunghiImage from '../assets/images/risotto-funghi.webp'
import tagliatelleRaguImage from '../assets/images/tagliatelle-ragu.webp'
import temakiSalmaoImage from '../assets/images/temaki-salmao.webp'
import type { Dish, Restaurant } from '../types'

function createItalianMenu(restaurantId: number): Dish[] {
  const baseId = restaurantId * 100

  return [
    {
      id: baseId + 1,
      name: 'Pizza Margherita',
      description:
        'Massa artesanal, molho de tomate, mussarela, manjericão fresco e um toque de azeite extravirgem.',
      image: pizzaMargheritaImage
    },
    {
      id: baseId + 2,
      name: 'Spaghetti alla Carbonara',
      description:
        'Espaguete envolvido em molho cremoso de ovos e pecorino, com pancetta crocante e pimenta-do-reino.',
      image: carbonaraImage
    },
    {
      id: baseId + 3,
      name: 'Tagliatelle ao Ragù',
      description:
        'Massa fresca acompanhada de molho de carne cozido lentamente com tomates, ervas e vinho tinto.',
      image: tagliatelleRaguImage
    },
    {
      id: baseId + 4,
      name: 'Risotto ai Funghi',
      description:
        'Risoto cremoso preparado com cogumelos frescos, parmesão, vinho branco e ervas aromáticas.',
      image: risottoFunghiImage
    }
  ]
}

function createJapaneseMenu(restaurantId: number): Dish[] {
  const baseId = restaurantId * 100

  return [
    {
      id: baseId + 1,
      name: 'Temaki de Salmão',
      description:
        'Alga nori crocante, arroz japonês, salmão fresco, pepino, cebolinha e gergelim.',
      image: temakiSalmaoImage
    },
    {
      id: baseId + 2,
      name: 'Combinado Hioki',
      description:
        'Seleção de sashimis de salmão, niguiris e uramakis preparados com ingredientes frescos.',
      image: combinadoHiokiImage
    },
    {
      id: baseId + 3,
      name: 'Hot Roll Especial',
      description:
        'Roll empanado e crocante, recheado com salmão e cream cheese e finalizado com molho tarê.',
      image: hotRollImage
    }
  ]
}

const italianDescription =
  'Massas artesanais, pizzas e risotos preparados com ingredientes selecionados e receitas inspiradas na tradição italiana.'

const japaneseDescription =
  'Sushis, sashimis e pratos quentes preparados com ingredientes frescos, cuidado técnico e apresentação impecável.'

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Hioki Sushi',
    category: 'Japonesa',
    rating: 4.9,
    description: japaneseDescription,
    image: combinadoHiokiImage,
    heroImage: bannerSushiImage,
    tags: ['Destaque da semana', 'Japonesa'],
    menu: createJapaneseMenu(1)
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    rating: 4.6,
    description: italianDescription,
    image: tagliatelleRaguImage,
    heroImage: bannerMacarraoImage,
    tags: ['Italiana'],
    menu: createItalianMenu(2)
  },
  {
    id: 3,
    name: 'Bella Napoli',
    category: 'Italiana',
    rating: 4.8,
    description:
      'Sabores napolitanos, massas de fermentação lenta e pratos reconfortantes preparados para compartilhar.',
    image: pizzaMargheritaImage,
    heroImage: bannerMacarraoImage,
    tags: ['Novidade', 'Italiana'],
    menu: createItalianMenu(3)
  },
  {
    id: 4,
    name: 'Kyoto Sushi House',
    category: 'Japonesa',
    rating: 4.7,
    description:
      'Culinária japonesa contemporânea com peças frescas, combinações equilibradas e entrega cuidadosa.',
    image: temakiSalmaoImage,
    heroImage: bannerSushiImage,
    tags: ['Japonesa'],
    menu: createJapaneseMenu(4)
  },
  {
    id: 5,
    name: 'Cantina Toscana',
    category: 'Italiana',
    rating: 4.7,
    description:
      'Receitas italianas de inspiração toscana, molhos encorpados e ingredientes que valorizam cada preparo.',
    image: risottoFunghiImage,
    heroImage: bannerMacarraoImage,
    tags: ['Destaque', 'Italiana'],
    menu: createItalianMenu(5)
  },
  {
    id: 6,
    name: 'Nori Garden',
    category: 'Japonesa',
    rating: 4.5,
    description:
      'Uma seleção acessível de temakis, combinados e pratos quentes para uma experiência japonesa completa.',
    image: hotRollImage,
    heroImage: bannerSushiImage,
    tags: ['Japonesa'],
    menu: createJapaneseMenu(6)
  }
]
