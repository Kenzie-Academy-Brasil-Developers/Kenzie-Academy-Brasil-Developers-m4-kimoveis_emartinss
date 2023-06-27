import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Address from "./address.entity";

@Entity("real_estate")
class RealEstate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "decimal", default: 0 })
  value: number | string;

  @Column({ type: "integer" })
  size: number;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @Column({ type: "integer" })
  categoryId: number;

  @Column({ default: false })
  sold: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default RealEstate;
