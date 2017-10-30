#!/bin/sh
#https://help.github.com/articles/changing-author-info/

git filter-branch -f --env-filter '
OLD_EMAIL="student@appacademy.io"
CORRECT_NAME="Joseph Burger"
CORRECT_EMAIL="candyapplecorn@gmail.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
