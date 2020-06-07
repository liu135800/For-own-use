# LOON获取Cookie订阅
# 该订阅仅适用于定时签到脚本的Cookie获取. 
# 您可以在使用后手动将其禁用，以免产生不必要的MITM.

hostname = api.m.jd.com, *.iqiyi.com, *.bilibili.com, *.acfun.cn, act.10010.com, m.client.10010.com, daojia.jd.com, i.meituan.com, music.163.com, passport.suning.com, luckman.suning.com, sign.suning.com, gameapi.suning.com, *.video.qq.com, promotion.waimai.meituan.com, *.rrys2019.com, ios.zmzapi.com, draw.jdfcloud.com, h5.ele.me, api.weibo.cn, pay.sc.weibo.com, *.rr.tv, h5.ele.me, act.10010.com, m.client.10010.com, www.52pojie.cn

# 京东  （api.m.jd.com）
http-request https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean(Index|GroupStageIndex) max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

# 爱奇艺   （*.iqiyi.com）
http-request https?:\/\/.*\.iqiyi\.com\/.*authcookie= script-path=https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js

# Bilibli (*.bilibili.com)
http-request ^https:\/\/(www|live)\.bilibili\.com\/?.? script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/bilibili/bilibili.cookie.js

# Acfun  (*.acfun.cn)
http-request ^https:\/\/api\-new\.app\.acfun\.cn\/rest\/app\/user\/personalInfo script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/acfun/acfun.cookie.js

# 中国联通 (act.10010.com, m.client.10010.com)
http-request ^https:\/\/act.10010.com\/SigninApp\/signin\/querySigninActivity.htm script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/10010/10010.cookie.js
http-request ^https:\/\/act.10010.com\/SigninApp(.*?)\/signin\/daySign script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/10010/10010.cookie.js
http-request ^https:\/\/m.client.10010.com\/dailylottery\/static\/(textdl\/userLogin|active\/findActivityInfo) script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/10010/10010.cookie.js

# 京东到家  （daojia.jd.com）
http-request ^https:\/\/daojia.jd.com/client(.*?)functionId=signin(.*?)userSigninNew script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/jddj/jddj.cookie.js

# 来客有礼 （draw.jdfcloud.com）
http-request https:\/\/draw\.jdfcloud\.com\/\/api\/bean\/square\/silverBean\/task\/get\? script-path=https://raw.githubusercontent.com/Sunert/Scripts/master/Task/lkyl.js

# 网易云音乐 (music.163.com)
http-request ^https?:\/\/music\.163\.com\/?.? script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/neteasemusic/neteasemusic.cookie.js

# 美团 （i.meituan.com）
http-request ^https:\/\/i.meituan.com\/evolve\/signin\/signpost\/ script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/meituan/meituan.cookie.js, requires-body=true

# 苏宁（passport.suning.com, luckman.suning.com, sign.suning.com, gameapi.suning.com）
http-request ^https:\/\/passport.suning.com\/ids\/login$ script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/suning/suning.cookie.js, requires-body=true
http-request ^https:\/\/luckman.suning.com\/luck-web\/sign\/api\/clock_sign.do script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/suning/suning.cookie.js
http-request ^https:\/\/sign.suning.com\/sign-web\/m\/promotion\/sign\/doSign.do script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/suning/suning.cookie.js
http-request ^https:\/\/gameapi.suning.com\/sngame-web\/(api\/signin\/private\/customerSignOperation.do|gateway\/api\/queryPrize.do) script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/suning/suning.cookie.js

# 腾讯视频 (*.video.qq.com)
http-request ^https:\/\/access.video.qq.com\/user\/auth_refresh script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/videoqq/videoqq.cookie.js

# 美团外卖 （promotion.waimai.meituan.com）
http-request ^https:\/\/promotion.waimai.meituan.com\/playcenter\/signIn\/entry script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/wmmeituan/wmmeituan.cookie.js
http-request ^https:\/\/promotion.waimai.meituan.com\/playcenter\/signIn\/doaction script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/wmmeituan/wmmeituan.cookie.js,requires-body=true

# 字幕组 （*.rrys2019.com, ios.zmzapi.com）
http-request ^https?:\/\/(www\.)?rrys2019\.com\/?.? script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/zimuzu/zimuzu.cookie.js
http-request ^http:\/\/ios.zmzapi.com\/index.php.*a=(mobile_)?login script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/zimuzu/zimuzu.cookie.js

# 饿了么 （h5.ele.me）
http-request ^https:\/\/h5\.ele\.me\/restapi\/eus\/v\d\/current_user$ script-path=https://raw.githubusercontent.com/songyangzz/QuantumultX/master/elem/elemGetCookies.js

# 微博 （api.weibo.cn, pay.sc.weibo.com）
http-request https:\/\/api\.weibo\.cn\/\d\/video\/machine\?gsid script-path=https://raw.githubusercontent.com/Sunert/Scripts/master/Task/weibo.js
# > 钱包js
http-request https:\/\/pay\.sc\.weibo\.com\/aj\/mobile\/home\/welfare\/signin\/do\? script-path=https://raw.githubusercontent.com/Sunert/Scripts/master/Task/weibo.js

# rrtv (*.rr.tv)
http-request ^https:\/\/api\.rr\.tv\/user\/profile script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/rrtv/rrtv.cookie.js

# 饿了么 (h5.ele.me)
http-request ^https:\/\/h5\.ele\.me\/restapi\/eus\/v\d\/current_user$ script-path=https://raw.githubusercontent.com/songyangzz/QuantumultX/master/elem/elemGetCookies.js, timeout=10

# 10010 (act.10010.com, m.client.10010.com)
http-request ^https:\/\/act.10010.com\/SigninApp\/signin\/querySigninActivity.htm script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/10010/10010.cookie.js
http-request ^https:\/\/act.10010.com\/SigninApp(.*?)\/signin\/daySign script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/10010/10010.cookie.js
http-request ^https:\/\/m.client.10010.com\/dailylottery\/static\/(textdl\/userLogin|active\/findActivityInfo) script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/10010/10010.cookie.js

# 吾爱破解 (www.52pojie.cn)
http-request https:\/\/www\.52pojie\.cn\/home\.php\? script-path=https://raw.githubusercontent.com/NobyDa/Script/master/52pojie-DailyBonus/52pojie.js