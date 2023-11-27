import React from 'react';

interface FooterProps {
  copyright: string;
  author: string;
}

const Footer: React.FC<FooterProps> = ({ author, copyright }) => {
  return (
    <footer>
      <p>Author: {author} | &copy; {copyright}</p>
    </footer>
  );
}

export default Footer;