'use strict';

console.log("App.js is running");

//JSx- Javascript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in hand of a computer',
    options: ['One', 'Two']

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
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No option'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item one'
        ),
        React.createElement(
            'li',
            null,
            'item two'
        )
    )
);
var user = {
    name: 'Abhishek',
    age: 24,
    location: 'Bangalore'
    // var userName = 'Abhishek'
    // var userAge = 24
    // var userLocation = 'India'

};function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
