type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//APARTADO 1
const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
    return pacientes.filter((pacientes) => pacientes.especialidad === "Pediatra");
};
console.log("Apartado 1:")
console.log("Pacientes pediátricos:",obtenPacientesAsignadosAPediatria(pacientes));

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
    return pacientes.filter((pacientes) => pacientes.especialidad === "Pediatra" && pacientes.edad < 10);
};

console.log("Pacientes pediátricos y menores de 10 años:",obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

//APARTADO 2
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    return pacientes.some(paciente => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39);
};

console.log("Apartado 2:")
console.log("Activar protocolo de Urgencia?", activarProtocoloUrgencia(pacientes));

//APARTADO 3
const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
    return pacientes.map(paciente => {
        if (paciente.especialidad === "Pediatra") {
            return {...paciente, especialidad: "Medico de familia"}
        }

        return paciente;
    })  
};

console.log("Apartado 3:")
console.log("Listado de pacientes tras reasignación:", reasignaPacientesAMedicoFamilia(pacientes));

//APARTADO 4
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    return pacientes.some(paciente => paciente.especialidad === "Pediatra");
};

console.log("Apartado 4:");
console.log("Hay pacientes de pediatría?:", HayPacientesDePediatria(pacientes));

//APARTADO 5
interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
}

let medicoFamilia = 0;
let pediatria = 0;
let cardiologia = 0;

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
    pacientes.forEach(paciente => {
        if (paciente.especialidad === "Medico de familia"){
            medicoFamilia++;
        } else if (paciente.especialidad === "Pediatra"){
            pediatria++;
        } else {
            cardiologia++; 
        }
    });

    return {
        medicoDeFamilia: medicoFamilia,
        pediatria: pediatria,
        cardiologia : cardiologia,
    }
};

console.log("Apartado 5:");
console.log("Cuántos pacientes hay por especialidad?", cuentaPacientesPorEspecialidad(pacientes));