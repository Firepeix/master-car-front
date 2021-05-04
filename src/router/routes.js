
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
      { path: 'automobiles', name: 'rent.automobiles', component: () => import('pages/rent/AutomobileListPage.vue') },
      { path: 'agencies', name: 'rent.agencies', component: () => import('pages/rent/AgenciesListPage.vue') },
      { path: 'checkout', name: 'rent.checkout', component: () => import('pages/rent/CheckoutPage.vue') }
    ]
  },
  {
    path: '/automobiles',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'automobiles.index', component: () => import('pages/automobiles/AutomobileIndex') },
      { path: 'create', name: 'automobiles.create', component: () => import('pages/automobiles/AutomobileCreate') },
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
