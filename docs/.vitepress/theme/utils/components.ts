import { defineAsyncComponent } from 'vue'

// Function to register all Vue components from the pages directory
export function registerPageComponents(app: any) {
  // Import all Vue components from the pages directory (including nested directories)
  const pageComponents = import.meta.glob('../pages/**/*.vue')

  // Register each component with its name derived from the filename
  Object.entries(pageComponents).forEach(([path, component]) => {
    // Extract component name from path (e.g., '../pages/Blog.vue' -> 'Blog')
    const componentName = path.split('/').pop()?.split('.')[0]

    if (componentName) {
      // Register the component with Vue app
      app.component(componentName, defineAsyncComponent(component as any))
      // console.log(`Registered component: ${componentName} from ${path}`)
    }
  })
}
