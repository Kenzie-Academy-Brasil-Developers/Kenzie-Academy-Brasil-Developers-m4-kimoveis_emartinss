import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./realEstate.entityt";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "time" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @OneToOne(() => RealEstate)
  @JoinColumn()
  realEstate: number;

  @Column()
  userId: number;
}

export default Schedule;
