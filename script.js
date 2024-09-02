// your code here
document.getElementById('button').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;
    
    let newUrl = "https://localhost:8080/";

    if (name) {
        newUrl += `?name=${encodeURIComponent(name)}`;
        if (year) {
            newUrl += `&year=${year}`;
        }
    } else if (year) {
        newUrl += `?year=${year}`;
    }

    document.getElementById('url').textContent = newUrl;
});
