export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '614177e56d86d42af020c393',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vtc8mfqe',
                  apiId: '21eb9718-632d-4dc1-ae79-50851383d3f9'
                },
                {
                  buildHookId: '614177e6a3f44033ed61b7a0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6gyed1fu',
                  apiId: '1439899c-ac49-4425-a70d-af4e87336d37'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dwikki10/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6gyed1fu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
