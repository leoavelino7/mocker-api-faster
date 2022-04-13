# V1
- [x] Setup da aplicação (NodeJS + Typescript + Express)
- [x] Adicionar arquivo de configuração `config.ts`  
- [x] Adicionar classe do Mock `lib/mock/*`
- [x] Adicionar middleware para organizar informações customizadas enviadas através do header `headerMiddleware`
- [x] Adicionar middleware para terminar se aplica ou não delay para uma resposta `delayMiddleware.ts`
- [x] Adicionar middleware para interceptar requisição e definir a resposta `requestMiddleware.ts`
- [x] Fazer o primeiro teste:
  - [x] Criar pasta `routes` responsável em ter todas as configurações de mocks
  - [x] Criar pasta `fixture` responsável por armazenar todos os arquivos mocks
- [x] Dar suporte a rotas com parâmetros na URL. Exemplo `/users/:id`
- [x] Dar suporte para retornar um body global para determinado endereço
- [x] Dar suporte para retornar um body/header específico para determinado endereço + status code
- [x] Separar a organização de pasta no que é core do sistema + exemplos, afim de criar uma biblioteca
- [x] Criar documentação

# V2
- [x] Configuração é através de um JSON
- [x] É possível ter um delay para cada rota
- [ ] Dar suporte a cacheamento
- [ ] Dar suporte a clusterização
- [ ] Criar documentação


# V3
- [ ] Criar binário da aplicação, não sendo necessário o usuário ter alguma ferramenta de desenvolvimento para executar a aplicação

# V4
- [ ]
- [ ] Criar DevTolls `mocker-api-devtool` para que não seja necessário a utilização de ferramentas externas para realizar as requisições