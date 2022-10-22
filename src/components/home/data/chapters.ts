// import image1 from "../../../assets/about-us/pexels-max-vakhtbovych-5998051 1.png";
// import image2 from "../../../assets/about-us/pexels-max-vakhtbovych-6492403 1.png";
// import image3 from "../../../assets/about-us/pexels-houzlook-com-3356416 1.png";
// import image4 from "../../../assets/about-us/pexels-oleg-zaicev-4834891 1.png";

export interface IChapter {
    id: number;
    title: string;
    // image: string;
    description: string;
    height: number;
    imageUrl: string;
  }
  
  const chapters: IChapter[] = [
    {
      id: 1,
      title: 'Chapter I',
      imageUrl: './about-us/one.webp',
      // image: 'image1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
        height: 26.6,
    },
  

    {
      id: 3,
      title: 'Chapter III',
      imageUrl: 'about-us/three.webp',
      // image: image3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
        height: 50.2,
    },
    {
      id: 2,
      title: 'Chapter II',
      imageUrl: 'about-us/two.webp',
      // image: image2,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
        height: 33.4,
    },
    {
      id: 4,
      title: 'Chapter IV',
      imageUrl: 'about-us/four.webp',
      // image: image4,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
        height: 50.0,
    },
  ];
  
  export default chapters;
  