## Como rodar o projeto

1. Instale as dependencias: `npm install`
2. Inicie o ambiente de desenvolvimento: `npm run dev`

## Arquitetura

O projeto segue MVVM em formato modular:

- **Modules**: cada dominio (por exemplo `tasks`) concentra views, view-models e models especificos.
- **Shared**: agrupa componentes reutilizaveis (`_shared/components`), layouts, stores e utilitarios que servem a todos os modulos.
- **Models**: tipagens e contratos (`*.model.ts`) garantem consistencia entre view e view-model.
- **View Models**: concentram regras de negocio e orquestram stores/composables, expondo o estado consumido pelas views.
- **Views**: componentes `.vue` (em `views` e subpastas `components`) cuidam apenas da camada de apresentacao, consumindo o estado exposto pelos view-models.
- **Stores & Composables**: `src/_shared/stores` e `src/_shared/composables` encapsulam estado global (ex.: toasts) e logica.

Essa organizacao facilita manutencao, possibilita testes isolados e favorece a evolucao de novas features sem acoplamento entre modulos.

## Tecnologias utilizadas

- Vue 3
- Vite
- TypeScript
- Pinia (stores globais)
- Vitest + Playwright para testes
