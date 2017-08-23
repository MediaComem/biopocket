# BioPocket Project Management

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Main roles](#main-roles)
- [User stories](#user-stories)
- [Scrum events](#scrum-events)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

We use elements of the [Scrum software development framework](https://en.wikipedia.org/wiki/Scrum_(software_development)).

Work is done in **Sprints** of X weeks, so that we can regularly deliver new features, collect feedback and adjust planning and development.

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

## User stories

Work items are described in the form of **User Stories**:

* A **User Story** describes a feature that has value for the end user, generally in the form `As <who>, I can <what>, so that <why>`.
* A **User Story** must be short enough to fit on a card.
* A **User Story** must be as independant as possible and simple enough to fit within one **Sprint**.
* A **User Story** must have a list of **Acceptance Criteria** (also called **Definition of Done**): this is everything that must be implemented in the **Sprint** for the **User Story** to be considered *done*.
* A **User Story** can be decomposed into technical **Tasks** to describe *how* to implement it.
* The **Product Backlog** contains all **User Stories** ordered by descending priority. A number of the top stories are taken to start each **Sprint**.
* When multiple **User Stories** are related, they can be grouped into an **Epic Story**.

Tips:

* [User Stories](https://www.mountaingoatsoftware.com/agile/user-stories)
* [10 Tips For Writing Good User Stories](http://www.romanpichler.com/blog/10-tips-writing-good-user-stories/)
* [Write a Great User Story](https://help.rallydev.com/writing-great-user-story)

## Scrum events

* **Sprint Planning**:
  * Happens at the beginning of each **Sprint** with the **Product Owner**, **Scrum Master** and **Development Team**.
  * We select the **User Stories** to implement during that **Sprint**.
  * We decompose all **User Stories** into technical **Tasks**.
  * We estimate the time needed to implement each **User Story**.
* **Daily Scrum**:
  * Happens every morning with the **Scrum Master** and **Development Team** (max. 15 minutes).
  * Each developer indicates: What has he done yesterday? What will he do today? Does he have any blocking issues?
* **Sprint Review**:
  * Happens at the end of each **Sprint** with everyone.
  * The **User Stories** implemented during the **Sprint** are demoed to the **Product Owner** and **Stakeholders**.
  * We discuss the contents of the next **Sprint**.
* **Sprint Retrospective**:
  * Happens at the end of each **Sprint** with the **Scrum Master** and **Development Team**.
  * The work done during the **Sprint** is reviewed to enable continuous improvement: What went well? What could be improved?

## User Story Workflow (Taiga)

<table>
  <thead>
    <tr>
      <th colspan=2>Status</th>
      <th>Who is responsible</th>
      <th>What to do</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/999999?text=+" /></td>
      <td>Brainstorm</td>
      <td>Everyone</td>
      <td>Write new stories here (they are not fully designed and not ready to be implemented).</td>
    </tr>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/a40000?text=+" /></td>
      <td>Design</td>
      <td>Development Team (conceptual & graphic designers)</td>
      <td>Design/improve mockups. Write acceptance criteria.</td>
    </tr>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/4e9a06?text=+" /></td>
      <td>Ready</td>
      <td rowspan=2>Product Owner</td>
      <td>Move stories that are ready to be implemented here.</td>
    </tr>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/d3d7cf?text=+" /></td>
      <td>Sprint</td>
      <td>Move stories for the next sprint here.</td>
    </tr>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/ff9900?text=+" /></td>
      <td>In progress</td>
      <td rowspan=3>Development Team (mobile/backend developers)</td>
      <td>Move a story here when developers have started working on it.</td>
    </tr>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/edd400?text=+" /></td>
      <td>Review</td>
      <td>Move a story here when it has been implemented (including automated tests) and is ready for review.</td>
    </tr>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/729fcf?text=+" /></td>
      <td>Integration</td>
      <td>Move a story here when it has passed review and is ready to be merged into the integration branch.</td>
    </tr>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/73d216?text=+" /></td>
      <td>Done</td>
      <td rowspan=2>Integration manager</td>
      <td>Move a story here when it has been merged into the integration branch.</td>
    </tr>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/5c3566?text=+" /></td>
      <td>Released</td>
      <td>Move a story here when it has been released in production.</td>
    </tr>
  </tbody>
</table>

