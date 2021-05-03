// import { v4 as uuidv4 } from 'uuid'
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  provider: string

  @Column('timestamp with time zone')
  date: Date

  // constructor({ provider, date }: Omit<Appointment, 'id'>) {
  //   this.id = uuidv4()
  //   this.provider = provider
  //   this.date = date
  // }
}

export default Appointment;