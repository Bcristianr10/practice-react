import { useEffect, useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { Board } from './components/Board.jsx'
import { Turn } from './components/Turn.jsx'

function App () {
  // Inicializar estado, esto sucede una vez carga la pagina y no se ejecuta durante los render, es como un constructor
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  // Inicializar estado
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  // null es que no hay ganador, false es que hay un empate
  // Inicializar estado
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    // no actualizar posicion
    if (board[index] || winner) return
    // actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // actualiazar turnos
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // window.localStorage.removeItem('board')
    // Guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const newWinner = checkWinner(newBoard)
    // revisar si hay ganador
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  useEffect(() => {
    console.log('useEffect')
  }, [winner])

  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Empenar de Nuevo</button>
        {/* Board components */}
        <Board board={board} updateBoard={updateBoard} />
        {/* Turn components */}
        <Turn turn={turn} />
        {/* Modal result components */}
        <WinnerModal winner={winner} resetGame={resetGame} />
      </main>
    </>
  )
}

export default App
