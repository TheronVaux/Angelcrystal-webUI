<h1 align="center">Angel Crystal</h1>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/TheronVaux/Angelcrystal-webUI?style=social)](https://github.com/TheronVaux/Angelcrystal-webUI/stargazers)

更多详情见[wiki](https://github.com/TheronVaux/Angelcrystal-webUI/wiki)

### 语言

中文 | [English](./README.en.md)

----

### 介绍

>这个网页项目仅提供最初始的代码，此代码内留有‘功能库’可留做功能拓展，该初始代码并不完善，望以后多多理解，详情可见本项目wiki

另外可克隆本仓库做出自己的版本并发布！！！

### 关于

入口：

* 蒂壳 [官网](https://angelcrystal-code.mysxl.cn)
* 反馈 [咖啡厅](https://pd.qq.com/s/a6g5xr5bg?b=5)
* 储存库 [云盘](https://www.123865.com/s/YNr5Vv-nMebd)
* 作者 [QQ](https://qm.qq.com/q/lXDyWCMaOs)

实例：

    语言ID
    <script>
        // 语言包定义
        const langPack = {
            'zh-CN': {
                'login.title': 'AngelCrystal',
                'login.adminId': '账号ID:',
                'login.password': '账号密码:',
                'login.adminPlaceholder': '输入ID',
                'login.passwordPlaceholder': '输入密码',
                'login.accessBtn': 'ACCESS GRANTED',
                'login.accessDenied': 'ACCESS DENIED!',
                'status.user': '▼ 用户: Administors',
                'status.connection': '▼ 状态: SECURED',
                'status.permission': '▼ 权限: 全局',
                'status.time': '▼ 系统时间:',
                'nav.home': '主页',
                'nav.features': '功能库',
                'nav.logs': '日志',
                'nav.about': '关于',
                'nav.settings': '设置',
                'intro.title': 'AngelCrystal',
                'intro.version': '释放版本：1.35.112082',
                'intro.ftVersion': 'ACGT版本：1.0.0',
                'intro.note': '该代码仅供参考，如果有意见请在Gitee或Github中提出问题',
                'intro.updates': '系统更新:',
                'features.title': '功能库',
                'features.github': '访问开发者GitHub仓库获取更多资源:',
                'logs.title': '系统日志',
                'logs.userLogs': '用户日志',
                'logs.updateLogs': '更新日志',
                'logs.placeholder': '输入日志内容...',
                'logs.addBtn': '添加日志',
                'logs.admin': '管理员',
                'logs.system': '系统',
                'log.1': '系统初始化完成，所有模块运行正常。',
                'log.2': '安全检查通过，未发现威胁。',
                'log.3': '用户界面更新至v1.35.0版本。',
                'log.bgChanged': '背景已更改为: ',
                'settings.title': '系统设置',
                'settings.theme': '当前主题：',
                'settings.themeDesc': '选择您偏好的界面主题',
                'settings.themeSelect': '主题选择',
                'settings.blueTheme': '蓝色主题',
                'settings.blueDesc': '默认Sapphire风格',
                'settings.redTheme': '红色主题',
                'settings.redDesc': '暗黑Angel风格',
                'settings.background': '背景设置',
                'settings.defaultBg': '默认背景',
                'settings.spaceBg': '星空背景',
                'settings.cyberBg': '赛博背景',
                'settings.uploadBg': '上传背景',
                'settings.language': '语言选择',
                'settings.zhDesc': '系统默认语言',
                'settings.enDesc': '英语',
                'settings.customFeatures': '自定义功能库链接',
                'settings.resetBtn': '重置配置',
                'settings.saveBtn': '保存配置',
                'settings.other': '其他设置:',
                'settings.lang': '• 界面语言：简体中文',
                'settings.dateFormat': '• 日期格式：YYYY-MM-DD',
                'settings.timeFormat': '• 时间显示：24小时制',
                'update.1': '• 新增主题切换功能（蓝色/红色主题）',
                'update.2': '• 添加设置页面用于主题管理',
                'update.3': '• 优化UI界面和交互体验',
                'update.4': '• 新增功能库链接自定义配置功能',
                'update.5': '• 新增多语言支持（中文/英文）',
                'update.6': '• 新增"关于"界面展示开发者信息',
                'update.7': '• 功能库扩展至16个功能模块',
                'update.8': '• 日志系统新增更新日志分类',
                'log.emptyWarning': '日志内容不能为空！',
                'feature.emptyWarning': '名称和链接不能为空！',
                'feature.linkWarning': '链接必须以"http://"、"https://"或"javascript:"开头',
                'feature.saveSuccess': '功能库配置已保存！',
                'feature.resetConfirm': '确定要重置功能库配置为默认设置吗？',
                'feature.resetSuccess': '功能库配置已重置为默认设置！',
                'lang.switchLog': '系统语言已切换至: ',
                'about.title': '关于 AngelCrystal',
                'about.version': '当前版本：1.35.112082.02',
                'about.desc': 'AngelCrystal 是一个网页UI，专为高效管理和控制设计。',
                'about.developers': '开发团队',
                'about.dev1': 'UI设计，负责核心模块开发和系统集成',
                'about.dev2': 'UI/UX设计师，负责用户界面和交互体验',
                'about.dev3': '后端开发工程师，fw',
                'about.license': '许可协议',
                'about.licenseText': 'AngelCrystal 遵循 MIT 开源协议。您可以自由使用、修改和分发本软件，但必须保留原始版权声明。',
                'update.log.1': '• 新增"关于"页面',
                'update.log.2': '• 功能库扩展至16个模块',
                'update.log.3': '• 日志系统新增更新日志分类',
                'update.log.4': '• 新增主题切换功能',
                'update.log.5': '• 添加多语言支持'
            },
            'en': {
                'login.title': 'AngelCrystal Login',
                'login.adminId': 'ID:',
                'login.password': 'Password:',
                'login.adminPlaceholder': 'Enter admin ID',
                'login.passwordPlaceholder': 'Enter password',
                'login.accessBtn': 'ACCESS GRANTED',
                'login.accessDenied': 'ACCESS DENIED!',
                'status.user': '▼ User: Administors',
                'status.connection': '▼ Connection: SECURED',
                'status.permission': '▼ Permission: Global',
                'status.time': '▼ System Time:',
                'nav.home': 'Home',
                'nav.features': 'Features',
                'nav.logs': 'Logs',
                'nav.about': 'About',
                'nav.settings': 'Settings',
                'intro.title': '',
                'intro.version': 'Release Version: 1.35.112082',
                'intro.ftVersion': 'AGUI Version: 1.0.0',
                'intro.note': 'This code is for reference only. Please submit issues on Gitee or Github',
                'intro.updates': 'System Updates:',
                'features.title': 'Feature Library',
                'features.github': 'Visit developer GitHub for more resources:',
                'logs.title': 'System Logs',
                'logs.userLogs': 'User Logs',
                'logs.updateLogs': 'Update Logs',
                'logs.placeholder': 'Enter log content...',
                'logs.addBtn': 'Add Log',
                'logs.admin': 'Administrator',
                'logs.system': 'System',
                'log.1': 'System initialization completed. All modules running normally.',
                'log.2': 'Security check passed. No threats found.',
                'log.3': 'User interface updated to v1.35.0',
                'log.bgChanged': 'Background changed to: ',
                'settings.title': 'System Settings',
                'settings.theme': 'Current Theme:',
                'settings.themeDesc': 'Select your preferred interface theme',
                'settings.themeSelect': 'Theme Selection',
                'settings.blueTheme': 'Blue Theme',
                'settings.blueDesc': 'Default tech sapphire style',
                'settings.redTheme': 'Red Theme',
                'settings.redDesc': 'Dark angel style',
                'settings.background': 'Background Settings',
                'settings.defaultBg': 'Default Background',
                'settings.spaceBg': 'Space Background',
                'settings.cyberBg': 'Cyber Background',
                'settings.uploadBg': 'Upload Background',
                'settings.language': 'Language Selection',
                'settings.zhDesc': 'System default language',
                'settings.enDesc': 'English language',
                'settings.customFeatures': 'Custom Feature Links',
                'settings.resetBtn': 'Reset Configuration',
                'settings.saveBtn': 'Save Configuration',
                'settings.other': 'Other Settings:',
                'settings.lang': '• Interface Language: Simplified Chinese',
                'settings.dateFormat': '• Date Format: YYYY-MM-DD',
                'settings.timeFormat': '• Time Display: 24-hour',
                'update.1': '• Added theme switching (blue/red themes)',
                'update.2': '• Added settings page for theme management',
                'update.3': '• Optimized UI and user experience',
                'update.4': '• Added custom feature link configuration',
                'update.5': '• Added multi-language support (Chinese/English)',
                'update.6': '• Added "About" page for developer information',
                'update.7': '• Feature library expanded to 16 modules',
                'update.8': '• Log system added update log category',
                'log.emptyWarning': 'Log content cannot be empty!',
                'feature.emptyWarning': 'Name and link cannot be empty!',
                'feature.linkWarning': 'Link must start with "http://", "https://" or "javascript:"',
                'feature.saveSuccess': 'Feature configuration saved!',
                'feature.resetConfirm': 'Are you sure you want to reset to default settings?',
                'feature.resetSuccess': 'Feature configuration reset to default!',
                'lang.switchLog': 'System language switched to: ',
                'about.title': 'About AngelCrystal',
                'about.version': 'Current Version: 1.35.112082.02',
                'about.desc': 'AngelCrystal is an advanced management system designed for efficient control and administration.',
                'about.developers': 'Development Team',
                'about.dev1': 'UI Designer, responsible for core module development and system integration',
                'about.dev2': 'UI/UX Designer, responsible for user interface and interaction experience',
                'about.dev3': 'Backend Developer, fw',
                'about.license': 'License Agreement',
                'about.licenseText': 'AngelCrystal is licensed under the MIT License. You are free to use, modify, and distribute this software, but must retain the original copyright notice.',
                'update.log.1': '• Added "About" page',
                'update.log.2': '• Feature library expanded to 16 modules',
                'update.log.3': '• Log system added update log category',
                'update.log.4': '• Added theme switching feature',
                'update.log.5': '• Added multi-language support'
            }
        };

    函数库ID
        const defaultFeatures = [
            { name: "01", link: "javascript:alert('01')" },
            { name: "咖啡厅链接", link: "https://pd.qq.com/s/a6g5xr5bg?b=5" },
            { name: "03", link: "javascript:alert('03')" },
            { name: "GitHub 仓库", link: "https://www.github.com/TheronVaux/Angelcrystal-webUI" },
            { name: "05", link: "javascript:alert('05')" },
            { name: "06", link: "javascript:alert('06')" },
            { name: "07", link: "javascript:alert('07')" },
            { name: "08", link: "javascript:alert('08')" },
            { name: "1.5.2网页版", link: "https://play.mc.js.cool/1.5" },
            { name: "1.8.8网页版", link: "https://play.mc.js.cool/1.8" },
            { name: "1.12.2网页版", link: "https://play.mc.js.cool/1.12beta" },
            { name: "日志分析", link: "https://mclo.gs/#info" },
            { name: "13", link: "javascript:alert('13')" },
            { name: "14", link: "javascript:alert('14')" },
            { name: "15", link: "javascript:alert('15')" },
            { name: "16", link: "javascript:alert('16')" }

----

### 安装教程

会需要一个浏览器，然后获取构建代码

    构建代码：https://github.com/TheronVaux/Angelcrystal-webUI/tree/33a48a2fc72899ebf94b3c74a9f2faa7a8dbdb2e/HTML/build
    ACGT/AGUI：https://github.com/TheronVaux/Angelcrystal-webUI/tree/fix_ACGT%2FAGUI/HTML%2Fbuild

---

声明：FireTide已经停止维护，请不要向开发者提及该项目，谢谢

随时欢迎再来！您的 ⭐**Star** 是我更新的动力~
