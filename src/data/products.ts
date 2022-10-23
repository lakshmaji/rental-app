import image1 from '../assets/explore/one.webp'
import image2 from '../assets/explore/two.webp'
import { IProduct } from '../models/product'

const products: IProduct[] = [
  {
    id: 1,
    name: 'Room with one king-size bed',
    price: 35,
    area: 28,
    image: image1,
  },
  {
    id: 2,
    name: 'Penthouse for 8 person',
    price: 2039,
    area: 438,
    image: image2,
  },
]

export default products
