# Validação de E-mail em Formulário HTML

## Introdução  
A validação de campos em formulários é essencial para garantir a integridade dos dados fornecidos pelos usuários. Este projeto implementa um sistema de validação para um campo de e-mail em HTML, utilizando JavaScript para verificar se o formato do e-mail está correto. Essa abordagem melhora a experiência do usuário e reduz erros no armazenamento de informações.  

Além da validação de e-mail, o conceito pode ser aplicado para verificar senhas, garantindo segurança no login. Em casos de validação de credenciais (e-mail e senha), recomenda-se exibir uma mensagem genérica, como: **"E-mail ou senha inválidos"**, para evitar exposição de informações sensíveis.  

## Métodos  
O projeto foi desenvolvido no editor online [Playcode.io](https://playcode.io/) e organizado em três arquivos distintos:  

- **index.html**: Estrutura do formulário contendo o campo de e-mail e um botão de envio.  
- **style.css**: Estilização do formulário para garantir uma interface amigável.  
- **script.js**: Validação do campo de e-mail e exibição de mensagens de erro ou sucesso.  

O código JavaScript captura o evento de envio do formulário e verifica se o e-mail informado segue o formato correto. Caso esteja incorreto, uma mensagem de erro é exibida para orientar o usuário.  