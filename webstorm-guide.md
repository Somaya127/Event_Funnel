# WebStorm Configuration Guide

## إعداد المشروع في WebStorm

### 1. فتح المشروع
```
File → Open → c:/Users/AMCT/Desktop/AIcod/projects/Project 2
```

### 2. إعداد JavaScript
```
File → Settings → Languages & Frameworks → JavaScript
- JavaScript language version: ECMAScript 6+
- Code Completion: ✅ Enabled
```

### 3. إعداد HTML/CSS
```
File → Settings → Editor → Inspections
- HTML → ✅ All inspections enabled
- CSS → ✅ All inspections enabled
- JavaScript → ✅ All inspections enabled
```

### 4. إعداد Live Server
```
File → Settings → Build, Execution, Deployment → Live Edit
- ✅ Enable Live Edit
- ✅ Auto-reload in browser
```

## الأخطاء الشائعة في مشروعك وحلولها

### HTML Errors
```html
<!-- ❌ خطأ شائع -->
<a href=middleFirst.html>التالي</a>

<!-- ✅ التصحيح -->
<a href="middleFirst.html">التالي</a>
```

### CSS Errors
```css
/* ❌ خطأ */
.form-container {
    background: white;
    padding: 2.5rem
    /* ناقص فاصلة منقوطة */
}

/* ✅ التصحيح */
.form-container {
    background: white;
    padding: 2.5rem;
}
```

### JavaScript Errors
```javascript
// ❌ خطأ
trackEventt('click'); // اسم دالة خطأ

// ✅ التصحيح
trackEvent('click');
```

## اختصارات WebStorm الأساسية

| الوظيفة | Windows/Linux | Mac |
|---------|---------------|-----|
| Quick Fix | Alt+Enter | ⌥⏎ |
| Problems | Alt+6 | ⌘6 |
| Reformat Code | Ctrl+Alt+L | ⌥⌘L |
| Find in Files | Ctrl+Shift+F | ⌘⇧F |
| Run | Shift+F10 | ⌃R |
| Git Push | Ctrl+Shift+K | ⌘⇧K |
| Local History | VCS → Local History | VCS → Local History |

## فحص المشروع الحالي

### 1. فحص الأخطاء
```
View → Tool Windows → Problems (Alt+6)
```

### 2. تشغيل المشروع
```
Right-click on index.html → Open in Browser
أو
Right-click → Run → index.html
```

### 3. Git Integration
```
VCS → Git → Commit
VCS → Git → Push
```

## Plugins الموصى بها

### Essential Plugins
1. **LiveEdit** - Live preview
2. **GitToolBox** - Git integration
3. **Rainbow Brackets** - Code readability
4. **Prettier** - Code formatting
5. **ESLint** - JavaScript linting

### Installation
```
File → Settings → Plugins → Marketplace → Search → Install
```

## Local History Feature

### استعادة الملفات المحذوفة
```
Right-click on file → Local History → Show History
```

### مقارنة الإصدارات
```
Right-click on file → Local History → Show Differences
```

## GitHub Integration Setup

### 1. Connect to GitHub
```
File → Settings → Version Control → GitHub
- Add account → Login with GitHub
```

### 2. Clone Repository
```
Git → Clone → GitHub URL → Select folder
```

### 3. Push Changes
```
VCS → Git → Push → Select branch → Push
```

## Troubleshooting

### Common Issues & Solutions

#### 1. Live Server Not Working
```
File → Settings → Build, Execution, Deployment → Live Edit
✅ Enable Live Edit
✅ Auto-reload in browser
```

#### 2. Git Not Recognized
```
File → Settings → Version Control → Git
Path to Git executable: C:\Program Files\Git\bin\git.exe
```

#### 3. JavaScript Errors Not Detected
```
File → Settings → Languages & Frameworks → JavaScript
✅ ECMAScript 6+
✅ Code Completion
```

## Project-Specific Tips

### For Your Quran Course Project

#### 1. HTML Structure Check
```html
<!-- تأكد من إغلاق جميع الوسوم -->
<div class="container">
    <header>...</header>
    <main>...</main>
</div> <!-- ✅ مغلق بشكل صحيح -->
```

#### 2. CSS Validation
```css
/* تحقق من الخصائص */
.form-container {
    background: white; /* ✅ قيمة صحيحة */
    padding: 2.5rem; /* ✅ وحدة صحيحة */
}
```

#### 3. JavaScript Functions
```javascript
// تأكد من أسماء الدوال
function trackEvent(eventName) {
    console.log('Event:', eventName);
}

// استدعاء صحيح
trackEvent('form_submit'); // ✅ اسم صحيح
```

## Final Checklist

### Before Pushing to GitHub
- [ ] لا توجد أخطاء في Problems (Alt+6)
- [ ] جميع الروابط تعمل
- [ ] CSS متجاوب
- [ ] JavaScript لا يوجد أخطاء
- [ ] Git commit message واضح
- [ ] تم اختبار جميع الصفحات

### Performance Tips
- [ ] ضغط الصور
- [ ] CSS minification
- [ ] JavaScript minification
- [ ] Enable caching
