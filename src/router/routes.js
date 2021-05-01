
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/rent',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'rent.index', component: () => import('pages/rent/CityIndex.vue') },
      { path: 'automobiles', name: 'rent.automobiles', component: () => import('pages/rent/AutomobileListPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
