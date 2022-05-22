const Engineer = require('../lib/Engineer');

test ('creates an engineer object', () => {
    const engineer = new Engineer('Hiro', 19921022, 'k_dawg_1022@hotmail.com');
    

})

test ('', () => {
    
})

test ('gets role of employee', () => {
    const engineer = new Engineer('Hiro', 19921022, 'k_dawg_1022@hotmail.com');

    expect(engineer.getRole()).toEqual("Engineer");
    
})
