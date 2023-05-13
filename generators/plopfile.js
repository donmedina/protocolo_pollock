module.exports = function (plop) {
    plop.setGenerator('component', {
      description: 'Create a component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Nome do componente?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../src/Componentes/{{pascalCase name}}/{{pascalCase name}}.js',
          templateFile: 'templates/componente.js.hbs'
        },
        {
            type: 'add',
            path: '../src/Componentes/{{pascalCase name}}/index.js',
            templateFile: 'templates/index.js.hbs'
        },
        {
            type: 'add',
            path: '../src/Componentes/{{pascalCase name}}/{{pascalCase name}}.scss'
        }

      ]
    })
  }