// index.js
Page({
  data:{
    studentLd:'',
    password:''
  },

  /*监听学号输入*/
  onStudentLdInput(e){
    this.setData({/*更新为用户刚输入的值*/
      studentLd:e.detail.value
    });
  },

  /*监听密码*/
  onPasswordInput(e){
    this.setData({/*更新为用户刚输入的值*/
      password:e.detail.value
    });
  }
})
