const axios = require('axios');
module.exports = async function (context, myTimer) {
    
    const response = await axios.get("http://localhost:44359/api/Flights/outgoing")
    const results = response.data;
    context.log(results);
};