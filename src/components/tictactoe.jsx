import { useEffect, useRef, useState } from "react";

export default function Tictactoe() {
  const [turn, setTurn] = useState("o");
  const [placex, setPlacex] = useState([]);
  const [placeo, setPlaceo] = useState([]);
  const [winner, setWinner] = useState("");
  const [xwin, setXWin] = useState(0);
  const [owin, setOWin] = useState(0);
  const gridBoxRef = useRef([]);
  let wincase = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function clearup() {
    setPlaceo([]);
    setPlacex([]);

    gridBoxRef.current.forEach((box) => {
      if (box) box.innerText = "";
    });
    setWinner("");
  }

  useEffect(() => {
    for (let i = 0; i < wincase.length; i++) {
      if (wincase[i].every((pos) => placeo.includes(pos.toString()))) {
        setWinner("o");
        alert("o won the game");
        setOWin(owin + 1);
        return;
      }
      if (wincase[i].every((pos) => placex.includes(pos.toString()))) {
        setWinner("x");
        alert("x won the game");
        setXWin(xwin + 1);
        return;
      }
    }
  }, [placeo, placex]);

  function place(e) {
    if (e.target.innerText !== "") return;
    if (winner === "") {
      e.target.innerText = turn;
      if (turn === "o") {
        setTurn("x");
        setPlaceo([...placeo, e.target.id]);
      } else {
        setTurn("o");
        setPlacex([...placex, e.target.id]);
      }
    } else {
      alert("winner is already declared");
    }
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div>wins:</div>
        <div className="flex">
          <div className="font-bold m-3">x-{xwin}</div>
          <div className="font-bold m-3">o-{owin}</div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-[70vh]">
        <div className="font-bold text-2xl m-10">{turn}'s turn</div>
        <div className="flex">
          <div
            id="0"
            ref={(el) => {
              gridBoxRef.current[0] = el;
            }}
            className="border-r-2 flex justify-center items-center text-7xl text-center size-20 border-b-2"
            onClick={(e) => place(e)}
          ></div>
          <div
            id="1"
            ref={(el) => {
              gridBoxRef.current[1] = el;
            }}
            className="border-r-2  flex justify-center items-center text-7xl text-center size-20 border-b-2"
            onClick={(e) => place(e)}
          ></div>
          <div
            id="2"
            ref={(el) => {
              gridBoxRef.current[2] = el;
            }}
            className="border-b-2 flex justify-center items-center text-7xl text-center size-20 "
            onClick={(e) => place(e)}
          ></div>
        </div>
        <div className="flex">
          <div
            id="3"
            ref={(el) => {
              gridBoxRef.current[3] = el;
            }}
            className="border-r-2 border-b-2 flex justify-center items-center text-7xl text-center size-20 "
            onClick={(e) => place(e)}
          ></div>
          <div
            id="4"
            ref={(el) => {
              gridBoxRef.current[4] = el;
            }}
            className="border-r-2 border-b-2 flex justify-center items-center text-7xl text-center size-20 "
            onClick={(e) => place(e)}
          ></div>
          <div
            id="5"
            ref={(el) => {
              gridBoxRef.current[5] = el;
            }}
            className="border-b-2 flex justify-center items-center text-7xl text-center size-20 "
            onClick={(e) => place(e)}
          ></div>
        </div>
        <div className="flex">
          <div
            id="6"
            ref={(el) => {
              gridBoxRef.current[6] = el;
            }}
            className="border-r-2 flex justify-center items-center text-7xl text-center size-20 "
            onClick={(e) => place(e)}
          ></div>
          <div
            id="7"
            ref={(el) => {
              gridBoxRef.current[7] = el;
            }}
            className="border-r-2 flex justify-center items-center text-7xl text-center size-20 "
            onClick={(e) => place(e)}
          ></div>
          <div
            id="8"
            ref={(el) => {
              gridBoxRef.current[8] = el;
            }}
            className="flex justify-center items-center text-7xl text-center size-20"
            onClick={(e) => place(e)}
          ></div>
        </div>
        <button onClick={clearup} className="border-2 rounded-lg px-3 py-1 m-5">
          clear
        </button>
      </div>
    </>
  );
}
