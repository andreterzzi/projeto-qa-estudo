# Caso de Teste – Login

## CT-001 – Login com credenciais válidas

*Objetivo:*  
Validar que o usuário consegue acessar o sistema com credenciais válidas.

*Pré-condições:*  
- Usuário cadastrado no sistema  
- Sistema disponível  

*Passos:*  
1. Acessar a página de login  
2. Informar e-mail válido  
3. Informar senha válida  
4. Clicar no botão "Entrar"  

*Resultado esperado:*  
- Usuário autenticado com sucesso  
- Redirecionamento para a página inicial  

---

## CT-002 – Login com senha inválida

*Objetivo:*  
Validar que o sistema bloqueia acesso com senha incorreta.

*Passos:*  
1. Acessar a página de login  
2. Informar e-mail válido  
3. Informar senha inválida  
4. Clicar no botão "Entrar"  

*Resultado esperado:*  
- Exibição de mensagem de erro  
- Usuário permanece na tela de login