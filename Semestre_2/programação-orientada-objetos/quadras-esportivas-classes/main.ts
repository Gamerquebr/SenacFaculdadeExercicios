import { Quadra } from "./classes/quadra"
import { Reserva } from "./classes/reserva";

import Prompt from "prompt-sync";
const prompt = Prompt()

function main(){

    const teste = new Quadra(1, "volei", ["07:00","17:00"], "canoas") 
    console.log("Criando horários entre 07:00 e 17:00")
    console.log("Horários:")
    console.log(teste.obterHorarios())
    console.log(teste.obterHorarios("n"))

    console.log("Reservando horários entre 13:30 e 15:00")
    console.log("Horários Reservados:")
    teste.reservar(["13:30","15:00"])
    console.log(teste.obterHorariosReservados())
    console.log(teste.obterHorariosReservados("n"))

    console.log("Adicionando um interalo entre 12:00 e 13:00")
    console.log("Horários com Intervalo:")
    teste.criarIntervalo(["12:00","13:00"])
    console.log(teste.obterHorarios())
    console.log(teste.obterHorarios("n"))
}

main()
