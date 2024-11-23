import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import {CellComponent} from "../cell/cell.component";
import {CommonModule, NgFor} from "@angular/common";
import {FigureService} from "../../services/figure.service";
import {ICell} from "../cell/cell.component";

@Component({
    selector: "board",
    standalone: true,
    templateUrl: './board.component.html',
    styleUrl: './board.component.css',
    imports: [NgFor, CellComponent, CommonModule]
})

export class BoardComponent implements OnInit, OnDestroy {
    cells: Array<ICell> = [];
    figureService: FigureService = inject(FigureService);

    ngOnInit() {
        this.initCells();
    }

    ngOnDestroy() {
    }

    initCells(): void {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const cellNum: number = i * 8 + j;
                this.cells.push({
                    row: i,
                    col: j,
                    cellNum: cellNum,
                    color: i % 2 === 0 ? j % 2 === 0 ? 'white' : 'black' : j % 2 === 0 ? 'black' : 'white',
                    figure: this.figureService.createFigure(i, cellNum)
                })
            }
        }
    }
}