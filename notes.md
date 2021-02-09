# Code Review II

## Retro


#### Roses

* Beta Testing, felt really proud, grateful for team (Elijah) 
* Proud of project, felt unfeasible at first but we did it! (Khyrstyna)
* Nice to see how far project as come, coming together (Ksenia)
* Gotten into good groove, been working together much more seamlessly since CR1 (Beth)

#### Thorns

* Feeling scattered, hit some limitations, unsure of what to do next (Elijah)
* Deployment has taken a lot of bandwidth (Khyrstyna + Ksenia)
* Heroku is limited, puppeteer takes up a lot of bandwidth, doesn't leave room for extra layers like Lighthouse (Ksenia)
* Easy getting lost in the weeds, ex scraping styles w/ puppeteer (Beth)
* Known unknowns vs unknown unknowns -- how to determine if spending too much time on a single problem (Beth)
* Proof of Concept has created some technical debts, slop (Beth)

## MVP (Deployed)

* Remove Redux Logger
* Formatting of single page needs some work
    * Avoid center-aligned text
    * Can we have a table or grid-col for stats?
    * Include A11y definition for each accessability feature
* Unclear how to navigate back to page, needs to rescrape
* Some Console.logs from React code in bar chart component
* Continuously integrate/deploy new metrics when they're ready
    * Currently it's a frustrating UX when I want to click on tests that are unavailable
* Glad to see it's responsive!
* Excellent use of Redux for success/err/loading states! :)

### Nitpiks

* Stock text in homepage should be rewritten
* Need better footer text (include a Copywrite for your team maybe?)
* Sites <title></title> reflects Create React App
* User button links to nothing

### Deployment
* Heroku builds/ejects Create React App
* This is okay, and if it works, it works
* Building == bundling for development, Ejecting == bundling for production
* Consider deploying as two seperate services that communicate
    * front-end: Deployed CRA, w/ Heroku's Zero-Config deployment (really just ejection)
    * Back-end: Deployed Express API w/ Puppeteer
* Might involve leveraging some CI/CD pipelines (e.g, Travis, Gulp, Codeship) to run/eject React App and serve as static asset from API-side
* What to Google? "Deployment Pipelines w/ Create-React-App". "React-Scripts Eject". "CI/CD for Create React App"
```
// Commit Pipeline

GitListener.on("push-master", async () => {
    await exec('react-scripts eject')
})

index.html
<body>
    <script>
        // Bundled/Ejected React code is injected here
    </script>
</body>

```
* May also want to explore AWS, Digital Ocean for more robust deployment

## Product Roadmap

* Build out UI for remaining tests + visuals
* Include more documentation/info for individual visualizations
* Back button
* Can I save scrapes to profile? Is there a need for a User entity?
* Stretch Feature: email summaries (node-mailer) 
* make Sure README reflects your project ;)
    * Title, desc
    * Names of collabos
    * Deployed link
    * Screenshots, gifs, etc


## Dan's Roses (Things I thought were awesome...)
* Nice modular, readable A11y Tests!
* Separate, modular reducers for Success (data), loading, and error states!
* Separate style modules