import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Link = styled.a`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #4a4a4a;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const WebsiteLink = (props) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      window.location.assign(props.link);
    }
  });

  return (
    <Link onClick={() => setClicked(true)}>Visit hotel website</Link>
  );
};

export default WebsiteLink;