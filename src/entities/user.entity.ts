import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, nullable: false })
  name: string;

  @Column({ length: 45, nullable: false, unique: true })
  email: string;

  @Column({ length: 120, nullable: false })
  password: string;

  @Column({ default: false })
  admin: boolean;

  @CreateDateColumn({ type: "date" })
  createdAt?: string | Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt?: string | Date;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt?: string | Date | undefined | null;
}

export default User;
