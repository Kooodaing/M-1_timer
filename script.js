document.addEventListener('DOMContentLoaded', () => {
    // タイマーオブジェクトの作成
    const timer1 = {
        timeDisplay: document.querySelector('#timer1 .time-display'),
        timerElement: document.getElementById('timer1'),
        time: 0,
        targetTime: 135,
        interval: null,
        audio1: new Audio('警告音2.mp3'),
        audio2: new Audio('爆発1.mp3'),
        
        start: function() {
            this.timeDisplay.textContent = '0:00';
            this.time = 0;
            
            if (this.interval) {
                clearInterval(this.interval);
            }
            
            this.interval = setInterval(() => {
                if (this.time < this.targetTime) {
                    this.time++;
                    this.updateDisplay();
                    
                    // エフェクトと音声再生
                    if (this.time === 125) { // 2分5秒
                        this.audio1.play();
                        this.timerElement.classList.add('shake');
                        setTimeout(() => {
                            this.timerElement.classList.remove('shake');
                        }, 500);
                    } else if (this.time === 135) { // 2分15秒
                        this.audio2.play();
                        this.timerElement.classList.add('explosion');
                        setTimeout(() => {
                            this.timerElement.classList.remove('explosion');
                        }, 1000);
                    }
                }
            }, 1000);
        },
        
        reset: function() {
            if (this.interval) {
                clearInterval(this.interval);
            }
            this.time = 0;
            this.timeDisplay.textContent = '0:00';
            this.timerElement.classList.remove('shake', 'explosion');
        },
        
        updateDisplay: function() {
            const minutes = Math.floor(this.time / 60);
            const seconds = this.time % 60;
            this.timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    };

    const timer2 = {
        timeDisplay: document.querySelector('#timer2 .time-display'),
        timerElement: document.getElementById('timer2'),
        time: 0,
        targetTime: 150,
        interval: null,
        audio1: new Audio('警告音2.mp3'),
        audio2: new Audio('爆発1.mp3'),
        
        start: function() {
            this.timeDisplay.textContent = '0:00';
            this.time = 0;
            
            if (this.interval) {
                clearInterval(this.interval);
            }
            
            this.interval = setInterval(() => {
                if (this.time < this.targetTime) {
                    this.time++;
                    this.updateDisplay();
                    
                    // エフェクトと音声再生
                    if (this.time === 135) { // 2分15秒
                        this.audio1.play();
                        this.timerElement.classList.add('shake');
                        setTimeout(() => {
                            this.timerElement.classList.remove('shake');
                        }, 500);
                    } else if (this.time === 150) { // 2分30秒
                        this.audio2.play();
                        this.timerElement.classList.add('explosion');
                        setTimeout(() => {
                            this.timerElement.classList.remove('explosion');
                        }, 1000);
                    }
                }
            }, 1000);
        },
        
        reset: function() {
            if (this.interval) {
                clearInterval(this.interval);
            }
            this.time = 0;
            this.timeDisplay.textContent = '0:00';
            this.timerElement.classList.remove('shake', 'explosion');
        },
        
        updateDisplay: function() {
            const minutes = Math.floor(this.time / 60);
            const seconds = this.time % 60;
            this.timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    };

    // スタートボタンのイベントリスナー
    document.querySelectorAll('.start-btn').forEach(button => {
        button.addEventListener('click', () => {
            const timer = button.closest('.timer');
            if (timer.id === 'timer1') {
                timer1.start();
            } else if (timer.id === 'timer2') {
                timer2.start();
            }
        });
    });

    // リセットボタンのイベントリスナー
    document.querySelectorAll('.reset-btn').forEach(button => {
        button.addEventListener('click', () => {
            const timer = button.closest('.timer');
            if (timer.id === 'timer1') {
                timer1.reset();
            } else if (timer.id === 'timer2') {
                timer2.reset();
            }
        });
    });
});
