import { create } from 'zustand'
import axios from 'axios'

const showStore = create((set) => ({
    graphData: [],
    dataRes: null,

    fetchData: async (id) => {
        const [graphRes, dataRes] = await Promise.all([
            axios.get(
                `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=121`
                ),
            axios.get(
                `https://api.coingecko.com/api/v3/coins/${id}?market_data=true`
                )
        ]);

        const graphData = graphRes.data.prices.map(price => {
            const [ timestamp, p ] = price;
            const date = new Date(timestamp).toLocaleDateString("en-us");
            const round_price = parseFloat(p).toFixed(3);
            return {
                Date: date,
                Price: round_price,
            };
        });

        set({ graphData, dataRes });

        //console.log(dataRes)
    },

}));
    
export default showStore