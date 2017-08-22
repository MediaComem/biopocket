# BioPocket Development Best Practices

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Best practices](#best-practices)
- [Technical checklist](#technical-checklist)
- [Git workflow](#git-workflow)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Best practices

* **Design:**
  * Each **User Story** must have precise **Acceptance Criteria** that detail exactly what is expected in the context of the current **Sprint**.
  * The technical **Tasks** of a **User Story** must be defined before we start implementing it.
  * Each **User Story** that impacts the user interface must be illustrated by a mockup.
* **Documentation:**
  * Each component (mobile application, backend, etc) must have enough technical documentation to allow a new developer to set up the project on a new machine.
  * Each public API or reusable internal component must be documented.
* **Manual tests:**
  * Manual tests must be made regularly to ensure functionality. Critical tests must be written down.
  * End users should participate to the manual tests as soon as possible to collect feedback.
* **Automated tests:**
  * Each public interface (mobile application screen, backend API route, etc) must be covered by automated tests (how many tests is to be defined when detailing the technical **Tasks** of a **User Story**).
  * Each discovered bug should be covered by an automated test to ensure non-regression.
  * Automated tests must be run automatically with a continuous integration platform (e.g. Travis CI).
* **Code review:**
  * Only code reviewed by another developer can be integrated into stable branches.

## Technical checklist

These criteria must be fulfilled for a **User Story** to be considered done:

* **Security:** any new screen or API must be appropriately secured against unauthorized access.
* **Internationalization:** any text displayed to the user must be integrated within the standard internationalization mechanism of the componen.
* **Automated tests:** all automated tests must pass in the continuous integration environment (not only on the developer's machine).

## Git workflow

* Commit messages concerning a **User Story** must contain that story's identifier (e.g. TG-123).
* All work on a **User Story** or **Task** must be done in a short-lived **feature branch**. These branches are only integrated when the story/task is done and tested.
* A new **integration branch** is created for each **Sprint**. **Features branches** are merged into it as the work progresses.
* The commit history of a **feature branch** should be simplified with **git rebase** at integration time.
* Each **integration branch** is merged into the **master** branch after it has been validated.
* The **master** branch must contain only stable and functional code.
