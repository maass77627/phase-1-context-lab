
function createEmployeeRecord(employee) {
    let newEmployee = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],
        }
   return newEmployee
}

function createEmployeeRecords(employees) {

 let newEmployees = employees.map((employee) => createEmployeeRecord(employee))
 return newEmployees
}

function createTimeInEvent(dateTime) {
    let hour = dateTime.split(" ")[1]
    let date = dateTime.split(" ")[0]
    
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date,
    })
    return this
}

function createTimeOutEvent(dateTime) {
     let hour = dateTime.split(" ")[1]
    let date = dateTime.split(" ")[0]
    
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date,
    })
    return this


}

function hoursWorkedOnDate(date) {
    let timeout = this.timeOutEvents.find((event) => event.date === date)
    let timein = this.timeInEvents.find((event) => event.date === date)
    let hoursworked = (timeout.hour - timein.hour) / 100
    return hoursworked

}

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this,date)
    return hours * this.payPerHour

}



function findEmployeeByFirstName(employees, firstName) {
    return employees.find((employee) => employee.firstName === firstName)

}

function calculatePayroll(employees) {
   return employees.reduce((accum, employee) =>  {
       return accum + allWagesFor.call(employee)
        
}, 0)

}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}





