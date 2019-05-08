import { integerArray } from './utils';

export class Coordinates {
    row = 0;
    column = 0;
}

export class Dimensions {
    height = 0;
    width = 0;
    rows = 0;
    columns = 0;

    get approxRatio(): number {
        return this.rows / this.columns;
    }

    get ratio(): number {
        return this.height / this.width;
    }

}

export class Image {
    src = '';
    orientation: 'h' | 'v';
    height = 0;
    width = 0;

    get horizontal(): boolean {
        return this.orientation === 'h';
    }

    get vertical(): boolean {
        return this.orientation === 'v';
    }

    get colspan() {
        return this.vertical ? 1 : 1;
    }

    get rowspan() {
        return this.vertical ? 2 : 1;
    }
}

export interface TypeConstructor<T> {
    new(): T;
}
