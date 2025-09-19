# CodePilot
“CodePilot”程序员实时协同面试平台
# 📂 interview-platform 项目结构

---

## 📑 文件说明

### `server.js`
- 项目入口，初始化 `Express` 应用
- 加载中间件与路由
- 启动服务器  

### `config/db.js`
- 连接 **MongoDB** 数据库  

### `middleware/auth.js`
- 处理 **JWT 鉴权**  
- 验证用户身份、解析角色权限  

### `models/User.js`
- 用户模型（用户名、密码、角色）

### `models/Job.js`
- 职位模型（标题、描述、要求、附件）

### `models/Resume.js`
- 简历模型（关联用户、文本内容、附件）

### `models/Interview.js`
- 面试模型（职位、候选人、面试官、时间安排、反馈）

### `models/Video.js`
- 视频模型（标题、描述、上传者、文件链接）

### `routes/auth.js`
- 用户注册、登录，返回 **JWT Token**

### `routes/jobs.js`
- 发布职位信息  
- 搜索、筛选、排序职位  

### `routes/resumes.js`
- 上传简历文件  
- 筛选简历  

### `routes/interviews.js`
- 创建面试安排  
- 提交面试反馈  

### `routes/analytics.js`
- 招聘进度  
- 面试通过率  
- 职位热度排名  

### `routes/videos.js`
- 教学视频上传（存储到 **AWS S3** 或本地）  
- 获取视频列表  

### `routes/challenges.js`
- 获取编程挑战题（调用第三方 API）  

### `uploads/`
- 上传文件的临时存储目录  

### `package.json`
- Node.js 依赖与脚本配置  

### `frontend/`
- React 前端示例：展示职位、简历、视频、在线编程挑战  

---

