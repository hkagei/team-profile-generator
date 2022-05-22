const Manager = require('../lib/Manager');

test ('creates a Manager object', () => {
    const manager = new Manager('Hiro', 19921022, 'k_dawg_1022@hotmail.com', 0);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test ('gets role of employee', () => {
    const manager = new Manager('Hiro', 19921022, 'k_dawg_1022@hotmail.com');

    expect(manager.getRole()).toEqual("Manager");
    
})
