// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Max',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: 
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR }

const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
}

// let favoriteActivities = any[];
// favoriteActivities = ['SPORT'];

if (person.role == Role.ADMIN) {
    console.log('is admin')
} 