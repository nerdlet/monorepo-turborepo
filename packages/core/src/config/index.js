/* import fb from "core/assets/white icon fb.svg";
import insta from "core/assets/white icon insta.svg";
import linkedin from "code/assets/white icon linkedin.svg";
import twitter from "core/assets/white icon twitter.svg"; */

const QUICK_LINKS = [
  {
    title: "Resources",
    links: [
      { href: "/about", label: "About the Project" },
      { href: "/privacy", label: "Methodology" },
    ],
  },
  {
    title: "More",
    links: [
      { href: "/join", label: "Join Us" },
      { href: "/legal", label: "Legal" },
    ],
  },
];

/* const socialMedia = [
  {
    url: "https://www.instagram.com/code4africa__/",
    image: {
      url: insta,
      alt: "Instagram",
    },
  },
  {
    url: "https://www.facebook.com/CodeForAfrica/",
    image: {
      url: fb, 
      alt: "Facebook",
    },
  },
  {
    url: "https://twitter.com/Code4Africa",
    image: {
      url: twitter,
      alt: "Twitter",
    },
  },
  {
    url: "https://github.com/codeforafrica",
    image: {
      url: linkedin,
      alt: "LinkedIn",
    },
  },
]; */
export const footerArgs = {
  title: "Stay in touch with us",
  description:
    "This site is an openAFRICA project of Code for Africa.\n" +
    "        All content is released under a Creative Commons 4 Attribution Licence. \n" +
    "        Reuse it to help empower your own community.\n" +
    "        The code is available on GitHub and data is available on openAFRICA.\n",
  logoProps: {
    src: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/Group-4426.svg",
    alt: "Code for Africa",
    href: "https://codeforafrica.org",
  },
/*   socialMedia, */
  quickLinks: QUICK_LINKS,
  copyrightProps: {
    icon: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/cc.svg",
    copyright: "2021 PesaYetu",
    copyrightUrl: "https://dev.pesayetu.pesacheck.org",
    copyrightVariant: "subtitle1",
  },
  aboutVariant: "subtitle1",
};

const config = {
  name: "TwoopsTracker",
  footerArgs,
  url: "http://localhost:3000",
};

export default config;
