# 構成
```
project/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── db.py
│   │   └── routers/
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/
│   ├── Dockerfile
│   └── src/
├── mongo/
│   └── init/
│       └── init-user.js
├── .env
└── docker-compose.yml
```

## frontend 

```
  小〜中規模プロジェクト向け（最も一般的）

  frontend/src/
  ├── components/          # 再利用可能なコンポーネント
  │   ├── Button.jsx
  │   ├── Header.jsx
  │   └── Footer.jsx
  ├── pages/              # ページコンポーネント（ルーティング単位）
  │   ├── Home.jsx
  │   ├── About.jsx
  │   └── UserDetail.jsx
  ├── hooks/              # カスタムフック
  │   └── useAuth.js
  ├── utils/              # ユーティリティ関数
  │   └── formatDate.js
  ├── services/           # API通信関連
  │   └── api.js
  ├── assets/             # 画像、フォントなど
  │   └── images/
  ├── App.jsx
  ├── main.jsx
  └── index.css

  中〜大規模プロジェクト向け

  frontend/src/
  ├── components/
  │   ├── common/         # 汎用コンポーネント
  │   │   ├── Button/
  │   │   │   ├── Button.jsx
  │   │   │   └── Button.css
  │   │   └── Modal/
  │   └── layout/         # レイアウト関連
  │       ├── Header.jsx
  │       └── Sidebar.jsx
  ├── pages/
  ├── features/           # 機能ごとのモジュール
  │   └── auth/
  │       ├── Login.jsx
  │       ├── Register.jsx
  │       └── authSlice.js
  ├── hooks/
  ├── context/            # React Context
  │   └── AuthContext.jsx
  ├── services/
  ├── utils/
  │   ├── constants.js    # 定数定義
  │   └── helpers.js
  ├── styles/             # グローバルスタイル
  │   └── global.css
  ├── App.jsx
  └── main.jsx

  各ディレクトリの役割

  - components/: 再利用可能なUIコンポーネント（ボタン、カードなど）
  - pages/: 各ページを表すコンポーネント（React Routerと組み合わせる）
  - hooks/: カスタムフック（useなんとか）
  - services/: API通信、外部サービス連携
  - utils/: 純粋なJavaScript関数（日付フォーマット、バリデーションなど）
  - context/: グローバルな状態管理（React Context API）
  - assets/: 静的ファイル（画像、アイコン、フォント）
  - styles/: CSSファイル

  初心者向けの推奨

  最初はシンプルな構造から始めることをお勧めします：

  frontend/src/
  ├── components/    # すべてのコンポーネント
  ├── App.jsx
  ├── main.jsx
  └── index.css
```


# 起動
```
docker-compose up --build
```
- React: http://localhost:3000
- API: http://localhost:8000
- MongoDB: localhost:27017


