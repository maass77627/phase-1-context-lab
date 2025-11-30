/* Your Code Here */

function createEmployeeRecord(employee) {
    let newEmployee = {
        firstName: employee.firstName,
        familyName: employee.familyName,
        title: employee.title,
        payPerHour: employee.payPerHour,
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
    let hour = dateTime.split(" ")[1].slice(0,2)
    console.log(hour)
    let date = dateTime.split(" ")[0]
    console.log(date)
    let timeIn = {
        type: "TimeIn",
        hour: hour,
        date: date,
    }
    return timeIn
}

function createTimeOutEvent() {

}

function hoursWorkedOnDate() {

}

function wagesEarnedOnDate() {

}

// function allWagesFor() {

// }

function findEmployeeByFirstName() {

}

function calculatePayroll() {

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





