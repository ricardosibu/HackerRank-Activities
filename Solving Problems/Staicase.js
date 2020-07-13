const n = 6;

for (let i = 1; i <= n; i++) {
    let symbol ='#'.repeat(i).padStart(n);
    console.log(symbol);
}