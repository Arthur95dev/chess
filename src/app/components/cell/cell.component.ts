import {Component, Input, OnInit} from "@angular/core";
import {IFigure, FigureColorType} from "../../services/figure.service";
import {NgClass, NgIf} from "@angular/common";

export interface ICell {
    row: number;
    col: number;
    cellNum: number;
    color: FigureColorType;
    figure: IFigure | null;
}

@Component({
    selector: "cell",
    standalone: true,
    templateUrl: "./cell.component.html",
    imports: [
        NgIf,
        NgClass
    ],
    styleUrl: "./cell.component.css"
})
export class CellComponent implements ICell, OnInit {
    @Input() row: number;
    @Input() col: number;
    @Input() cellNum: number;
    @Input() color: FigureColorType;
    @Input() figure: IFigure | null;

    isSelected: boolean = false;

    isEmpty = (): boolean => {
        return this.figure === null;
    }

    clickHundler(): void {
        if (this.isEmpty()) return;
        this.isSelected = !this.isSelected;
    }
    ngOnInit() {
    }
}