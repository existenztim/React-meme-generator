import { ChangeEvent } from 'react';
// import Iimage from '../models/Iimage';

const TextInputs = (props: { boxCount: number; handleClick: (e: ChangeEvent<HTMLInputElement>) => void }) => {
  const inputs = [];

  for (let i = 0; i < props.boxCount; i++) {
    const inputId = `input${i + 1}`;

    inputs.push(
      <input
        key={inputId}
        className="mx-10 my-4 rounded-lg border-2 border-solid border-gray-300 p-1 font-sans"
        type="text"
        placeholder={`Text ${i + 1}...`}
        onChange={props.handleClick}
        id={inputId}
      />
    );
  }

  return (
    <div className=" mb-32">
      {inputs}
    </div>
  );
};
export default TextInputs;
