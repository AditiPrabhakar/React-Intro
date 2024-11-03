
React JS
.ts

SPA (Single Page Appln) => Whole website contains a single HTML Page
Components (Grp codes)
Data Binding => Uni Directional, flow of the data
Virtual DOM 
                                 home.jsx

        BannerSection.jsx           Navbar.jsx              section.jsx     footer.jsx


                                    homePage.jsx    aboutUs.jsx



Virtual DOM:

        I updated <p> in <body> -----------> Virtual DOM -------> DOM ------> HTML Manipulations reflected on web pg


SPA:

index.html
    <html>
        <body>
            <div id="root">
            </div>
        </body>
    </html>


Components:
    >> Class Components (Older Version)
    >> Function Components (Newest Edition)



Redux (State Managment)
Hooks (Lifecycle methods)


npx => node package execution
npx create-react-app project-name

## RUN:
cd (projectName)
npm start


### Components n workflow
## State & Props

### State => Data required for a component

<!-- var name= "DevTown" -->
<!-- state = {
    [
        {

        },
        {
            
        }
    ]
} -->

### Hooks -> useState(), setState()

import {useState} from "react";
const [variable, func] = useState();
const [count, setCount] = useState();

const [num, setNum] = useState(5);
num += 1;


btn => 


### Props (Where we will be passing data among the components) 
## Parent Node -> Child Node
## eg: App.js -> ClassComponent.jsx | FunctionComponent.jsx

<FunctionComponent name="DevTown" age={20}>


## Routing N Layouts in ReactJs
Router >> Routes > Route
/contact /aboutUs /signIn /signUp

npm i react-router-dom

=> version: 6.27.0
-> means: 0 bug fix, 27 minor updates, 6 major updates

WorkFlow wrt ur routes 
>> index.js(Browser Router) >> app.js  >> diff routes


## WorkFlow index.js >>  app.js >> pages


//webpage
>> /contact /aboutUs /signIn /signUp

Layouts (HOC || High Order Component)
/parentSignInAndUp
>> Nav n Footer

<!-- HOC's can add additional info/features to the existing components -->


## React Life Cycle Methods