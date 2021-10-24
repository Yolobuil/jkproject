export const typeList =():void => {

// boolean
let bool:boolean = true;

// number
let num:number = 0;

// string
let str:string = "A";

// Array 1も2もどっちも同じだが、上の方がすぐに配列とわかりやすい（？）
let arr1: Array<number> = [0,1,2];
let arr2:number[] = [0,1,2];

// tuple 要素の順番を指定（あまり使い道はない・・？）
let tuple:[number,string] =[0,''];

// any 方を指定しても意味がない。なにを入れてもOK（なるべく使わない）
let any1:any = false;

// void 関数に紐づく型 なにも返却していないことを書く（あえて書かなくても、なにも返さなかったらvoidになる）
const funcA = ():void =>{
  const test = 'test';
}

// null nullを表す
let null1 : null = null;

// undefined なにも設定されていされていない状態。
let undefined1 = undefined;

// object オブジェクトに対してオブジェクトですよと表す。あまり使う機会はない。
let obj1: object = {};
let obj2: { id: number, name:string} = { id:1,name:'2'};

}