--SQLite脚本 a.sql

-- 创建 PERSONS 类
CREATE TABLE todolist(
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    finished BOOLEAN NOT NULL
);
    
INSERT INTO todolist (id,title,finished) 
    VALUES (1,'看一小时React的课程',false);
INSERT INTO todolist (id,title,finished) 
    VALUES (2, '打一小时台球',false);
INSERT INTO todolist (id,title,finished) 
    VALUES (3, '看一小时Java的课程',false);
INSERT INTO todolist (id,title,finished) 
    VALUES (4, '看一小时Python的课程',false);

CREATE TABLE finished(
    id  INTEGER PRIMARY KEY,
    finishedCount  INTEGER NOT NULL
);
INSERT INTO finished(id,finishedCount) 
    VALUES (1,0);

.quit
