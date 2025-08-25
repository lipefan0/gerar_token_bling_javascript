async function generateToken(client_id, client_secret, code) {
  const credentials = Buffer.from(`${client_id}:${client_secret}`).toString(
    "base64"
  ); // Transforma as credenciais em base64

  // const response = await fetch("https://www.bling.com.br/Api/v3/oauth/token", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Basic ${credentials}`,
  //     "Content-Type": "application/x-www-form-urlencoded",
  //     Accept: "application/json",
  //   },
  //   body: new URLSearchParams({
  //     code: code,
  //     grant_type: "authorization_code",
  //   }),
  // });

  const response = await fetch("https://www.bling.com.br/Api/v3/oauth/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: new URLSearchParams({
      refresh_token: "b44546a4b48e1c519ed443341b353df2c75587a2",
      grant_type: "refresh_token",
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
const client_id = "e66960438ccb547a3c8ae1e2c266372ed843ff21";
const client_secret =
  "454fbb54c9b1a2e07014dd47b84b06064f03a00b99194586f4205bc932f0";
const code = "a24e11f605e2aaf68b79c21d40665a387e3671d5";
generateToken(client_id, client_secret, code);
