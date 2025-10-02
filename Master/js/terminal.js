// 终端系统
const terminal = {
    initialized: false,
    history: [],
    historyIndex: -1,
    
    init() {
        if (this.initialized) return;
        
        this.setupTerminal();
        this.addWelcomeMessage();
        this.setupEventListeners();
        
        this.initialized = true;
    },
    
    setupTerminal() {
        const terminalBody = document.getElementById('terminalBody');
        terminalBody.innerHTML = '';
        
        // 添加初始输入行
        this.addInputLine();
    },
    
    addWelcomeMessage() {
        this.addOutput(`
    █████╗ ███╗   ██╗ ██████╗ ███████╗██╗      ██████╗ ██████╗ ██████╗ ██╗   ██╗███████╗████████╗ █████╗ ██╗     
    ██╔══██╗████╗  ██║██╔════╝ ██╔════╝██║     ██╔════╝██╔═══██╗██╔══██╗╚██╗ ██╔╝██╔════╝╚══██╔══╝██╔══██╗██║     
    ███████║██╔██╗ ██║██║  ███╗█████╗  ██║     ██║     ██║   ██║██████╔╝ ╚████╔╝ █████╗     ██║   ███████║██║     
    ██╔══██║██║╚██╗██║██║   ██║██╔══╝  ██║     ██║     ██║   ██║██╔══██╗  ╚██╔╝  ██╔══╝     ██║   ██╔══██║██║     
    ██║  ██║██║ ╚████║╚██████╔╝███████╗███████╗╚██████╗╚██████╔╝██║  ██║   ██║   ███████╗   ██║   ██║  ██║███████╗
    ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╗   ╚═╝   ╚═╝  ╚═╝╚══════╝
                                                                                        v2.0.0
        `);
        
        this.addOutput('输入 "help" 查看可用命令');
    },
    
    setupEventListeners() {
        document.addEventListener('click', () => {
            this.focusInput();
        });
        
        // 终端控制按钮
        document.querySelectorAll('.terminal-control').forEach(control => {
            control.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleControl(control.dataset.action);
            });
        });
    },
    
    handleControl(action) {
        switch(action) {
            case 'close':
                this.addOutput('终端已关闭');
                break;
            case 'minimize':
                this.addOutput('终端已最小化');
                break;
            case 'maximize':
                this.addOutput('终端已最大化');
                break;
        }
    },
    
    addInputLine() {
        const terminalBody = document.getElementById('terminalBody');
        const inputLine = document.createElement('div');
        inputLine.className = 'terminal-line';
        inputLine.innerHTML = `
            <span class="terminal-prompt">admin@angelcrystal:~$</span>
            <span class="terminal-input" contenteditable="true"></span>
        `;
        
        terminalBody.appendChild(inputLine);
        this.setupInputEvents(inputLine);
        this.focusInput();
    },
    
    setupInputEvents(inputLine) {
        const input = inputLine.querySelector('.terminal-input');
        
        input.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'Enter':
                    e.preventDefault();
                    this.processCommand(input.textContent.trim());
                    input.textContent = '';
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    this.navigateHistory(-1);
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    this.navigateHistory(1);
                    break;
                case 'Tab':
                    e.preventDefault();
                    this.autoComplete(input);
                    break;
            }
        });
        
        input.addEventListener('input', () => {
            // 确保输入是纯文本
            if (input.innerHTML.includes('<')) {
                input.textContent = input.textContent;
            }
        });
    },
    
    focusInput() {
        const input = document.querySelector('.terminal-input:last-child');
        if (input) {
            input.focus();
            
            // 移动光标到末尾
            const range = document.createRange();
            const selection = window.getSelection();
            range.selectNodeContents(input);
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    },
    
    processCommand(command) {
        if (!command) return;
        
        // 添加到历史记录
        this.history.push(command);
        this.historyIndex = this.history.length;
        
        // 显示命令
        this.addCommandLine(command);
        
        // 处理命令
        const result = this.executeCommand(command);
        this.addOutput(result);
        
        // 添加新的输入行
        this.addInputLine();
        
        // 滚动到底部
        this.scrollToBottom();
    },
    
    addCommandLine(command) {
        const terminalBody = document.getElementById('terminalBody');
        const commandLine = document.createElement('div');
        commandLine.className = 'terminal-line';
        commandLine.innerHTML = `
            <span class="terminal-prompt">admin@angelcrystal:~$</span>
            <span class="terminal-command">${command}</span>
        `;
        
        terminalBody.appendChild(commandLine);
    },
    
    addOutput(content, type = 'normal') {
        const terminalBody = document.getElementById('terminalBody');
        const output = document.createElement('div');
        output.className = `terminal-output ${type}`;
        output.textContent = content;
        
        terminalBody.appendChild(output);
    },
    
    executeCommand(command) {
        const cmd = command.toLowerCase().trim();
        
        switch(cmd) {
            case 'help':
                return `可用命令:
  help     - 显示帮助信息
  about    - 显示系统信息
  clear    - 清空终端屏幕
  time     - 显示当前时间
  theme    - 切换主题 (blue/red)
  version  - 显示版本信息
  history  - 显示命令历史`;
                
            case 'about':
                return `AngelCrystal Terminal v2.0
                
AngelCrystal 是一个高级管理系统，专为高效控制和管理设计。
该系统采用先进的Web技术构建，提供直观的用户界面和强大的功能。

开发团队:
  - TheronVaux: UI设计，核心模块开发和系统集成
  - InfinitySKY: UI/UX设计，用户界面和交互体验
  - SHENGYUE: 后端开发工程师

版本: 2.0.0
许可: MIT 开源协议`;
                
            case 'clear':
                this.clearTerminal();
                return '';
                
            case 'time':
                return new Date().toLocaleString('zh-CN');
                
            case 'theme blue':
                app.switchTheme('blue');
                return '主题已切换为蓝色主题';
                
            case 'theme red':
                app.switchTheme('red');
                return '主题已切换为红色主题';
                
            case 'version':
                return 'AngelCrystal v2.0.0';
                
            case 'history':
                return this.history.length > 0 ? 
                    this.history.map((cmd, index) => `${index + 1}. ${cmd}`).join('\n') : 
                    '没有命令历史';
                
            default:
                return `命令未找到: ${command}。输入 'help' 查看可用命令。`;
        }
    },
    
    clearTerminal() {
        const terminalBody = document.getElementById('terminalBody');
        terminalBody.innerHTML = '';
        this.addWelcomeMessage();
    },
    
    navigateHistory(direction) {
        if (this.history.length === 0) return;
        
        this.historyIndex = Math.max(0, Math.min(this.history.length, this.historyIndex + direction));
        
        const input = document.querySelector('.terminal-input:last-child');
        if (input && this.historyIndex < this.history.length) {
            input.textContent = this.history[this.historyIndex];
        }
    },
    
    autoComplete(input) {
        const commands = ['help', 'about', 'clear', 'time', 'theme', 'version', 'history'];
        const currentText = input.textContent.toLowerCase();
        
        const match = commands.find(cmd => cmd.startsWith(currentText));
        if (match) {
            input.textContent = match;
        }
    },
    
    scrollToBottom() {
        const terminalBody = document.getElementById('terminalBody');
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
};
