const cardInserted = prompt("Вы вставили карту?")
const balance = prompt("Ваш баланс?")

const amount = prompt("С какой суммой хотите провести операцию?")

if (amount <= balance && cardInserted == "да"){
    console.log("Операция выполняется")
}
else{
    console.log("Операция отклонена")
}