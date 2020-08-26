## Git Workflow

Nice! We have a Git project. A Git project can be thought of as having three parts:

A Working Directory: where you’ll be doing all the work: creating, editing, deleting and organizing files
A Staging Area: where you’ll list changes you make to the working directory
A Repository: where Git permanently stores those changes as different versions of the project
The Git workflow consists of editing files in the working directory, adding files to the staging area, and saving changes to a Git repository. In Git, we save changes with a commit, which we will learn more about in this lesson.

##### git add
In order for Git to start tracking scene-1.txt, the file needs to be added to the staging area.

We can add a file to the staging area with:

git add filename

##### git diff

Imagine that we type another line in scene-1.txt. Since the file is tracked, we can check the differences between the working directory and the staging area with:

git diff filename
