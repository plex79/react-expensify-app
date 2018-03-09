const add = (a, b) => {
    return a+b;
}

const generateGreeting = (name = 'Anonim') => `Hello ${name}`;

test('add two numbers', () => {
    const result = add(3,4);

    if(result !== 7) {
        throw new Error(`dodano 4 i 3. wynik to ${result}. powinno byc 7`);
    }
})

test('imie', () => {
    const wynik = generateGreeting('Maciek');

    expect(wynik).toBe('Hello Maciek');
});

test('imie anonima', ()=> {
    const wynik = generateGreeting();
    expect(wynik).toBe('Hello Anonim');
})