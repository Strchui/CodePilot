const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// 数据库连接
require('./config/db');

// 路由引入
app.use('/api/auth', require('./routes/auth'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/resumes', require('./routes/resumes'));
app.use('/api/interviews', require('./routes/interviews'));
app.use('/api/analytics', require('./routes/analytics'));
app.use('/api/videos', require('./routes/videos'));
app.use('/api/coding-challenges', require('./routes/challenges'));

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
