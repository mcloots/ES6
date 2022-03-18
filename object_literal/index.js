function addressMaker(city, state) {
    //const newAddress = {newCity: city, newState: state};
    //object literals
    //als de keys hetzelfde zijn, hoef je die niet meer te gebruiken
    const newAddress = {city, state};
    console.log(newAddress);
}

addressMaker('Geel','Antwerpen');