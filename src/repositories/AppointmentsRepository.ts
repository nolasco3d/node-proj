import { isEqual } from 'date-fns'
import Appointment from '../models/Appointments'

import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment => {
      isEqual(date, appointment.date),
    })

    return findAppointment || null
  }
}


export default AppointmentsRepository
