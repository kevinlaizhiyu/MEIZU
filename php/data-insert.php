<?php
include "conn.php";

$conn->query("INSERT sales VALUES (null,'https://openfile.meizu.com/group1/M00/07/7A/Cgbj0V2upxqANyVFAAjApUYA58w668.png','魅族 16T',1999,'6.5 英寸极边全面屏 | 骁龙 855 旗舰处理器'),(null,'https://openfile.meizu.com/group1/M00/07/48/Cgbj0F1jhu-AaV4AAAlk4z4lkt0463.png','魅族 16s Pro',2699,'高通骁龙 855 Plus  | 索尼 4800W 像素超广角 AI 三摄'),(null,'https://openfile.meizu.com/group1/M00/07/02/Cgbj0Fx_ZKSATnTJAAU3Ca8M6D8964.png','魅族 Note9',1199 ,'骁龙 675 | 后置 4800 万'),(null,'https://openfile.meizu.com/group1/M00/07/3B/Cgbj0VzaXQqAHUNIAAi8Q-a1EVI137.png','魅族 16s', 2699,'骁龙 855 4800W 光学防抖'),(null,'https://openfile.meizu.com/group1/M00/07/2C/Cgbj0FzvRI6AWu1jAAxIbnS8M5Q295.png','魅族 16Xs', 1499,'4800W AI三摄 | 屏幕下指纹'),(null,'https://openfile.meizu.com/group1/M00/06/9B/Cgbj0FujRsOADooMAAbehLx6_Co899.png','魅族 16th', 1598,'骁龙 845 | 屏幕下指纹'),(null,'https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png','魅族 16 X', 1098,'骁龙 710 屏幕下指纹 旗舰双摄'),(null,'https://openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png','魅族 X8', 1298,'骁龙 710 旗舰双摄'),(null,'https://openfile.meizu.com/group1/M00/05/E1/Cgbj0FtqgkWALkhxAAkE5Uiy2no917.png','魅族 16th Plus',1798 ,'骁龙 845 屏幕下指纹'),(null,'https://openfile.meizu.com/group1/M00/07/3F/Cgbj0Vzt9L6AGWGwAA0JvJu7FS0814.png','魅族 16s 白夜童话限量礼盒', 3099,'以梦为马 乘风破浪')");

// $result=$conn->query("SELECT * FROM sales");
// $arrdata=array();
// for($i=0;$i<$result->num_rows;$i++){
//     $arrdata[$i]=$result->fetch_assoc();
// }
// echo json_encode($arrdata);