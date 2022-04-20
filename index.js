import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.listen(4100, () => {

    console.log('Server running on port 4100');
});

app.get('/holidays', (req, res) => {

    res.send(getHolidays());
});

app.get('/holidays/:month', (req, res) => {

    const { month } = req.params; // req.params.month
    const holidayMonth = getHolidays().filter(holiday => {

        const getMonth = holiday.date.split("/")[0];
        return getMonth === month ? true : false;
    });

    res.send(holidayMonth);
});

app.get('/is-today-holiday', (req, res) => {

    const today = new Date().toLocaleDateString();
    const holiday = getHolidays().find(holi => holi.date === today);
    holiday ? res.send(`Yes, today is holiday ${holiday.name}`) : res.send(`No, today is not holiday`);
});

function getHolidays() {

    const holidays = [

        { date: "1/1/2022", name: "Confraternização mundial" },
        { date: "1/3/2022", name: "Carnaval" },
        { date: "4/17/2022", name: "Páscoa" },
        { date: "4/21/2022", name: "Tiradentes" },
        { date: "5/1/2022", name: "Dia do trabalho" },
        { date: "6/16/2022", name: "Corpus Christi" },
        { date: "9/7/2022", name: "Independência do Brasil" },
        { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
        { date: "11/2/2022", name: "Finados" },
        { date: "11/15/2022", name: "Proclamação da República" },
        { date: "12/25/2022", name: "Natal" }
    ];
    
    return holidays;
}
