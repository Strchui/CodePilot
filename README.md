# -CodePilot-
“CodePilot”程序员实时协同面试平台
interview-platform/
├── server.js              # 入口文件
├── config/
│   └── db.js              # 数据库连接
├── middleware/
│   └── auth.js            # JWT权限中间件
├── models/
│   ├── User.js
│   ├── Job.js
│   ├── Resume.js
│   ├── Interview.js
│   └── Video.js
├── routes/
│   ├── auth.js            # 注册、登录
│   ├── jobs.js            # 职位相关
│   ├── resumes.js         # 简历相关
│   ├── interviews.js      # 面试安排/反馈
│   ├── analytics.js       # 数据统计
│   ├── videos.js          # 教学视频
│   └── challenges.js      # 在线编程题
├── uploads/               # 文件上传目录
├── package.json
└── frontend/              # 前端 React 示例

