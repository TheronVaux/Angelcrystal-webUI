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

// 当前语言设置
let currentLang = 'zh-CN';

// 默认功能库配置 - 扩展至16个
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

// 当前功能库配置
let currentFeatures = [];

// 管理员验证
function checkLogin() {
    const ADMIN_ID = "Admin";
    const ADMIN_PW = "";
    const btn = document.querySelector('.cyber-button');

    if(document.getElementById("adminId").value === ADMIN_ID && 
       document.getElementById("password").value === ADMIN_PW) {
        document.getElementById("loginPanel").style.display = "none";
        document.getElementById("mainPanel").style.display = "block";
        initParticles();
        startClock();
        loadFeatureConfig();
        loadLanguage();
        loadBackground();
        renderFeatureGrid();
    } else {
        btn.innerHTML = langPack[currentLang]['login.accessDenied'];
        btn.style.background = "#d90000";
        setTimeout(() => {
            btn.innerHTML = langPack[currentLang]['login.accessBtn'];
            btn.style.background = "linear-gradient(45deg, var(--bg-color), #003153)";
        }, 2000);
    }
}

// 加载语言设置
function loadLanguage() {
    const savedLang = localStorage.getItem('systemLanguage');
    if (savedLang && langPack[savedLang]) {
        currentLang = savedLang;
    }
    applyLanguage();
}

// 应用当前语言设置
function applyLanguage() {
    // 更新所有带有data-lang-key属性的元素
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (langPack[currentLang][key]) {
            el.textContent = langPack[currentLang][key];
        }
    });
    
    // 更新所有带有data-lang-key-placeholder属性的元素
    const placeholders = document.querySelectorAll('[data-lang-key-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-lang-key-placeholder');
        if (langPack[currentLang][key]) {
            el.placeholder = langPack[currentLang][key];
        }
    });
    
    // 更新语言选择按钮状态
    document.getElementById('zhOption').classList.toggle('active', currentLang === 'zh-CN');
    document.getElementById('enOption').classList.toggle('active', currentLang === 'en');
    
    // 更新设置页面的语言显示
    if (currentLang === 'zh-CN') {
        document.querySelector('[data-lang-key="settings.lang"]').textContent = 
            langPack[currentLang]['settings.lang'].replace('简体中文', '简体中文');
    } else {
        document.querySelector('[data-lang-key="settings.lang"]').textContent = 
            langPack[currentLang]['settings.lang'].replace('简体中文', 'English');
    }
}

// 切换语言
function switchLanguage(lang) {
    if (lang === currentLang) return;
    
    currentLang = lang;
    localStorage.setItem('systemLanguage', lang);
    applyLanguage();
    
    // 添加语言切换日志
    const now = new Date();
    const timeString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    
    const langName = lang === 'zh-CN' ? '简体中文' : 'English';
    const logContent = langPack[currentLang]['lang.switchLog'] + langName;
    
    addLogEntry(timeString, logContent);
}

// 页面切换功能
function switchPage(page) {
    const introPage = document.getElementById('introPage');
    const featuresPage = document.getElementById('featuresPage');
    const logsPage = document.getElementById('logsPage');
    const aboutPage = document.getElementById('aboutPage');
    const settingsPage = document.getElementById('settingsPage');
    const introBtn = document.querySelector('.nav-button:nth-child(1)');
    const featuresBtn = document.querySelector('.nav-button:nth-child(2)');
    const logsBtn = document.querySelector('.nav-button:nth-child(3)');
    const aboutBtn = document.querySelector('.nav-button:nth-child(4)');
    const settingsBtn = document.querySelector('.nav-button:nth-child(5)');
       
    // 重置所有按钮状态
    introBtn.classList.remove('active');
    featuresBtn.classList.remove('active');
    logsBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    settingsBtn.classList.remove('active');
    
    // 隐藏所有页面
    introPage.style.display = 'none';
    featuresPage.style.display = 'none';
    logsPage.style.display = 'none';
    aboutPage.style.display = 'none';
    settingsPage.style.display = 'none';
    
    // 显示选中的页面并激活按钮
    if(page === 'intro') {
        introPage.style.display = 'block';
        introBtn.classList.add('active');
    } else if(page === 'features') {
        featuresPage.style.display = 'block';
        featuresBtn.classList.add('active');
    } else if(page === 'logs') {
        logsPage.style.display = 'block';
        logsBtn.classList.add('active');
    } else if(page === 'about') {
        aboutPage.style.display = 'block';
        aboutBtn.classList.add('active');
    } else if(page === 'settings') {
        settingsPage.style.display = 'block';
        settingsBtn.classList.add('active');
        renderFeatureConfigForm();
    }
}

