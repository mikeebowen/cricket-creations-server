

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('BlogPosts', [
    {
      updatedAt: new Date(),
      createdAt: new Date(),
      title: 'demo title 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      title: 'demo title 2',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      title: 'demo title 3',
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      title: 'demo title 4',
      content: 'Maecenas dignissim feugiat dolor ac elementum. Nunc vel sodales nunc. Donec laoreet ipsum quis facilisis sagittis. Nam rutrum fermentum justo, id ullamcorper mi tincidunt ut. Vestibulum ullamcorper vulputate nunc, non tristique velit interdum quis. Suspendisse sit amet ornare orci. Duis tincidunt iaculis leo non feugiat. Nunc malesuada justo lorem, eu porttitor dolor varius nec. Aliquam lacinia dui gravida, maximus turpis sollicitudin, mollis leo. Donec eu dapibus libero, eget suscipit velit. Mauris in nisl mattis, sagittis lorem id, accumsan turpis. Nulla a suscipit ante, nec pellentesque tellus. Duis pellentesque commodo scelerisque.',
    },
  ], {}),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('People', null, {}),
};
