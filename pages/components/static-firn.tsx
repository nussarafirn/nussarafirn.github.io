import React, {useRef} from 'react';
import Image from 'next/image'

type FirnProps = {
    onClick: React.MouseEventHandler<HTMLDivElement>;
};

const values = ["Firn", "Nussara Tieanklin", "นุสรา เตี้ยนกลิ่น", "เฟิร์น"];
const chars = [
  "-",
  ".",
  "/",
  "^",
  "*",
  "!",
  "}",
  "<",
  "~",
  "$",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
];
const interval = 200;

const getRandomChar = (chars: string[]) =>
  chars[Math.floor(Math.random() * chars.length)];

const getChar = (
  i: number,
  j: number,
  maxLength: number,
  oldValue: string,
  newValue: string,
  chars: string[]
) => {
  if (j > i) {
    return oldValue[j];
  }

  if (i >= maxLength && j < i - maxLength) {
    return newValue[j];
  }

  return getRandomChar(chars);
};

function Firn({onClick}: FirnProps) {
  const text = useRef<HTMLSpanElement>(null);

  setInterval(() => {
    if (text.current === null) {
      throw new Error();
    }

    const currentText = text.current.innerHTML;
    const idx = values.findIndex(v => v === currentText);
    const value = values[(idx + 1) % values.length];

    if (currentText === undefined) {
      throw new Error();
    }

    let i = 0;
    let oldValue = ""

    const crypting = setInterval(() => {
      if (text.current === null) {
        throw new Error();
      }
      if (oldValue === value) {
        clearInterval(crypting);

        oldValue = value;
        text.current.innerHTML = value;
        return;
      }

      const oldLength = oldValue ? oldValue.length : 0;
      const newLength = value.length;
      const maxLength = Math.max(oldLength, newLength);

      oldValue = [...new Array(maxLength)]
        .map((_, j) => getChar(i, j, maxLength, oldValue, value, chars))
        .join("");
      text.current.innerHTML = oldValue;
      i++;
    }, interval);

  }, 15500);

  return<div className="home-button button" onClick={onClick}>
    <Image
      src="img/fern.png"
      alt="fern"
      width={25}
      height={25}
    />
    <span ref={text}>{values[0]}</span>
  </div>;
}

export default Firn;