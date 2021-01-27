export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-tmc-events-studio',
                  apiId: '5829806b-c995-45bf-afee-8be161be4812'
                },
                {
                  buildHookId: '60113f361872b4f466389fab',
                  title: 'Events Website',
                  name: 'sanity-tmc-events',
                  apiId: 'ac001997-3b0b-4876-ab19-32b084759e7e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jnmoons/sanity-tmc-events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-tmc-events.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
