import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, nullable: false, unique: true })
  name: string;
}

export default Category;
