// Global Analytics and Functionality for قاعدة النور Registration Funnel

// Analytics Configuration
const ANALYTICS_CONFIG = {
    events: [
        'page_view',
        'cta_click',
        'whatsapp_click',
        'phone_click',
        'form_start',
        'form_step_1_complete',
        'form_step_2_complete',
        'form_step_3_complete',
        'form_submit',
        'decision_yes',
        'decision_no',
        'lead_capture',
        'pdf_download',
        'share_whatsapp',
        'copy_link',
        'maps_click',
        'conversion',
        'post_funnel_visit'
    ]
};

// Utility Functions
function trackEvent(eventName, parameters = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    
    // Facebook Pixel (if available)
    if (typeof fbq !== 'undefined') {
        fbq('trackCustom', eventName, parameters);
    }
    
    // Console logging for development
    console.log('Event tracked:', eventName, parameters);
    
    // Custom analytics (you can replace this with your own analytics service)
    sendToCustomAnalytics(eventName, parameters);
}

// Custom Analytics Function (replace with your actual analytics endpoint)
function sendToCustomAnalytics(eventName, parameters) {
    // This is where you would send data to your own analytics service
    // For now, we'll just store it in localStorage for demonstration
    const analyticsData = JSON.parse(localStorage.getItem('quran_analytics') || '[]');
    analyticsData.push({
        event: eventName,
        parameters: parameters,
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent
    });
    
    // Keep only last 100 events to avoid localStorage overflow
    if (analyticsData.length > 100) {
        analyticsData.shift();
    }
    
    localStorage.setItem('quran_analytics', JSON.stringify(analyticsData));
}

// Form Validation Functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

function validateAge(age) {
    const ageNum = parseInt(age);
    return ageNum >= 5 && ageNum <= 8;
}

// Smooth Scroll Function
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// WhatsApp Link Generator
function generateWhatsAppLink(message) {
    const phoneNumber = '962791951134';
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

// URL Parameter Functions
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function setUrlParameter(name, value) {
    const url = new URL(window.location);
    url.searchParams.set(name, value);
    window.history.replaceState({}, '', url);
}

// Cookie Functions
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Lead Management
function saveLead(leadData) {
    const leads = JSON.parse(localStorage.getItem('quran_leads') || '[]');
    leadData.timestamp = new Date().toISOString();
    leadData.id = Date.now().toString();
    leads.push(leadData);
    
    // Keep only last 50 leads
    if (leads.length > 50) {
        leads.shift();
    }
    
    localStorage.setItem('quran_leads', JSON.stringify(leads));
    
    // Track lead capture
    trackEvent('lead_capture', {
        lead_id: leadData.id,
        source: 'registration_funnel'
    });
}

// Form Data Management
function saveFormData(step, data) {
    const formData = JSON.parse(localStorage.getItem('quran_form_data') || '{}');
    formData[step] = data;
    formData.last_updated = new Date().toISOString();
    localStorage.setItem('quran_form_data', JSON.stringify(formData));
}

function getFormData() {
    return JSON.parse(localStorage.getItem('quran_form_data') || '{}');
}

function clearFormData() {
    localStorage.removeItem('quran_form_data');
}

// A/B Testing Helper
function getABTestVariant(testName) {
    const variant = getCookie(`${testName}_variant`);
    if (variant) {
        return variant;
    }
    
    // Assign random variant
    const variants = ['A', 'B'];
    const randomVariant = variants[Math.floor(Math.random() * variants.length)];
    setCookie(`${testName}_variant`, randomVariant, 30);
    
    return randomVariant;
}

// Exit Intent Detection
function setupExitIntent(callback) {
    let mouseLeaveTimer;
    
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY <= 0) {
            mouseLeaveTimer = setTimeout(() => {
                callback();
            }, 500);
        }
    });
    
    document.addEventListener('mouseenter', function() {
        clearTimeout(mouseLeaveTimer);
    });
}

// Scroll Progress Tracker
function setupScrollProgress() {
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        
        // Track scroll milestones
        if (scrollProgress >= 25 && !getCookie('scroll_25')) {
            trackEvent('scroll_25_percent');
            setCookie('scroll_25', 'true', 1);
        }
        if (scrollProgress >= 50 && !getCookie('scroll_50')) {
            trackEvent('scroll_50_percent');
            setCookie('scroll_50', 'true', 1);
        }
        if (scrollProgress >= 75 && !getCookie('scroll_75')) {
            trackEvent('scroll_75_percent');
            setCookie('scroll_75', 'true', 1);
        }
        if (scrollProgress >= 90 && !getCookie('scroll_90')) {
            trackEvent('scroll_90_percent');
            setCookie('scroll_90', 'true', 1);
        }
    });
}

// Time on Page Tracking
function setupTimeOnPage() {
    let startTime = Date.now();
    let timeSpent = 0;
    
    // Track time every 10 seconds
    const interval = setInterval(() => {
        timeSpent = Math.floor((Date.now() - startTime) / 1000);
        
        // Track milestones
        if (timeSpent === 30) {
            trackEvent('time_on_page_30s');
        } else if (timeSpent === 60) {
            trackEvent('time_on_page_1m');
        } else if (timeSpent === 180) {
            trackEvent('time_on_page_3m');
        } else if (timeSpent === 300) {
            trackEvent('time_on_page_5m');
            clearInterval(interval); // Stop tracking after 5 minutes
        }
    }, 10000);
    
    // Track when user leaves
    window.addEventListener('beforeunload', function() {
        trackEvent('time_on_page_total', { seconds: timeSpent });
    });
}

