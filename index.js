


function createEmployeeRecord(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
            title: employee[2],
            payPerHour: employee[3],
            timeInEvents: [],
            timeOutEvents: []
        
    }
}

function createEmployeeRecords(employees) {
    
   let employeeRecords = employees.map((employee) => createEmployeeRecord(employee))
    return employeeRecords

}

function createTimeInEvent(dateStamp) {
    let hour = parseInt(dateStamp.split(" ")[1])
    let date = dateStamp.split(" ")[0]
    this.timeInEvents.push({
        type: "TimeIn",
        hour: hour,
        date: date,
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    let hour = parseInt(dateStamp.split(" ")[1])
    let date = dateStamp.split(" ")[0]
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: hour,
        date: date,
    })
    return this
}


function hoursWorkedOnDate(date) {
let timein = this.timeInEvents.find((event) => event.date === date)
let timeout = this.timeOutEvents.find((event) => event.date === date)

let intime = timein.hour
let outtime = timeout.hour
let hoursworked = (outtime - intime) / 100
return hoursworked
console.log(intime)

}


function wagesEarnedOnDate(date) {
let hours = hoursWorkedOnDate.call(this,date)
        return hours * this.payPerHour
}

function allWagesFor() {
  let dates = this.timeInEvents.map((event) => event.date)
 return dates.reduce((accum, date) => accum + wagesEarnedOnDate.call(this,date) ,0)
}

function findEmployeeByFirstName(employeeRecords, firstName) {
 let employee = employeeRecords.find((employee) => employee.firstName === firstName)
 return employee
}

function calculatePayroll(employeeRecords) {
   let total = employeeRecords.reduce((accum, employee) => accum + allWagesFor.call(employee),0)
   return total


}