// 日志选项卡切换
function switchLogTab(tabId) {
    // 隐藏所有内容
    document.getElementById('userLogsTab').classList.remove('active');
    document.getElementById('updateLogsTab').classList.remove('active');
    
    // 移除所有选项卡的active类
    document.querySelectorAll('.log-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // 显示选中的选项卡内容
    document.getElementById(tabId + 'Tab').classList.add('active');
    
    // 激活选中的选项卡
    document.querySelector(`.log-tab[onclick="switchLogTab('${tabId}')"]`).classList.add('active');
}

// 实时时钟
function startClock() {
    const timeDisplay = document.getElementById('timeDisplay');
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }
    updateTime();
    setInterval(updateTime, 1000);
}

// 灰色粒子背景
function initParticles() {
    const canvas = document.getElementById('particles');
    const body = document.body;
    
    // 检查是否有自定义背景
    if (body.style.backgroundImage && body.style.backgroundImage !== 'none') {
        canvas.style.display = 'none';
        return;
    }
    
    canvas.style.display = 'block';
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speed = Math.random() * 1 + 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        update() {
            this.y += this.speed;
            if (this.y > canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
        draw() {
            // 使用灰色粒子
            ctx.fillStyle = `rgba(128, 128, 128, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    for(let i = 0; i < 200; i++) {
        particles.push(new Particle());
    }
    animate();
    
    // 窗口大小改变时重置画布
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// 加载保存的背景设置
function loadBackground() {
    const savedBackground = localStorage.getItem('customBackground');
    if (savedBackground) {
        document.body.style.backgroundImage = savedBackground;
        // 找到对应的背景选项并激活
        document.querySelectorAll('.background-option').forEach(option => {
            option.classList.remove('active');
        });
        if (savedBackground === 'none') {
            document.getElementById('defaultBgOption').classList.add('active');
        } else if (savedBackground.includes('space')) {
            document.getElementById('spaceBgOption').classList.add('active');
        } else if (savedBackground.includes('cyber')) {
            document.getElementById('cyberBgOption').classList.add('active');
        } else {
            document.getElementById('customBgOption').classList.add('active');
        }
    }
}

// 日志功能
function addLog() {
    const logInput = document.getElementById('logInput');
    const logContent = logInput.value.trim();
    
    if (logContent === '') {
        alert(langPack[currentLang]['log.emptyWarning']);
        return;
    }
    
    const now = new Date();
    const timeString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    
    addLogEntry(timeString, logContent);
    
    logInput.value = '';
    
    // 添加成功动画
    logInput.style.borderColor = 'var(--secondary-color)';
    logInput.style.boxShadow = '0 0 10px rgba(var(--secondary-color-rgb), 0.2)';
    setTimeout(() => {
        logInput.style.borderColor = 'rgba(var(--primary-color-rgb), 0.2)';
        logInput.style.boxShadow = 'none';
    }, 1000);
}

function addLogEntry(time, content) {
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    logEntry.innerHTML = `
        <div class="log-header">
            <strong>${langPack[currentLang]['logs.admin']}</strong>
            <span class="log-time">${time}</span>
        </div>
        <div class="log-content">
            ${content}
        </div>
        <div class="delete-log" onclick="deleteLog(event)">×</div>
    `;
    
    document.getElementById('logList').prepend(logEntry);
}

function deleteLog(event) {
    const logEntry = event.target.parentElement;
    logEntry.style.opacity = '0';
    logEntry.style.transform = 'translateX(100px)';
    
    setTimeout(() => {
        logEntry.remove();
    }, 300);
}

// 按Enter键添加日志
document.getElementById('logInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addLog();
    }
});

// 主题切换功能
function switchTheme(theme) {
    if (theme === 'red') {
        document.body.classList.add('red-theme');
        document.getElementById('currentTheme').textContent = langPack[currentLang]['settings.redTheme'];
        document.getElementById('blueThemeOption').classList.remove('active');
        document.getElementById('redThemeOption').classList.add('active');
        
        // 添加主题切换日志
        const now = new Date();
        const timeString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        
        const themeName = langPack[currentLang]['settings.redTheme'];
        const logContent = langPack[currentLang]['log.3'].replace('v1.4.0', themeName);
        
        addLogEntry(timeString, logContent);
        
    } else {
        document.body.classList.remove('red-theme');
        document.getElementById('currentTheme').textContent = langPack[currentLang]['settings.blueTheme'];
        document.getElementById('blueThemeOption').classList.add('active');
        document.getElementById('redThemeOption').classList.remove('active');
        
        // 添加主题切换日志
        const now = new Date();
        const timeString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        
        const themeName = langPack[currentLang]['settings.blueTheme'];
        const logContent = langPack[currentLang]['log.3'].replace('v1.4.0', themeName);
        
        addLogEntry(timeString, logContent);
    }
}

// 背景切换功能
function switchBackground(url) {
    if (url === 'none') {
        document.body.style.backgroundImage = '';
        localStorage.removeItem('customBackground');
        document.getElementById('defaultBgOption').classList.add('active');
        document.querySelectorAll('.background-option').forEach(opt => {
            if (opt !== document.getElementById('defaultBgOption')) {
                opt.classList.remove('active');
            }
        });
    } else {
        document.body.style.backgroundImage = url;
        localStorage.setItem('customBackground', url);
        // 更新活动状态
        document.querySelectorAll('.background-option').forEach(opt => {
            opt.classList.remove('active');
        });
        if (url.includes('space')) {
            document.getElementById('spaceBgOption').classList.add('active');
        } else if (url.includes('cyber')) {
            document.getElementById('cyberBgOption').classList.add('active');
        } else {
            document.getElementById('customBgOption').classList.add('active');
        }
    }
    
    // 更新粒子显示
    initParticles();
    
    // 添加日志
    const now = new Date();
    const timeString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    
    const bgName = url === 'none' ? 
        langPack[currentLang]['settings.defaultBg'] : 
        url.includes('space') ? 
        langPack[currentLang]['settings.spaceBg'] : 
        url.includes('cyber') ? 
        langPack[currentLang]['settings.cyberBg'] : 
        langPack[currentLang]['settings.uploadBg'];
        
    const logContent = langPack[currentLang]['log.bgChanged'] + bgName;
    addLogEntry(timeString, logContent);
}

function uploadBackground(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const url = e.target.result;
            switchBackground(`url(${url})`);
        };
        reader.readAsDataURL(file);
    }
}

// 功能库自定义配置功能
function loadFeatureConfig() {
    const savedFeatures = localStorage.getItem('featureConfig');
    if (savedFeatures) {
        try {
            currentFeatures = JSON.parse(savedFeatures);
        } catch (e) {
            console.error('解析功能配置失败，使用默认配置', e);
            currentFeatures = [...defaultFeatures];
        }
    } else {
        currentFeatures = [...defaultFeatures];
    }
}

function saveFeatureConfig() {
    // 从表单收集配置数据
    const featureItems = document.querySelectorAll('.feature-item');
    const newFeatures = [];
    
    let hasError = false;
    
    featureItems.forEach((item, index) => {
        const nameInput = item.querySelector('.feature-name');
        const linkInput = item.querySelector('.feature-link');
        const warning = item.querySelector('.feature-warning');
        
        // 重置警告
        warning.style.display = 'none';
        
        if (nameInput.value.trim() === '' || linkInput.value.trim() === '') {
            warning.textContent = langPack[currentLang]['feature.emptyWarning'];
            warning.style.display = 'block';
            hasError = true;
            return;
        }
        
        // 检查链接格式
        if (!linkInput.value.startsWith('http') && 
            !linkInput.value.startsWith('javascript:')) {
            warning.textContent = langPack[currentLang]['feature.linkWarning'];
            warning.style.display = 'block';
            hasError = true;
            return;
        }
        
        newFeatures.push({
            name: nameInput.value.trim(),
            link: linkInput.value.trim()
        });
    });
    
    if (hasError) {
        return;
    }
    
    // 保存配置
    currentFeatures = newFeatures;
    localStorage.setItem('featureConfig', JSON.stringify(currentFeatures));
    
    // 重新渲染功能库
    renderFeatureGrid();
    
    // 显示成功消息
    alert(langPack[currentLang]['feature.saveSuccess']);
    
    // 添加日志
    const now = new Date();
    const timeString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    
    const logContent = langPack[currentLang]['log.3'].replace('v1.4.0', langPack[currentLang]['feature.saveSuccess']);
    addLogEntry(timeString, logContent);
}

function resetFeatureConfig() {
    if (confirm(langPack[currentLang]['feature.resetConfirm'])) {
        currentFeatures = [...defaultFeatures];
        localStorage.setItem('featureConfig', JSON.stringify(currentFeatures));
        renderFeatureConfigForm();
        renderFeatureGrid();
        alert(langPack[currentLang]['feature.resetSuccess']);
        
        // 添加日志
        const now = new Date();
        const timeString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        
        const logContent = langPack[currentLang]['feature.resetSuccess'];
        addLogEntry(timeString, logContent);
    }
}

function renderFeatureGrid() {
    const grid = document.getElementById('featuresGrid');
    grid.innerHTML = '';
    
    currentFeatures.forEach((feature, index) => {
        const item = document.createElement('div');
        item.className = 'icon-item';
        
        // 创建图标
        const icon = document.createElement('div');
        icon.className = 'hologram-icon';
        
        // 创建功能名称
        const name = document.createElement('div');
        name.textContent = feature.name;
        
        item.appendChild(icon);
        item.appendChild(name);
        
        // 添加点击事件
        item.addEventListener('click', function() {
            if (feature.link.startsWith('http')) {
                window.open(feature.link, '_blank');
            } else if (feature.link.startsWith('javascript:')) {
                try {
                    // 安全地执行JavaScript代码
                    (new Function(feature.link.substring(11)))();
                } catch (e) {
                    console.error('执行JavaScript出错:', e);
                    alert('执行功能时出错: ' + e.message);
                }
            } else {
                alert(feature.link);
            }
        });
        
        grid.appendChild(item);
    });
}

function renderFeatureConfigForm() {
    const container = document.getElementById('featureConfigContainer');
    container.innerHTML = '';
    
    currentFeatures.forEach((feature, index) => {
        const featureItem = document.createElement('div');
        featureItem.className = 'feature-item';
        
        featureItem.innerHTML = `
            <label>${langPack[currentLang]['settings.customFeatures']} #${index + 1}</label>
            <input type="text" class="feature-input feature-name" 
                   placeholder="${langPack[currentLang]['feature.emptyWarning']}" value="${feature.name}">
            <input type="text" class="feature-input feature-link" 
                   placeholder="${langPack[currentLang]['feature.linkWarning']}" value="${feature.link}">
            <div class="feature-warning"></div>
        `;
        
        container.appendChild(featureItem);
    });
}

// 折叠/展开功能库配置
function toggleFeatureConfig() {
    const content = document.getElementById('featureConfigContent');
    const toggleIcon = document.querySelector('.feature-header .toggle-icon');
    
    content.classList.toggle('collapsed');
    
    if (content.classList.contains('collapsed')) {
        toggleIcon.textContent = '▶';
    } else {
        toggleIcon.textContent = '▼';
    }
}
