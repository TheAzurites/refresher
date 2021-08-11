const axios = require('axios');
module.exports = async function (context, myTimer) {
    
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
    const results = response.data;
    context.log(results);
};