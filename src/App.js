import React, {useState} from "react";
import './App.css';

import {Board} from "./components/Board";
import { RefreshButton } from "./components/RefreshButton";
import { ResetButton } from "./components/ResetButton";
import { ScoreBoard } from "./components/ScoreBoard";


function App() {

  const WIN_CONDITIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  const [board , setBoard] = useState(Array(9).fill(null)) ;
  const [xPlaying, setPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0});
  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick = (boxId)=>{
    const updatedBoard = board.map((value,id)=>{
      if(id === boxId){
        return xPlaying === true ? "x" :"o";
      }else{
        return value;
      }
    })
    const winner = checkWinner(updatedBoard);

    if(winner){
      if(winner === "o"){
        let { oScore } = scores;
        oScore++;
        setScores({...scores,oScore});
      }
      else{
        let { xScore } = scores;
        xScore++;
        setScores({...scores,xScore})
      }
    }

    setBoard(updatedBoard);
    setPlaying(!xPlaying);
  }

  const checkWinner =(board) => {
    for(let i = 0; i < WIN_CONDITIONS.length ; i++ ){
      const [ x, y, z] = WIN_CONDITIONS[i];
      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        //console.log(board[x]);
        setGameOver(true)
        return board[x];
      }
    }
  }

  const resetBoard = () =>{
    setGameOver(false);
    console.log("rest")
    setBoard(Array(9).fill(null))
  }

  const restartGame = () =>{
    setGameOver(false);
    console.log("rest")
    setBoard(Array(9).fill(null))
    setScores({xScore:0 ,oScore:0 });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello </h1>
        <ScoreBoard scores={scores} xPlaying ={xPlaying}/>
        <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick}/>
        <ResetButton resetBoard={resetBoard} />
        <RefreshButton restartGame={restartGame}/>
      </header>
    </div>
  );
}

export default App;
