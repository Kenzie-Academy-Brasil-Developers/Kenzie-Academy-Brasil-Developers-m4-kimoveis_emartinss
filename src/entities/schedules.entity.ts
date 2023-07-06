import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./realEstate.entityt";
import User from "./user.entity";
import Category from "./category.entity";
import Address from "./address.entity";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  hour: string;

  @ManyToOne(() => RealEstate, (realEstate)=> realEstate.schedules)
  // @JoinColumn()
  realEstate: RealEstate;

  @ManyToOne(() => User)
  // @JoinColumn()
  user: User;

  // @ManyToOne(() => Category, (category) => category.schedule)
  // category: Category;

  // @ManyToOne(() => Address, (address) => address.schedule)
  // address: Address;
}

export default Schedule;
