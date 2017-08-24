# User Story Cheat Sheet

Anyone in the team can contribute to writing user stories.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Adding new stories](#adding-new-stories)
- [Working on stories](#working-on-stories)
  - [Writing acceptance criteria](#writing-acceptance-criteria)
  - [Designing a story](#designing-a-story)
- [What next?](#what-next)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



## Adding new stories

* Go to the [Epics board]({{{ links.epics }}})
* Find an epic that fits the general subject of your story, or create one
* Open the epic and add a story:

  <img src='images/taiga-epic-add-story.png' width='485' height='45' />
* You can add multiple stories at the same time:

  <img src='images/taiga-epic-bulk-add-story.png' width='612' height='501' />



## Working on stories

You will work in the first 3 columns of the [Kanban board]({{{ links.kanban }}}): **Brainstorm**, **Definition** and **Ready**.
New stories should start in the **Brainstorm** column.
Move them from column to column when appropriate.

<table>
{{{ partial "docs/workflow-header" }}}
  <tbody>
{{{ partial "docs/workflow-everyone" }}}
    <tr>
      <td colspan=4><a href="PROJECT-MANAGEMENT.md#user-story-workflow">See the full workflow</a></td>
    </tr>
  </tbody>
</table>

### Writing acceptance criteria

* Think UI (user interface):
  What new screens must be added?
  How must existing screens be modified?
* Think UX (user interaction):
  What should happen when the user interacts with the UI?
  (Especially things that are not shown in the mockups and wireframes.)
* Think validation:
  Are there inputs where the user can enter invalid data?
  Should validation error messages be displayed in some circumstances?
* Think of the worst case scenario:
  Should the user have some feedback if the server is unreachable or something fails?

### Designing a story

* Create or select the [wireframes]({{{ links.wireframes }}}) illustrating your story
* Optionally, have the graphic designers produce [mockups]({{{ links.mockups }}}) (that can also be done later during implementation)



## What next?

The **Product Owner** will decide which stories to take from the **Ready** column and move them to the **Estimation** column where the **Development Team** can start estimating the work effort.

See the [full workflow]({{{ links.workflow }}}).
