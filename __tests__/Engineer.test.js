const Engineer = require('../lib/Engineer');

test ('creates an engineer object', () => {
    const engineer = new Engineer('Hiro', 19921022, 'k_dawg_1022@hotmail.com', 'hkagei');

    expect(engineer.github).toEqual(expect.any(String));
})

test ('gets engineer github value', () => {
    const engineer = new Engineer('Hiro', 19921022, 'k_dawg_1022@hotmail.com', 'hkagei');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

test ('gets role of employee', () => {
    const engineer = new Engineer('Hiro', 19921022, 'k_dawg_1022@hotmail.com');

    expect(engineer.getRole()).toEqual("Engineer");
    
})
