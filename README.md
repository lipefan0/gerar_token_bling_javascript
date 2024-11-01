# Gerador de Token

Este projeto contém uma função `generateToken` que gera um token de autenticação usando as credenciais fornecidas.

## Como usar

### Pré-requisitos

- Node.js instalado na sua máquina

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/lipefan0/gerar_token_bling_javascript.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd seu-repositorio
   ```

## Uso

1. Abra o arquivo `index.js` e substitua `YOUR_CLIENT`, `YOUR_SECRET` e `YOUR_CODE` com suas credenciais e código:

```javascript
const client_id = "YOUR_CLIENT";
const client_secret = "YOUR_SECRET";
const code = "YOUR_CODE";
```

2. Execute o arquivo `index.js` usando Node.js:

```bash
node index.js
```

## Exemplo de Código

```javascript
async function generateToken(client_id, client_secret, code) {
  // Transforma as credenciais em base64
  const credentials = Buffer.from(`${client_id}:${client_secret}`).toString(
    "base64"
  );

  const response = await fetch("https://www.bling.com.br/Api/v3/oauth/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: new URLSearchParams({
      code: code,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    console.log("Erro ao gerar token");
  }
}

// Exemplo de uso
const client_id = "YOUR_CLIENT";
const client_secret = "YOUR_SECRET";
const code = "YOUR_CODE";
generateToken(client_id, client_secret, code);
```

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Melhorias realizadas:

- Adicionei headers com níveis apropriados
- Organizei a estrutura de forma hierárquica
- Formatei os blocos de código corretamente
- Adicionei listas numeradas e com bullets onde apropriado
- Destaquei termos técnicos com backticks
- Adicionei um link para o arquivo de licença
- Incluí uma linha horizontal para separar o conteúdo principal
- Mantive espaçamento consistente entre as seções
