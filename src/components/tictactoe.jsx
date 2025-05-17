import { useEffect, useState } from "react";
export default function Tictactoe() {
  const [turn, setTurn] = useState("o");
  const [placex, setPlacex] = useState([]);
  const [placeo, setPlaceo] = useState([]);
  const [winner, setWinner] = useState("");
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
  useEffect(() => {
    for (let i = 0; i < wincase.length; i++) {
      if (wincase[i].every((pos) => placeo.includes(pos.toString()))) {
        alert("o won the game");
        setWinner("o");
      }
    }
  }, [placeo]);
  useEffect(() => {
    for (let i = 0; i < wincase.length; i++) {
      if (wincase[i].every((pos) => placex.includes(pos.toString()))) {
        alert("x won the game");
        setWinner("x");
      }
    }
  }, [placex]);

  function place(e) {
    if (e.target.innerText !== "") return;
    if (winner === "") {
      e.target.innerText = turn;
      if (turn === "o") {
        setTurn("x");
        setPlaceo([...placeo, e.target.id]);
        console.log(placeo);
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
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <div className="font-bold text-2xl m-10">{turn}'s turn</div>
        <div className="flex">
          <div
            id="0"
            className="border-r-2 flex justify-center items-center text-7xl text-center size-20 border-b-2"
            onClick={(e) => place(e)}
          ></div>
          <div
            id="1"
            className="border-r-2  flex justify-center items-center text-7xl text-center size-20 border-b-2"
            onClick={(e) => place(e)}
          ></div>
          <div
            id="2"
            className="border-b-2 flex justify-center items-center text-7xl text-center size-20 "
            onClick={(e) => place(e)}
          ></div>
        </div>
        <div className="flex">
          <div
            id="3"
            className="border-r-2 border-b-2 flex justify-center items-center text-7xl text-center size-20 "
            onClick={(e) => place(e)}
          ></div>
          <div
            id="4"
            className="border-r-2 border-b-2 flex justify-center items-center text-7xl text-center size-20 "
            onClick={(e) => place(e)}
          ></div>
          <div
            id="5"
            className="border-b-2 flex justify-center items-center text-7xl text-center size-20 "
            onClick={(e) => place(e)}
          ></div>
        </div>
        <div className="flex">
          <div
            id="6"
            className="border-r-2 flex justify-center items-center text-7xl text-center size-20 "
            onClick={(e) => place(e)}
          ></div>
          <div
            id="7"
            className="border-r-2 flex justify-center items-center text-7xl text-center size-20 "
            onClick={(e) => place(e)}
          ></div>
          <div
            id="8"
            className="flex justify-center items-center text-7xl text-center size-20"
            onClick={(e) => place(e)}
          ></div>
        </div>
      </div>
    </>
  );
}
