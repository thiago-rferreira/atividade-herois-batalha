const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 6000;

// Configuração do banco de dados
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'heroes_db',
    password: 'ds564',
    port: 5432,
});

// Middleware para análise de JSON
app.use(express.json());

// Rota para obter todos os heróis
app.get('/heroes', async (req, res) => {
    try {
        const rows = await pool.query('SELECT * FROM heroes');
        res.status(200).json({
            count: rows.rowCount,
            heroes: rows.rows,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para adicionar um novo herói
app.post('/heroes', async (req, res) => {
    const { name, power, level, hp } = req.body;
    try {
        const queryText = 'INSERT INTO heroes (name, power, level, hp) VALUES ($1, $2, $3, $4)';
        await pool.query(queryText, [name, power, level, hp]);
        res.status(201).json({ message: 'Hero added successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para atualizar um herói
app.put('/heroes/:id', async (req, res) => {
    const { id } = req.params;
    const { name, power, level, hp } = req.body;
    try {
        const queryText = 'UPDATE heroes SET name = $1, power = $2, level = $3, hp = $4 WHERE id = $5';
        await pool.query(queryText, [name, power, level, hp, id]);
        res.json({ message: 'Hero updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para deletar um herói
app.delete('/heroes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const queryText = 'DELETE FROM heroes WHERE id = $1';
        await pool.query(queryText, [id]);
        res.json({ message: 'Hero deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para obter um herói específico
app.get('/heroes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await pool.query('SELECT * FROM heroes WHERE id = $1', [id]);
        if (!rows.length) {
            res.status(404).json({ message: 'Hero not found' });
        } else {
            res.json(rows[0]);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para obter todos os heróis de um determinado nível
app.get('/heroes/level/:level', async (req, res) => {
    const { level } = req.params;
    try {
        const { rows } = await pool.query('SELECT * FROM heroes WHERE level = $1', [level]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para obter todos os heróis com um determinado poder
app.get('/heroes/power/:power', async (req, res) => {
    const { power } = req.params;
    try {
        const { rows } = await pool.query('SELECT * FROM heroes WHERE power = $1', [power]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para realizar uma batalha entre dois heróis, por params
app.get('/battles/:hero1_id/:hero2_id', async (req, res) => {
    const { hero1_id, hero2_id } = req.params;

    try {
        // Lógica para calcular o vencedor da batalha
        const winnerId = await calculateWinner(hero1_id, hero2_id);

        // Insere o registro da batalha na tabela battles
        await pool.query('INSERT INTO battles (hero1_id, hero2_id, winner_id) VALUES ($1, $2, $3)', [hero1_id, hero2_id, winnerId]);

        //exibe o vencedor (todos os dados) e a mensagem de sucesso de registro
        const { rows } = await pool.query('SELECT * FROM heroes WHERE id = $1', [winnerId]);
        res.json({ winner: rows[0], message: 'Battle registered successfully' });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Função para calcular o vencedor da batalha entre dois heróis
async function calculateWinner(hero1Id, hero2Id) {
    // Lógica para calcular o vencedor da batalha
    const hero1 = await pool.query('SELECT * FROM heroes WHERE id = $1', [hero1Id]);
    const hero2 = await pool.query('SELECT * FROM heroes WHERE id = $1', [hero2Id]);
    //maior level ganha
    if (hero1.rows[0].level > hero2.rows[0].level) {
        return hero1Id;
    } else if (hero1.rows[0].level < hero2.rows[0].level) {
        return hero2Id;
    } else {
        //se o level for igual, maior hp ganha
        if (hero1.rows[0].hp > hero2.rows[0].hp) {
            return hero1Id;
        } else if (hero1.rows[0].hp < hero2.rows[0].hp) {
            return hero2Id;
        } else {
            //se o hp for igual, o primeiro herói ganha
            return hero1Id;
        }
    }
}

// Rota para obter o histórico de batalhas
app.get('/battles', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM battles');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para obter o historico de batalhas com os dados dos herois
app.get('/battles/heroes', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT battles.id, hero1_id, hero2_id, winner_id, heroes.name as winner_name, heroes.power as winner_power, heroes.level as winner_level, heroes.hp as winner_hp FROM battles INNER JOIN heroes ON battles.winner_id = heroes.id');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



//Rota de teste
app.get('/', (req, res) => {
    res.send('<h3>O backend está online 🚀</h3><img src="https://images3.memedroid.com/images/UPLOADED371/5ac950894b422.jpeg" alt="Homem Aranha" width=300px>');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} 🚀`);
});
