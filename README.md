# Linkgraph Assignment
Welcome to the Linkgraph assignment repository! This project is a web application developed using React.js, Next.js, Mobx, and JSON server. Below, you'll find an overview of the project's features, local setup instructions, and the project's file structure for a better understanding.
## Features
### Image Management
- **Add/Upload Image:** Easily add or upload images to the application.
- **Search by Tag:** Search for images based on tags.
- **View Image Listing:** Browse and view a list of images.
- **Add to Collection:** Organize your images by adding them to collections.
- **Change Card Size:** Customize the display size of image cards.
### Image Actions
- **Delete Image:** Remove images you no longer need.
- **Download Image:** Download images to your local machine.
- **Add/Remove Tags:** Manage image tags for better organization.
### Collection Management
- **Collection Listing:** Access and manage your image collections.
- **Local Database:** Data is saved in a local JSON database file.
- **Responsive UI:** The user interface adapts to various screen sizes.
## Local Setup
To set up and run the project locally, follow these steps:
1. Clone this repository.
2. Install project dependencies using your preferred package manager (Yarn or Npm):
   ```shell
   yarn install
   # or
   npm install
3. Install JSON Server globally using the following command:
    ```shell
    npm install -g json-server
4. JSON Server will handle local database requests using a file named db.json as a local database.
    Run JSON Server to serve the database:
    ```shell
    json-server --watch local-db.json --port=3001

5. Start the application by running:
    ```shell
    yarn run dev
    # or
    npm run dev
This will start the development server, and you can access the application in your web browser.
## File Structure
Here's an overview of the project's file structure:
| File/Folder              | Description                                                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------|
| `src/pages/`             | This directory contains the pages used in the application.                                                         |
| `src/pages/api`          | Functions to call APIs.                                                                                            |
| `src/stores/Collections` | Mobx integration: Model, views and actions needed.                                                                                                |
| `src/styles/`            | All CSS files and modules.                                                                                         |
| `src/utils/`             | Files with reusable functions for multiple components.                                                             |
| `db.json`                | Local JSON-based database file used by JSON Server for storage.                                                    |
Thank you for exploring our Linkgraph Assignment project. If you have any questions or need further assistance, feel free to contact me.