import { Expose, plainToClass } from "class-transformer";

export abstract class BaseDto {
    @Expose()
    id: number;

    @Expose()
    createAt: Date;

    @Expose()
    updateAt: Date;
    
    static plainToInstance<T>(this: new(...arg: any[])=>T,Obj:T):T{
        return plainToClass(this, Obj,{excludeExtraneousValues:true})
    }
}