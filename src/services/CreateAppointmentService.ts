import { startOfHour } from 'date-fns'
import { startOfDay } from "date-fns";
import { getCustomRepository } from "typeorm";

import Appointment from '../models/Appointments'
import AppointmentsRepository from '../repositories/AppointmentsRepository'

interface Request {
  provider_id: string
  date: Date
}

class CreateAppointmentService {

  public async execute({date, provider_id}:Request):Promise<Appointment>{
    const appointmentsRepository = getCustomRepository(AppointmentsRepository)

    const appointmentDate = startOfHour(date)

    const findAppointmentInSameDate = appointmentsRepository.findByDate(
      appointmentDate,
    )

    if(findAppointmentInSameDate){
      throw Error('This appointment is already booked')
    }

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate
    })

    await appointmentsRepository.save(appointment)

    return appointment
  }

}

export default CreateAppointmentService