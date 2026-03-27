// pages/login/login.js
Page({
  data: {
    studentId:'',
    password:''
  },

  // 监听学号输入
  onStudentIdInput(e){
    this.setData({
      studentId:e.detail.value
    });
  },

  // 监听密码输入
  onPasswordInput(e){
      this.setData({
        password:e.detail.value
      });
  },
  // 登录按钮
  login(){
    // 学号和密码不能为空
    const{studentId,password}=this.data;

    if(!studentId.trim()){
      wx.showToast({
        title: '请输入学号',
        icon:'none'
      });
      return;
    }

    if(!password.trim()){
      wx.showToast({
        title: '请输入密码',
        icon:'none'
      });
      return;
      }

    // 模拟登陆请求
    wx.showLoading({
      title:'登录中...',
    });

    setTimeout(()=>{
      wx.hideLoading();

      wx.switchTab({
        url: '/pages/index/index',
        success:()=>{
          console.log('跳转首页成功');
        },
        fail:(err)=>{
          console.error('跳转失败',err);
          wx.showToast({
            title: '页面跳转失败',
            icon:'none'
          });
        }
      });
    },1000);
  }
});