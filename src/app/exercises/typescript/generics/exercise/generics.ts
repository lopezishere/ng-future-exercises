/* eslint-disable @typescript-eslint/no-unused-vars */
function identity<Type>(arg: Type): Type {
  return arg
}

class Generic<Retorno, Type = string> {
  foo?: Type
  bar(x: Type): Retorno {
    return x as unknown as Retorno
  }
}

interface Employee {
  name: string
  age?: number
  lastName: string
  work: number | null
}

// Tipo que sólo mantiene las variables name y lastName de la interfaz Employee
type NamedEmployee = Pick<Employee, 'name' | 'lastName'>

// Tipo que no tiene la variable work de la interfaz Employee
type ExcepWorkEmployee = Omit<Employee, 'work'>

// Tipo que no tiene la variable work ni la edad y que añade una fecha
type ExcepWorkAgeWithDateEmployee = Omit<Employee, 'work' | 'age'> & { fecha: string }

const yo: NamedEmployee = {
  name: 'Javier',
  lastName: 'López',
}

const prueba: ExcepWorkAgeWithDateEmployee = {
  name: 'prueba',
  lastName: 'prueba2',
  fecha: Date(),
}
