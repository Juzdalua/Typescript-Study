import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    age: number;
};

export default User;