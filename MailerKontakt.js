const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// SMTP konfiguracija
const transporter = nodemailer.createTransport({
    host: 'mail.martini-vesto.com', // SMTP server vašeg domena
    port: 465, // SSL port
    secure: true, // Koristi SSL
    auth: {
        user: 'web@martini-vesto.com', // Email nalog
        pass: 'Web#2025#MV', // Lozinka email naloga
    },
});

// Korenska ruta za GET zahtev
app.get('/', (req, res) => {
    res.send('Server radi! Pokušajte POST /send-email za slanje emaila.');
});

// Endpoint za slanje emaila
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Validacija ulaznih podataka
    if (!name || !message) {
        return res.status(400).send('Ime i poruka su obavezna polja!');
    }

    try {
        // Kreiranje tela e-maila
        let emailText = `Ime: ${name}\n\nPoruka:\n${message}`;
        if (email) {
            emailText += `\n\nEmail: ${email}`;
        }

        // Slanje emaila
        await transporter.sendMail({
            from: 'web@martini-vesto.com', // Adresa pošiljaoca
            to: 'lazar.vujovic1993@gmail.com', // Adresa primaoca
            subject: `Poruka od ${name}`, // Naslov emaila
            text: emailText,
        });

        console.log(`Email poslat od: ${name}`);
        res.status(200).send('Email poslat!');
    } catch (error) {
        console.error('Greška prilikom slanja emaila:', error);
        res.status(500).send('Došlo je do greške prilikom slanja emaila.');
    }
});

// Pokretanje servera
const PORT = 3004;
app.listen(PORT, () => {
    console.log(`Server radi na portu ${PORT}`);
});
