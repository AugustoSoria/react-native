export interface ICategory {
  href: string;
  id: string;
  icons: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
}
// ver si la api da el color
export const categories: ICategory[] = [
  {
    href: "https://api.spotify.com/v1/browse/categories/0JQ5DAt0tbjZptfcdMSKl3",
    id: "0JQ5DAt0tbjZptfcdMSKl3",
    icons: [
      {
        height: 274,
        url: "https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg",
        width: 274,
      },
    ],
    name: "Made For You",
  },
  {
    href: "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFz6FAsUtgAab",
    id: "0JQ5DAqbMKFz6FAsUtgAab",
    icons: [
      {
        height: 274,
        url: "https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg",
        width: 274,
      },
    ],
    name: "New Releases",
  },
  {
    href: "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFxXaXKP7zcDp",
    id: "0JQ5DAqbMKFxXaXKP7zcDp",
    icons: [
      {
        height: 274,
        url: "https://t.scdn.co/media/derived/latin-274x274_befbbd1fbb8e045491576e317cb16cdf_0_0_274_274.jpg",
        width: 274,
      },
    ],
    name: "Latin",
  },
  {
    href: "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFEC4WFtoNRpw",
    id: "0JQ5DAqbMKFEC4WFtoNRpw",
    icons: [
      {
        height: 274,
        url: "https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",
        width: 274,
      },
    ],
    name: "Pop",
  },
  {
    href: "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFR9D66iFXqzk",
    id: "0JQ5DAqbMKFR9D66iFXqzk",
    icons: [
      {
        height: 274,
        url: "https://t.scdn.co/images/cb9d28c9b084483caf81ef9c4a6420af.jpeg",
        width: 274,
      },
    ],
    name: "Cumbia",
  },
  {
    href: "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFDXXwE9BDJAr",
    id: "0JQ5DAqbMKFDXXwE9BDJAr",
    icons: [
      {
        height: 274,
        url: "https://t.scdn.co/media/derived/rock_9ce79e0a4ef901bbd10494f5b855d3cc_0_0_274_274.jpg",
        width: 274,
      },
    ],
    name: "Rock",
  },
  {
    href: "https://api.spotify.com/v1/browse/categories/0JQ5DAudkNjCgYMM0TZXDw",
    id: "0JQ5DAudkNjCgYMM0TZXDw",
    icons: [
      {
        height: 274,
        url: "https://charts-images.scdn.co/spotify-charts-logos/music_charts_search_arrow_274x274.jpeg",
        width: 274,
      },
    ],
    name: "Charts",
  },
  {
    href: "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFIRybaNTYXXy",
    id: "0JQ5DAqbMKFIRybaNTYXXy",
    icons: [
      {
        height: 274,
        url: "https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg",
        width: 274,
      },
    ],
    name: "In the car",
  },
  {
    href: "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym",
    id: "0JQ5DAqbMKFQ00XGBls6ym",
    icons: [
      {
        height: 274,
        url: "https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg",
        width: 274,
      },
    ],
    name: "Hip-Hop",
  },
  {
    href: "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQIL0AXnG5AK",
    id: "0JQ5DAqbMKFQIL0AXnG5AK",
    icons: [
      {
        height: 274,
        url: "https://t.scdn.co/images/ac75ec857b714a118c73218bb58664e5.jpeg",
        width: 274,
      },
    ],
    name: "Trending",
  },
  {
    href: "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFzHmL4tf05da",
    id: "0JQ5DAqbMKFzHmL4tf05da",
    icons: [
      {
        height: 274,
        url: "https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg",
        width: 274,
      },
    ],
    name: "Mood",
  },
  {
    href: "https://api.spotify.com/v1/browse/categories/0JQ5DAtOnAEpjOgUKwXyxj",
    id: "0JQ5DAtOnAEpjOgUKwXyxj",
    icons: [
      {
        height: 274,
        url: "https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg",
        width: 274,
      },
    ],
    name: "Discover",
  },
  {
    href: "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCWjUTdzaG0e",
    id: "0JQ5DAqbMKFCWjUTdzaG0e",
    icons: [
      {
        height: 274,
        url: "https://t.scdn.co/images/fe06caf056474bc58862591cd60b57fc.jpeg",
        width: 274,
      },
    ],
    name: "Indie",
  },
  {
    href: "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFBbPAS73rGzK",
    id: "0JQ5DAqbMKFBbPAS73rGzK",
    icons: [
      {
        height: 274,
        url: "https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg",
        width: 274,
      },
    ],
    name: "EQUAL Fest",
  },
  {
    href: "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF",
    id: "0JQ5DAqbMKFHOzuVTgTizF",
    icons: [
      {
        height: 274,
        url: "https://t.scdn.co/media/derived/edm-274x274_0ef612604200a9c14995432994455a6d_0_0_274_274.jpg",
        width: 274,
      },
    ],
    name: "Dance/Electronic",
  },
];
