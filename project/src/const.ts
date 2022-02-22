import { IAppStore } from './types/appstore.types';

export enum AppRoute {
    Main = '/',
    SignIn = '/login',
    MyList = '/mylist',
    Film = '/films/:id',
    AddReview= '/films/:id/review',
    Player = '/player/:id'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }

export const appStore: IAppStore = {
  filmsList: [
    {
      title: 'Fantastic Beasts: The Crimes of Grindelwald',
      imgSrc: 'fantastic-beasts-the-crimes-of-grindelwald',
      id:0,
    },    {
      title: 'Bohemian Rhapsody',
      imgSrc: 'bohemian-rhapsody',
      id:1,
    },    {
      title: 'Macbeth',
      imgSrc: 'macbeth',
      id:2,
    },    {
      title: 'Aviator',
      imgSrc: 'aviator',
      id:3,
    },    {
      title: 'We need to talk about Kevin',
      imgSrc: 'we-need-to-talk-about-kevin',
      id:4,
    },    {
      title: 'What We Do in the Shadows',
      imgSrc: 'what-we-do-in-the-shadows',
      id:5,
    },    {
      title: 'Revenant',
      imgSrc: 'revenant',
      id:6,
    },    {
      title: 'Johnny English',
      imgSrc: 'johnny-english',
      id:7,
    },    {
      title: 'Shutter Island',
      imgSrc: 'shutter-island',
      id:8,
    },    {
      title: 'Pulp Fiction',
      imgSrc: 'pulp-fiction',
      id:9,
    },    {
      title: 'No Country for Old Men',
      imgSrc: 'no-country-for-old-men',
      id:10,
    },    {
      title: 'Snatch',
      imgSrc: 'snatch',
      id:11,
    },    {
      title: 'Moonrise Kingdom',
      imgSrc: 'moonrise-kingdom',
      id:12,
    },    {
      title: 'Seven Years in Tibet',
      imgSrc: 'seven-years-in-tibet',
      id:13,
    },    {
      title: 'Midnight Special',
      imgSrc: 'midnight-special',
      id:14,
    },    {
      title: 'War of the Worlds',
      imgSrc: 'war-of-the-worlds',
      id:15,
    },{
      title: 'Dardjeeling Limited',
      imgSrc: 'dardjeeling-limited',
      id:16,
    },{
      title: 'Orlando',
      imgSrc: 'orlando',
      id:17,
    },{
      title: 'Mindhunter',
      imgSrc: 'mindhunter',
      id:18,
    },{
      title: 'Midnight Special',
      imgSrc: 'midnight-special',
      id:19,
    },
  ],
  promoFilm: {
    title: 'The Grand Budapest Hotel',
    imgSrc: 'the-grand-budapest-hotel',
    id:20,
    genre: 'Drama',
    year: 2014,
  },
  genresList:
    [
      {
        name: 'All genres',
        isActive: true,
        id:0,
      },{
        name: 'Comedies',
        id:1,
      },{
        name: 'Crime',
        id:2,
      },{
        name: 'Documentary',
        id:3,
      },{
        name: 'Dramas',
        id:4,
      },{
        name: 'Horror',
        id:5,
      },{
        name: 'Kids & Family',
        id:6,
      },{
        name: 'Sci-Fi',
        id:7,
      },{
        name: 'Thrillers',
        id:8,
      },
    ],
};
