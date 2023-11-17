# HTML/CSS 과제 - 03

- 작성자 : 김종연

## 1️⃣ 개요

### 🔹 목표

- 컴포넌트 주도 개발(CDD) 방법론을 사용하여 넷플릭스 home 페이지 구현
  - _야무쌤께서 작성하신 [컴포넌트 주도개발 방법론](https://yamoo9.github.io/react-master/lecture/sb-cdd.html) 페이지를 참고하여 개발을 진행하였습니다._

### 🔹 기술 스택

- HTML
- CSS
- Javascript

### 🔹 디렉토리 구조

```
mission-03
 ┣ components (하위 파일 생략)
 ┃ ┣ buttons
 ┃ ┣ footer
 ┃ ┣ form
 ┃ ┣ header
 ┃ ┣ inputs
 ┃ ┣ logo
 ┃ ┣ selectbox
 ┃ ┣ template
 ┃ ┣ index.html
 ┃ ┗ index.css
 ┣ css
 ┃ ┣ base.css
 ┃ ┣ component.css
 ┃ ┣ mission-03.css
 ┃ ┣ reset.css
 ┃ ┣ styles.css
 ┃ ┗ theme.css
 ┣ images (하위 파일 생략)
 ┃ ┣ favicon
 ┃ ┣ logo
 ┃ ┣ svg
 ┣ mission-03.html
 ┣ mission-03.js
 ┗ README.md
```

## 2️⃣ 구현 내용

### 🔹 0단계 : 초기 구성

- CDD 방법론을 사용하기 위해 필요한 `component`, `css`, `images` 디렉토리들을 만들었습니다.
- CSS 스타일을 위해 필요한 css 파일들을 만들었습니다.
  1. `reset.css` : Agent 스타일 리셋
  2. `base.css` : 기본 스타일 정의
  3. `theme.css` : 피그마 디자인에서 추출한 global variable 정의
  4. `component.css` : 각 컴포넌트의 css파일들을 import
  5. `style.css` : 웹 폰트와 위의 1 ~ 4번 파일들을 import
  6. `mission-03.css` : 과제 페이지 컴포넌트 스타일 정의
- 컴포넌트 개발에 사용할 초기 템플릿을 구성하였습니다.

### 🔹 1단계 : 독립적인 컴포넌트 제작

- 먼저 각자 독립적으로 작동하는 컴포넌트들을 만들었습니다.
- 설명

  1.  **buttons : 버튼 컴포넌트**

      <img src="./images/readme-images/component_buttons.png" width="500px">

       <details>
          <summary>HTML 코드</summary>

      ```html
      <div>
        <a class="button login-button" href="#">버튼</a>
      </div>

      <div>
        <button class="button submit-button" type="submit"><span>버튼</span></button>
      </div>
      ```

       </details>
             <details>
          <summary>CSS 코드</summary>

      ```css
      .buttons-container {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        row-gap: 30px;
      }

      .button {
        display: inline-block;
        background-color: var(--red-500, #e50914);
        border: 0;
        color: var(--white, #fff);
        font-weight: 700;
        transition: all 0.3s;
      }
      .button:hover,
      .button:focus {
        background-color: var(--red-600, #b70710);
      }
      .button:focus {
        box-shadow: 0 0 0 3px var(--green-400, #58e590);
        outline: none;
        transition: none;
      }
      .button:disabled {
        background-color: var(--gray-500, #0071eb);
        cursor: not-allowed;
      }

      @media (max-width: 768px) {
        .login-button {
          font-size: var(--text-x-small-bold, 1.2rem);
          line-height: 1.5;
          letter-spacing: -0.006px;
          padding: 0.5em 1.083em;
          border-radius: 4px;
        }
        .submit-button {
          width: 160px;
          height: 40px;
          font-size: var(--text-small-bold, 1.4rem);
          line-height: 1.5;
          letter-spacing: -0.007px;
          border-radius: 30px;
          background-image: url("../../images/svg/arrow-stroke.svg");
          background-repeat: no-repeat;
          background-position: 87% 50%;
          & span {
            display: inline-block;
            padding-right: 35px;
          }
        }
      }

      @media (min-width: 768px) {
        .login-button {
          font-size: var(--text-normal-bold, 1.6rem);
          line-height: 1.5;
          letter-spacing: -0.008px;
          padding: 0.5em 0.781em;
          border-radius: 4px;
        }
        .submit-button {
          width: 210px;
          height: 60px;
          font-size: var(--title-x-small, 2.2rem);
          line-height: 1.2;
          background-image: url("../../images/svg/arrow-stroke.svg");
          background-repeat: no-repeat;
          background-position: 87% 50%;
          & span {
            display: inline-block;
            padding-right: 35px;
          }
        }
      }
      ```

       </details>

  2.  **logo : 로고 컴포넌트**

      <img src="./images/readme-images/component_logo.png" width="500px">

      <details>
      <summary>HTML 코드</summary>

      ```html
      <h1 class="logo">
        <a href="#">
          <picture>
            <source srcset="../../images/logo-mobile.png 1x, ../../images/logo-mobile@2x.png 2x, ../../images/logo-mobile@3x.png 3x, ../../images/logo-mobile@4x.png 4x" media="(max-width: 768px)" />
            <source srcset="../../images/logo.png 1x, ../../images/logo@2x.png 2x, ../../images/logo@3x.png 3x, ../../images/logo@4x.png 4x" media="(min-width: 768px)" />
            <img src="../../images/Logo.png" alt="넷플릭스" />
          </picture>
        </a>
      </h1>
      ```

      </details>
      <details>
      <summary>CSS 코드</summary>

      ```css
      .logo > a {
        display: inline-block;
      }
      ```

       </details>

  3.  **inputs : 입력창 컴포넌트**

      <img src="./images/readme-images/component_inputs.png" width="500px">

      <details>
      <summary>HTML 코드</summary>

      ```html
      <div class="input-container">
        <input class="input" type="email" name="userEmail" id="userEmail" required />
        <label class="label" for="userEmail">레이블</label>
        <span class="error-msg">오류 메세지</span>
      </div>
      ```

       </details>
       <details>
          <summary>CSS 코드</summary>

      ```css
      .input-container {
        position: relative;
      }
      .input {
        border: 1px solid var(--gray-200, #c8c8c8);
        background-color: var(--white, #ffffff);
        line-height: 1.5;
        letter-spacing: -0.008px;
        color: var(--black, #010101);
        outline: none;
      }
      .label {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        color: var(--gray-500, #757575);
        transition: all 0.2s;
      }
      .error-msg {
        display: block;
        color: var(--red-500, #e50914);
        padding-left: 20px;
        font-size: var(--text-small-bold, 1.4rem);
        visibility: hidden;
      }
      /* 레이블 속성 변경 */
      .input.is--focus + label,
      .input.is--invalid + label,
      .input.is--valid + label {
        color: var(--red-500, #e50914);
        font-size: var(--text-small-bold, 1.2rem);
        font-weight: 700;
      }

      .input.is--invalid ~ .error-msg {
        visibility: visible;
      }

      /* 모바일, 태블릿 */
      @media (max-width: 768px) {
        /* 모바일,태블릿 기본 인풋 스타일 */
        .input {
          width: clamp(245px, 72%, 300px);
          font-size: var(--text-small, 1.4rem);
          padding: 10px 50px 10px 20px;
          border-radius: 30px;
          box-sizing: border-box;
        }
        /* 모바일,태블릿 기본 레이블 스타일  */
        .label {
          transform: translate(20px, 10px);
          font-size: var(--text-smal, 1.4rem);
        }
        /* 레이블 포지션 변경 */
        .input.is--focus + label,
        .input.is--invalid + label,
        .input.is--valid + label {
          transform: translate(20px, -20px);
        }
        /* 입력값이 유효하지 않은 경우 붉은 테두리 표현 */
        .input.is--invalid {
          border: 2px solid var(--red-500, #e50914);
          background: url("../../images/svg/warning-icon.svg") no-repeat 95% 50%, var(--white, #ffffff);
        }
        /* 입력값이 유효한 경우 초록 테두리 표시 */
        .input.is--valid {
          border: 2px solid var(--green-500, #2ede75);
          background: url("../../images/svg/check-icon.svg") no-repeat 95% 50%, var(--white, #ffffff);
        }
        .error-msg {
          padding-top: 3px;
          font-size: var(--text-small-bold, 1.2rem);
          text-align: left;
        }
      }
      /* 데스크탑 */
      @media (min-width: 768px) {
        /* 데스크탑 기본 인풋 스타일 */
        .input {
          width: 540px;
          height: 60px;
          padding: 15px 50px 5px 20px;
        }
        /* 데스크탑 기본 레이블 스타일 */
        .label {
          transform: translate(20px, 20px);
          font-size: var(--text-normal, 1.6rem);
        }

        /* 레이블 포지션 변경 */
        .input.is--focus + label,
        .input.is--invalid + label,
        .input.is--valid + label {
          transform: translate(20px, 0px);
        }
        /* 입력값이 유효하지 않은 경우 붉은 밑줄 표현 */
        .input.is--invalid {
          border-bottom: 2px solid var(--red-500);
          background: url("../../images/svg/warning-icon.svg") no-repeat 95% 50%, var(--white, #ffffff);
        }
        /* 입력값이 유효한 경우 초록 테두리 표시 */
        .input.is--valid {
          border-bottom: 2px solid var(--green-500, #2ede75);
          background: url("../../images/svg/check-icon.svg") no-repeat 95% 50%, var(--white, #ffffff);
        }
      }
      ```

      </details>

  4.  **selectbox : 셀렉트박스(드롭다운 메뉴) 컴포넌트**

      <img src="./images/readme-images/component_selectbox.png" width="500px">

      <details>
         <summary>HTML 코드</summary>

      ```html
      <div class="default-selectbox-container">
        <select class="default-selectbox" name="language">
          <option value="">옵션1</option>
          <option value="">옵션2</option>
        </select>
      </div>

      <div class="custom-selectbox-container">
        <button class="custom-selectbox select-language">옵션1</button>
        <ul class="option-list">
          <li id="first-item" class="option-item is--select"><a href="#">옵션1</a></li>
          <li id="second-item" class="option-item"><a href="#">옵션2</a></li>
        </ul>
      </div>
      ```

      </details>
      <details>
         <summary>CSS 코드</summary>

      ```css
      .default-selectbox-container,
      .custom-selectbox-container {
        position: relative;
        display: inline-block;
      }
      .default-selectbox,
      .custom-selectbox {
        padding: 10px 34px;
      }

      /* 기본 셀렉트 박스 */
      .default-selectbox {
        position: relative;

        background: transparent;
        border: 1px solid var(--gray-500, #757575);
        border-radius: 2px;
        appearance: none;
        color: var(--gray-500, #757575);
        line-height: 1.2;
        text-align: center;
      }
      .default-selectbox-container::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: url("../../images/svg/global.svg") no-repeat 8px 50%;
        pointer-events: none;
      }

      .default-selectbox-container::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: url("../../images/svg/drop-down.svg") no-repeat 93% 50%;
        pointer-events: none;
      }

      /* 커스텀 셀렉트박스(js 사용) */
      .custom-selectbox {
        position: relative;
        background: transparent;
        border: 1px solid var(--gray-500, #757575);
        border-radius: 2px;
        color: var(--gray-500, #757575);
        line-height: 1.2;
      }
      .custom-selectbox::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        /* background: url("../../images/svg/stack.svg#global") no-repeat 8px 50%; */
        background-image: url("../../images/svg/global.svg");
        background-repeat: no-repeat;
        background-position: 8px 50%;
        background-size: 16px;
      }
      .custom-selectbox::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        /* background: url("../../images/svg/drop-down.svg") no-repeat 93% 50%; */
        background-image: url("../../images/svg/drop-down.svg");
        background-repeat: no-repeat;
        background-position: 93% 50%;
        background-size: 16px;
      }
      .option-list {
        overflow: hidden;
        border-radius: 12px;
        opacity: 0.96;
        background: var(--gray-100, #e3e3e3);
        font-weight: 700;
        line-height: 1.5;
        letter-spacing: -0.008px;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px;
        position: absolute;
        top: -5px;
        left: 5px;
        display: none;
      }
      .option-item {
        cursor: pointer;
        user-select: none;
        padding: 5px;
      }
      .option-item a {
        display: block;
        padding: 3px;
      }
      .option-item a:hover {
        background-color: var(--gray-200, #c8c8c8);
      }
      .default-selectbox:focus,
      .custom-selectbox:focus {
        box-shadow: 0 0 0 3px var(--green-500, #757575);
        outline: none;
      }
      /* 선택 체크 표시 상태 */
      .option-item.is--select a::before {
        content: "✔ ";
      }
      /* 커스텀 드롭다운 메뉴 상태 */
      .is--active {
        display: flex;
      }

      @media (max-width: 768px) {
        .default-selectbox,
        .custom-selectbox {
          padding: 5px 34px;
        }
      }
      ```

      </details>

### 🔹 2단계 : 컴포넌트 결합

- 독립적인 컴포넌트를 결합하여 복잡성을 증가시키고 새로운 기능을 추가하였습니다.
- 설명

  1. **form : 입력 폼 컴포넌트, [입력 + 버튼] 컴포넌트 결합, 유효성 검사 기능 추가**

     <img src="./images/readme-images/component_form.png" width="500px">

  2. **header : 헤더 컴포넌트, [로고 + 셀렉트박스 + 버튼] 컴포넌트 결합**

     <img src="./images/readme-images/component_header.png" width="500px">

  3. **footer : 푸터 컴포넌트, 내비게이션 요소 + [셀렉트박스] 컴포넌트 결합**

     <img src="./images/readme-images/component_footer.png" width="500px">

### 🔹 3단계 : 페이지 조립 (템플릿)

- 2단계에서 만든 컴포넌트들을 결합하여 기본 템플릿 페이지를 조립하였습니다.
- 설명

  1. **template : [헤더 + 푸터] 컴포넌트 결합, 백그라운드 이미지 추가**

     <img src="./images/readme-images/component_template.png" width="500px">

### 🔹 4단계 : 페이지 조립 (최종 home 페이지)

- 3단계에서 만든 템플릿 페이지에 `<main>` 영역을 삽입하여 home 페이지를 조립하였습니다.
- `<main>` 영역은 재사용할 일이 없어서 따로 컴포넌트로 만들지는 않았습니다.
- **`<main>` 영역 설명**

     <img src="./images/readme-images/main.png" width="500px">

### 🔹 5단계 : 프로젝트에 페이지 통합

- 최종적으로 페이지 동작에 필요한 자바스크립트 로직을 추가하고 프로젝트 페이지를 완성하였습니다.

## 3️⃣ 동작

### [데모 페이지 바로가기](https://jykim29.github.io/home-work/)

- 데스크탑, 태블릿

<img src="./images/readme-images/netflix-demo.gif" width="800px">

- 모바일

<img src="./images/readme-images/netflix-mobile-demo.gif" width="300px">

## 4️⃣ 회고

- 수업시간에 배웠던 CDD 방법론으로 개발을 진행해보니 기존의 페이지별로 개발하는 방식보다 훨씬 더 체계적이고 작업이 효율적으로 이루어져 시간이 단축되었다는 것을 느낄 수 있었습니다.
- 무엇보다 위에서 하나 고치면 밑에 레이아웃이 무너지고 밑에서 하나를 고치면 또 위의 레이아웃이 무너지는 악순환이 확연히 줄어들게 되어 작업을 하면서 매우 편안했습니다.
- 다만 조금 아쉬웠던 점은 컴포넌트 단위의 html 코드를 수정할 상황이 발생했을 때, 그 컴포넌트가 포함된 모든 html의 코드를 일일이 수정해줘야 한다는 번거로움이 있었습니다. 리액트의 필요성이 절실하게 느껴졌습니다😂
