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
    setTargetText(prevTargetText => {
      const updatedTargetText = [...prevTargetText];
      if (targetText === placeHolderList) {
        updatedTargetText[index] = `placeholder${inputNumber}`;
      } else {
        updatedTargetText[index] = e.target.value;
      }
      return updatedTargetText;
    });
  };

  return (
    <>
      {/**<p>boxcount : {image.box_count}</p> only during development */}      
      <header className="fixed right-0 top-0 z-10 m-0 w-full">
        <NavBar />
        <GetImgButton handleClick={getImage} />
      </header>   

      <main className="mt-10 flex flex-col">
        {image.url &&  
        <div className=" mt-4">
          <ImageBox boxCount={image.box_count} imageUrl={image.url} targetText={targetText} />
          <TextInputs boxCount={image.box_count} handleClick={addQuote}/>  
        </div>}
      </main>
      <footer className="fixed right-0 bottom-0  m-0 w-full justify-between bg-gradient-to-r from-purple-500 to-pink-500 p-5 text-slate-50">
      <p className=" text-xl font-semibold">Powered by <span>Imgflip API</span></p>
      </footer>
    </>
  );
};

export default HeroSection;
