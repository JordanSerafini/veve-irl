import React from 'react';

interface PicsProps {
  url: string;
}

const Pics: React.FC<PicsProps> = ({ url }) => {
  return (
    <div>
      <img src={url} alt="Image" />
    </div>
  );
};

export default Pics;
