import {Component, Input, OnInit} from "@angular/core";
import {ICell} from "./cell.interface";

@Component({
    selector: "cell",
    standalone: true,
    templateUrl: "./cell.component.html",
    styleUrl: "./cell.component.css"
})
export class CellComponent implements ICell, OnInit {
    @Input() row: number;
    @Input() col: number;
    @Input() cellNum: number;
    @Input() color: string;
    @Input() figure: string | null;

    isEmpty = (): boolean => {
        return this.figure === null;
    }

    ngOnInit() {
    }
}