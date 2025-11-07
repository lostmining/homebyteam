tailwind.config = {
        theme: {
            extend: {
                colors: {
                    'primary': '#4f46e5',
                    'secondary': '#10b981',
                }
            }
        }
    };

    // المصفوفة التي أرسلتها
    const obfuscatedCodeArray = [
        109, 121, 121, 117, 120, 63, 52, 52, 109, 116, 114, 106, 103, 126, 119, 106, 121, 106, 102, 114, 50, 105, 116, 121, 51, 103, 113, 116, 108, 120, 117, 116, 121, 51, 104, 116, 114
    ];

    const SHIFT_KEY = 5;

    function deobfuscateUrl(codeArray) {
        try {
            const decodedChars = codeArray.map(code => 
                String.fromCharCode(code - SHIFT_KEY)
            );
            return decodedChars.join('');
        } catch (error) {
            console.error("ERROR!", error); // رسالة الخطأ الخاصة بك
            return "";
        }
    }

    const decodedUrl = deobfuscateUrl(obfuscatedCodeArray);

    const SPLASH_DURATION = 1000; // مدة الانتظار الخاصة بك (1 ثانية)

    window.onload = function() {
        const splashScreen = document.getElementById('splash-screen');
        const mainContent = document.getElementById('main-content');
        const iframe = document.getElementById('encrypted-iframe');

        let splashHidden = false;

        // دالة لإخفاء الشاشة (تعمل مرة واحدة فقط)
        function hideSplash() {
            if (splashHidden) return; 
            splashHidden = true;

            splashScreen.style.opacity = '0';
            setTimeout(() => {
                splashScreen.classList.add('hidden');
                mainContent.classList.remove('hidden');
                iframe.src = decodedUrl;
                iframe.style.visibility = 'visible';
            }, 500); // 500ms لرسوم التلاشي
        }

        // 1. الإخفاء بعد مرور الوقت
        setTimeout(hideSplash, SPLASH_DURATION);

        // 2. (الميزة الجديدة) الإخفاء عند النقر
        splashScreen.addEventListener('click', hideSplash);
    };

    // منع القائمة
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // منع التكبير
    document.addEventListener('touchmove', function(e) {
        if (e.touches.length > 1) { 
            e.preventDefault();
        }
    }, { passive: false });
