const PORT = 3000
const BASE_URL = `http://localhost:${PORT}`; 

module.exports= {
    BASE_URL,
    fetchData: async (url) => {
        const response = await fetch(url);
        return response.json();
    } ,
    PORT,
};  


