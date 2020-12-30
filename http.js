class Http{
    async get(curreny){
        let request = await fetch(`https://api.exchangeratesapi.io/latest?base=${curreny}`);
        let data = await request.json();

        return data;
    }
}