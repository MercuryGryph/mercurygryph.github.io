import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

type Route = {
  path: string,
  localPath: string,
  component: () => any
}

const Routes = {
  Root: {
    path: '/',
    localPath: '',
    component: () => import('@/views/Root/RootPage.vue'),
  }
}

function buildRoutes(): RouteRecordRaw[] {
  let res: RouteRecordRaw[] = []
  res.push(buildRoute(Routes.Root))
  return res
}

function buildRoute(route: Route): RouteRecordRaw {
  let res: RouteRecordRaw = {
    path: '',
    children: []
  }

  for (let param in route) {
    switch (param) {
      case 'path': break

      case 'localPath':
        let localPath = route.localPath
        if (localPath === '') {
          if (route.path === '/') {
            res.path = '/'
          }
          break
        }
        res.path = localPath
        break

      case 'component':
        res.children.push({
          path: '',
          component: route.component
        })
        break

      default:
        res.children.push(buildRoute(route[param]))
    }
  }
  return res
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: buildRoutes(),
})

export default router

export {Routes, router}
