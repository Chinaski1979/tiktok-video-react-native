export interface Video {
  id: string;
  url: string;
  title: string;
  author: string;
  likes: number;
  isLiked: boolean;
  description: string;
}

export const sampleVideos: Video[] = [
  {
    id: '1',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'Big Buck Bunny',
    author: '@bunny_lover',
    likes: 1250,
    isLiked: false,
    description: 'A cute bunny having fun in the forest! 🐰'
  },
  {
    id: '2',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    title: 'Elephants Dream',
    author: '@dreamer_elephant',
    likes: 890,
    isLiked: true,
    description: 'Dreaming of adventures in the wild! 🐘'
  },
  {
    id: '3',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    title: 'For Bigger Blazes',
    author: '@fire_enthusiast',
    likes: 2100,
    isLiked: false,
    description: 'Epic fire show that will blow your mind! 🔥'
  },
  {
    id: '4',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    title: 'For Bigger Escapes',
    author: '@escape_artist',
    likes: 1560,
    isLiked: false,
    description: 'The ultimate escape adventure! 🏃‍♂️'
  },
  {
    id: '5',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    title: 'For Bigger Fun',
    author: '@fun_master',
    likes: 3200,
    isLiked: true,
    description: 'Maximum fun guaranteed! 🎉'
  }
];
