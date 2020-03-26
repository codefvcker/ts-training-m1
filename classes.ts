 class MyClass {
     name: string
     
     constructor(name:string) {
         this.name = name
     }

     getName(surname: string): string {
         return this.name + surname
     }
 }

 // Alternative way to create a class

 class Car {
     readonly wheels: number

     constructor(readonly owner: string) {}
 }

 //Abstract classes

 abstract class MyAbstractClass {
     abstract info(): string 
 }

 class MyNewClass extends MyAbstractClass {
     info(): string {
         return 'Hello'
     }
 }

 const app = new MyNewClass()

 console.log(app.info())
 