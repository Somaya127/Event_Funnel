// Connect the form and setup the CTA change
const form = document.getElementById("registration-form");
const submitBtn = document.getElementById("submit-btn");

if (form) {
    form.addEventListener("submit", function(event) {
        // Change text on click (Requirement 1)
        submitBtn.innerText = "جاري الإرسال...";
        submitBtn.disabled = true;

        // Formspree Logic
        event.preventDefault();
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                form.style.display = "none";
                document.getElementById('response-msg').style.display = "block";
            } else {
                // Handle error - restore button
                submitBtn.innerText = "إرسال طلب الحجز ✅";
                submitBtn.disabled = false;
                alert("حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى.");
            }
        }).catch(error => {
            // Handle network error - restore button
            submitBtn.innerText = "إرسال طلب الحجز ✅";
            submitBtn.disabled = false;
            alert("تأكد من اتصالك بالإنترنت وحاول مرة أخرى.");
            console.error('Network error:', error);
        });
    });
}

// FAQ Show/Hide (Requirement 2)
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        if (content) {
            // Toggle display with smooth animation
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
            
            // Add visual feedback
            header.classList.toggle('active');
        }
    });
});

// Light & Dark Mode (Requirement 3)
const modeBtn = document.getElementById("mode-toggle");

if (modeBtn) {
    modeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        
        // Update button text based on current mode
        if (document.body.classList.contains("dark-mode")) {
            modeBtn.innerText = "الوضع الفاتح ☀️";
        } else {
            modeBtn.innerText = "تغيير الوضع 🌓";
        }
    });
}

// Add dark mode styles dynamically
const darkModeStyles = document.createElement('style');
darkModeStyles.textContent = `
    .dark-mode {
        background-color: #121212 !important;
        color: #ffffff !important;
    }
    
    .dark-mode p, 
    .dark-mode li {
        color: #e0e0e0 !important;
    }
    
    .dark-mode h1, 
    .dark-mode h2, 
    .dark-mode h3 {
        color: #fbc02d !important;
        font-weight: 700;
    }
    
    .dark-mode .hero {
        background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%) !important;
    }
    
    .dark-mode .form-container {
        background: #1e1e1e !important;
        color: #ffffff !important;
        border-color: #333 !important;
    }
    
    .dark-mode .not-now-container {
        background: #1e1e1e !important;
        border-color: #333 !important;
    }
    
    .dark-mode .input-group input,
    .dark-mode .input-group select {
        background: #2c2c2c !important;
        color: #ffffff !important;
        border: 1px solid #444 !important;
    }
    
    .dark-mode .btn-primary {
        background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%) !important;
    }
    
    .dark-mode .success-box {
        background: linear-gradient(135deg, #2d5a2d 0%, #1e4e1e 100%) !important;
    }
    
    .dark-mode .quick-info {
        background: #2c2c2c !important;
        border-color: #444 !important;
    }
    
    .dark-mode .faq-section {
        background: #1a1a1a !important;
    }
    
    .dark-mode .accordion-header {
        background: #2c2c2c !important;
        color: #ffffff !important;
    }
    
    .dark-mode .accordion-content {
        background: #1e1e1e !important;
        color: #e0e0e0 !important;
    }
    
    #mode-toggle {
        position: fixed !important;
        top: 20px !important;
        right: 20px !important;
        z-index: 1000 !important;
        padding: 10px 15px !important;
        border-radius: 50px !important;
        font-size: 14px !important;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
        color: white !important;
        border: none !important;
        cursor: pointer !important;
        transition: all 0.3s ease !important;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3) !important;
    }
    
    #mode-toggle:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4) !important;
    }
`;
document.head.appendChild(darkModeStyles);
