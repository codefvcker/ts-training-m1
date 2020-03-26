//keyof

interface Person {
    name: string,
    id: number
}

type MyType = keyof Person // 'name' | 'age'

let key: MyType = 'name'

type MyObjType = {
    _id: number,
    name: string
    age: number
}

type MyNewObjType = Pick<MyObjType, 'name' | '_id'>
type User = Exclude<keyof MyObjType,'age'>

