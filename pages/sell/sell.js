// pages/sell/sell.js
Page({

  data: {
    images:[]
      },
      // 导航栏返回
      navBack(){
        wx.navigateBack();
      },
      // 选择图片
      chooseImage(){
        wx.chooseMedia({
          count:9,
          mediaType:['image'],
          sourceType:['album','camera'],
          success(res){
            console.log('选择的图片：',res.tempFiles[0].tempFilePath);
          }
        });
      },
      
  // 发布按钮
  publish(){
    wx.showToast({
      title:'发布功能待实现',
      icon:'none'
    });
  }
})