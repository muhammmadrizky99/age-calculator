function calculate() {
    setInterval(() => {
        // Input birthdate
        let birthdate = new Date(document.getElementById('birthdate').value);

        // getTime: returns the number of milliseconds since January 1, 1970
        let now = new Date();
        let ageInMs = now.getTime() - birthdate.getTime();

        let ageInS = ageInMs / 1000;
        let ageInMins = ageInS / 60;
        let ageInHrs = ageInMins / 60;
        let ageInDays = ageInHrs / 24;
        let ageInMonths = ageInDays / 30.4375;
        let ageInYears = ageInMonths / 12;

        document.querySelector('#years').textContent = Math.floor(ageInYears);
        document.querySelector('#months').textContent = Math.floor(ageInMonths);
        document.querySelector('#days').textContent = Math.floor(ageInDays);
        document.querySelector('#hours').textContent = Math.floor(ageInHrs);
        document.querySelector('#minutes').textContent = Math.floor(ageInMins);
        document.querySelector('#seconds').textContent = Math.floor(ageInS);
        document.querySelector('#seconds').style.borderBottom = '1px solid grey';
    }, 1000);
}

function reset() {
    window.location.reload();
}
