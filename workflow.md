## Workflow Checklist  
## ✅ **workflow.md كامل جاهز للنسخ واللصق**

```markdown
## Workflow Checklist  
### *Use While Working*

✔ Choose **one event idea**: دورة قاعدة النور لتعليم القرآن للأطفال

✔ Draw a **simple wireframe**: تم إنشاء المخطط على Miro (مرفق كصورة)

✔ Work on **one page at a time**: تم العمل بالترتيب من index → middleFirst → bottom → form → confirmation → postFunnel

✔ Before building each page, ask:
- What is this page for? **جذب/بناء ثقة/قرار/تسجيل/تأكيد/احتفاظ**
- What should the user do here? **قراءة/التعلم/اختيار/ملء فورم/فتح واتساب**

✔ Plan **before coding**:
- **HTML** → هيكل صحيح Semantic HTML5 ✅
- **CSS** → Responsive RTL Mobile-First ✅
- **JavaScript** → Multi-step form + Validation + Analytics ✅

✔ After building:
- Test the user flow ✅ (كل الروابط تعمل)
- Improve clarity and simplicity ✅ (FAQ + Breadcrumbs + Loading states)

---

# Event Registration Funnel – Workflow

> This file documents my thinking, planning, and progress.

---

## 1️⃣ Project Idea

**Event name:**  
دورة قاعدة النور لتأسيس الأطفال على القراءة

**Event type (choose one):**  
**Training course** (دورة تدريبية حضورية)

**Event date:**  
دوام مستمر | الأيام: أحد / ثلاثاء / خميس (مسائي) | مدة الحصة: ساعتان

**One sentence description of the event:**  
دورة حضورية لتأسيس الأطفال من عمر 5 إلى 8 سنوات على قراءة القرآن بطلاقة خطوة بخطوة، بإشراف المعلمة سميّه البعول في مجموعات صغيرة (حد أقصى 8 أطفال) بمركز كفرعان القرآني.

---

## 2️⃣ Funnel Goal

**What is the ONE main action the user should complete?**  
التواصل عبر واتساب أو اتصال لحجز مقعد وتقييم مستوى الطفل (Lead Generation).

**Main CTA (Call To Action) text:**  
"احجز تقييم مستوى لطفلك على واتساب"

---

## 3️⃣ Funnel Pages Overview

| Page Name | Purpose of the Page | What the User Does | Where the User Goes Next |
|----------|--------------------|--------------------|--------------------------|
| **index.html** | جذب الانتباه وعرض الدورة بسرعة | يقرأ Hero + فوائد ويضغط CTA | middleFirst.html أو يملأ الفورم مباشرة |
| **middleFirst.html** | بناء الثقة بالتفاصيل والإجابة على الأسئلة | يقرأ كيف تسير الدورة + FAQ + شهادات | bottom.html (صفحة القرار) |
| **bottom.html** | نقطة قرار واضحة بدون ضغط | يختار: "نعم احجز" أو "ليس الآن" | form.html (نعم) / postFunnel.html (لا) |
| **form.html** | جمع بيانات الحجز (Multi-step) | يملأ 3 خطوات: طفل + مجموعة + ولي أمر | confirmation.html |
| **confirmation.html** | تأكيد نجاح التسجيل + الخطوات التالية | يقرأ التأكيد ويضغط واتساب | يفتح واتساب أو يغادر |
| **postFunnel.html** | التقاط Lead خفيف لمن اختار "ليس الآن" | يُدخل رقم واتساب أو يحمّل PDF | رسالة متابعة بعد 24 ساعة |

---

## 4️⃣ Wireframes (Screenshots or Sketches)

> Add screenshots, photos, or links to your wireframes.

- **Page 1 wireframe:** Miro - Hero Section + Benefits + CTA
- **Page 2 wireframe:** Miro - How it Works + Schedule + Location + FAQ
- **Page 3 wireframe:** Miro - Decision Point (نعم/لا)
- **Page 4 wireframe:** Miro - Multi-step Form (3 steps + Progress Bar)
- **Page 5 wireframe:** Miro - Success Message + WhatsApp CTA
- **Page 6 wireframe:** Miro - Retention (WhatsApp Form / PDF)

*المخطط الكامل على Miro (مرفق كصورة في المشروع)*

---

## 5️⃣ Page-by-Page Planning

### 🔹 Page 1: Main Page (index.html)

**Purpose of this page:**  
جذب انتباه ولي الأمر وتقديم الدورة بشكل واضح جدًا خلال 5 ثوان، ودفعه للتسجيل الفوري أو معرفة المزيد.

**Main message:**  
"دورة حضورية لتأسيس طفلك (5–8 سنوات) على القراءة بطلاقة، في كفرعان، بمجموعات صغيرة وجدول ثابت."

**Main CTA button:**  
"احجز تقييم مستوى لطفلك على واتساب"

**User action:**  
عند الضغط على CTA، ينتقل إلى صفحة التفاصيل (middleFirst.html) أو يفتح واتساب مباشرة.

---

### 🔹 Page 2: Details / Info Page (middleFirst.html)

**Purpose of this page:**  
بناء الثقة من خلال عرض التفاصيل الكاملة (كيف تسير الدورة، الجدول، الموقع، الشهادات) والإجابة على الاعتراضات المحتملة قبل التسجيل.

**What information is shown?**  
- كيف تسير الدورة؟ (3 خطوات واضحة)
- الجدول الزمني: أحد/ثلاثاء/خميس (مسائي)، ساعتان
- الموقع: كفرعان – مقابل مسجد سعيد بن زيد + خريطة Google
- مجموعات منفصلة للبنين والبنات (حد أقصى 8 أطفال)
- شهادات أولياء أمور (3 شهادات)
- FAQ (8 أسئلة وأجوبة)

**How does this page push the user forward?**  
كل قسم يزيل اعتراض محتمل ويُقرب ولي الأمر من قرار التسجيل. FAQ تجيب على كل الأسئلة المتوقعة. CTA متكرر بعد FAQ.

**Next action button text:**  
"ابدأ الحجز الآن" → ينتقل لصفحة القرار (bottom.html)

---

### 🔹 Page 3: Decision Page (bottom.html)

**Purpose of this page:**  
نقطة قرار واضحة بدون ضغط زائد، تعطي المستخدم خيارين صريحين: حجز فوري أو الحصول على التفاصيل لاحقًا.

**What information is shown?**  
سؤال مباشر وواضح: "هل تريد تثبيت مقعد لطفلك في دورة قاعدة النور الآن؟"  
زرين كبيرين واضحين.

**How does this page push the user forward?**  
المسار البديل ("ليس الآن") يمنع خسارة Lead كاملة ويحوله إلى صفحة postFunnel للاحتفاظ بالتواصل.

**Next action button text:**  
- **زر أساسي:** "نعم، أريد الحجز الآن" → form.html  
- **زر ثانوي:** "ليس الآن—أرسلوا لي التفاصيل على واتساب" → postFunnel.html

---

### 🔹 Page 4: Registration Page (form.html)

**Purpose of this page:**  
جمع بيانات الحجز الكاملة (الطفل، المجموعة، ولي الأمر) بأقل احتكاك ممكن باستخدام نموذج متعدد الخطوات.

**What does the user need to do here?**  
ملء 3 خطوات قصيرة ومرتبة:
1. **Step 1:** بيانات الطفل (الاسم، العمر، هل يعرف الحروف؟)
2. **Step 2:** تفضيلات المجموعة (بنين/بنات، تأكيد الوقت المسائي)
3. **Step 3:** بيانات ولي الأمر (الاسم، رقم واتساب، أفضل وقت للتواصل)

**What makes the user feel confident to continue?**  
- Progress bar واضح (1/3 → 2/3 → 3/3)
- زر "السابق" في كل خطوة للتعديل
- نص تحت الفورم: "الرسوم تُرسل على واتساب بعد تقييم مستوى الطفل"
- Validation فوري لكل حقل

**Final action before confirmation:**  
زر "إرسال الطلب" → يرسل البيانات وينتقل فورًا لصفحة confirmation.html

---

### 🔹 Page 5: Confirmation Page (confirmation.html)

**Purpose of this page:**  
تأكيد نجاح التسجيل بشكل واضح، توضيح الخطوات التالية، ودفع ولي الأمر لفتح واتساب فورًا لإكمال التواصل.

**Message shown to the user:**  
"✅ تم استلام طلبك لدورة قاعدة النور في مركز كفرعان القرآني.  
سيتم التواصل معك خلال 24 ساعة لتأكيد المجموعة المناسبة وإرسال الرسوم."

**What should the user understand now?**  
- التسجيل تم بنجاح ✅
- سيتم التواصل معه قريبًا (24 ساعة)
- يمكنه فتح واتساب الآن للاستفسار الفوري
- يمكنه الحصول على الاتجاهات للمركز

**CTA Buttons:**
- **زر أساسي:** "فتح واتساب الآن" (wa.me link مع رسالة جاهزة)
- **زر ثانوي:** "احصل على الاتجاهات للمركز" (Google Maps)

---

### 🔹 Page 6: Retention Page (postFunnel.html)

**Purpose of this page:**  
التقاط Lead خفيف (رقم واتساب فقط) لمن اختار "ليس الآن"، وتقديم بدائل للبقاء على تواصل بدون ضغط.

**Message shown to the user:**  
"لا مشكلة على الإطلاق! 😊  
يمكنك الحصول على تفاصيل الدورة والرسوم على واتساب، أو تحميل ملف تعريفي بصيغة PDF."

**What should the user understand now?**  
- لا يوجد ضغط للتسجيل الفوري
- يمكنه التواصل لاحقًا عندما يكون جاهزًا
- المعلومات الكاملة متاحة بسهولة على واتساب أو PDF
- سيتم متابعته برسالة ودية بعد 24 ساعة

**CTA Options:**
- **خيار 1:** حقل واحد لرقم واتساب + زر "أرسلوا لي التفاصيل"
- **خيار 2:** زر "تحميل ملف الدورة PDF"
- **خيار 3:** زر "العودة للصفحة الرئيسية"

---

## 6️⃣ Interaction & Behavior Planning

### index.html:
- **What happens:** ضغط CTA الأساسي → smooth scroll للفورم أو redirect لـ middleFirst.html
- **Feedback:** تغيير لون الزر عند hover + تأثير loading عند الضغط
- **Screen change:** انتقال سلس بين الأقسام

### middleFirst.html:
- **What happens:** ضغط سؤال في FAQ → Accordion يفتح/يغلق بـ smooth animation
- **Feedback:** أيقونة + تتحول إلى – عند الفتح
- **Screen change:** ارتفاع FAQ يتمدد تدريجيًا (max-height transition)

### bottom.html:
- **What happens:** ضغط "نعم" → redirect فوري لـ form.html | ضغط "لا" → redirect لـ postFunnel.html
- **Feedback:** تأثير scale عند hover، loading spinner عند الضغط
- **Screen change:** انتقال كامل لصفحة جديدة

### form.html:
- **What happens:** ضغط "التالي" → Validation أولاً، ثم انتقال للخطوة التالية
- **Feedback:** Progress bar يتحرك، رسالة validation حمراء إذا فيه خطأ
- **Screen change:** إخفاء الخطوة الحالية وإظهار التالية بـ fade animation
- **What happens (Previous):** ضغط "السابق" → العودة للخطوة السابقة مع حفظ البيانات في localStorage
- **What happens (Submit):** إرسال البيانات + حفظ في localStorage + redirect لـ confirmation.html

### confirmation.html:
- **What happens:** ضغط "واتساب" → فتح wa.me في نافذة/تبويب جديد
- **Feedback:** أيقونة واتساب تتحرك قليلاً عند hover
- **Screen change:** فتح تطبيق واتساب أو WhatsApp Web

### postFunnel.html:
- **What happens:** ضغط "أرسل التفاصيل" → فتح wa.me برسالة مسبقة
- **Feedback:** Validation لرقم واتساب إذا تم إدخاله
- **Screen change:** فتح واتساب في نافذة جديدة

---

## 7️⃣ Prompt Description (Planning Only)

### Page 1: index.html
**Page name:** Main Landing Page (Hero)  
**What should the page do:** عرض Hero section جذاب بعنوان قوي + subheading + 3 فوائد رئيسية + CTA واضح + روابط واتساب/اتصال  
**What behavior is needed:** Smooth scroll عند الضغط على CTA، فتح واتساب برسالة جاهزة، Analytics tracking لكل ضغطة  
**What should NOT happen:** لا ذكر للسعر، لا معلومات مفصلة تشتت الانتباه، لا popups مزعجة

### Page 2: middleFirst.html
**Page name:** Details and Trust Building Page  
**What should the page do:** عرض تفاصيل كاملة (كيف تسير + جدول + موقع + شهادات + FAQ) لبناء الثقة  
**What behavior is needed:** FAQ accordion (فتح/إغلاق بـ smooth animation)، CTA متكرر ينقل لـ bottom.html  
**What should NOT happen:** لا فورم في هذه الصفحة، فقط معلومات وبناء ثقة

### Page 3: bottom.html
**Page name:** Decision Point Page  
**What should the page do:** عرض نقطة قرار واضحة بزرين كبيرين: نعم (form) / لا (postFunnel)  
**What behavior is needed:** Redirect فوري بناءً على الاختيار، tracking لكل قرار  
**What should NOT happen:** لا ضغط زائد، لا countdown timers مزعجة، لا خداع

### Page 4: form.html
**Page name:** Multi-Step Registration Form  
**What should the page do:** جمع بيانات الحجز عبر 3 خطوات مع progress bar واضح  
**What behavior is needed:** Validation لكل خطوة، حفظ البيانات في localStorage، زر السابق يعمل، tracking لكل خطوة مكتملة  
**What should NOT happen:** لا سماح بالانتقال بدون ملء الحقول الإجبارية، لا فقدان للبيانات عند الرجوع

### Page 5: confirmation.html
**Page name:** Success Confirmation Page  
**What should the page do:** عرض رسالة نجاح واضحة + CTA واتساب أساسي + زر الاتجاهات ثانوي  
**What behavior is needed:** فتح واتساب برسالة جاهزة، فتح Google Maps للاتجاهات، tracking conversion  
**What should NOT happen:** لا إعادة إرسال الفورم، لا روابط خارجية غير موثوقة

### Page 6: postFunnel.html
**Page name:** Retention and Lead Capture Page  
**What should the page do:** التقاط رقم واتساب بشكل خفيف أو تقديم PDF للتحميل  
**What behavior is needed:** فتح واتساب برسالة طلب تفاصيل، تحميل PDF (أو محاكاة)، tracking retention path  
**What should NOT happen:** لا شعور بالذنب، لا رسائل سلبية، لا إجبار على التسجيل

---

## 8️⃣ Build Workflow (Repeat for Every Page)

### For each page, I followed this order:

1. ✅ **Plan the page** → تحديد الهدف والمحتوى بوضوح
2. ✅ **Describe the behavior** → كتابة التفاعلات المطلوبة قبل الكود
3. ✅ **Build HTML structure** → Semantic HTML5 صحيح
4. ✅ **Style with CSS** → Responsive Mobile-First + RTL
5. ✅ **Add interaction (JS)** → Multi-step form + Validation + Analytics
6. ✅ **Check user flow** → اختبار التنقل بين الصفحات
7. ✅ **Improve** → إضافة breadcrumbs، loading states، تحسين UX

---

## 9️⃣ Iteration Notes

### **What was confusing and had to be fixed?**

1. **مسار GitHub Pages** كان خاطئ في البداية (/docs بدلاً من /root) → **تم إصلاحه**
2. **روابط CSS مزدوجة** (style.css + registration-styles.css) → **يحتاج دمج**
3. **Validation في الفورم** لم يكن واضحًا في البداية → **تم تحسينه بـ red error messages**
4. **FAQ** لم يكن يعمل بشكل Accordion → **تم إصلاحه بـ JavaScript toggle function**

### **What was improved after testing?**

1. ✅ إضافة **breadcrumbs navigation** في أعلى كل صفحة لتسهيل التنقل
2. ✅ تحسين **Responsive** على الموبايل (تصغير fonts، تعديل grid)
3. ✅ إضافة **loading states** للأزرار عند الضغط (تحسين UX)
4. ✅ تحسين **FAQ accordion** بـ smooth animations
5. ✅ إضافة **Analytics tracking** لكل تفاعل مهم (form_submit، whatsapp_click، إلخ)
6. ✅ إضافة **localStorage** لحفظ بيانات الفورم عند الانتقال بين الخطوات
7. ✅ تحسين **نصوص CTA** لتكون أكثر وضوحًا ودفعًا للعمل
8. ✅ إضافة **مسار بديل** (postFunnel) لعدم خسارة Lead

---

## ✅ Final Check

- ✅ **Is the funnel easy to follow without explanation?**  
  **نعم** – التدفق خطي وواضح من Hero → Details → Decision → Form → Success

- ✅ **Does each page have ONE clear purpose?**  
  **نعم** – كل صفحة لها هدف واحد محدد (جذب/ثقة/قرار/تسجيل/تأكيد/احتفاظ)

- ✅ **Is the main CTA clear?**  
  **نعم** – "احجز تقييم مستوى لطفلك على واتساب" واضح ومتكرر

- ✅ **Does the flow end clearly?**  
  **نعم** – صفحة confirmation توضح الخطوات التالية بشكل كامل + CTA واتساب نهائي

---
