# BioPocket Best Practices

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [General](#general)
  - [User stories](#user-stories)
  - [Manual tests](#manual-tests)
- [Development](#development)
  - [Documentation](#documentation)
  - [Security](#security)
  - [Internationalization](#internationalization)
  - [Automated tests](#automated-tests)
  - [Code review](#code-review)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



## General

### User stories

* Each **User Story** must have precise **Acceptance Criteria** that detail exactly what is expected in the context of the current **Sprint**.
* The technical **Tasks** of a **User Story** must be defined before we start implementing it.
* Each **User Story** that impacts the user interface must be illustrated by a mockup.

### Manual tests

* Manual tests must be made regularly to ensure functionality.
  Critical tests must be written down so that they are not forgotten.
* End users should participate to the tests as soon as possible to collect feedback.



## Development

### Documentation

* Each component (mobile application, backend, etc) must have enough technical documentation to allow a new developer to set up the project on a new machine.
* Each public API or reusable internal component must be documented.

### Security

Any new public interface (e.g. mobile screen or API) must be appropriately secured against unauthorized access.

### Internationalization

Any text displayed to the user must be integrated within the standard internationalization mechanism of the component.

### Automated tests

* Each public interface (mobile application screen, backend API route, etc) must be covered by automated tests (how many tests is to be defined when detailing the technical **Tasks** of a **User Story**).
* Each discovered bug should be covered by an automated test to ensure non-regression.
* Automated tests must be run automatically with a continuous integration platform (e.g. Travis CI).
* All automated tests must pass in the continuous integration environment (not only on the developer's machine).

### Code review

* Only code reviewed by another developer can be integrated into stable branches.
