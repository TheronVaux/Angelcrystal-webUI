// 主应用类
class AngelCrystalApp {
    constructor() {
        this.currentLang = 'zh-CN';
        this.currentTheme = 'blue';
        this.currentFeatures = [];
        this.isLoggedIn = false;
        
        this.init();
    }

    init() {
        this.loadConfig();
        this.setupEventListeners();
        this.applyLanguage();
        this.applyTheme();
        
        if (this.isLoggedIn) {
            this.showMainUI();
        }
    }

    // 配置管理
    loadConfig() {
        // 加载语言设置
        const savedLang = localStorage.getItem('systemLanguage');
        if (savedLang && langPack[savedLang]) {
            this.currentLang = savedLang;
        }

        // 加载主题设置
        const savedTheme = localStorage.getItem('systemTheme');
        if (savedTheme) {
            this.currentTheme = savedTheme;
        }

        // 加载功能库配置
        const savedFeatures = localStorage.getItem('featureConfig');
        if (savedFeatures) {
            try {
                this.currentFeatures = JSON.parse(savedFeatures);
            } catch (e) {
                console.error('解析功能配置失败，使用默认配置', e);
                this.currentFeatures = [...defaultFeatures];
            }
        } else {
            this.currentFeatures = [...defaultFeatures];
        }

        // 检查登录状态
        this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    }

    saveConfig() {
        localStorage.setItem('systemLanguage', this.currentLang);
        localStorage.setItem('systemTheme', this.currentTheme);
        localStorage.setItem('featureConfig', JSON.stringify(this.currentFeatures));
    }

