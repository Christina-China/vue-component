export default () => {
  return [{
    path: '/',
    name: 'december',
    // title: 'server',
    meta: {
      icon: 'lock'
    //   resource: 'RBAC_ADMIN_PAGE_CMPS'
    },
    component: () => import('./views/index')
  }]
}
