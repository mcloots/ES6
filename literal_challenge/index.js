// function addressMaker(address) {
//     const newAddress = {
//         city: address.city,
//         state: address.state,
//         country: 'Belgium'
//     }
// };

// addressMaker({city: 'Geel', state: 'Antwerpen'});

//End goal: console log city, state & country

function addressMaker(address) {
    const {city, state} = address;
    const newAddress = {
        city,
        state,
        country: 'Belgium'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

addressMaker({city: 'Geel', state: 'Antwerpen'});