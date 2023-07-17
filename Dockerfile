# Definir a imagem base
FROM cypress/included:latest

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de configuração e os testes
COPY ..

# Instalar as dependências
RUN npm install

# Executar os testes
CMD ["npm", "run", "cypress:run"]
