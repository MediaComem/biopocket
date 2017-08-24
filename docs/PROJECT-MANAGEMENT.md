# BioPocket Project Management

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Main roles](#main-roles)
  - [Additional roles](#additional-roles)
- [User stories](#user-stories)
  - [How to write a good user story](#how-to-write-a-good-user-story)
  - [User story details](#user-story-details)
  - [User story tips](#user-story-tips)
- [Events](#events)
- [User Story Workflow](#user-story-workflow)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

We use elements of the [Scrum software development framework](https://en.wikipedia.org/wiki/Scrum_(software_development)).

Work is done in **Sprints** of 3 weeks, so that we can regularly deliver new features, collect feedback and adjust planning and development.



## Main roles

* **Stakeholder**:
  * Defines the product.
  * This is the role closest to the "business" side.
* **Product Owner**:
  * Represents the customers and users.
  * Keeps a global view of development and has the responsibility to maximize the value of the product.
  * Defines the **Product Backlog** and priorities.
* **Scrum Master**:
  * Applies the Scrum framework in everyday development.
  * Facilitates the work of the **Development Team**.
  * Works with the **Product Owner** to define how **User Stories** are written and to organize the **Product Backlog**.
* **Development Team**:
  * Delivers features defined by the **Product Owner** each **Sprint**.
  * Cross-functional and self-organized.
  * This is the role closest to the "technical" side.

### Additional roles

* **Integration Manager**:
  * Makes sure the Git workflow is applied in everyday development.
  * Responsible for deciding when feature branches are integrated.
  * Merges the integration branch into the master branch.



## User stories

Work items are described in the form of **User Stories**.
A **User Story** is a short phrase describing a feature that has value for the end user, generally in the form `As <who>, I can <what>, so that <why>`.

The **Product Backlog** contains all **User Stories** ordered by descending priority.
When starting a new **Sprint**, the **Product Owner** selects a number of the top stories to implement during that sprint.

### How to write a good user story

* A **User Story** must be written from the point of view of the person who desires the new capability (`As <who>, I can <what>, so that <why>`), usually an end user of the system.
* A **User Story** must be short enough to fit on a card.
* A **User Story** must be simple enough to be implementable within one **Sprint**.

Here's an example:

```
As a citizen, I can create an account with my e-mail address so that I can join the BioPocket community
```

### User story details

* Since the **User Story** itself is so short, it must be accompagnied by a list of **Acceptance Criteria** (also called **Definition of Done**):
  this is every detailed feature that must be implemented for the story to be considered *done*.
* A **User Story** is decomposed into technical **Tasks** by the **Development Team** to describe *how* to implement it.
* When multiple **User Stories** are related, they can be grouped into an **Epic Story**.

These could be the acceptance criteria for the story above:

```
Add a registration screen with a form:
* required e-mail (max 250 chars)
* required first name (max 30 chars)
* required last name (max 30 chars)
* required password
* required password confirmation

The constraints should be indicated next to the fields.

Error messages are displayed if:
* The e-mail address is invalid
* The e-mail address is already taken
* A field is too long
* The password is not complex enough
* The account could not be created (server error)

The user must receive an e-mail to verify his e-mail address.
Following the link should open the mobile application and display a message that the e-mail has been verified (in the currently open screen or the home screen).
```

### User story tips

* [User Stories](https://www.mountaingoatsoftware.com/agile/user-stories)
* [10 Tips For Writing Good User Stories](http://www.romanpichler.com/blog/10-tips-writing-good-user-stories/)
* [Write a Great User Story](https://help.rallydev.com/writing-great-user-story)



## Events

* **Sprint Planning**:
  * Happens at the beginning of each **Sprint** with the **Product Owner**, **Scrum Master** and **Development Team**.
  * We select the **User Stories** to implement during that **Sprint**.
  * We decompose all **User Stories** into technical **Tasks**.
  * We estimate the time needed to implement each **User Story**.
* **Daily Scrum**:
  * Happens every morning with the **Scrum Master** and **Development Team** (max. 15 minutes).
  * Each developer indicates: What was done yesterday? What will be done today? Is there any blocking issue?
* **Sprint Review**:
  * Happens as often as we can schedule a meeting with everyone together, typically every month or two.
  * The **User Stories** implemented during the previous **Sprints** are demoed to the **Product Owner** and **Stakeholders**.
  * We discuss the contents of the next **Sprint**.
* **Sprint Retrospective**:
  * Happens at the end of each **Sprint** with the **Scrum Master** and **Development Team**.
  * The work done during the **Sprint** is reviewed for continuous improvement: What went well? What could be improved?



## User Story Workflow

Each story will go through all of these steps from conception to release in production.

You can see these workflow columns in the [Kanban board](https://tree.taiga.io/project/mei-biopocket/kanban) of our project management tool.

<table>
  <thead>
    <tr>
      <th colspan=2>Step</th>
      <th>Who is responsible</th>
      <th>What to do</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/999999?text=+" /></td>
      <td>Brainstorm</td>
      <td rowspan=3>Everyone</td>
      <td>Write your new story here.</td>
    </tr>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/a40000?text=+" /></td>
      <td>Definition</td>
      <td>
        Move the story here to start defining it:
        <ul>
          <li>Everyone can write <strong>acceptance criteria</strong> and design <a href="https://comem.mybalsamiq.com/projects/biopocket/grid"><strong>wireframes (balsamiq)</strong></a>.</li>
          <li>Graphic designers can produce the <a href="https://xd.adobe.com/view/c3917f9c-2a66-4f0a-a5f6-e2c1f424079b/"><strong>mockups (adobe xd)</strong></a> (although that can also be done later in a technical task).</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/4e9a06?text=+" /></td>
      <td>Ready</td>
      <td>Move the story here once it is ready to be implemented.</td>
    </tr>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/ad7fa8?text=+" /></td>
      <td>Estimation</td>
      <td>Product Owner & Scrum Master</td>
      <td>
        Move the story here to start the estimation phase:
        <ul>
          <li>Assign the story to a developer.</li>
          <li>Have the <strong>Development Team</strong> define the story's <strong>technical tasks</strong> and estimate the work effort.</li>
          <li>Add the story to a sprint.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/ff9900?text=+" /></td>
      <td>In progress</td>
      <td rowspan=3>Development Team</td>
      <td>Move the story here when you start working on it.</td>
    </tr>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/edd400?text=+" /></td>
      <td>Review</td>
      <td>Move the story here when it has been fully implemented (including automated tests) and is ready for review.</td>
    </tr>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/729fcf?text=+" /></td>
      <td>Integration</td>
      <td>Move the story here when it has passed review and is ready to be merged into the integration branch.</td>
    </tr>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/73d216?text=+" /></td>
      <td>Done</td>
      <td rowspan=2>Development Team (integration manager)</td>
      <td>Move the story here when it has been merged into the integration branch.</td>
    </tr>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/5c3566?text=+" /></td>
      <td>Released</td>
      <td>Move the story here when it has been released in production.</td>
    </tr>
  </tbody>
</table>
