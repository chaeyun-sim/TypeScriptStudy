# About "compilerOptions" from `tsconfig.json`

- `target` : 어떤 자바스크립트 버전으로 컴파일 할 것인지 설정한다.
    - *ECMAScript 대상 버전* : ES3(기본), ES5, ES6/ES2015/ ES2016, ES2017, ES2018, ES2019, ES2020, ESNext
- `lib` : 컴파일에 포함될 라이브러리 파일 목록 (dom으로 작업을 수행할 수 있게 하는 옵션)
- `allowJs` : 타입스크립트에서 자바스크립트 파일을 컴파일 할 수 있게 해주는 옵션. 컴파일을 수행하지 않더라도 구문 검사, 에러 보고 등을 할 수 있게 해준다.
- `outDir` : typescript에서 convert된 javascript 파일을 특정 디렉터리에 저장되게 만드는 옵션 (예: dist)
- `rootdir` : typescript 파일의 루트 디렉토리를 지정함. outDir로 출력 디렉토리 구조를 제어하기 위해서만 사용한다.
- `removeComments` : /*! 로 시작하는 헤더 주석을 제외한 모든 주석이 자바스크립트 파일에서 제거된다. 파일 크기를 줄이는 데에 좋다.
- `noEmit` : 출력을 내보내지 않는다. 즉, 자바스크립트 파일을 생성하지 않는다. 큰 프로젝트 같은 대규모 작업을 할 때 시간 절약할 수 있어 좋다.
- `downlevelIteration` : 이전 버전의 자바스크립트로 컴파일 후 for 루프 사용 시 에러가 나는 경우가 있는데, 이것을 보다 정확하게 컴파일 할 수 있도록 만든다.
- `noEmitOnError` : 파일 생성에 문제가 없으나 오류가 보고된 경우 문제가 되는 파일이 다시 컴파일 되지 않는다.
- `strict` : 모든 엄격한 타입 검사 옵션을 활성화 한다. (이어질 7개의 옵션을 모두 작동하는 것과 같다.)
- `noImplicitAny` : any 타입으로 지정한 표현식과 선언에 오류를 발생시킨다.
- `strictNullChecks` : null 혹은 undefined 값을 참조하는 것을 방지한다.
- `strictBindCallApply` : 함수에서 bind, call 그리고 apply 작업에 유용하다.
- `strictPropertyInitialization` : undefined가 아닌 클래스 함수의 props가 생성자에서 초기화되도록 설정한다. (`strictNullCheck`가 활성화 되어야만 사용할 수 있다)
- `noImplicitThis` : any 타입으로 지정한 this 표현식에 오류를 출력한다. 명확하지 않은 위치에 사용하면 경고를 출력한다.
- `alwaysStrict` : strict mode 인 경우, "use strict"를 각 파일의 상단에 출력한다.
- `noUnusedLocals` : 사용하지 않은 지역변수나 전역변수에 대해 에러를 출력한다.
- `nuUnusedParameters` : 사용하지 않은 파라미터 (함수 값)에 대해 에러를 출력한다.
- `noImplicitReturns` : 함수에 반환값이 없을 때 에러를 출력한다.
- `sourceMap` : 해당 파일의 .map 파일을 생성한다. 포함하는 정보는 version, file, sourcerRoot, sources, names, mapping 등이다.
- `initialSourceMap` : 별도의 .map 파일 대신에 소스 맵에 대한 단일 파일을 출력한다.
- `mapRoot` : sourceMap 파일이 위치할 폴더를 지정한다.

<font size="1">
    참고 : 
    TypeScript 공식 문서, Understanding TypeScript from Udemy
</font>