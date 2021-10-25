// Typeもexportして外部利用できる。
// 型情報を再利用すると◎
export type TodoType = {　
userId: number;
id: number;
title: string;
completed:boolean;
};