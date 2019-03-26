# Programmer Cheat Sheet

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Scientia potentia est](#scientia-potentia-est)
- [Estimate a story](#estimate-a-story)
- [Start working (about time)](#start-working-about-time)
- [During your day](#during-your-day)
- [I'm done!](#im-done)
- [Big brother (review) phase](#big-brother-review-phase)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



## Scientia potentia est

* Familiarize yourself with the project's [Git workflow](GIT-WORKFLOW.md).
* Read the development guide of the project you are going to work on.



## Estimate a story

* Define technical tasks:
  * Separate technical tasks by component (e.g. mobile, backend).
  * Separate technical tasks by role (e.g. programmer, designer).
  * Separate technical tasks for automated tests.
  * Separate technical tasks for infrastructure changes.
  * If some tasks seem too complex, split them into smaller tasks.
* Assign each task to a developer.
* Estimate the work effort.

**Tip:** you can *bulk insert* technical tasks from the *Sprint taskboard* (click the list icon in a story card).



## Start working (about time)

* Find a story in the current sprint.
* Move the story to **In Progress**.
* Create a story/task/bugfix/etc branch using the conventions defined in the [Git workflow](GIT-WORKFLOW.md):
  * `story-24`
  * `story-42-meaning-of-life`
  * `bugfix-66-evil-security-flaw`
* You may push that branch to the server for backup purposes.
* Grab some coffee.



## During your day

* **Rebase** your branch on top of the integration branch regularly.
* Make more coffee.

**Tip:** use [git rerere][git-rerere].



## I'm done!

* If you added or modified a **public interface** (API route, mobile screen, etc):
  * Did you **secure** it appropriately against unauthorized access?
* If you added or modified a **mobile screen**:
  * Is every text you added **internationalized**?
* If you added an **API route** or **reusable component**:
  * Did you **document** it?
* If you modified a component's configuration or deployment procedure:
  * Did you **document** it in the project's README?

    Each component should have enough technical documentation to allow a new developer to set up the project on a new machine.
* Did you write the **automated tests** defined in the story?
  * Each public interface (mobile application screen, backend API route, etc) must be covered by automated tests (as defined in the technical **Tasks** of a **User Story**).
  * Each discovered bug should be covered by an automated test to ensure non-regression.
* Did you make sure the **automated tests are running successfully**?
  * Did you run the tests on your machine?
  * Did you check that the tests also pass on the continuous integration platform (Travis CI)?
* If the use case is complex and/or difficult to test automatically:
  * Did you write down a **manual test** for it?
* If you fixed a **bug**:
  * Did you write a **non-regression test** (preferably automated) for it?

When all is well:

* Rebase and squash your changes, write a detailed commit message.
* Assign the story to another developer.
* Move the story to **Review**.



## Big brother (review) phase

When a story is assigned to you for review:

* Check all of the above.
* Make sure the commit message is [well written](GIT-WORKFLOW.md#writing-good-commit-messages).
* Request that any issue be fixed.
* Make sure the automated tests pass successfully in the continuous integration environment.
* When all is well, move the story to **Integration**.
* Give the developer a cookie.



[git-rerere]: https://git-scm.com/blog/2010/03/08/rerere.html
