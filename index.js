import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/holidays', (req, res) => {

    res.send(getHolidays());
});

app.get('/is-today-holiday', (req, res) => {

    const today = new Date();
    const format = today.toLocaleDateString();

    const holiday = getHolidays().find(holi => holi.date === format);
    holiday ? res.send(`Yes, today is holiday ${holiday.name}`) : res.send(`No, today is not holiday`);
});

app.listen(4100);

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
