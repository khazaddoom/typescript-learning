// interface Employee {
//     id: string,
//     fullName: string,
//     age: number,
//     gender: string
// }

// interface BaseRecordType {
//     id: string
// }

// interface DBFunctions<T extends BaseRecordType> {
//     get(id: string): T,
//     set(value: T): void
// }

// class DBProvider<T extends BaseRecordType> implements DBFunctions<T> {

//     private items: Record<string, T> = {}

//     get(id: string): T {
//         return this.items[id];
//     }
//     set(newValue: T): void {
//         this.items[newValue.id] = newValue;
//     }

// }

// const employeeDB = new DBProvider<Employee>();

// employeeDB.set({
//     id: "EMP100",
//     fullName: "Ganesh Acharya",
//     age: 34,
//     gender: "MALE"
// })

// console.log(employeeDB.get("EMP102"))

// function identity<Type>(arg: Type): Type {
//     return arg;
// }

// console.log(identity("Hello world!!!"))

// function game(input:any, guess:any) {
//     const word = input.match(/[a-z]/gi);
//     const copy = guess.match(/[a-z]/gi);
//     let final = [];
//     for (let i = 0; i < guess.length; i++) {
//         if (word[i] === guess[i])
//             final.push({ letter: guess[i], result: "Correct" });
//         else if (word.includes(guess[i])) {
//             final.push({ letter: guess[i], result: "Misplaced" });
//             const additionalCheckLetter = guess[i]
//             const indeces = copy.map((l:any, cur:any) => {
//                 if(cur<=i) return -1
//                 if(l==copy[i]) return cur;
//                 return -1 
//             }).filter((val:any) => val !== -1)
//             for(let i=0; i<indeces.length; i++) {
//                 if(word[indeces[i]] == additionalCheckLetter) {
//                     const obj: any = final.pop()
//                     final.push({ ...obj, result: "Incorrect" });
//                 }
//             }
//         }
//         else
//             final.push({ letter: guess[i], result: "Incorrect" });
//     }
//     return final;
// }

// console.log(game("HARPET", "GREPPA"))

// const data = {
//     "src": {
//         type: "dir",
//         contents: [{
//             "index.ts": {
//                 type: "file",
//                 contents: []
//             }
//         }, {
//             "components": {
//                 type: "dir",
//                 contents: [{
//                     "button.tsx": {
//                         type: "file",
//                         contents: []
//                     },
//                     "card.tsx": {
//                         type: "file",
//                         contents: []
//                     }
//                 }]
//             }    
//         }]
//     },
//     "package.json": {
//         type: "file",
//         contents: []
//     },
//     "package-lock.json": {
//         type: "file",
//         contents: null
//     },
//     "tsconfig.json": {
//         type: "file",
//         contents: []
//     }
// }

// 1. for each key get value

// 2. check type == dir or file

// if file --> print

// if dir =

// class RangeValidationBase {
//     constructor(private start : number, private end : number) { }
//     protected RangeCheck(value : number) : boolean {
//         return value >= this.start && value <= this.end;
//     }
//     protected GetNumber(value : string) : number {
//        return new Number(value).valueOf();
//     } 
// }


// class UnionValidation extends RangeValidationBase {
//     IsRangeCheck(value: string | number): boolean {
//         if (typeof value === "number") {
//             return this.RangeCheck(value);
//         }
//         return this.RangeCheck(this.GetNumber(value));
//     }
// }

// const t = new UnionValidation(100, 200);
// console.log(t.IsRangeCheck('100'))

class Margin {
    Left: number = 0;
    Top: number = 0;
}

class Grid {
    Width: number = 0;
    Height: number = 0;
}

type IntersectionGridMargin = Grid & Margin;

function ConsolidatedGrid(grid: Grid, margin: Margin): IntersectionGridMargin {
    return {
        ...grid,
        ...margin
    }
}

console.log(ConsolidatedGrid(new Grid(), new Margin()))