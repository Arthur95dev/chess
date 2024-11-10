import {Component, OnDestroy, OnInit} from "@angular/core";
import {CellComponent} from "../cell/cell.component";
import {CommonModule, NgFor} from "@angular/common";
import {ICell} from "../cell/cell.interface";

@Component({
    selector: "board",
    standalone: true,
    templateUrl: './board.component.html',
    styleUrl: './board.component.css',
    imports: [NgFor, CellComponent, CommonModule]
})

export class BoardComponent implements OnInit, OnDestroy {
    cells: Array<ICell> = [];

    ngOnInit() {
        this.initCells();
    }
    ngOnDestroy() {
    }
    defineFigure(row: number, col: number): string {
        return "";
    }
    initCells(): void {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                this.cells.push({
                    row: i,
                    col: j,
                    cellNum: i * 8 + j,
                    color: i % 2 === 0 ? j % 2 === 0 ? 'white' : 'black' : j % 2 === 0 ? 'black' : 'white',
                    figure: null
                })
            }
        }
    }
}