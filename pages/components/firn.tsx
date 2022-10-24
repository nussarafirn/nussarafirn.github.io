import React, { useEffect } from 'react';
import Image from 'next/image'
import useDencrypt from '../hooks/dencrypt';

const values = ["Firn", "Nussara Tieanklin", "นุสรา เตี้ยนกลิ่น", "เฟิร์น"];

function Firn() {
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

  return<div className="home-button button">
    <a href='.'>
      <Image
        src="img/fern.png"
        alt="fern"
        width={25}
        height={25}
      />
      {result}
    </a>
  </div>;
}

export default Firn;