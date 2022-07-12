# 1. Task List 관리 앱 html css js로 구현하기

## 설명
### 실행 방법
```bash
git clone https://github.com/zmin9/InternAssignment.git
open ./InternAssignment/1/pages/main.html
```
개발자 도구 > `Dimensions: iPhone12 Pro` 로 설정

<img width="500" alt="" src="https://user-images.githubusercontent.com/60884877/178415052-56439b31-033f-4f99-8ea9-54947a2dd7b3.png">

* 화면 상단 전체 또는 각 카테고리 버블을 눌러 카테고리별로 태스크를 확인할 수 있습니다.
* 각 태스크를 눌러 상태를 변경할 수 있습니다.
* 각 태스크를 길게 눌러/오른쪽 마우스 클릭하여 수정하거나 삭제할 수 있습니다.
* 오른쪽 하단의 + 버튼을 눌러 새 태스크를 추가할 수 있습니다.
  * 현재 태스크 목록에 존재하는 카테고리의 경우 입력창 하단의 버블을 눌러 카테고리를 지정할 수 있습니다.
  * 새로운 카테고리의 경우 + 버블을 눌러 입력할 수 있습니다.

### 코드 구조
<img width="200" alt="스크린샷 2022-07-08 오후 6 12 40" src="https://user-images.githubusercontent.com/60884877/177959440-55fd0c22-03a9-48c2-b675-037b2d88631c.png">

* `README.md` : 과제 설명
* `images` : 웹에서 쓰이는 이미지들
* `js` : 각 페이지별 기능에 따라 javascript 파일 분리, 여러 페이지에 쓰이는 경우 `js`디렉토리 바로 아래에 위치
  * `각 페이지/main.js` : 다른 javascript 파일에서 정의한 함수를 **호출하고 실행하는 파일**
  * `categoryButton.js` : 카테고리를 나타내는 버튼의 모양만 생성 → 용도에 맞게 `addEventListner`
  * `mainPage/checkProgress.js` : 카테고리에 따른 현재 진행 상황 상단에 개수로 표시
  * `mainPage/contextMenuModal.js` : 태스크 context menu를 위한 modal
  * `mainPage/manageTaskBox.js` : 메인 기능인 태스크 요소를 만들고 위치시키는 함수
* `pages` : 각 페이지의 html 파일
  * `main.html` : 태스크 목록이 표시되는 메인 화면
  * `add.html` : 태스크를 추가할 수 있는 화면
* `styles` : 비슷한 특징으로 분류되어 있는 css 파일
  * `common.css` : 태그 이름으로 하여 무조건 적용될 스타일
  * `font.css` : text 스타일(폰트 크기, 폰트 색상 등)
  * `layout.css` : 요소의 위치와 관련된 스타일, 
  * `style.scss` : 위에 포함되지 않는 다른 스타일들, 특정 요소를 지정한 경우



  
## 명세 이외에 추가한 내용
* 태스크 추가 후 목록으로 돌아가지 않고 정상적으로 태스크가 추가됐다는 토스트 메세지
* 태스크 타이틀을 적지 않고 추가하려 할 경우 추가해주지 않고 적으라고 안내하는 메세지 출력
* 태스크 context menu 열어서
  * 태스크 수정
  * 태스크 삭제
* 카테고리별로 태스크를 확인할 수 있게 하는 버블
* add.html 페이지에서 현재 입력되어있는 카테고리를 버블로 확인하고 선택 가능

## 쉽지 않았던 부분
* git 사용이 아직 미숙해서 초반 커밋 메세지를 수정하려다 커밋 되어있는 변경 사항과 이후 진행한 변경 사항이 하나로 합쳐지는 상황 발생.
<br>스타일을 하나의 css 파일에 작성해서 다시 분리하기 어려울 것 같아 명세 1과 2를 하나의 커밋으로 묶어버림
  * 커밋 메세지 수정할 일 없게 혼자라도 간단하게 컨벤션 생각
* **CSS파일 하나에 무턱대고 스타일 전부 밀어넣었더니 복잡해짐**
  * font, layout, common, 그 외 style 로 구분
    ```css
    /* 예시 */
    .flex-alignment-center{
      justify-content: center;
      align-items: center; 
    }
    ```
* javascript를 통해 동적으로 요소를 추가하고자 할 때 반복적인 `createElement`의 사용으로 코드가 복잡<br> → html처럼 구조를 쉽게 확인할 수 없어 불편
* 화면에 표시되어있는 task를 완료 여부에 따라 **저장된 순서를 고려**하여 각 리스트로 옮기는 것
  * 완료 여부에 따라 옮겨 다니는 방법으로 구현
  * taskList 인덱스(시간 순으로 오름차순)를 각 `task-box`요소 listNum 프로퍼티에 추가하여 이를 순서 비교에 사용

## 더 공부해보고 싶은 부분
* SCSS/SASS같은 전처리기, 후처리기
* 모듈

## 개선이 가능한 부분
* 체계적인 스타일시트 -> 이후 값을 찾을 때 잘 찾을 수 있도록
* 가독성 높이기
  * 변수명이 비슷비슷해서 읽는게 쉽지 않음
* (노력할 부분) 커밋메세지 실수 하지 말기
