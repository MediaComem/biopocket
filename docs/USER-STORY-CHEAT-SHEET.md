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

* Go to the [Epics board][epics]
* Find an epic that fits the general subject of your story, or create one
* Open the epic and add a story:

  <img src='images/taiga-epic-add-story.png' width='485' height='45' />
* You can add multiple stories at the same time:

  <img src='images/taiga-epic-bulk-add-story.png' width='612' height='501' />



## Working on stories

You will work in the first 3 columns of the [Kanban board][kanban]: **Brainstorm**, **Definition** and **Ready**.
New stories should start in the **Brainstorm** column.
Move them from column to column when appropriate.

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
      <td rowspan=3>Everyone</td>
      <td>Write your new story here.</td>
    </tr>
    <tr>
      <td><img width="20" height="30" src="https://via.placeholder.com/20x30/a40000?text=+" /></td>
      <td>Definition</td>
      <td>
        Move the story here to start defining it:
        <ul>
          <li>Everyone can write <strong>acceptance criteria<strong> and design <a href="https://comem.mybalsamiq.com/projects/biopocket/grid"><strong>wireframes (balsamiq)</strong></a>.</li>
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
      <td colspan=4><a href="PROJECT-MANAGEMENT.md#user-story-workflow">Full workflow</a></td>
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
* Think of the worst case:
  Should the user have some feedback if the server is unreachable or something fails?



### Designing a story

* Create or select the [wireframes][wireframes] illustrating your story
* Optionally, have the graphic designers produce [mockups][mockups] (that can also be done later during implementation)



### What next?

The **Product Owner** will decide which stories to take from the **Ready** column and move them to the **Estimation** column where the **Development Team** can start estimating the work effort.

See the [full workflow][workflow].



[epics]: https://tree.taiga.io/project/mei-biopocket/epics
[kanban]: https://tree.taiga.io/project/mei-biopocket/kanban
[mockups]: https://xd.adobe.com/view/c3917f9c-2a66-4f0a-a5f6-e2c1f424079b/
[wireframes]: https://comem.mybalsamiq.com/projects/biopocket/grid
[workflow]: PROJECT-MANAGEMENT.md#user-story-workflow
