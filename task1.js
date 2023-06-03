// // name: "Alice Johnson",
// // results: [
// //     { subject: "Math", marks: 82 },
// //     { subject: "English", marks: 95 },
// //     { subject: "Science", marks: 88 },
// //     // Add more subjects and marks for Alice Johnson
// // ]
// // },
// // {
// // name: "Robert Davis",
// // results: [
// //     { subject: "Math", marks: 78 },
// //     { subject: "English", marks: 82 },
// //     { subject: "Science", marks: 79 },
// //     // Add more subjects and marks for Robert Davis
// // ]
// // },
// // {
// // name: "Emily Wilson",
// // results: [
// //     { subject: "Math", marks: 92 },
// //     { subject: "English", marks: 86 },
// //     { subject: "Science", marks: 94 },
// //     // Add more subjects and marks for Emily Wilson
// // ]
// // },
// // {
// // name: "Michael Brown",
// // results: [
// //     { subject: "Math", marks: 87 },
// //     { subject: "English", marks: 90 },
// //     { subject: "Science", marks: 83 },
// //     // Add more subjects and marks for Michael Brown
// // ]
// // },
// // {
// // name: "Olivia Taylor",
// // results: [
// //     { subject: "Math", marks: 79 },
// //     { subject: "English", marks: 91 },
// //     { subject: "Science", marks: 84 },
// //     // Add more subjects and marks for Olivia Taylor
// // ]
// // },
// // {
// // name: "James Anderson",
// // results: [
// //     { subject: "Math", marks: 86 },
// //     { subject: "English", marks: 84 },
// //     { subject: "Science", marks: 90 },
// //     // Add more subjects and marks for James Anderson
// // ]
// // },
// // {
// // name: "Sophia Martinez",
// // results: [
// //     { subject: "Math", marks: 93 },
// //     { subject: "English", marks: 79 },
// //     { subject: "Science", marks: 88 },
// //     // Add more subjects and marks for Sophia Martinez
// // ]
// // },
// // {
// // name: "Benjamin Thomas",
// // results: [
// //     { subject: "Math", marks: 88 },
// //     { subject: "English", marks: 83 },
// //     { subject: "Science", marks: 91 },
// //     // Add more subjects and marks for Benjamin Thomas
// // ]
// // }
// // ]

// var studentchart = document.getElementById('chart')

// for (var i=o, i < userResult.length; i++;)
// {var result = userResult[i]
// var mathsNumber = result.results[0].marks
// var engNumber = result.results[1].marks
// var sciNumber = result.results[2].marks
// var total = mathsNumber + engNumber + sciNumber
// var perc = (total / 300) * 100
   
//     var resultRow = `<tr> <td></td>
//     <td>${i + 1}</td>
//     <td>${result.name}</td>
//     <td>${mathsNumber}</td>
//     <td>${engNumber}</td>
//     <td>${sciNumber}</td>
//     <td>${total}</td>
//     <td>${perc.toFixed(2)}</td>
   
// </tr>`
// studentchart.innerHTML += resultRow
// }

// var sortedArray = userResult.sort(function(){})


var x = {

    one: 'one'
}

var y = x
y.two = 'two'

console.log(x)
console.log(y)