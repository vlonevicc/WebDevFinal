# PantryToPlate

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Project Summary

Pantry to Plate is a full-stack web application designed to help users manage household food inventory, generate grocery lists, and connect available pantry items with recipes. The system bridges the gap between meal planning and real-time food tracking by allowing users to see what they have, what they need, and what they can cook.

The frontend is built using Angular and provides a modern, responsive user interface for interacting with pantry items, grocery lists, and recipes. Users can dynamically view and manage their food inventory, navigate between pages using a sidebar, and interact with features such as adding new recipes through modal-based input forms.

The backend is developed using Node.js and Express.js, exposing RESTful API endpoints that support full CRUD functionality for pantry items, grocery lists, and recipes. Data is stored in MongoDB using Mongoose models with structured schemas for each collection, ensuring consistent and scalable data management.

The application integrates frontend and backend communication through HTTP requests using Angular’s HttpClient. This enables real-time data updates, such as automatically reflecting newly added pantry items or recipes without requiring page reloads.

Overall, Pantry to Plate demonstrates a complete full-stack architecture, combining UI design, API development, and database integration into a cohesive system focused on improving food organization and reducing waste.

## Team Roles

Nathan: Backend development and Controller logic
Sophie: Frontend/UI design
Jordyn: Frontend-Backend Integration and CRUD Implementation
Victor: Database and Backend

## Demo Video Link

[Click here for video demo](https://umsystem.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4ed52113-b6f0-4b0a-829c-b44400330c1e&start=48)