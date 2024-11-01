async function generateToken(client_id, client_secret, code) {
    const credentials = Buffer.from(`${client_id}:${client_secret}`).toString('base64'); // Transforma as credenciais em base64

    const response = await fetch('https://www.bling.com.br/Api/v3/oauth/token', {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${credentials}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        body: new URLSearchParams({
            code: code
        })
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data);
    } else {
        console.log('Erro ao gerar token');
    }
}

// Exemplo de uso
const client_id = 'YOUR_CLIENT';
const client_secret = 'YOUR_SECRET';
const code = 'YOUR_CODE';
generateToken(client_id, client_secret, code);
