const button = document.getElementById('randomize-button');
const result = document.getElementById('result');

result.innerHTML = `<p>&nbsp;</p>`;

button.addEventListener('click', () => {
    
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let food = '';
    if (randomNumber === 1) {
        food = 'schabowy';
    } else if (randomNumber === 2) {
        food = 'rosół';
    } else if (randomNumber === 3) {
        food = 'pizza';
    } else if (randomNumber === 4) {
        food = 'burger';
    } else if (randomNumber === 5) {
        food = 'naleśniki ze srem na słodko';
    } else if (randomNumber === 6) {
        food = 'placki ziemniadczane z sosem borowikowym';
    } else if (randomNumber === 7) {
        food = 'jajecznica z pomidorami';
    } else if (randomNumber === 8) {
        food = 'pierogi z mięsem lub ruskie, lub z nie wiem czym';
    } else if (randomNumber === 9) {
        food = 'rolada, sos, kluski śląskie';
    } else if (randomNumber === 10) {
        food = 'zapiekanka makaronowa z wędzonką, brokułami, serem, kurczakiem'
    };
    result.innerHTML = `<p>&nbsp;</p>`;
    result.innerHTML = `<p>Wylosało Ci się takie cóś: ${food}.<p>`;
})