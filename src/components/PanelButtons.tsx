const PanelButtons = (props: {changeTextSize: (operator: string) => void, captureElement: () => void}) => {
    return(
        <div className="mt-20 absolute right-0 z-10 m-0 flex w-full justify-center gap-1 text-sm">
            <div className="gap-2 p-1 border-2 border-gray-950 rounded-xl bg-green-500 flex items-center">
            <button
            onClick={() => props.changeTextSize('decrease')}
            className="border-2 border-gray-950 rounded-xl bg-purple-500 p-2 font-sans font-extrabold text-zinc-100"
            aria-label="decrement font-size."
            >
            -
            </button>
            <p className="font-sans font-extrabold text-zinc-100">Text-size</p>
            <button
            onClick={() => props.changeTextSize('increase')}
            className="border-2 border-gray-950 rounded-full bg-pink-500 p-2 font-sans font-extrabold text-zinc-100"
            aria-label="increment font-size."
            >
            +
            </button>
            </div>
        <button className="border-2 border-gray-950 rounded-xl bg-green-500 p-3 font-sans font-extrabold text-zinc-100" onClick={props.captureElement}>
          Capture Image
        </button>
      </div>
    )
}

export default PanelButtons;