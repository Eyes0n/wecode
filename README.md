# git

## `git add 파일`
해당 파일을 git의 추적 대상이 되고 로컬 저장소에 저장될 준비(git commit 전 상태)를 한다.
추적 대상이 된 파일은 수정이 될 때마다 git이 수정 전 파일 내용과 비교하여 변경됨을 감지한다.

## `git commit -m 'message'`
git add 명령 실행으로 tracked된 파일을 로컬 git history에 최종적으로 저장하게 된다.
이때 사용자가 어떤 작업을 했는지 간략하게 적을 수 있는 옵션인 `-m`이 있다.
위와 같이 -m옵션 다음 `'message'` 부분에 어떤 작업을 했는지 작성할 수 있다.

## `git push origin main`
github에 해당 repository를 생성하고 git remote add로 원격 주소 즉 github에 생성한 repository의 주소를 추가해주면 origin이라는 변수명에 저장이 된다. 이후에 로컬에서 git commit까지 완료된 **local git history**를 **remote git history**에 올릴 수 있는데 이때 사용되는 명령이다.

- origin : remote 저장소
- main : local 저장소의 git history
