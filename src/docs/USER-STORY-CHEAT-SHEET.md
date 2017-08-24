# User Story Cheat Sheet

Anyone in the team can contribute to writing user stories.

As a user story contributor, you will work in the first 3 columns of the [Kanban board]({{{ links.kanban }}}): **Brainstorm**, **Definition** and **Ready**.
New stories will appear in the **Brainstorm** column by default.
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

In a nutshell, you will:

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Adding new stories](#adding-new-stories)
- [Working on stories](#working-on-stories)
  - [Writing acceptance criteria](#writing-acceptance-criteria)
  - [Designing a story](#designing-a-story)
- [What next?](#what-next)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



## Write new stories

* Go to the [Epics board]({{{ links.epics }}})
* Find an epic that fits the general subject of your story, or create one
* Open the epic and add a story:

  <img src='images/taiga-epic-add-story.png' width='485' height='45' />
* You can add multiple stories at the same time:

  <img src='images/taiga-epic-bulk-add-story.png' width='612' height='501' />



## Define stories

**Everyone** can write the story's **Acceptance Criteria**:

* Think UI (user interface):
  Which new screens must be added?
  How must existing screens be modified?
* Think UX (user interaction):
  What should happen when the user interacts with the UI?
  What kind of feedback is needed to let the user know that something happened or is happening?
  (Especially things that are not shown in the mockups or wireframes.)
* Think empty result set:
  What should be displayed if no data is available or no element matches the applied filters?
* Think validation:
  Are there inputs where the user can enter invalid data?
  Should validation error messages be displayed in some circumstances?
* Think of the worst case scenario:
  Should the user have some feedback if the server is unreachable or something fails?

Anyone in the **Development Team** can create [wireframes (balsamiq)]({{{ links.wireframes }}}) illustrating the story.

**Everyone** can post comments in balsamiq to discuss the wireframes.

**Graphic designers** can produce [mockups]({{{ links.mockups }}}) at this stage,
or it can be done later as a technical task during implementation.

### When is a story ready?

Once all **Acceptance Criteria** have been defined and it has at least a **wireframe** or a **mockup**.



## Hand stories over to the Product Owner

When your story is ready, move it to the **Ready** column and **assign** it to a **Product Owner**.

The **Product Owner** will decide which stories to implement in which **Sprint**.

See the [full workflow]({{{ links.workflow }}}).
