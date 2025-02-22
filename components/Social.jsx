import Link from 'next/link';

import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/chinzoo0715' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/chinzoo/' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/ch.zorigg/' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