// Form Abandonment Tracking
function setupFormAbandonment() {
    const form = document.getElementById('registrationForm');
    if (!form) return;
    
    let formDataCollected = false;
    
    // Track when user starts filling form
    form.addEventListener('input', function(e) {
        if (!formDataCollected && e.target.value.length > 0) {
            formDataCollected = true;
            trackEvent('form_start');
        }
    });
    
    // Track abandonment
    window.addEventListener('beforeunload', function(e) {
        if (formDataCollected && !formSubmitted) {
            const formData = getFormData();
            trackEvent('form_abandonment', {
                steps_completed: Object.keys(formData).length,
                last_step: formData.last_step || 'unknown'
            });
        }
    });
}

// Enhanced FAQ Functionality
function setupEnhancedFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (!question || !answer) return;
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = '0';
                    otherItem.querySelector('.faq-toggle').textContent = '+';
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                answer.style.maxHeight = '0';
                question.querySelector('.faq-toggle').textContent = '+';
            } else {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                question.querySelector('.faq-toggle').textContent = '−';
                
                // Track FAQ interaction
                trackEvent('faq_interaction', {
                    question: question.querySelector('span').textContent.substring(0, 50)
                });
            }
        });
    });
}

// Multi-step Form Enhancement
function setupMultiStepForm() {
    const form = document.getElementById('registrationForm');
    if (!form) return;
    
    const steps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.progress-step');
    let currentStep = 1;
    let formSubmitted = false;
    
    // Show initial step
    showStep(1);
    
    window.nextStep = function() {
        if (validateCurrentStep()) {
            saveStepData();
            if (currentStep < steps.length) {
                currentStep++;
                showStep(currentStep);
                trackEvent(`form_step_${currentStep}_complete`);
                smoothScrollTo('registrationForm');
            }
        }
    };
    
    window.previousStep = function() {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
            smoothScrollTo('registrationForm');
        }
    };
    
    function showStep(stepNumber) {
        // Hide all steps
        steps.forEach(step => step.classList.remove('active'));
        
        // Show current step
        document.querySelector(`.form-step[data-step="${stepNumber}"]`).classList.add('active');
        
        // Update progress bar
        progressSteps.forEach((step, index) => {
            if (index < stepNumber - 1) {
                step.classList.add('completed');
                step.classList.remove('active');
            } else if (index === stepNumber - 1) {
                step.classList.add('active');
                step.classList.remove('completed');
            } else {
                step.classList.remove('active', 'completed');
            }
        });
    }
    
    function validateCurrentStep() {
        const currentStepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`);
        const requiredFields = currentStepElement.querySelectorAll('[required]');
        
        for (let field of requiredFields) {
            if (!field.value || (field.type === 'radio' && !document.querySelector(`input[name="${field.name}"]:checked`))) {
                field.focus();
                alert('يرجى ملء جميع الحقول المطلوبة');
                return false;
            }
        }
        return true;
    }
    
    function saveStepData() {
        const currentStepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`);
        const inputs = currentStepElement.querySelectorAll('input, select, textarea');
        const stepData = {};
        
        inputs.forEach(input => {
            if (input.type === 'radio') {
                if (input.checked) {
                    stepData[input.name] = input.value;
                }
            } else if (input.type === 'checkbox') {
                stepData[input.name] = input.checked;
            } else {
                stepData[input.name] = input.value;
            }
        });
        
        saveFormData(`step_${currentStep}`, stepData);
    }
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateCurrentStep()) {
            saveStepData();
            formSubmitted = true;
            
            const allFormData = getFormData();
            
            // Save lead
            saveLead({
                form_data: allFormData,
                page: window.location.pathname,
                referrer: document.referrer,
                user_agent: navigator.userAgent
            });
            
            trackEvent('form_submit', {
                form_id: 'registration_form',
                total_steps: steps.length
            });
            
            // Redirect to confirmation
            window.location.href = 'confirmation.html';
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Track page view
    trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href
    });
    
    // Setup various features
    setupScrollProgress();
    setupTimeOnPage();
    setupFormAbandonment();
    setupEnhancedFAQ();
    setupMultiStepForm();
    
    // Setup exit intent popup (optional)
    if (document.body.classList.contains('show-exit-intent')) {
        setupExitIntent(function() {
            // Show exit intent popup
            trackEvent('exit_intent_triggered');
            // You can implement your exit intent popup here
        });
    }
    
    // Check for URL parameters
    const utmSource = getUrlParameter('utm_source');
    const utmMedium = getUrlParameter('utm_medium');
    const utmCampaign = getUrlParameter('utm_campaign');
    
    if (utmSource || utmMedium || utmCampaign) {
        trackEvent('utm_parameters_detected', {
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign
        });
    }
    
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScrollTo(targetId);
        });
    });
    
    // Add loading states to buttons
    document.querySelectorAll('.cta-button, .btn-primary, .btn-secondary').forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('no-loading')) {
                const originalText = this.innerHTML;
                this.innerHTML = '<span class="loading-spinner"></span> جاري التحميل...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 2000);
            }
        });
    });
});

// Export functions for global use
window.QuranFunnel = {
    trackEvent,
    saveLead,
    saveFormData,
    getFormData,
    clearFormData,
    generateWhatsAppLink,
    smoothScrollTo,
    getABTestVariant
};