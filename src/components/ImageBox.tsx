import html2canvas from 'html2canvas';
import { useState } from 'react';
import Draggable from 'react-draggable';
import PanelButtons from './PanelButtons';

const ImageBox = (props: { boxCount: number; imageUrl: string; targetText: string[] }) => {
  const pElements = [];
  const [textSize, setTextSize] = useState(32);
  for (let i = 1; i < props.boxCount + 1; i++) { //start at 1 because of styling issues
    pElements.push(
      <Draggable bounds="parent" key={i} >
        <p
          className="textBox absolute cursor-move from-blue-500 to-transparent  p-0 font-sans text-white active:rounded-3xl active:border-2 active:border-black active:bg-gradient-to-b"
          style={{ top: `${i * 3}rem`, fontSize: `${textSize}px` }}
        >
          {props.targetText[i-1]}
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
    setTextSize(prevSize => {
      if (operator === 'increase' && prevSize < 60) {
        return prevSize + 2;
      } else if (operator === 'decrease' && prevSize > 12) {
        return prevSize - 2;
      }
      return prevSize;
    });
  };

  return (
    <section className="flex flex-col">
    <PanelButtons changeTextSize={changeTextSize} captureElement={captureElement}/>
      <div
        id="image-box"
        className="relative m-auto flex justify-center  overflow-clip p-4 text-center"
      >
        <img className="border-2 border-black bg-slate-500 p-3 max-w-[600px] w-full" src={props.imageUrl} crossOrigin="anonymous" />
        {pElements}
      </div>
    </section>
  );
};

export default ImageBox;
