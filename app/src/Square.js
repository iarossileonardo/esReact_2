import './Square.css';
import {useState} from 'react';

export default function Square() {

    const [value, setValue] = useState(null)

    return <button className="square">{value}</button>;
}