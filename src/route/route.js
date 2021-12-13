import PatientRegistration from '@/components/PatientRegistration.vue'
import DoctorRegistration from '@/components/DoctorRegistration.vue'

export const routes = [
    {path: '/patient-registration', name: 'patient-registration', component: PatientRegistration},
    {path: '/doctor-registration', name: 'doctor-registration', component: DoctorRegistration},
]