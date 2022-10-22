import image1 from "../../../assets/explore/pexels-dmitry-zvolskiy-2082087 1.png";
import image2 from "../../../assets/explore/pexels-naim-benjelloun-2029670 1.png";
// import image1 from "../../../assets/explore/one.svg";
// import image2 from "../../../assets/explore/two.svg";

export interface Room {
    id: number;
    name: string;
    price: number;
    area: number;
    image: string;
  }
  
  const rooms: Room[] = [
    {
      id: 1,
      name: 'Room with one king-size bed',
      price: 35,
      area: 28,
      // image: '/assets/images/room-01.jpg',
      image: image1,
    },
    {
      id: 2,
      name: 'Penthouse for 8 person',
      price: 2039,
      area: 438,
      // image: '/assets/images/room-02.jpg',
      image: image2,

    },
  ];
  
  export default rooms;
  