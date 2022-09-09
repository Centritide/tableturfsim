import { Board } from "./board"
import states from './board.js';
export class Card{
    constructor(json){
        this.shape = [...Array(8)].map(() => Array(8).fill('empty'));
        
    }
}