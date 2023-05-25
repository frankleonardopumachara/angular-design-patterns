# Angular Design Patterns

Este repo muestra ejemplos en Angular utlizando patrones que ayudan a la escalabilidad de proyectos frontend

# Estructura del proyecto

```
src/
  app/
    clients/ -> features of my app everything about clients
      data-access/ -> everything related to data access, store, services, 
      features/ -> smart components
        client-detail/ -> route:  clients/2/
        client-list/  -> route: clients/
          client-list.routing.module.ts
          client-list.module.ts
          client-list.page.ts
          client-list.page.html
          client-list.page.scss
          client-list.page.spec.ts
        client-shell/ -> route: clients/2/shell
        client-survey/ -> route: clients/2/survey
      ui/ -> presentational components 
        client-appointment/
        client-info/
          client-appointment.module.ts
          client-info.component.html
          client-info.component.ts
          client-info.component.scss
          client-info.component.spec.ts
        client-notes
      utils/ -> functions related to clients
    home/
    notes/
    shared/ -> not smart components, only presentational components or data access shared accross all applications
      data-access/
      ui/
        client-survey/
        list-data/
        search/
  assets/
  environments/
  theme/
  global.scss
  index.html
  main.ts
  pollyfills.ts
  test.ts
  zone-flags.ts
```

# Features 


