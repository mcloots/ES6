const personalInformation = {
    firstName: 'Michaël',
    lastName: 'Cloots',
    city: 'Geel',
    state: 'Antwerp',
    zipCode: 2440
};

//old way
console.log(`Old way: ${personalInformation.firstName} ${personalInformation.lastName}`);

// new way
// undefined if property doesn't match = case sensitive
const {firstName: fn, lastName: ln} = personalInformation;

console.log(`New way: ${fn} ${ln}`)