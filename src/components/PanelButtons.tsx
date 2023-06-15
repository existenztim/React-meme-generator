const PanelButtons = (props: {changeTextSize: (operator: string) => void, captureElement: () => void}) => {
    return(
        <div className="fixed bottom-12 right-0 z-10 m-0 flex w-full justify-center gap-1">
        <button
          onClick={() => props.changeTextSize('decrease')}
          className="border-2 border-gray-950 rounded-xl bg-purple-500 p-3 font-sans font-extrabold text-zinc-100"
        >
          Decrease text size
        </button>
        <button
          onClick={() => props.changeTextSize('increase')}
          className="border-2 border-gray-950 rounded-xl bg-pink-500 p-3 font-sans font-extrabold text-zinc-100"
        >
          Increase text size
        </button>
        <button className="border-2 border-gray-950 rounded-xl bg-green-500 p-3 font-sans font-extrabold text-zinc-100" onClick={props.captureElement}>
          Capture Image
        </button>
      </div>
    )
}

export default PanelButtons;