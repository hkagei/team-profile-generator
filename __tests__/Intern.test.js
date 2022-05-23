const Intern = require('../lib/Intern');

test ('creates an Intern object', () => {
    const intern = new Intern('Hiro', 19921022, 'k_dawg_1022@hotmail.com', 'UofU');
    
    expect(intern.school).toEqual(expect.any(String));
})

test ('gets school name', () => {
    const intern = new Intern('Hiro', 19921022, 'k_dawg_1022@hotmail.com', 'UofU');

    expect(intern.school).toEqual(expect.stringContaining(intern.school.toString()));
})

test ('gets role of employee', () => {
    const intern = new Intern('Hiro', 19921022, 'k_dawg_1022@hotmail.com');

    expect(intern.getRole()).toEqual("Intern");
    
})
