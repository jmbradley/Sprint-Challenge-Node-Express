# Review Questions

## What is Node.js?
++ Node js is a js runtime built for Chrome (specfically V8).

## What is Express?
++ Express is a web app framework built on top of Node js.

## Mention two parts of Express that you learned about this week.
++Express routing ex: Express routes easily to middleware.
++Express helps us organize our code to a Model View Controller architecture.

## What is Middleware?
++Middleware literally sits between an application and an operating system. It acts as a filter and "listens" for predetermined constraints. When those contraints are observed, it executes.

## What is a Resource?
++A resource is identified by the end of a URL and helps our code be directed to the proper point. I think it is very similar to a route.

## What can the API return to help clients know if a request was successful?
++The API can return numeric status codes. Ex: 200 = Request ok.

## How can we partition our application into sub-applications?
++We can partition our app into sub apps using routes.

## What is express.json() and why do we need it?
++This is near and dear to my heart as I became stuck on this mid week. express.json() has taken the place of the bodyParser middleware. It has since been added to express.json() such that now it comes bundled. The function of both is to extract the body portion a a request and expose that portion on the req.body such that it becomes readable for the system.
