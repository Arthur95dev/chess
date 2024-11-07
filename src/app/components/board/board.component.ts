import {Component} from "@angular/core";
import {CellComponent} from "../cell/cell.component";

@Component({
    selector: "app-board",
    standalone: true,
    templateUrl: './board.component.html',
    styleUrl: './board.component.css',
    imports: [CellComponent]
})

export class BoardComponent {
    cells: CellComponent;

    constructor(cells: CellComponent) {

    }
}