import React, { useState } from 'react';
import Cell from './Cell';

const Board = () => {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        if (cells[index] || calculateWinner(cells)) return;

        const newCells = cells.slice();
        newCells[index] = isXNext ? 'X' : 'O';
        setCells(newCells);
        setIsXNext(!isXNext);
    };

    const renderCell = (index) => {
        return <Cell value={cells[index]} onClick={() => handleClick(index)} />;
    };

    const winner = calculateWinner(cells);
    const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board">
                {Array(3).fill(null).map((_, rowIndex) => (
                    <div key={rowIndex} className="board-row">
                        {Array(3).fill(null).map((_, colIndex) => renderCell(rowIndex * 3 + colIndex))}
                    </div>
                ))}
            </div>
        </div>
    );
};

const calculateWinner = (cells) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let line of lines) {
        const [a, b, c] = line;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return cells[a];
        }
    }
    return null;
};

export default Board;