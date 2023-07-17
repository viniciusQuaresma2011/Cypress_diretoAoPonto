# Definir a imagem base
FROM cypress/included:latest

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de configuração e os testes
COPY package.json .
COPY cypress ./cypress

# Executar o comando de instalação das dependências
RUN npx cypress install --force

# Executar os testes
CMD ["npx", "cypress", "run"]


