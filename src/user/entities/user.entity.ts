import { Post } from "src/post/entities/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({nullable:true})
    email:string;
    
    @Column({ nullable: true })
    password:string;

    @OneToMany(()=>Post,(post)=>post.author)
    posts: Post[];
}
