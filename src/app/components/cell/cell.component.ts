import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app-cell",
    standalone: true,
    templateUrl: "./cell.component.html",
    styleUrl: "./cell.component.css"
})

export class CellComponent implements OnInit {
    public count: number;
    private color: string;
    private figure: string | null;

    constructor(count: number) {
        this.count = count;
    }
    isEmpty = (): boolean => {
        return this.figure === null;
    }

    ngOnInit() {
    }
}