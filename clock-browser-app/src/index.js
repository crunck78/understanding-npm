setInterval(
    () => document.getElementById("clock").innerHTML = moment().format('LTS'),
    1000
);