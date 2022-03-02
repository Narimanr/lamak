export interface iAction {
    name: string;
    image: string;
    link: string;
}

export interface iDesign {
    windowW: number;
    windowH: number;
    partition: number;
}

export interface iWindow {
    id: string;
    partition: number;
    windowW:  number;
    windowH:  number;
    frameW:  number;
    frameH:  number;
    mullion:  number;
    sashW: number;
    sashH:  number;
    sillW: number;
    sillH:  number;
    glassW: number;
    glassH:  number;
}