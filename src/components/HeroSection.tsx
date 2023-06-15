import { ChangeEvent, useState } from 'react';
import mockedMemes from '../data/mockedMemes.ts';
import Iimage from '../models/Iimage.ts';
import TextInputs from './TextInputs';
import GetImgButton from './GetImgButton';
import ImageBox from './ImageBox';
import placeHolderList from '../data/placeHolder.ts';
import NavBar from './NavBar.tsx';

const HeroSection = () => {
  const [image, setImage] = useState<Iimage>({
    id: '112126428',
    name: 'Distracted Boyfriend',
    url: 'https://i.imgflip.com/1ur9b0.jpg',
    width: 1200,
    height: 800,
    box_count: 3,
    captions: 0,
  });

  const [targetText, setTargetText] = useState(placeHolderList);

  const getImage = () => {
    const fetchedArray = mockedMemes.data.memes;
    const randomImage: Iimage = fetchedArray[Math.floor(Math.random() * fetchedArray.length)];
    setImage(randomImage);
    setTargetText(placeHolderList);
  };

  const addQuote = (e: ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.id;
    const inputNumber = inputName.replace('input', '');
    const index = Number(inputNumber) - 1;
    if (targetText == placeHolderList) {
      setTargetText(prevTargetText => {
        const updatedTargetText = [...prevTargetText];
        updatedTargetText[index] = `placeholder${inputNumber}`;
        return updatedTargetText;
      });
    } else {
      setTargetText(prevTargetText => {
        const updatedTargetText = [...prevTargetText];
        updatedTargetText[index] = e.target.value;
        return updatedTargetText;
      });
    }
  };

  return (
    <>
      {/**<p>boxcount : {image.box_count}</p> only during development */}
      <main className="mt-10 flex flex-col">
        <header className="fixed right-0 top-0 z-10 m-0 w-full bg-slate-400">
          <NavBar />
          {image.url && <TextInputs boxCount={image.box_count} handleClick={addQuote} />}
          <GetImgButton handleClick={getImage} />
        </header>
        <div className="mt-40">
          {image.url && <ImageBox boxCount={image.box_count} imageUrl={image.url} targetText={targetText} />}
        </div>
      </main>
    </>
  );
};

export default HeroSection;
