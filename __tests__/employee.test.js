const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Hiro', 19921022, 'k_dawg_1022@hotmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Hiro', 19921022, 'k_dawg_1022@hotmail.com');
    
    expect(employee.name).toEqual(expect.any(String));  
})
