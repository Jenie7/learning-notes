exit

# To save your uncommitted changes 
git stash
# To list your saved stashes
git stash list
# To apply a stash and remove it from the stash list
git stash pop stash@{x}
# To apply a stash and keep it in the stash list
git stash apply stash@{x}
# To delete store stashed #0
git stash drop stash@{x}