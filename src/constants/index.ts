import { FaDiscord, FaTwitch, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const NAV_ITEMS = [
  { label: "TRAILER", href: "/#hero" },
  { label: "About", href: "/about" },
  { label: "Platforms", href: "/platforms" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/game-website",
} as const;

export const SOCIAL_LINKS = [
  {
    href: "https://discord.com",
    icon: FaDiscord,
  },
  {
    href: "https://twitter.com",
    icon: FaXTwitter,
  },
  {
    href: "https://youtube.com",
    icon: FaYoutube,
  },
  {
    href: "https://twitch.com",
    icon: FaTwitch,
  },
] as const;

export const VIDEO_LINKS = {
  feature1:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCc56aV03LYRyJDZsOPGdFTt0lQuHLkeqjKCao1",
  feature2:
    "https://v1.pinimg.com/videos/iht/720p/4b/50/56/4b505643786ffa90592ffa794aaf05f5.mp4",
  feature3:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcbZvH6O7fXDrfMZ6S457EQsgoxTCIz1kjlnVd",
  feature4:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcSrGHFCyiMbxBtTacUmFzn4dZpwVYNfvR6WLg",
  feature5:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCc1qT68sSEu6tgkCBNP3FH45AUe70hrbTaxYDm",
  hero1:
    "https://ldveftfkct.ufs.sh/f/3EIdGoV8CLDtE8KiDGzIqgfBiLQj60GXxYMpz7WAPvkDsenK",
  hero2:
    "https://ldveftfkct.ufs.sh/f/3EIdGoV8CLDtCDSArzMa5kDS13rCO24Bm9qIJLbWlTgYN6Ua",
  hero3:
    "https://v1.pinimg.com/videos/mc/720p/3f/c2/ff/3fc2ff4aaf4002fcabcd244a1fd8984a.mp4",
  hero4:
    "https://v1.pinimg.com/videos/mc/720p/cc/82/c1/cc82c1cb3bd413a2bf5dec3690322e04.mp4",
};
