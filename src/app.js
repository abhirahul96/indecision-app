console.log("App.js is running")

//JSx- Javascript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in hand of a computer',
    options: ['One', 'Two']
}

// function getOptions(options) {
//     console.log(options)
//     if (options) {
//         return <div>
//             <p>Here are your option</p>
//             <ol>
//                 <li>{options[0]}</li>
//                 <li>{options[1]}</li>
//             </ol>
//         </div>
//     }
//     else {
//         return <p>No option</p>
//     }
// }
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No option'}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>)
var user = {
    name: 'Abhishek',
    age: 24,
    location: 'Bangalore'
}
// var userName = 'Abhishek'
// var userAge = 24
// var userLocation = 'India'

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)

