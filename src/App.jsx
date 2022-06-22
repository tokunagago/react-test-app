import { useState } from 'react';
import { ColoredMessage } from './components/ColoredMessage';
import { TailwindCss } from './components/TailwindCss';

export const App = () => {
  console.log('レンダリング');
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };

  return (
    <>
      <TailwindCss />
      <h1 style={{color : "red"}}>こんにちは</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気だ</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};