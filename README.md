# [threejs-3d-text](https://threejs-3d-text-delta-swart.vercel.app)

<br />
<img src="https://github.com/sctlcd/threejs-3d-text/blob/main/design/threejs-3d-text-preview.png" alt="threejs-3d-text" width="800">
<br />

---

# Table of Contents <a name="tableOfContents"></a>

1. [Introduction](#introduction)

2. [Run the project locally](#runLocally)

3. [Available Scripts](#availableScripts)

4. [Deployment](#deployment)

   - [Deployment – Run locally](#deploymentRunLocally)
   - [Deployment – Live website](#deploymentLiveWebsite)

5. [Credits](#credits)

   - [Media](#media)

---

## Introduction <a name="introduction"></a>

Creating ... using [Three.js](https://threejs.org/).

Back to [top](#tableOfContents)

---

## Run the project locally <a name="#runLocally"></a>

- Runs the app in the development mode.\
  Open http://localhost:5173 to view it in the browser.
  ```
  cd threejs-3d-text
  npm i
  npm run dev
  ```

Back to [top](#tableOfContents)

---

## Available Scripts

In the project directory, you can run:

#### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!\
This `dist` folder can be deployed to any of your preferred platforms (see [Deployment – Run locally](#deploymentRunLocally)).

#### `npm run preview`

**Note: `vite preview` is intended for previewing the build locally and not meant as a production server**

Once you've built the app, you may test it locally by running
```
npm run build
npm run preview
```

The `vite preview` command will boot up a local static web server that serves the files from `dist` at `http://localhost:4173`. It's an easy way to check if the production build looks OK in your local environment.

You may configure the port of the server by passing the --port flag as an argument.
```
{
  "scripts": {
    "preview": "vite preview --port 8080"
  }
}
```

Now the `preview` command will launch the server at `http://localhost:8080`

#### `npm run deploy`

Deploying to Vercel to create a Production Deployment. Go to [Vercel deployment](#vercel)

Back to [top](#tableOfContents)

---

## Deployment <a name="#deployment"></a>

### Deployment – Run locally <a name="#deploymentRunLocally"></a>

1. Prerequisite (on Windows):
   - Make sure [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) are installed on your computer. You can download both at nodejs.org (Once you install a version of Node, the corresponding version of NPM is installed for you. So you don’t need to install NPM separately). The Node.js version recommended to install is the long-term support version (LTS). 
     - Checking node version 
      ```
        node -v
      ```
   - Please see `.nvmrc` file at the root of `threejs-3d-text` repo.
   - Using nvm, a Node Version Manager is recommended as it helps you manage and switch between different Node versions with ease. It provides a command-line interface where you can install different versions with a single command, set a default, switch between them, etc.
    - Installing the LTS version of Node
      ```
        nvm install lts
      ```
    - Installing a specific version of Node. E.g `nvm install 20.9.0`
      ```
        nvm install node-version-number
      ```
    - Checking nvm has been installed:
      ```
        nvm -v
      ```
      If nvm was installed correctly, this command will show you the nvm version installed.
    - Seeing the list of Node versions you have installed on your Windows machine
      ```
        nvm list
      ```
    - Using a specific version of Node, run either
      - to use the latest version
      ```
        nvm use latest
      ```
      - to use the long-term support version
      ```
        nvm use lts
      ```
      - to use any other version you have installed
      ```
        nvm use version-number
      ```

2. In GitHub click on the repository nammed [threejs-3d-text](https://github.com/sctlcd/threejs-3d-text)

3. Clone the repository locally. Run
   ```
   git clone https://github.com/sctlcd/threejs-3d-text.git
   ```

4. Install all modules listed as dependencies and devDependencies in package.json
   ```
   cd threejs-3d-text
   npm i
   ```

   note: in this app
   - [three](https://www.npmjs.com/package/three) - **JavaScript 3D library**
   - [vite](https://vitejs.dev/) - **Development server with live reload capability for building fast and optimized webapplications**
   - [GSAP](https://gsap.com/) - **JavaScript animation library**
   - [vercel](https://vercel.com/) - **Frontend cloud deployment platform**

5. Runs the app in the development mode.
   Open http://localhost:5173 to view it in the browser.
   ```
   cd threejs-3d-text
   npm run dev
   ```

Back to [top](#tableOfContents)

---

### Deployment - Live Website <a name="#deploymentLiveWebsite"></a>

#### Firebase

[threejs-3d-text](https://github.com/sctlcd/threejs-3d-text) live website is currently deployed on [Firebase](https://firebase.google.com/) using the `main` branch on GitHub. Once you have the project setup locally, you can proceed to deploy it remotely.

1. Create a [Firebase](https://firebase.google.com/) account and/or log in to your [Firebase](https://firebase.google.com/) account

2. On the top right corner click `Go to console`

3. Click `Add project`, give it a name (your github repo name so here threejs-3d-text) and follow the various steps

4. Install Firebase CLI Tools, [firebase-tools](https://www.npmjs.com/package/firebase-tools)
   ```
   npm install -g firebase-tools
   ```

5. Create `firebase.json` and `.firebaserc` at the root of your project with the following content:
  
   `firebase.json`:

   ```
   {
     "hosting": {
       "public": "build",
       "ignore": [],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

   `.firebaserc`:

   ```
   {
     "projects": {
       "default": "<YOUR_FIREBASE_ID>"
     }
   }
   ```

6. On the `main` branch, after running `npm run build`, deploy using the command `firebase deploy`.

=> live link: https://threejs-3d-text.web.app/ (example link - not in use)

#### Vercel <a name="#vercel"></a>

[threejs-3d-text](https://github.com/sctlcd/threejs-3d-text) live website is currently deployed on [Vercel](https://vercel.com/) using the `main` branch on GitHub. Once you have the project setup locally, you can proceed to deploy it remotely.

1. Create a [Vercel](https://vercel.com/) account and/or log in to your [Vercel](https://vercel.com/) account

2. Install Vercel package in the project: `npm i vercel`

3. Add a deploy script in the package.json file
    ```
    {
      "scripts": {
        // ...
        "deploy": "vercel --prod"
      },
    }
    ```

4. To login run `npx vercel login`

5. In the terminal run `npm run deploy`

6. Follow the instructions
    ```
    $ npm run deploy

    > threejs-3d-text@1.0.0 deploy
    > vercel --prod

    Vercel CLI 34.1.14
    ? Set up and deploy “D:\github\threejs\threejs-3d-text”? yes
    ? Which scope do you want to deploy to? sctlcd's projects
    ? Link to existing project? no
    ? What’s your project’s name? threejs-3d-text
    ? In which directory is your code located? ./
    Local settings detected in vercel.json:
    Auto-detected Project Settings (Vite):
    - Build Command: vite build
    - Development Command: vite --port $PORT
    - Install Command: `yarn install`, `pnpm install`, `npm install`, or `bun install`
    - Output Directory: dist
    ? Want to modify these settings? no
    🔗  Linked to sctlcds-projects/threejs-3d-text (created .vercel and added it to .gitignore)
    🔍  Inspect: https://vercel.com/sctlcds-projects/threejs-3d-text/FRwu9wiu1zaoqSwnddzQSNNGgQ6N
    ✅  Production: https://threejs-3d-text-292o7ids2-sctlcds-projects.vercel.app
    ```

=> live link: https://threejs-3d-text-delta-swart.vercel.app

Back to [top](#tableOfContents)

---

### Credits <a name="credits"></a>

#### Media <a name="media"></a>

- [favicon.ico](https://www.flaticon.com/free-icon/3d-modeling_3419175?term=3d&related_id=3419175) - [Flaticon](https://www.flaticon.com/) | copyright [Freepik](https://www.freepik.com)

Back to [top](#tableOfContents)

---