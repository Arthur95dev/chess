import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class FigureService {
    defineFigureName(row: number, cellNum: number) {
        let figureName: string = '';
        switch (row) {
            case 1:
            case 2: {
                figureName = 'pawn';
                break;
            }
        }

        switch (cellNum) {
            case 0:
            case 7:
            case 56:
            case 63: {
                figureName = 'rook';
                break;
            }
            case 1:
            case 6:
            case 57:
            case 62: {
                figureName = 'knight';
                break;
            }
            case 2:
            case 5:
            case 58:
            case 61: {
                figureName = 'bishop';
                break;
            }
            case 3:
            case 59: {
                figureName = 'king';
                break;
            }
            case 4:
            case 60: {
                figureName = 'queen';
                break;
            }
        }

        return figureName;
    }
    selectFigure() {}
    moveFigure(row: number, cellNum: number) {}
}