import React, { useEffect } from 'react';
import Image from 'next/image'
import useDencrypt from '../hooks/dencrypt';

type FirnProps = {
    onClick: React.MouseEventHandler<HTMLDivElement>;
};

const values = ["Firn", "Nussara Tieanklin", "นุสรา เตี้ยนกลิ่น", "เฟิร์น"];

function Firn({onClick}: FirnProps) {
  const [result, dencrypt] = useDencrypt();

  useEffect(() => {
    let i = 0;

    const decryptValue = () => {
      dencrypt(values[i]);
      i = (i + 1) % values.length;
    }

    decryptValue();
    const action = setInterval(decryptValue, 5500);

    return () => clearInterval(action);
  }, [dencrypt]);

  return<div className="home-button button" onClick={onClick}>
    <Image
      src="img/fern.png"
      alt="fern"
      width={25}
      height={25}
    />
    {result}
  </div>;
}

export default Firn;