async function getNationality() {
    const name = document.getElementById('nameInput').value;
    const response = await fetch(`https://api.nationalize.io?name=${name}`);
    const data = await response.json();
    
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    data.country.forEach(country => {
        let countryElement = document.createElement('div');
        countryElement.className = 'country';

        let flag = document.createElement('img');
        flag.src = `https://flagcdn.com/48x36/${country.country_id.toLowerCase()}.png`;
        flag.alt = country.country_id;

        let probability = document.createElement('span');
        probability.textContent = ` (${(country.probability * 100).toFixed(2)}%)`;

        countryElement.appendChild(flag);
        countryElement.appendChild(probability);
        resultDiv.appendChild(countryElement);
    });
}
