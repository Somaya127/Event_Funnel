// Enhanced Form Submission with Google Sheets Integration
async function submitForm(formData) {
    try {
        // Track form submission
        trackEvent('form_submit', { total_steps: 3 });
        
        // 1. Save to localStorage as backup
        localStorage.setItem('formSubmission', JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString()
        }));
        
        // 2. Generate WhatsApp message
        const whatsappMessage = generateWhatsAppSummary(formData);
        
        // 3. Open WhatsApp with pre-filled message
        window.open(whatsappMessage, '_blank');
        
        // 4. Redirect to confirmation page
        setTimeout(() => {
            window.location.href = 'confirmation.html';
        }, 1000);
        
        return { success: true };
        
    } catch (error) {
        console.error('Form submission error:', error);
        trackEvent('form_submit_error', { error: error.message });
        return { success: false, error: error.message };
    }
}

// Generate WhatsApp message from form data
function generateWhatsAppSummary(formData) {
    const message = `
📝 *تسجيل جديد في دورة قاعدة النور*

👶 *اسم الطفل:* ${formData.اسم_الطفل}
🎂 *العمر:* ${formData.العمر} سنوات
⚥ *الجنس:* ${formData.الجنس}
📱 *رقم واتساب ولي الأمر:* ${formData.رقم_الواتساب}

📅 *تاريخ التسجيل:* ${new Date().toLocaleDateString('ar-SA')}
🏫 *المركز:* مركز كفرعان القرآني

---
*تم التسجيل عبر الموقع الإلكتروني*
    `.trim();
    
    const phoneNumber = '962791951134'; // Your WhatsApp number
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

// Enhanced analytics tracking
function trackEvent(eventName, parameters = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    
    // Facebook Pixel (if available)
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, parameters);
    }
    
    // Console logging for development
    console.log('📊 Event tracked:', eventName, parameters);
    
    // Custom analytics (you can add your own tracking here)
    if (window.customAnalytics) {
        window.customAnalytics.track(eventName, parameters);
    }
}

// Form validation helper
function validateForm(formData) {
    const errors = [];
    
    // Validate child name
    if (!formData.اسم_الطفل || formData.اسم_الطفل.trim().length < 3) {
        errors.push('اسم الطفل يجب أن يكون 3 أحرف على الأقل');
    }
    
    // Validate age
    const age = parseInt(formData.العمر);
    if (isNaN(age) || age < 5 || age > 8) {
        errors.push('العمر يجب أن يكون بين 5 و 8 سنوات');
    }
    
    // Validate gender
    if (!formData.الجنس || !['بنين', 'بنات'].includes(formData.الجنس)) {
        errors.push('يرجى اختيار الجنس');
    }
    
    // Validate phone number
    const phoneRegex = /^07[789]\d{7}$/;
    if (!formData.رقم_الواتساب || !phoneRegex.test(formData.رقم_الواتساب.replace(/\s/g, ''))) {
        errors.push('رقم الواتساب غير صحيح (يجب أن يبدأ بـ 07 ويتكون من 10 أرقام)');
    }
    
    return errors;
}

// Show error messages
function showErrors(errors) {
    const errorHtml = errors.map(error => `<div class="error-message">⚠️ ${error}</div>`).join('');
    
    // Create or update error container
    let errorContainer = document.getElementById('error-container');
    if (!errorContainer) {
        errorContainer = document.createElement('div');
        errorContainer.id = 'error-container';
        errorContainer.className = 'error-container';
        document.querySelector('.form-container').prepend(errorContainer);
    }
    
    errorContainer.innerHTML = errorHtml;
    errorContainer.style.display = 'block';
    
    // Scroll to errors
    errorContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Hide errors after 5 seconds
    setTimeout(() => {
        errorContainer.style.display = 'none';
    }, 5000);
}

// Enhanced form submission handler
async function handleFormSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Remove honeypot field
    delete data._gotcha;
    
    // Validate form
    const errors = validateForm(data);
    if (errors.length > 0) {
        showErrors(errors);
        trackEvent('form_validation_error', { errors: errors.length });
        return;
    }
    
    // Update button state
    const submitBtn = document.getElementById('submit-btn');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'جاري الإرسال...';
    submitBtn.disabled = true;
    
    try {
        // Submit form
        const result = await submitForm(data);
        
        if (result.success) {
            trackEvent('form_submit_success', data);
            
            // Hide form and show success message
            form.style.display = 'none';
            document.getElementById('response-msg').style.display = 'block';
            
        } else {
            throw new Error(result.error || 'فشل في إرسال النموذج');
        }
        
    } catch (error) {
        console.error('Submission error:', error);
        showErrors([error.message]);
        trackEvent('form_submit_error', { error: error.message });
        
        // Restore button state
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
    }
}

// Initialize enhanced form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
    
    // Track page view
    trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href
    });
    
    // Track form interactions
    const inputs = form?.querySelectorAll('input, select');
    inputs?.forEach(input => {
        input.addEventListener('focus', () => {
            trackEvent('form_field_focus', { field_name: input.name });
        });
        
        input.addEventListener('blur', () => {
            if (input.value) {
                trackEvent('form_field_filled', { field_name: input.name });
            }
        });
    });
});

// Export functions for global access
window.submitForm = submitForm;
window.trackEvent = trackEvent;
window.validateForm = validateForm;
