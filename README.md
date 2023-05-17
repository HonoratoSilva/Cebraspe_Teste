# Cebraspe_Teste
Teste Prático para Seleção de Desenvolvedor React

# Premissas: 
•	A aplicação deverá ser desenvolvida com a biblioteca React;
•	A aplicação deverá possuir 2 páginas: uma para listar os retornados pela API e outra contendo um formulário para inserir novos dados;
•	A página de listagem deverá exibir todos os registros retornados pelo método GET da API e conter um botão para adicionar novos registros que levará o usuário para a tela de cadastro;
•	Após o cadastro deverá ser feita uma requisição POST para a API, exibindo as mensagens de erro que a API eventualmente retornar;
•	Ao preencher o campo CEP deve-se realizar uma consulta à API BuscaCEP dos Correios e preencher os campos Logradouro, Cidade, Bairro e UF com o resultado;
•	Deverá ser feita a validação dos campos antes de enviá-los para a API;
•	É permitida a utilização de bibliotecas externas e frameworks CSS (Bootstrap, Tailwind, Chakra UI, entre outros);

# Detalhamento dos campos:
•	Nome do evento: Texto não vazio
•	Website: Texto não vazio
•	Data das provas: Deve ser entre 30 e 365 dias a partir de hoje
•	Número máximo de candidatos: Número entre 1 e 450
•	CEP: -> Número de 8 dígitos sem traços ou pontos
•	Logradouro: Texto não vazio e bloqueado para edição
•	Cidade: Texto não vazio e bloqueado para edição
•	Bairro: Texto não vazio e bloqueado para edição
•	UF: Texto não vazio e bloqueado para edição
•	Número: Número
•	Complemento: Texto opcional
•	Imagem: Enviar um link de uma imagem no formato .png ou .jpg
