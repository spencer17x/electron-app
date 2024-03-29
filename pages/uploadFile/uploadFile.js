/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        filePath: ''
    },
    uploadFile() {
        swan.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['album'],
            success: res => {
                const filePath = res.tempFilePaths[0];
                swan.uploadFile({
                    url: 'https://smartprogram.baidu.com/mappconsole/api/checkFile',
                    filePath,
                    name: 'myfile',
                    success: res => {
                        this.setData({filePath});
                    },
                    fail: err => {
                        swan.showToast({title: '上传失败'});
                    }
                });
            }
        });
    },
    clearImage() {
        const filePath = this.getData('filePath');
        if (filePath) {
            this.setData('filePath', '');
            swan.showToast({title: '清空图片成功'});
        } else {
            swan.showToast({title: '无可清空图片', icon: 'none'});
        }
    },
    previewImage(e) {
        swan.showToast({title: '暂不支持预览', icon: 'none'});
    }
});
