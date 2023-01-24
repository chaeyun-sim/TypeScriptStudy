;
// Employee Data
var e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
// function for adding
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = add('Max', 'Schwarz');
result.split(' ');
var fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
console.log(fetchedUserData.job.title);
// // Admin or Employee = UnknownEmployee
// type UnknownEmployee = Employee | Admin;
// // function for printing employee's information
// function printEmployeeInformation(emp: UnknownEmployee){
//     console.log('Name: ' + emp.name);
//     if ('privileges' in emp){
//         console.log('Privileges: ' + emp.privileges);   
//     }
//     if ('startDate' in emp){
//         console.log('Start Date: ' + emp.startDate);   
//     }
// }
// printEmployeeInformation({
//     name: 'Jane',
//     startDate: new Date()
// });
// class Car {
//     driver() {
//         console.log('Driving...')
//     }
// }
// class Truck {
//     driver(){
//         console.log('Driving a truck...')
//     }
//     loadCargo(amount: number){
//         console.log('Loading cargo ...' + amount)
//     }
// }
// type Vehicles = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicles){
//     vehicle.driver();
//     // if('loadCargo' in vehicle){
//     if (vehicle instanceof Truck){
//         vehicle.loadCargo(1000);
//     }
// }
// useVehicle(v1);
// useVehicle(v2);
// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }
// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal){
//     let speed;
//     if (animal.type == 'bird') {
//         speed = animal.flyingSpeed;
//     }
//     if (animal.type == 'horse'){
//         speed = animal.runningSpeed;
//     }
//     console.log('Moving at speed: ' + speed);
// }
// moveAnimal({type: 'bird', flyingSpeed: 10})
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// const userInputElement = document.getElementById('user-input') as HTMLInputElement;
// userInputElement.value = 'Hi there!';
// interface ErrorContainer {
//     // { email: 'Not a valid email', username: 'Must start with a character.'}
//     [prop: string]: string;
// }
// const errorBag: ErrorContainer = {
//     email: 'Not a valid email',
//     username: 'Must start with a character'
// }
