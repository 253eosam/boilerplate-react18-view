# teamreboott admin

## Framworks

- **Bundler** : Vite
- **Core** : React18

## Code Pattern

- **Static(public)**
- **Root(src)** <br/>
- ⎣&nbsp;**assets** - image, icon, font 등 <br/>
- ⎣&nbsp;**common** - 정적 데이터(텍스트) <br/>
- ⎣&nbsp;**components** - 최소 단위 컴포넌트(atoms, molecules, organism) <br/>
- ⎣&nbsp;**containers** - 비즈니스 로직 컴포넌트(template) <br/>
- ⎣&nbsp;**interface** - 객체 타입 지정 <br/>
- ⎣&nbsp;**layouts** - 고정 영역 <br/>
- ⎣&nbsp;**router** - React Routes<br/>
- ⎣&nbsp;**libs** - Store, Hooks, Utils 등<br/>
- ⎣&nbsp;**styles** - css셋 모음<br/>

## Getting Started

### 1) Installation

```shell
git clone https://github.com/teamreboott/teamreboott-admin.git
cd teamreboott-admin
npm install
```

### 2) Run development server

```shell
npm start
```

```shell
npm run dev
```

### 3) Build

```shell
npm run build
```

## Using with Style set

```javascript
const Style = styled.div`
  // 플렉스 세트(기준 정렬, 대칭 정렬, 방향)
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};

  // 박스 세트(가로, 세로, 라운딩)
  ${({ theme }) => theme.boxSet('00px', '00px', '00px')};

  // 컬러 세트(폰트 컬러, 배경 컬러)
  ${({ theme }) => theme.colorSet('white', 'black')};

  // 배경 세트(URL, Fit)
  ${({ theme }) => theme.backgroundSet('URL', 'contain')};

  // 폰트 세트(폰트 크기, 두께, 줄간격)
  ${({ theme }) => theme.fontSet(00, 000, 00)};
`;
```
