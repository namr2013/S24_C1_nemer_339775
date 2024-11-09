// الوظيفة لفتح وإغلاق القائمة في الأجهزة الصغيرة
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.links').classList.toggle('active');
});

// إغلاق القائمة بعد النقر على رابط في الأجهزة الصغيرة
document.querySelectorAll('.links a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelector('.links').classList.remove('active');
    });
});

// إضافة تأثير التمرير على الأزرار
document.querySelectorAll('.btn').forEach(function(button) {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#e67e22'; // تغيير اللون عند التمرير
    });
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#f39c12'; // العودة إلى اللون الأساسي عند الابتعاد
    });
});

// التأكد من وجود بيانات في النموذج قبل الإرسال
document.querySelector('.contact form').addEventListener('submit', function(event) {
    const name = document.querySelector('input[type="text"]:nth-of-type(1)').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    if (name === '' || email === '' || message === '') {
        alert('يرجى تعبئة جميع الحقول قبل الإرسال.');
        event.preventDefault(); // إيقاف إرسال النموذج إذا كانت الحقول فارغة
    }
});

// تأثير التمرير على الصور في قسم المشاريع (تكبير الصورة عند التمرير)
document.querySelectorAll('.projects_box .project_content').forEach(function(project) {
    project.addEventListener('mouseover', function() {
        this.querySelector('img').style.transform = 'scale(1.05)';
    });
    project.addEventListener('mouseout', function() {
        this.querySelector('img').style.transform = 'scale(1)';
    });
});

// تأثير التمرير على النصوص في قسم "من نحن"
document.querySelector('.about').addEventListener('mouseenter', function() {
    document.querySelector('.about h2').style.color = '#f39c12'; // تغيير اللون عند الدخول
});
document.querySelector('.about').addEventListener('mouseleave', function() {
    document.querySelector('.about h2').style.color = '#333'; // العودة إلى اللون الأساسي عند الخروج
});
