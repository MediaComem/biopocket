# Git workflow

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Branches](#branches)
  - [Master](#master)
  - [Integration branches](#integration-branches)
  - [Feature and bugfix branches](#feature-and-bugfix-branches)
    - [Rebasing when done](#rebasing-when-done)
    - [Pull request](#pull-request)
  - [Extra development branches](#extra-development-branches)
- [Writing good commit messages](#writing-good-commit-messages)
  - [Do](#do)
  - [Don't](#dont)
  - [Tips](#tips)
  - [Inspired by](#inspired-by)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



## Branches

You may create whatever local branches you want, but all branches pushed to the server must follow the following conventions.

### Master

The `master` branch lives forever and contains only stable and functional code.

* No new commit should be done directly on the master branch.

### Integration branches

Integration branches are named `sprint-N` where `N` is the number of the sprint in [Taiga](https://tree.taiga.io/project/mei-biopocket/backlog).
They are created from the `master` branch or from the last integration branch.

* During a sprint, completed stories, tasks and bugfixes are merged into the integration branch.
* When a sprint is complete, the integration branch is merged into the `master` branch and deleted.
* The **integration manager** is responsible for the creation and merge of integration branches.

### Feature and bugfix branches

Feature branches are short-lived branches named `PREFIX-N-WHAT` where
`PREFIX` is `story`, `task`, `bugfix`, or `feature`, `N` is the ticket
number in [Taiga](https://tree.taiga.io/project/mei-biopocket), and `WHAT` is an optional
description:

* `story-24`
* `task-42-the-meaning-of-life`
* `bugfix-66-eradicate-evil`

If multiple stories, tasks or bugfixes are implemented in the same
branch, the prefix may be pluralized and all ticket numbers must be
included:

* `stories-12-34`
* `tasks-11-23-58-fibonacci`

If you have a mix of stories and tasks for some arcane reason, use the
`features` prefix:

* `feature-24-42-66-do-the-magic`

Developers can commit and push as they wish in a feature branch while developing.
You are encouraged to write short but meaningful commit messages.

#### Rebasing when done

When the feature is complete (implemented & tested), the branch must be **rebased onto the integration branch** so that merging it would be a fast-forward merge.

The commits of a feature should be **squashed** and a [detailed commit message](#writing-good-commit-messages) should be written.

#### Pull request

Once you have rebased and squashed the feature branch, you should open a **pull request** of that branch into the **current integration branch**.

Code review can take place after this step.

### Extra development branches

Branches not related to a feature or bugfix in [Taiga](https://tree.taiga.io/project/mei-biopocket) should be named `dev-WHAT`,
where `WHAT` is a mandatory description:

* `dev-bob`
* `dev-fixing-readme`



## Writing good commit messages

![Git commit (XKCD)](https://imgs.xkcd.com/comics/git_commit.png)

Good commit messages are important to:

* Speed up the review process
* Help future maintainers (including you-from-next-year)
* Make `git blame` easier

Commits made on feature branches during development have no
restrictions, but you should apply the following conventions when
writing the commit messages of completed features after a **rebase and
squash** (because these commits will go into the `master` branch).

```
Short (50 chars or less) summary of changes

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so (if your editor supports it). The blank line separating
the summary from the body is critical (unless you omit the body
entirely); tools like rebase can get confused if you run the two
together.

Explain the problem that this commit is solving. Focus on why you are
making this change as opposed to how (the code explains that). Are there
side effects or other unintuitive consequences of this change? Here's
the place to explain them.

Further paragraphs come after blank lines.

* Bullet points are okay, too

* Typically a hyphen or asterisk is used for the bullet, preceded by a single
  space, with blank lines in between, but conventions vary here

Story: TG-12
Tasks: TG-23 TG-45
Bugfix: TG-66
```

Here's a real life example from a [Bitcoin core commit](https://github.com/bitcoin/bitcoin/commit/eb0b56b19017ab5c16c745e6da39c53126924ed6):

```
Simplify serialize.h's exception handling

Remove the 'state' and 'exceptmask' from serialize.h's stream
implementations, as well as related methods.

As exceptmask always included 'failbit', and setstate was always called
with bits = failbit, all it did was immediately raise an exception. Get
rid of those variables, and replace the setstate with direct exception
throwing (which also removes some dead code).

As a result, good() is never reached after a failure (there are only 2
calls, one of which is in tests), and can just be replaced by !eof().

fail(), clear(n) and exceptions() are just never called. Delete them.
```

Take a look at the full diff and just think how much time the author is
saving fellow and future committers by taking the time to provide this
context here and now. If he didn't, it would probably be lost forever.

### Do

* Capitalize the summary line (unless it starts with a lowercase command
  or identifier)
* Limit the summary line to 50 characters

  Keeping subject lines at this length ensures that they are readable,
  and forces the author to think for a moment about the most concise way
  to explain what's going on.
* Write the summary line and description of what you have done in the
  imperative mode, that is as if you were commanding someone. Start the
  line with "Fix", "Add", "Change" instead of "Fixed", "Added",
  "Changed".

  This matches the convention that Git itself uses whenever it creates a
  commit on your behalf.
* Leave the second line blank.
* Line-break the commit message to 72 characters

  This will make the commit message much easier to read in tools like
  `git log` and `gitk` which do not auto-wrap.
* Some commits may only have a summary line because no further
  explanation is necessary:

  `Fix typo in introduction to user guide`
* List the IDs of [Taiga](https://tree.taiga.io/project/mei-biopocket) tickets with the `TG-`
  prefix

### Don't

* Don't end the summary line with a period: it's a title and titles don't end with a period.

### Tips

* Add this line to your `~/.vimrc` to automatically wrap lines at 72
  characters while you type your commit messages:

  ```
  autocmd Filetype gitcommit setlocal textwidth=72
  ```

### Inspired by

* [Writing good commit messages](https://github.com/erlang/otp/wiki/writing-good-commit-messages)
* [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
* [5 Useful Tips For A Better Commit Message](https://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message)
* [A Note About Git Commit Messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
