# web
Informational Porpoises is a hobby project where I've compiled taxonomy information into a graph database. The goal is to allow you to browse the taxonomy trees, and view/share interesting facts about the natural world.

The database is Neo4j, front-end is built with Vue, ElementUI for the UI, and GraphQL & Apollo serving the data.

## Current Status
The database has been seeded, the taxonomy browser is (mostly) functional and fully searchable.

## Next step
Implementing user authentication to allow the uploading of facts.
All facts will require a source to provided and will be verified by an admin user before showing on the front end.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
