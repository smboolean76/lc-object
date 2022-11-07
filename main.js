// const person = [
//     'Samuele',
//     'Madrigali',
//     31,
//     false,
//     'm'
// ];

// const person = {
//     firstName: 'Samuele',
//     lastName: 'Madrigali',
//     age: 31,
//     isMarried: false,
//     genre: 'm',
//     friends: [
//         'Maurizio',
//         'Federico',
//         'Nicolò'
//     ],
//     fullName() {
//         return this.firstName + ' ' + this.lastName;
//     }
// };

// console.log(person.age);
// console.log(person['age']);

// person.city = 'Levanto';
// person['dateOfBirth'] = '23/08/1991';

// const key = prompt("Inserisci la chiave della proprietà che vuoi stampare");

// console.log(person[key]);

// for(let key in person) {
//     console.log(key, person[key]);
// }

// console.log(person.friends[0]);
// console.log(person.friends[1]);
// console.log(person.friends[2]);

// console.log(person.friends.length);

// for( let i = 0; i < person.friends.length; i++ ) {
//     console.log(person.friends[i]);
// }

// const post = {
//     user: 'Samuele Madrigali',
//     description: '🔝Ape time classe 76 #spritz',
//     tags: [
//         'Nicholas',
//         'Alessandro'
//     ],
//     data: '07/11/2022 18:02',
//     images: [
//         'img/spritz1.jpg',
//         'img/spritz2.jpg',
//         'img/spritz3.jpg',
//     ],
//     like: 23,
//     comments: [
//         {
//             name: 'Raimondo',
//             content: 'Bella raga! 🔝 la prossima volta invitate 😏'
//         },
//         {
//             name: 'Eleonora',
//             content: 'Bella raga che figata!!'
//         }
//     ]
// };


// const posts = [
//     {
//         user: 'Samuele Madrigali',
//         description: '🔝Ape time classe 76 #spritz',
//         tags: [
//             'Nicholas',
//             'Alessandro'
//         ],
//         data: '07/11/2022 18:02',
//         images: [
//             'img/spritz1.jpg',
//             'img/spritz2.jpg',
//             'img/spritz3.jpg',
//         ],
//         like: 23,
//         comments: [
//             {
//                 name: 'Raimondo',
//                 content: 'Bella raga! 🔝 la prossima volta invitate 😏'
//             },
//             {
//                 name: 'Eleonora',
//                 content: 'Bella raga che figata!!'
//             }
//         ]
//     },
//     {
//         user: 'Samuele Madrigali',
//         description: '🔝Ape time classe 76 #spritz',
//         tags: [
//             'Nicholas',
//             'Alessandro'
//         ],
//         data: '07/11/2022 18:02',
//         images: [
//             'img/spritz1.jpg',
//             'img/spritz2.jpg',
//             'img/spritz3.jpg',
//         ],
//         like: 23,
//         comments: [
//             {
//                 name: 'Raimondo',
//                 content: 'Bella raga! 🔝 la prossima volta invitate 😏'
//             },
//             {
//                 name: 'Eleonora',
//                 content: 'Bella raga che figata!!'
//             }
//         ]
//     },
//     {
//         user: 'Samuele Madrigali',
//         description: '🔝Ape time classe 76 #spritz',
//         tags: [
//             'Nicholas',
//             'Alessandro'
//         ],
//         data: '07/11/2022 18:02',
//         images: [
//             'img/spritz1.jpg',
//             'img/spritz2.jpg',
//             'img/spritz3.jpg',
//         ],
//         like: 23,
//         comments: [
//             {
//                 name: 'Raimondo',
//                 content: 'Bella raga! 🔝 la prossima volta invitate 😏'
//             },
//             {
//                 name: 'Eleonora',
//                 content: 'Bella raga che figata!!'
//             }
//         ]
//     }
// ]


const classes = [
    {
        name: 'Classe 76',
        totalStudents: 35
    },
    {
        name: 'Classe 77',
        totalStudents: 31
    },
    {
        name: 'Classe 78',
        totalStudents: 32
    }
];

// const nameNewClass = prompt("Inserisci il nome della nuova classe");
// const totalStudentsNewClass = Number(prompt("Inserisci il numero di studenti"));

// const newClass = {
//     name: nameNewClass,
//     totalStudents: totalStudentsNewClass
// };

// classes.push(newClass);

for(let i = 0; i < classes.length; i++) {
    const currentClass = classes[i];
    // console.log(currentClass.name);
    // const listItem = document.createElement('li');
    // listItem.innerHTML = currentClass.totalStudents;
    const listItem = `
        <li>
            <h4>${currentClass.name}</h4>
            <p>Totale studenti: ${currentClass.totalStudents}</p>
        </li>
    `;
    document.getElementById('classes-list').innerHTML += listItem;
}