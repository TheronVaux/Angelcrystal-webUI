// 语言包定义
const langPack = {
    'zh-CN': {
        // 登录相关
        'login.title': 'AngelCrystal',
        'login.adminId': '账号ID:',
        'login.password': '账号密码:',
        'login.adminPlaceholder': '输入管理员ID',
        'login.passwordPlaceholder': '输入密码',
        'login.accessBtn': 'ACCESS GRANTED',
        'login.accessDenied': 'ACCESS DENIED!',
        
        // 状态栏
        'status.user': '▼ 连接用户: Administators',
        'status.connection': '▼ 连接状态: SECURED',
        'status.permission': '▼ 访问权限: 全局',
        'status.time': '▼ 系统时间: 00:00:00',
        
        // 导航
        'nav.home': '主页',
        'nav.features': '功能库',
        'nav.logs': '日志',
        'nav.about': '终端',
        'nav.settings': '设置',
        
        // 功能库
        'features.title': '功能库',
        'features.github': '访问开发者GitHub仓库获取更多资源:',
        
        // 日志
        'logs.title': '系统日志',
        'logs.userLogs': '用户日志',
        'logs.updateLogs': '更新日志',
        'logs.placeholder': '输入日志内容...',
        'logs.addBtn': '添加日志',
        'logs.admin': '管理员',
        'logs.system': '系统',
        
        // 设置
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
        
        // 消息
        'log.emptyWarning': '日志内容不能为空！',
        'feature.emptyWarning': '名称和链接不能为空！',
        'feature.linkWarning': '链接必须以"http://"、"https://"或"javascript:"开头',
        'feature.saveSuccess': '功能库配置已保存！',
        'feature.resetConfirm': '确定要重置功能库配置为默认设置吗？',
        'feature.resetSuccess': '功能库配置已重置为默认设置！',
        'lang.switchLog': '系统语言已切换至: ',
        'log.bgChanged': '背景已更改为: ',
        
        // 关于/终端
        'about.title': '系统终端'
    },
    'en': {
        // 登录相关
        'login.title': 'AngelCrystal Login',
        'login.adminId': 'ID:',
        'login.password': 'Password:',
        'login.adminPlaceholder': 'Enter admin ID',
        'login.passwordPlaceholder': 'Enter password',
        'login.accessBtn': 'ACCESS GRANTED',
        'login.accessDenied': 'ACCESS DENIED!',
        
        // 状态栏
        'status.user': '▼ User: Administators',
        'status.connection': '▼ Connection: SECURED',
        'status.permission': '▼ Permission: Global',
        'status.time': '▼ System Time:',
        
        // 导航
        'nav.home': 'Home',
        'nav.features': 'Features',
        'nav.logs': 'Logs',
        'nav.about': 'Terminal',
        'nav.settings': 'Settings',
        
        // 功能库
        'features.title': 'Feature Library',
        'features.github': 'Visit developer GitHub for more resources:',
        
        // 日志
        'logs.title': 'System Logs',
        'logs.userLogs': 'User Logs',
        'logs.updateLogs': 'Update Logs',
        'logs.placeholder': 'Enter log content...',
        'logs.addBtn': 'Add Log',
        'logs.admin': 'Administrator',
        'logs.system': 'System',
        
        // 设置
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
        
        // 消息
        'log.emptyWarning': 'Log content cannot be empty!',
        'feature.emptyWarning': 'Name and link cannot be empty!',
        'feature.linkWarning': 'Link must start with "http://", "https://" or "javascript:"',
        'feature.saveSuccess': 'Feature configuration saved!',
        'feature.resetConfirm': 'Are you sure you want to reset to default settings?',
        'feature.resetSuccess': 'Feature configuration reset to default!',
        'lang.switchLog': 'System language switched to: ',
        'log.bgChanged': 'Background changed to: ',
        
        // 关于/终端
        'about.title': 'System Terminal'
    }
};

// 默认功能库配置
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
];

// 工具函数
const utils = {
    // 格式化时间
    formatTime(date) {
        return date.toLocaleTimeString('zh-CN', { 
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    },
    
    // 格式化日期
    formatDate(date) {
        const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        return `${date.getFullYear()}年${String(date.getMonth() + 1).padStart(2, '0')}月${String(date.getDate()).padStart(2, '0')}日 ${weekdays[date.getDay()]}`;
    },
    
    // 防抖函数
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // 节流函数
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // 生成随机ID
    generateId() {
        return Math.random().toString(36).substr(2, 9);
    },
    
    // 验证URL
    isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    },
    
    // 复制到剪贴板
    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('文本已复制到剪贴板');
        }).catch(err => {
            console.error('复制失败: ', err);
        });
    }
};
