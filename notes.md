# Code Review I


## Workflow

### Roses
* Beth: Seeing fullstack come together and seeing data flow from client to db
* Elijah: Similar rose, working prototype was exciting, relieving
* Khyrstyna : Feels like we are on a good path, finishing backend w/ Ksenia
* Ksenia : Finalizing tech stack

### Thorns
* Beth: Learning, getting used to firebase
* Elijah: Firebase make for different retrieval paradigm than postgres
* Khrystyna: Setting up, mixing technologies
* Ksenia: Feeling pulled in different directions, communication struggles, project is moving slowly at times

* Pair Programming: 95% 
* Excellent tickets, User Stories => Vertical Slices => Tasks
* twice+ daily standups
* Consider operationalizing weekly learning share-outs for new technical choices

## Proof of Concept

* Glad to see it's working, but doesn't seem like a consistent version
* Stick to merging complete PRs to master, so anyone can pull from master and use a working version
* usecase in Success, Loading, Error states w/ combining Redux Reducers
* Glad we switched to puppeteer > cheerio
* Hide your firebase keys as secrets!!
* Curious why firebase config is in components?
    * Other things firebase will help with:
        * Auth
        * Deployment
        * Security

* Opportunity to refactor  `retrieveData()` as a `useState()` hook
    * Reduce total code lines
    * Won't explicitly tie getting data from the component lifescycle, instead will be directly downstream from the store
* Ensure any firebase functions aren't directly tied to Component Lifecycle (trigger from API side) OR ensure any errors from firebase are handled and rendered on component state

```javascript
app.get('snapshot', async (req, res, next) => {
    let snap = await firebase.ref(...)
    res.json({snap})
})
```
* Let's avoid mixing Promise paradigms (async await) + .then
* Both are fine on their own, but break when mixing syntax

## Product Roadmap

* Deploy ASAP
* How is score calculated (generate a proprietary algo!)
* Use Loading state/component for better UX
* What are we thinking for data visualizations?
* Think critically of the story youre trying to tell w/ data => what visualizations will you use?
* Add more A11y rules
* build one viz in d3
* [thinking in d3 joins](https://bost.ocks.org/mike/join/)