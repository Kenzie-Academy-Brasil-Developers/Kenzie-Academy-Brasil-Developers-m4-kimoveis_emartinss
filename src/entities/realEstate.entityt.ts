import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("real_estate")
class RealEstate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "decimal", default: 0 })
  value: number | string;

  @Column({ type: "integer" })
  size: number;

  @Column()
  addressId: number;

  @Column({ type: "integer" })
  categoryId: number;

  @Column({ default: false })
  sold: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default RealEstate