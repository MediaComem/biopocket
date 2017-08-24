# BioPocket

**To raise awareness of biodiversity among the citizens of Onex (Switzerland), and encourage them to take action to improve it.**

<!-- START doctoc -->
<!-- END doctoc -->



## Documentation

For everyone:

* [Project Management](docs/PROJECT-MANAGEMENT.md)
* [Best Practices](docs/BEST-PRACTICES.md)
* [User Story Cheat Sheet](docs/USER-STORY-CHEAT-SHEET.md)

For developers:

* [Git Workflow](docs/GIT-WORKFLOW.md)
* [Programmer Cheat Sheet](docs/PROGRAMMER-CHEAT-SHEET.md)



## Useful Links

* [Taiga (project management tool)]({{{ links.taiga }}})
* [Balsamiq (wireframes)]({{{ links.wireframes }}})
* [Adobe Experience Design (mockups)]({{{ links.mockups }}})



## Contributing

**DO NOT** edit `README.md` or the files in the `docs` directory: they are generated.

Edit the markdown files in the `src` directory:

* They are [Handlebars][handlebars] templates
* They have access to the variables exported by `data.js`
* They can use the `partial` helper to include another markdown file:

  ```
  Hello

  \{{{ partial "docs/other-markdown-file.partial.md" }}}

  World
  ```

The following npm scripts are available:

* `npm start` will build all markdown files and automatically watch for changes
* `npm run build` will build all markdown files once



[handlebars]: http://handlebarsjs.com