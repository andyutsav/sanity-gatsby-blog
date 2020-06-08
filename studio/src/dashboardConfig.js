export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ede25fe57a85287051b546c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1qj2wjit',
                  apiId: '0b9b80d2-609e-46cf-a5b9-2a34f648c7ea'
                },
                {
                  buildHookId: '5ede25fee331ea0adcc3a2bf',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mrjghs4e',
                  apiId: 'b4d4104d-35cc-4ba3-bda1-85df829e6818'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andyutsav/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mrjghs4e.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
