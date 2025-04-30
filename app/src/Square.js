import './Square.css';
import {useState} from 'react';

export default function Square({ value, onSquareClick}) {

    let colore;

    if (value === "X") {
        colore = "red";
    } else {
        colore = "blue";
    }

    return <button className={`square ${colore}`}  onClick={onSquareClick}>{value}</button>;
}