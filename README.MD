# Git Checkpoint Project

This project demonstrates basic Git operations as part of a learning exercise.

## Steps Completed

### 1. Project Setup
- Created a folder called `learn_git`.
- Navigated into the folder using:
  ```bash
  cd learn_git
  ```

### 2. File Creation & Initial Commit
- Created a file `third.txt`.
- Initialized an empty Git repository:
  ```bash
  git init
  ```
- Added `third.txt` to the staging area:
  ```bash
  git add third.txt
  ```
- Committed the file with the message:
  ```bash
  git commit -m "adding third.txt"
  ```
- Verified the commit using:
  ```bash
  git log
  ```

### 3. Adding Another File
- Created a file `fourth.txt`.
- Added it to the staging area:
  ```bash
  git add fourth.txt
  ```
- Committed the file with the message:
  ```bash
  git commit -m "adding fourth.txt"
  ```

### 4. Removing a File
- Removed `third.txt` from the repository:
  ```bash
  git rm --cached third.txt
  ```
- Staged the change:
  ```bash
  git add .
  ```
- Committed with the message:
  ```bash
  git commit -m "removing third.txt"
  ```
- Verified commits with:
  ```bash
  git log
  ```

### 5. Git Configuration
- Changed global Git pager setting:
  ```bash
  git config --global core.pager cat
  ```
- Listed global configurations:
  ```bash
  git config --global --list
  ```

## Example Git Log Output
```
commit e49ed1759f353ded60f62ea80426ecae64703d2c (HEAD -> master)
Author: Ngumonelson123 <your-email@example.com>
Date:   Fri Sep 19 22:04:27 2025 +0300

    adding fourth.txt

commit 120ab4bc2b66e7af465f1f5e3b7103ebb09236e
Author: Ngumonelson123 <your-email@example.com>
Date:   Fri Sep 19 21:53:30 2025 +0300

    adding third.txt
```

## Commands Reference
- `git init` → Initialize repository
- `git add <file>` → Stage changes
- `git commit -m "message"` → Commit staged changes
- `git log` → View commit history
- `git rm --cached <file>` → Remove file from repo but keep locally
- `git config --global core.pager cat` → Disable pager
- `git config --global --list` → Show global Git configs

---
This completes the Git checkpoint project as per the instructions.