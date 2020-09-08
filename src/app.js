console.log("App.js is running")

//JSx- Javascript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in hand of a computer'
}

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
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
        {false}
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
)
var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)

