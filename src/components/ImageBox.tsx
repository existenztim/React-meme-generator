import html2canvas from 'html2canvas';
import { useState } from 'react';
import Draggable from 'react-draggable';

const ImageBox = (props: { boxCount: number; imageUrl: string; targetText: string[] }) => {
  const pElements = [];
  const [textSize, setTextSize] = useState(4);
  for (let i = 0; i < props.boxCount; i++) {
    pElements.push(
      <Draggable bounds="parent" key={i}>
        <p
          className="textBox absolute cursor-move from-blue-500 to-transparent  p-9 font-sans text-white active:rounded-3xl active:border-2 active:border-black active:bg-gradient-to-b"
          style={{ top: `${i * 8}rem`, fontSize: `${textSize}vw` }}
        >
          {props.targetText[i]}
        </p>
      </Draggable>
    );
  }

  const captureElement = async () => {
    const element = document.getElementById('image-box');
    if (element) {
      const canvas = await html2canvas(element, { useCORS: true });
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'image.png';
      link.click();
    }
  };

  const changeTextSize = (operator: string) => {
    console.log(textSize);

    setTextSize(prevSize => {
      if (operator === 'increase' && prevSize < 5) {
        return prevSize + 1;
      } else if (operator === 'decrease' && prevSize > 2) {
        return prevSize - 1;
      }
      return prevSize;
    });
  };

  return (
    <section className="flex flex-col">
      <div className="fixed bottom-2 right-0 z-10 m-0 flex w-full justify-center gap-1">
        <button
          onClick={() => changeTextSize('decrease')}
          className="rounded-xl bg-purple-500 p-3 font-sans font-extrabold text-zinc-100"
        >
          Decrease text size
        </button>
        <button
          onClick={() => changeTextSize('increase')}
          className="rounded-xl bg-pink-500 p-3 font-sans font-extrabold text-zinc-100"
        >
          Increase text size
        </button>
        <button className="rounded-xl bg-green-500 p-3 font-sans font-extrabold text-zinc-100" onClick={captureElement}>
          Capture Image
        </button>
      </div>
      <div
        id="image-box"
        className=" relative mx-auto flex justify-center justify-items-stretch overflow-clip p-4 text-center"
      >
        <img className="border-2 border-black bg-slate-500 p-3" src={props.imageUrl} crossOrigin="anonymous" />
        {pElements}
      </div>
    </section>
  );
};

export default ImageBox;
