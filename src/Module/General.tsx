import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import Replit from './Assets/sponsorsLogos/replit.png';
import lyin from './Assets/teami/lyin.jpg';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import me from './Assets/teami/me.png';
import moon from './Assets/teami/moon.png';
import Ryah from './Assets/teami/Ryah.jpg';
import zoha from './Assets/teami/zoha.png';

const TOP_SECTION = {
  TITLE: 'OSM Hackfest 2023 - Chitwan Region',
  Typed_effect: ['24 hours of creation', 'Win awesome prizes'],
  SHORT_DESCRIPTION:
    'Join us on 10th and 11th June 2023 with peers from across the terai region for 24 hours of creation, innovation and fun.',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  JUDGES_FORM_LINK: '',
  HACKERS_REGISTRATION_FORM_LINK:
    'https://docs.google.com/forms/d/e/1FAIpQLSexlRmYgJSjRNZPlnr69zgzg4FIbQqcMVvDBrRHMErbbaWx8Q/viewform'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/limbohacks/',
  discord: 'https://discord.com/invite/8XJSzmtWPp',
  linkedin: 'https://www.linkedin.com/company/limbo-hacks/',
  twitter: 'https://twitter.com/HacksLimbo',
  devpost: 'https://limbo-hacks-12968.devpost.com/',
  email: 'mailto:hello@limbohacks.tech',
  mail: 'hello@limbohacks.tech'
};

const MIDDLE_SECTION = {
  TITLE: 'What is OSM Hackfest 2023 - Chitwan Region?',
  LONG_DESCRIPTION:
    'OSM Hackfest 2023 - Chitwan region is a 24 hour long hackathon that will be held on June 10th and 11th. The main focus of the event will be innovations impacting local areas with utilzation of OpenStreetMap. The event is a part of a seires consisting of Regional -> National -> International. This event is regional one, after which you will move on to the National event. The winners of National Level Hackfest will get chance to particpate in the International level Hackfest with Full Sponsorships.',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://docs.google.com/forms/d/e/1FAIpQLSclOhvKDu4JnfI1uZ5PjTuUg8EwjbIVi68WqWTwNoxeRp-VQQ/viewform'
  },
  JOIN_TEAM: {
    required: false,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u'
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 6,
  year: 2023
};

const schedule = [
  {
    day: '8-11-2021',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '5-12-2021',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '3-12-2021',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '1-12-2021',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '1-1-2022',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'overall First',
      content:
        'First Overall prize will be given to a project that outstands all other submissions'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'overall Second',
      content:
        'Second Overall prize will be given to the second best project of the hackathon'
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: 'More prizes',
      content: 'More prizes will be revealed later'
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Binny Vai',
      role: 'Organizer',
      github: 'https://github.com/Binaya-mrt',
      linkedin: '',
      img: me
    },
    {
      Name: 'Prabhat Amgain',
      role: 'Organizer',
      github: 'https://github.com/prabhat147',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Sijan Neupane',
      role: 'Organizer',
      github: 'https://github.com/sijan8s3',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Rajiv Aryal',
      role: 'Organizer',
      github: 'https://github.com/Aryal-Rajiv',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Ashbin Wosti',
      role: 'Organizer',
      github: 'https://github.com/washbin',
      linkedin: 'https://linkedin.com/in/washbin',
      img: zoha
    }
  ]
];

const JudgesInfo = [
  [
    {
      Name: 'Someone',
      role: 'Judge',
      github: '',
      linkedin: '',
      img: me
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [[{src: Replit}]];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is an event of certain duration either physical or virtual where people from a certain area or across the globe collaborate in teams to create a functionaing software with an impact "'
      },
      {
        label: 'Who can attend?',
        content:
          'OSM Hackfest 2023 - Chitwan Region is open to all undergraduate students.'
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general.'
      },
      {
        label: 'How team formation works?',
        content:
          'You can form team with 4 members in it at maximum. At a minimum, your team must consist of 2 members.'
      }
    ],
    [
      {
        label: 'How to register myself in the hackathon?',
        content:
          'All you need is to fill our form above and join Discord, we will guide you through everything there'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach out to any of our organizing personnels either through our social links or directly.'
      },
      {
        label: 'Can i volunteer?',
        content:
          'Yes we are actively looking for volunteers, fill the form (in footer section) we will be glad to have you.'
      },
      {
        label: 'Will there be swag?',
        content: 'Yes! Participants will recieveing OSM Hackfest swag!.'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};
