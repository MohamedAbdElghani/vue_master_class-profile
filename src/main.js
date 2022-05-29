import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import AppDate from '@/components/AppDate'
import store from '@/store'

const forumApp = createApp(App)
forumApp.use(router)
forumApp.use(store)

// get all component from component directory that start with App and end with vue or js
// and make it global components
const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  forumApp.component(baseComponentName, baseComponentConfig)
})

forumApp.mount('#app')
