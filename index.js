async function generateToken(client_id, client_secret, code) {
  const credentials = Buffer.from(`${client_id}:${client_secret}`).toString(
    "base64"
  ); // Transforma as credenciais em base64

  const response = await fetch("https://www.bling.com.br/Api/v3/oauth/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: new URLSearchParams({
      code: code,
      grant_type: "authorization_code",
    }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    console.log(response);
    console.log("Erro ao gerar token");
  }
}

// Exemplo de uso
const client_id = "";
const client_secret = "";
const code = "";
generateToken(client_id, client_secret, code);
