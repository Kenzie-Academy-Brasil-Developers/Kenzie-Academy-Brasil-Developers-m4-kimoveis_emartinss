import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./realEstate.entityt";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn()
 
  id: number;

  @Column({ length: 45 })
  street: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ length: 7 })
  number: string;

  @Column({ length: 20 })
  city: string;

  @Column({ length: 2 })
  state: string;
}
export default Address;
