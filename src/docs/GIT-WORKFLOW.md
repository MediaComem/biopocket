# Git workflow

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->



<!-- END doctoc generated TOC please keep comment here to allow auto update -->

* Commit messages concerning a **User Story** must contain that story's identifier (e.g. TG-123).
* All work on a **User Story** or **Task** must be done in a short-lived **feature branch**. These branches are only integrated when the story/task is done and tested.
* A new **integration branch** is created for each **Sprint**. **Features branches** are merged into it as the work progresses.
* The commit history of a **feature branch** should be simplified with **git rebase** at integration time.
* Each **integration branch** is merged into the **master** branch after it has been validated.
* The **master** branch must contain only stable and functional code.
