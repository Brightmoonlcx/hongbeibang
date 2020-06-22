// 在util文件夹中的内容其实就是项目中的小工具  可能会存在副用行
// 所以封装在util这个工具的文件夹中

export function stripscript(s) {
        var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{}【】‘；：”“'。，、？%]")
        var rs = "";
        for (var i = 0; i < s.length; i++) {
                rs = rs + s.substr(i, 1).replace(pattern, '');
            }
        console.log(rs)
        return rs;
        } 
  