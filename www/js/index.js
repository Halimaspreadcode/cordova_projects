document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}

function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight && height) {
        height = height / 100; // Convert height from cm to meters
        var bmi = weight / (height * height);
        bmi = bmi.toFixed(2);

        var resultText = '';
        if (bmi < 18.5) {
            resultText = 'Insuffisance pondérale';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultText = 'Corpulence normale';
        } else if (bmi >= 25 && bmi <= 29.9) {
            resultText = 'Surpoids';
        } else {
            resultText = 'Obésité';
        }

        document.getElementById('result').innerHTML = `Votre IMC est ${bmi} (${resultText})`;
    } else {
        document.getElementById('result').innerHTML = 'Veuillez entrer votre poids et votre taille';
    }
}
