import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("date")
  date: string;

  @Column("time")
  hour: string;

  @Column()
  realEstateId: number;

  @Column()
  userId: number;
}

export default Schedule;
