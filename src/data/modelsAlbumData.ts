export interface AlbumPhoto {
  id: number;
  url: string;
  span?: string; // CSS grid spanning for editorial rhythm on desktop
  aspect?: string; // Aspect ratio class
}

// 49 fotografias reais fornecidas pelo usuário (100% autênticas, sem duplicatas)
export const ALBUM_PHOTOS: AlbumPhoto[] = [
  {
    id: 1,
    url: 'https://i.ibb.co/6R89ZPMx/Whats-App-Image-2026-09-22-at-17-28-59-3.jpg',
    span: 'col-span-12 lg:col-span-8',
    aspect: 'aspect-[16/10] sm:aspect-[16/9]'
  },
  {
    id: 2,
    url: 'https://i.ibb.co/JRsMxLzG/Whats-App-Image-2026-09-22-at-17-28-59-2.jpg',
    span: 'col-span-12 lg:col-span-4',
    aspect: 'aspect-[4/3] lg:aspect-[3/4]'
  },
  {
    id: 3,
    url: 'https://i.ibb.co/b5mn5htb/Whats-App-Image-2026-09-22-at-17-28-59-1.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 4,
    url: 'https://i.ibb.co/zhJd5Kdg/Whats-App-Image-2026-09-22-at-17-28-59.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 5,
    url: 'https://i.ibb.co/gXJTxFW/Whats-App-Image-2026-09-22-at-17-28-58-3.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 6,
    url: 'https://i.ibb.co/21pvFdHh/Whats-App-Image-2026-09-22-at-17-28-58-2.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 7,
    url: 'https://i.ibb.co/n87c7m1F/Whats-App-Image-2026-09-22-at-17-28-58-1.jpg',
    span: 'col-span-12 sm:col-span-12 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 8,
    url: 'https://i.ibb.co/Q3RN9c9S/Whats-App-Image-2026-09-22-at-17-28-58.jpg',
    span: 'col-span-12 lg:col-span-12',
    aspect: 'aspect-[16/9] sm:aspect-[21/9]'
  },
  {
    id: 9,
    url: 'https://i.ibb.co/WW9x2J0m/Whats-App-Image-2026-09-22-at-17-28-57-4.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 10,
    url: 'https://i.ibb.co/TxMcy2T2/Whats-App-Image-2026-09-22-at-17-28-57-3.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 11,
    url: 'https://i.ibb.co/RGKCMWYH/Whats-App-Image-2026-09-22-at-17-28-57-2.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 12,
    url: 'https://i.ibb.co/vvwcCLcD/Whats-App-Image-2026-09-22-at-17-28-57-1.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 13,
    url: 'https://i.ibb.co/nq4v1C72/Whats-App-Image-2026-09-22-at-17-28-57.jpg',
    span: 'col-span-12 sm:col-span-12 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 14,
    url: 'https://i.ibb.co/Z6Tbg9vg/Whats-App-Image-2026-09-22-at-17-28-56-3.jpg',
    span: 'col-span-12 lg:col-span-7',
    aspect: 'aspect-[16/10]'
  },
  {
    id: 15,
    url: 'https://i.ibb.co/6RgFVM0P/Whats-App-Image-2026-09-22-at-17-28-56-2.jpg',
    span: 'col-span-12 lg:col-span-5',
    aspect: 'aspect-[4/3] lg:aspect-[16/10]'
  },
  {
    id: 16,
    url: 'https://i.ibb.co/Fbrr4LXD/Whats-App-Image-2026-09-22-at-17-28-56-1.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 17,
    url: 'https://i.ibb.co/ynGtDTSz/Whats-App-Image-2026-09-22-at-17-28-56.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 18,
    url: 'https://i.ibb.co/TSj9Nt4/Whats-App-Image-2026-09-22-at-17-28-55-4.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 19,
    url: 'https://i.ibb.co/1G90zGp5/Whats-App-Image-2026-09-22-at-17-28-55-3.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 20,
    url: 'https://i.ibb.co/Y6D9h7X/Whats-App-Image-2026-09-22-at-17-28-55-2.jpg',
    span: 'col-span-12 sm:col-span-12 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 21,
    url: 'https://i.ibb.co/351HWpFW/Whats-App-Image-2026-09-22-at-17-28-55-1.jpg',
    span: 'col-span-12 lg:col-span-12',
    aspect: 'aspect-[16/9] sm:aspect-[21/9]'
  },
  {
    id: 22,
    url: 'https://i.ibb.co/ZRcmBKH4/Whats-App-Image-2026-09-22-at-17-28-55.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 23,
    url: 'https://i.ibb.co/93CR9vv8/Whats-App-Image-2026-09-22-at-17-28-54-2.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 24,
    url: 'https://i.ibb.co/jZzcCd9c/Whats-App-Image-2026-09-22-at-17-28-54-1.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 25,
    url: 'https://i.ibb.co/NnngCdCy/Whats-App-Image-2026-09-22-at-17-28-54.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 26,
    url: 'https://i.ibb.co/Q7fT4kSK/Whats-App-Image-2026-09-22-at-17-28-53-1.jpg',
    span: 'col-span-12 sm:col-span-12 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 27,
    url: 'https://i.ibb.co/W4MqYkz1/Whats-App-Image-2026-09-22-at-17-28-53.jpg',
    span: 'col-span-12 lg:col-span-5',
    aspect: 'aspect-[4/3] lg:aspect-[16/10]'
  },
  {
    id: 28,
    url: 'https://i.ibb.co/v6xmPSGn/Whats-App-Image-2026-09-22-at-17-28-52-3.jpg',
    span: 'col-span-12 lg:col-span-7',
    aspect: 'aspect-[16/10]'
  },
  {
    id: 29,
    url: 'https://i.ibb.co/Z1NXDMTz/Whats-App-Image-2026-09-22-at-17-28-52-2.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 30,
    url: 'https://i.ibb.co/KpftGx6j/Whats-App-Image-2026-09-22-at-17-28-52-1.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 31,
    url: 'https://i.ibb.co/ZRJq22y1/Whats-App-Image-2026-09-22-at-17-28-52.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 32,
    url: 'https://i.ibb.co/FkcDmqwF/Whats-App-Image-2026-09-22-at-17-28-51-3.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 33,
    url: 'https://i.ibb.co/PvHvVBpT/Whats-App-Image-2026-09-22-at-17-28-51-1.jpg',
    span: 'col-span-12 sm:col-span-12 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 34,
    url: 'https://i.ibb.co/pBXkpPTK/Whats-App-Image-2026-09-22-at-17-28-51.jpg',
    span: 'col-span-12 lg:col-span-12',
    aspect: 'aspect-[16/9] sm:aspect-[21/9]'
  },
  {
    id: 35,
    url: 'https://i.ibb.co/Jw0Qdk1S/Whats-App-Image-2026-09-22-at-17-28-50-2.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 36,
    url: 'https://i.ibb.co/TMzxCCTN/Whats-App-Image-2026-09-22-at-17-28-50-1.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 37,
    url: 'https://i.ibb.co/tPKdW5CQ/Whats-App-Image-2026-09-22-at-17-28-50.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 38,
    url: 'https://i.ibb.co/F4n7P2vh/Whats-App-Image-2026-09-22-at-17-28-49-4.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 39,
    url: 'https://i.ibb.co/KpJzsbKC/Whats-App-Image-2026-09-22-at-17-28-49-3.jpg',
    span: 'col-span-12 sm:col-span-12 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 40,
    url: 'https://i.ibb.co/HLSPd6hy/Whats-App-Image-2026-09-22-at-17-28-49-2.jpg',
    span: 'col-span-12 lg:col-span-8',
    aspect: 'aspect-[16/10]'
  },
  {
    id: 41,
    url: 'https://i.ibb.co/BVHN8bDt/Whats-App-Image-2026-09-22-at-17-28-49-1.jpg',
    span: 'col-span-12 lg:col-span-4',
    aspect: 'aspect-[4/3] lg:aspect-[3/4]'
  },
  {
    id: 42,
    url: 'https://i.ibb.co/PvrTwNfn/Whats-App-Image-2026-09-22-at-17-28-48-2.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 43,
    url: 'https://i.ibb.co/GvpHZvbW/Whats-App-Image-2026-09-22-at-17-28-48-1.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 44,
    url: 'https://i.ibb.co/8LzGmY7w/Whats-App-Image-2026-09-22-at-17-28-48.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 45,
    url: 'https://i.ibb.co/QFtNmfsh/Whats-App-Image-2026-09-22-at-17-28-47-2.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 46,
    url: 'https://i.ibb.co/278YGjSx/Whats-App-Image-2026-09-22-at-17-28-47-1.jpg',
    span: 'col-span-12 sm:col-span-12 lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 47,
    url: 'https://i.ibb.co/nNzMHvgm/Whats-App-Image-2026-09-22-at-17-28-47.jpg',
    span: 'col-span-12 lg:col-span-6',
    aspect: 'aspect-[16/10]'
  },
  {
    id: 48,
    url: 'https://i.ibb.co/ZpsK9Tj7/Whats-App-Image-2026-09-22-at-17-28-46-1.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-3',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 49,
    url: 'https://i.ibb.co/N6hFtQkD/Whats-App-Image-2026-09-22-at-17-28-46.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-3',
    aspect: 'aspect-[4/3]'
  }
];
