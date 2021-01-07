describe('Test auth', function(){
   it('Test login', function(){
       cy.visit('/login');
       cy.get('input[placeholder="username & email address"]').type('ck');
       cy.get('input[placeholder="请输入密码"]').type('123456');
       cy.get('button[class="ant-btn login-button"]').click();
   });

    it('Test register', function(){
        cy.visit('/register');
        cy.get('input[placeholder="用户名"]').type('ckk');
        cy.get('input[placeholder="姓名"]').type('程可');
        cy.get('input[placeholder="输入学校全称"]').type('SJTU');
        cy.get('input[placeholder="学号/工号"]').type('51802');
        cy.get('input[placeholder="创建密码"]').type('123456');
        cy.get('input[placeholder="您的手机号"]').type('187xxxxx');
        cy.get('input[placeholder="you@example.com"]').type('you@example.com');
        cy.get('input[placeholder="请输入收到的验证码"]').type('abcd');
        cy.get('button[class="ant-btn register-button"]').click();
    });
});


describe('Test change user info', function(){
    it('Test change user info', function(){
        cy.visit("/user");
        cy.get('input[placeholder="学号或工号"]').type('51802xxx');
        cy.get('input[placeholder="请输入姓名"]').type('程可');
        cy.get('input[placeholder="输入邮箱"]').type('@sjtu.com');
        cy.get('input[placeholder="请输入手机号"]').type('187xxx');
        cy.get('input[placeholder="请输入学校"]').type('SJTU');
        cy.get('button[type="submit"]').click();
    });
});


describe('function related to course', function(){
    it('add course', function(){
        cy.visit('/addclass');
        cy.get('input[placeholder="输入课程名称"]').type('test course');
        cy.get('textarea[placeholder="请填写课程详情"]').type('test books');
        cy.get('textarea[placeholder="请填写课程简介"').type('test description');
        cy.get('button[class="ant-btn"]').click();
    });

    it('del course', function(){
        cy.visit('/');
        cy.get('h1[style="font-size: 24px; color: rgb(255, 255, 255); font-weight: bold;"]').click();
        cy.contains('删 除').click();
    });

    it('edit course', function(){
        cy.visit('/class?id=-8235585134483429');
        cy.contains('编 辑').click();
        cy.get('input[placeholder="输入课名"]').type('test course');
        cy.get('textarea[placeholder="请填写课程教材"]').type('test books');
        cy.get('textarea[placeholder="请填写课程介绍"]').type('test description');
        cy.contains('保 存').click();
    });

    it('add student', function(){
        cy.contains('导入').click();
        cy.get('div[class="list-item"]').click();
        cy.contains('提 交').click();
    });

    it('del student', function(){

    });

    it('find all student', function(){
        cy.visit('/class?id=5465111182023844');
        cy.contains('用 户').click();
    });

    it('student find all course', function(){
        cy.visit('/');
        cy.get('div[class="course-card"]');
    });
});


describe('function related to homework', function(){
    it('teacher add homework', function(){
        cy.visit('/class?classId=230134349707324.28');
        cy.contains('发 布').click();
        cy.get('input[placeholder="作业名"]').type('test name');
        cy.get('input[role="spinbutton"]');
        cy.get('textarea[placeholder="作业描述"]').type('test description');
        cy.get('textarea[placeholder="备注"]').type('test note');
        cy.contains('提 交').click();
    });

    it('teacher get situation of submission', function(){
        cy.visit('/homework?homeworkId=undefined');
        cy.contains('提 交').click();
        cy.get('div[class="list-item"]').click();
    });

    it('teacher see homework, correct and score', function(){
        cy.contains('作业内容');
        cy.contains('作业提交');
        cy.contains('批改');
        cy.get('input[placeholder="分数"]').type('100');
        cy.get('div[class="ant-comment-content-detail"]').within(()=>{
            cy.get('textarea').type('test comment');
        });
        cy.contains('提交批改').click();
    });

    it('student look for all hw', function(){
        cy.visit('/class?classId=8212518302870732');
        cy.contains('作 业').click();
        cy.contains('最近布置的作业');
        cy.contains('已经过期的作业');
    });

    it('student submit hw', function(){
        cy.visit('/homework?homeworkId=undefined');
        cy.get('div[class="ant-comment-content-detail"]').within(() => {
            cy.get('textarea').type('test note');
        });
        cy.contains('提 交').click();
    });
});
