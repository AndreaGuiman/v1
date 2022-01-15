
export class Test{
    id!: number;
    user!: string;
    password!: string;

    constructor(init?: Partial<Test>){{
        Object.assign(this, init);
    }}
}