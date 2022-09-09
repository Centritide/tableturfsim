// import * as PIXI from "pixi.js"
export const states = new Set(['empty','turf','special','spicy','void']);
export const colors = new Set(['blue','yellow','none']);
export class Board{
    constructor(h,w) {
        this.h = h;
        this.w = w;
        this.board_state = [...Array(h)].map(() => Array(w).fill('empty'));
        this.board_color = [...Array(h)].map(() => Array(w).fill('none'));
    }
    constructor(h,w,k,x){
        this.h = h;
        this.w = w;
        this.board_state = [...Array(h)].map(() => Array(w).fill('empty'));
        this.board_color = [...Array(h)].map(() => Array(w).fill('none'));
        for (let i = 0; i < k; i++) {
            for (let j = 0; j < x; j++) {
                this.board_state[i][j] = 'void';
            }    
        }
    }
}