    // 事件监听器设置
    setupEventListeners() {
        // 登录相关
        document.getElementById('loginBtn').addEventListener('click', () => this.checkLogin());
        document.getElementById('password').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.checkLogin();
        });

        // 导航
        document.querySelectorAll('.nav-button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchPage(e.target.dataset.page);
            });
        });

        // 日志相关
        document.getElementById('addLogBtn').addEventListener('click', () => this.addLog());
        document.getElementById('logInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addLog();
        });

        // 设置相关
        this.setupSettingsListeners();
    }

    setupSettingsListeners() {
        // 主题切换
        document.querySelectorAll('.theme-option').forEach(option => {
            option.addEventListener('click', () => {
                this.switchTheme(option.dataset.theme);
            });
        });

        // 背景切换
        document.querySelectorAll('.background-option').forEach(option => {
            option.addEventListener('click', () => {
                if (option.dataset.background === 'custom') {
                    document.getElementById('bgUpload').click();
                } else {
                    this.switchBackground(option.dataset.background);
                }
            });
        });

        // 语言切换
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', () => {
                this.switchLanguage(option.dataset.lang);
            });
        });

        // 功能库配置
        document.querySelector('.feature-header').addEventListener('click', () => {
            this.toggleFeatureConfig();
        });

        document.getElementById('saveConfigBtn').addEventListener('click', () => {
            this.saveFeatureConfig();
        });

        document.getElementById('resetConfigBtn').addEventListener('click', () => {
            this.resetFeatureConfig();
        });

        // 背景上传
        document.getElementById('bgUpload').addEventListener('change', (e) => {
            this.uploadBackground(e);
        });
    }

    // 登录功能
    checkLogin() {
        const ADMIN_ID = "Admin";
        const ADMIN_PW = "";
        const btn = document.getElementById('loginBtn');

        const adminId = document.getElementById("adminId").value;
        const password = document.getElementById("password").value;

        if(adminId === ADMIN_ID && password === ADMIN_PW) {
            this.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', 'true');
            this.showMainUI();
        } else {
            this.showLoginError(btn);
        }
    }

    showLoginError(btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = langPack[this.currentLang]['login.accessDenied'];
        btn.style.background = "#d90000";
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = "";
        }, 2000);
    }

    showMainUI() {
        document.getElementById("loginPanel").style.display = "none";
        document.getElementById("mainPanel").style.display = "block";
        
        // 初始化各种组件
        particles.init();
        this.startClocks();
        this.updateGreeting();
        this.renderFeatureGrid();
        terminal.init();
        
        // 切换到主页
        this.switchPage('intro');
    }

    // 页面切换
    switchPage(page) {
        // 更新导航按钮状态
        document.querySelectorAll('.nav-button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.page === page);
        });

        // 切换页面内容
        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.toggle('active', section.id === `${page}Page`);
        });

        // 特殊页面处理
        if (page === 'settings') {
            this.renderFeatureConfigForm();
        }
    }

    // 时间相关功能
    startClocks() {
        this.updateTime();
        this.updateBigClock();
        setInterval(() => {
            this.updateTime();
            this.updateBigClock();
        }, 1000);
    }

    updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('zh-CN', { 
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        document.getElementById('timeDisplay').textContent = timeString;
    }

    updateBigClock() {
        const now = new Date();
        const bigClock = document.getElementById('bigClock');
        const bigDate = document.getElementById('bigDate');
        
        // 更新时间
        const timeString = now.toLocaleTimeString('zh-CN', { 
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        bigClock.textContent = timeString;
        
        // 更新日期
        const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        const dateString = `${now.getFullYear()}年${String(now.getMonth() + 1).padStart(2, '0')}月${String(now.getDate()).padStart(2, '0')}日 ${weekdays[now.getDay()]}`;
        bigDate.textContent = dateString;
    }

    updateGreeting() {
        const greeting = document.getElementById('greeting');
        const now = new Date();
        const hour = now.getHours();
        
        let greetingText = '';
        
        if (hour >= 5 && hour < 12) {
            greetingText = '早上好';
        } else if (hour >= 12 && hour < 14) {
            greetingText = '中午好';
        } else if (hour >= 14 && hour < 18) {
            greetingText = '下午好';
        } else if (hour >= 18 && hour < 24) {
            greetingText = '晚上好';
        } else {
            greetingText = '夜深了';
        }
        
        greetingText += '，管理员';
        greeting.textContent = greetingText;
    }

    // 语言功能
    applyLanguage() {
        // 更新所有带有data-lang-key属性的元素
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (langPack[this.currentLang][key]) {
                el.textContent = langPack[this.currentLang][key];
            }
        });
        
        // 更新所有带有data-lang-key-placeholder属性的元素
        const placeholders = document.querySelectorAll('[data-lang-key-placeholder]');
        placeholders.forEach(el => {
            const key = el.getAttribute('data-lang-key-placeholder');
            if (langPack[this.currentLang][key]) {
                el.placeholder = langPack[this.currentLang][key];
            }
        });
        
        // 更新语言选择按钮状态
        document.querySelectorAll('.lang-option').forEach(option => {
            option.classList.toggle('active', option.dataset.lang === this.currentLang);
        });
    }

    switchLanguage(lang) {
        if (lang === this.currentLang) return;
        
        this.currentLang = lang;
        this.saveConfig();
        this.applyLanguage();
        
        // 添加语言切换日志
        this.addSystemLog(langPack[this.currentLang]['lang.switchLog'] + 
            (lang === 'zh-CN' ? '简体中文' : 'English'));
    }

    // 主题功能
    applyTheme() {
        document.body.setAttribute('data-theme', this.currentTheme);
        
        // 更新主题选择按钮状态
        document.querySelectorAll('.theme-option').forEach(option => {
            option.classList.toggle('active', option.dataset.theme === this.currentTheme);
        });
    }

    switchTheme(theme) {
        if (theme === this.currentTheme) return;
        
        this.currentTheme = theme;
        this.saveConfig();
        this.applyTheme();
        
        // 添加主题切换日志
        const themeName = theme === 'blue' ? 
            langPack[this.currentLang]['settings.blueTheme'] : 
            langPack[this.currentLang]['settings.redTheme'];
        
        this.addSystemLog(`主题已切换为: ${themeName}`);
    }

    // 背景功能
    switchBackground(type) {
        let background = '';
        
        switch(type) {
            case 'default':
                background = '';
                break;
            case 'space':
                background = 'url(https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1350&q=80)';
                break;
            case 'cyber':
                background = 'url(https://images.unsplash.com/photo-1516245834216-c4e5e3aff77e?auto=format&fit=crop&w=1350&q=80)';
                break;
            default:
                return;
        }
        
        document.body.style.backgroundImage = background;
        localStorage.setItem('customBackground', background);
        
        // 更新粒子显示
        particles.init();
        
        // 更新背景选择按钮状态
        document.querySelectorAll('.background-option').forEach(option => {
            option.classList.toggle('active', option.dataset.background === type);
        });
        
        // 添加背景切换日志
        const bgName = type === 'default' ? 
            langPack[this.currentLang]['settings.defaultBg'] : 
            type === 'space' ? 
            langPack[this.currentLang]['settings.spaceBg'] : 
            langPack[this.currentLang]['settings.cyberBg'];
            
        this.addSystemLog(langPack[this.currentLang]['log.bgChanged'] + bgName);
    }

    uploadBackground(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const url = `url(${e.target.result})`;
                document.body.style.backgroundImage = url;
                localStorage.setItem('customBackground', url);
                particles.init();
                
                // 更新背景选择按钮状态
                document.querySelectorAll('.background-option').forEach(option => {
                    option.classList.toggle('active', option.dataset.background === 'custom');
                });
                
                this.addSystemLog(langPack[this.currentLang]['log.bgChanged'] + 
                    langPack[this.currentLang]['settings.uploadBg']);
            };
            reader.readAsDataURL(file);
        }
    }

    // 日志功能
    addLog() {
        const logInput = document.getElementById('logInput');
        const logContent = logInput.value.trim();
        
        if (logContent === '') {
            this.showInputError(logInput, langPack[this.currentLang]['log.emptyWarning']);
            return;
        }
        
        const now = new Date();
        const timeString = now.toLocaleString('zh-CN');
        
        this.addLogEntry(timeString, logContent, 'user');
        logInput.value = '';
        
        this.showInputSuccess(logInput);
    }

    addSystemLog(content) {
        const now = new Date();
        const timeString = now.toLocaleString('zh-CN');
        this.addLogEntry(timeString, content, 'system');
    }

    addLogEntry(time, content, type = 'user') {
        const logEntry = document.createElement('div');
        logEntry.className = `log-entry ${type}-log`;
        
        logEntry.innerHTML = `
            <div class="log-header">
                <strong>${type === 'user' ? langPack[this.currentLang]['logs.admin'] : langPack[this.currentLang]['logs.system']}</strong>
                <span class="log-time">${time}</span>
            </div>
            <div class="log-content">
                ${content}
            </div>
            ${type === 'user' ? '<div class="delete-log">×</div>' : ''}
        `;
        
        if (type === 'user') {
            logEntry.querySelector('.delete-log').addEventListener('click', (e) => {
                this.deleteLog(e);
            });
        }
        
        document.getElementById('logList').prepend(logEntry);
    }

    deleteLog(event) {
        const logEntry = event.target.closest('.log-entry');
        logEntry.style.opacity = '0';
        logEntry.style.transform = 'translateX(100px)';
        
        setTimeout(() => {
            logEntry.remove();
        }, 300);
    }

    showInputError(input, message) {
        input.style.borderColor = 'var(--danger-color)';
        input.style.boxShadow = '0 0 10px rgba(var(--danger-color-rgb), 0.2)';
        
        setTimeout(() => {
            input.style.borderColor = '';
            input.style.boxShadow = '';
        }, 2000);
        
        // 可以在这里添加Toast通知
        console.warn(message);
    }

    showInputSuccess(input) {
        input.style.borderColor = 'var(--success-color)';
        input.style.boxShadow = '0 0 10px rgba(var(--success-color-rgb), 0.2)';
        
        setTimeout(() => {
            input.style.borderColor = '';
            input.style.boxShadow = '';
        }, 1000);
    }

    // 功能库功能
    renderFeatureGrid() {
        const grid = document.getElementById('featuresGrid');
        grid.innerHTML = '';
        
        this.currentFeatures.forEach((feature, index) => {
            const item = document.createElement('div');
            item.className = 'icon-item';
            item.innerHTML = `
                <div class="hologram-icon"></div>
                <div class="feature-name">${feature.name}</div>
            `;
            
            item.addEventListener('click', () => {
                this.executeFeature(feature);
            });
            
            grid.appendChild(item);
        });
    }

    executeFeature(feature) {
        if (feature.link.startsWith('http')) {
            window.open(feature.link, '_blank');
        } else if (feature.link.startsWith('javascript:')) {
            try {
                (new Function(feature.link.substring(11)))();
            } catch (e) {
                console.error('执行JavaScript出错:', e);
                this.addSystemLog(`执行功能时出错: ${e.message}`);
            }
        } else {
            // 处理其他类型的链接
            console.log(feature.link);
        }
    }

    // 功能库配置
    renderFeatureConfigForm() {
        const container = document.getElementById('featureConfigContainer');
        container.innerHTML = '';
        
        this.currentFeatures.forEach((feature, index) => {
            const featureItem = document.createElement('div');
            featureItem.className = 'feature-item';
            featureItem.innerHTML = `
                <label>${langPack[this.currentLang]['settings.customFeatures']} #${index + 1}</label>
                <input type="text" class="feature-input feature-name" 
                       value="${feature.name}" placeholder="${langPack[this.currentLang]['feature.emptyWarning']}">
                <input type="text" class="feature-input feature-link" 
                       value="${feature.link}" placeholder="${langPack[this.currentLang]['feature.linkWarning']}">
                <div class="feature-warning"></div>
            `;
            
            container.appendChild(featureItem);
        });
    }

    saveFeatureConfig() {
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
                warning.textContent = langPack[this.currentLang]['feature.emptyWarning'];
                warning.style.display = 'block';
                hasError = true;
                return;
            }
            
            // 检查链接格式
            if (!linkInput.value.startsWith('http') && 
                !linkInput.value.startsWith('javascript:')) {
                warning.textContent = langPack[this.currentLang]['feature.linkWarning'];
                warning.style.display = 'block';
                hasError = true;
                return;
            }
            
            newFeatures.push({
                name: nameInput.value.trim(),
                link: linkInput.value.trim()
            });
        });
        
        if (hasError) return;
        
        this.currentFeatures = newFeatures;
        this.saveConfig();
        this.renderFeatureGrid();
        
        this.addSystemLog(langPack[this.currentLang]['feature.saveSuccess']);
        
        // 显示成功消息
        this.showToast(langPack[this.currentLang]['feature.saveSuccess'], 'success');
    }

    resetFeatureConfig() {
        if (confirm(langPack[this.currentLang]['feature.resetConfirm'])) {
            this.currentFeatures = [...defaultFeatures];
            this.saveConfig();
            this.renderFeatureConfigForm();
            this.renderFeatureGrid();
            
            this.addSystemLog(langPack[this.currentLang]['feature.resetSuccess']);
            this.showToast(langPack[this.currentLang]['feature.resetSuccess'], 'success');
        }
    }

    toggleFeatureConfig() {
        const content = document.getElementById('featureConfigContent');
        const toggleIcon = document.querySelector('.feature-header .toggle-icon');
        
        content.classList.toggle('collapsed');
        toggleIcon.textContent = content.classList.contains('collapsed') ? '▶' : '▼';
    }

    // 工具函数
    showToast(message, type = 'info') {
        // 简单的Toast实现
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            background: var(--panel-bg);
            border: 1px solid var(--primary-color);
            border-radius: 8px;
            color: var(--text-color);
            z-index: 1000;
            backdrop-filter: blur(12px);
            animation: slideInRight 0.3s ease-out;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
}

// 初始化应用
const app = new AngelCrystalApp();
