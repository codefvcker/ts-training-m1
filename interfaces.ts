interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',   
    size: {
        width:20,
        height: 20
    },
    color: 'Red'
}

const rect2: Rect = {
    id: '1234',   
    size: {
        width:30,
        height: 30
    }    
}

rect2.color = 'Red'
//rect2.diagonal = 20 // cannot

const rect3 = {} as Rect
const rect4 = <Rect>{}

//============

interface IRect extends Rect {
    getArea: ()=> number
}

const rect5: IRect = {
    id: '1234',   
    size: {
        width:20,
        height: 20
    },  
    getArea(): number {
        return this.size.width * this.size.height
    }

}

// console.log(rect5.getArea.call(rect2))

//==============

class RectClass implements IRect {
    id: '1234';
    size: {
        width:20,
        height: 20
    }; 
    getArea(): number {
        return this.size.width * this.size.height
    }
}

interface Styles {
    [key: string]: string
}