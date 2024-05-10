const getQuote = async () => {

        let res = fetch(`https://zenquotes.io/api/random`);
        res.then((data_promise_1) => { return data_promise_1.json(); })
            .then((data) => {
                document.getElementById("outquote").innerHTML = `${data[0].q}`;
                document.getElementById("outauthor").innerHTML = `By : ${data[0].a}`;
                console.log(data[0].q);
            })

    .catch(error => {
        document.getElementById("outquote").innerHTML = "Opps Network's bussy";
        document.getElementById("outauthor").innerHTML = `By : Web server *_*`
    })
}

getQuote();