import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';

const app = express();
const niftyMonthly = "https://webapi.niftytrader.in/webapi/option/fatch-option-chain?symbol=nifty&expiryDate=2024-11-28"
const bankMonthly = "https://webapi.niftytrader.in/webapi/option/option-chain-data?symbol=banknifty&exchange=nse&expiryDate="
const finMonthly = "https://webapi.niftytrader.in/webapi/option/fatch-option-chain?symbol=finnifty&expiryDate=2024-11-26"

const niftyAPI = "https://webapi.niftytrader.in/webapi/option/fatch-option-chain?symbol=nifty&expiryDate=";
const finAPI = "https://webapi.niftytrader.in/webapi/option/fatch-option-chain?symbol=finnifty&expiryDate=";
const bankAPI = "https://webapi.niftytrader.in/webapi/option/option-chain-data?symbol=banknifty&exchange=nse&expiryDate=";
const indexAPI = "https://webapi.niftytrader.in/webapi/symbol/stock-index-data";

const niftyPcrWeekly = 'https://services.niftytrader.in/webapi/option/oi-pcr-data?type=niftypcr&expiry=';
const bankPcrWeekly = 'https://services.niftytrader.in/webapi/option/oi-pcr-data?type=bankniftypcr&expiry=';
const finPcrWeekly = 'https://services.niftytrader.in/webapi/option/oi-pcr-data?type=finniftypcr&expiry=';
const token = 'bmlmdHlhcGl1c2VyOm5pZnR5YXBpdXNlckAyMTEwIw==';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${token}`
}

app.use(cors()); // Enable CORS for all requests

app.get('/api/index-all', async (req, res) => {
    try {
        const response = await fetch(indexAPI);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching stock data' });
    }
});
app.get('/api/nifty-weekly', async (req, res) => {
    try {
        const response = await fetch(niftyAPI);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching stock data' });
    }
});

app.get('/api/nifty-monthly', async (req, res) => {
    try {
        const response = await fetch(niftyMonthly);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching stock data' });
    }
});

app.get('/api/bank-weekly', async (req, res) => {
    try {
        const response = await fetch(bankAPI);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching stock data' });
    }
});

app.get('/api/bank-monthly', async (req, res) => {
    try {
        const response = await fetch(bankMonthly);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching stock data' });
    }
});


app.get('/api/fin-weekly', async (req, res) => {
    try {
        const response = await fetch(finAPI);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching stock data' });
    }
});

app.get('/api/fin-monthly', async (req, res) => {
    try {
        const response = await fetch(finMonthly);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching stock data' });
    }
});

app.get('/api/nifty-pcr', async (req, res) => {
    try {
        const response = await fetch(niftyPcrWeekly, { headers: headers });
        const data = await response.json();
        res.json(data.result.oiDatas);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching stock data' });
    }
});

app.get('/api/bank-pcr', async (req, res) => {
    try {
        const response = await fetch(bankPcrWeekly, { headers: headers });
        const data = await response.json();
        res.json(data.result.oiDatas);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching stock data' });
    }
});
app.get('/api/fin-pcr', async (req, res) => {
    try {
        const response = await fetch(finPcrWeekly, { headers: headers });
        const data = await response.json();
        res.json(data.result.oiDatas);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching stock data' });
    }
});


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
