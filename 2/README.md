# 2. 과제1 리팩터링

## 설명
### 실행 방법
```bash
git clone https://github.com/zmin9/InternAssignment.git
open open ./InternAssignment/2/pages/main.html -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```
_type=module로 불러온 script의 CORS 문제로 chrome의 보안 옵션을 비활성화하여 open_ 

개발자 도구 > `Dimensions: iPhone12 Pro` 로 설정

* 화면 상단 전체 또는 각 카테고리 버블을 눌러 카테고리별로 태스크를 확인할 수 있습니다.
* 각 태스크를 눌러 상태를 변경할 수 있습니다.
* 각 태스크를 길게 눌러/오른쪽 마우스 클릭하여 수정하거나 삭제할 수 있습니다.
* 오른쪽 하단의 + 버튼을 눌러 새 태스크를 추가할 수 있습니다.
  * 현재 태스크 목록에 존재하는 카테고리의 경우 입력창 하단의 버블을 눌러 카테고리를 지정할 수 있습니다.
  * 새로운 카테고리의 경우 + 버블을 눌러 입력할 수 있습니다.

### 코드 구조
<img width="200" alt="스크린샷 2022-07-19 오전 12 54 02" src="https://user-images.githubusercontent.com/60884877/179554986-644c6b63-2cf8-4fe0-8665-73442d9764ad.png">

* `images/` : 웹에서 쓰이는 이미지들
* `src/` : 각 페이지별 기능에 따라 javascript, html파일 분리, 여러 페이지에 쓰이는 경우 디렉토리 바로 아래에 위치
  * `category-button.js` : category button을 만들고 두 페이지에 공통으로 사용되는 eventListener 부착
  * `data.js` : localStorage에 접근하여 테스크 정보를 관리하는 객체
  * `element.js` : 공통적 또는 부분 요소를 만드는 함수들
  * `addPage/` 
    * `add.html` : 태스크를 추가할 수 있는 화면
    * `main.js` : _category-button_ 을 배치하고 화면의 입력을 받아 저장 
  * `mainPage/`
    * `main.html` : 태스크 목록이 표시되는 메인 화면
    * `main.js` : 각 함수를 호출하여 화면에 요소를 추가
    * `task-progress.js` : 카테고리에 따른 테스크 진행 상태 조정
    * `context-menu-modal.js` : 태스크 context menu를 위한 modal
    * `task-box-element.js` : task를 표시하는 task box(checkbox + title + category)를 생성 관리
* `styles` : 비슷한 특징으로 분류되어 있는 css 파일
  * `common.css` : 태그 이름으로 하여 무조건 적용될 스타일
  * `font.css` : text 스타일(폰트 크기, 폰트 색상 등)
  * `layout.css` : 요소의 위치와 관련된 스타일,
  * `style.scss` : 위에 포함되지 않는 다른 스타일들, 특정 요소를 지정한 경우

## 쉽지 않았던 부분
* 리팩터링 전부
  * 다 너무 얽혀있고 알고리즘 자체도 별로라서 알고리즘 수정과 리팩토링 중 어느걸 뭔저 해야할지 고민
  * (제 생각엔) 뭐든 온전히 하나만 해야하는데 <br>하나 하다말고 자꾸 다른 것을 수정하는 모습에 매우 실망 후 반성
  * 책에서 설명하는 악취를 맡아보려고 노력

  **→ 처음부터 잘 정리해서 썼으면 얼마나 좋았을까...** 

## 더 공부해보고 싶은 부분
* 리팩터링 습관들이기
  * 구조화해서 생각하기

## 개선이 가능한 부분
* 코드 전체..