import {Injectable} from "@angular/core";

type FigureNameType = 'pawn' | 'queen' | 'king' | 'knight' | 'bishop' | 'rook';
export type FigureColorType = 'black' | 'white';

export interface IFigure {
    color: FigureColorType;
    url: string;
    firstStep?: boolean;
}


@Injectable({providedIn: 'root'})
export class FigureService {
    figures: Array<IFigure> = [];

    defineFigureName(cellNum: number): FigureNameType {
        let figureName: FigureNameType = 'pawn';

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
    defineFigureColor(row: number) : FigureColorType {
        let color: FigureColorType = 'white';

        if (row === 6 || row === 7) {
            color = 'black';
        }
        return color;
    }
    createFigure(row: number, cellNum: number) : IFigure | null {
        if (row === 2 || row === 3 || row === 4 || row === 5) return null;

        const figureName: FigureNameType = this.defineFigureName(cellNum);
        const figureColor: FigureColorType = this.defineFigureColor(row);

        let figure: IFigure = {
            color: figureColor,
            url: `./assets/${figureName}_${figureColor}.png`
        }

        if (figureName === 'pawn' || figureName === 'king') {
            figure.firstStep = true;
        }

        return figure;
    }


    moveFigure(row: number, cellNum: number) {}

}