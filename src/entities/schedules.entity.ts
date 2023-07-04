import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./realEstate.entityt";
import User from "./user.entity";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  hour: string;

  @ManyToOne(() => RealEstate)
  @JoinColumn()
  realEstate: RealEstate;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;
}

export default Schedule;
