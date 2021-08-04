cd ProjectNote
call ng build --c production --output-hashing all
aws s3 sync C:\web\projectnote\ProjectNote\dist\ProjectNote\ s3://note.dexteryip.com/ --region ap-east-1 --delete
@ECHO Sync job done.
pause