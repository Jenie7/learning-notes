exit

# Get all the commits which have deleted files, as well as the files
# that were deleted
# https://stackoverflow.com/questions/953481/how-do-i-find-and-restore-a-deleted-file-in-a-git-repository/953573#953573

git log --diff-filter=D --summary