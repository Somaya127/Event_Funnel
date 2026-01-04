# JavaScript Homework - Behaviors Documentation

## Behavior 1: CTA Button (Registration)

**1. What do you want the page to do?**
Change the button text after clicking to confirm submission.

**2. Trigger:**
User clicks the "إرسال طلب الحجز" button.

**3. Screen Change:**
The text changes to "جاري الإرسال..." and the button becomes disabled.

**4. Steps:**
- Get the element by ID (`submit-btn`)
- Add a 'submit' event listener to the form
- Change the innerText property to "جاري الإرسال..."
- Set disabled property to true
- Handle Formspree submission
- Show success message on successful submission

---

## Behavior 2: FAQ Section

**1. What do you want the page to do?**
Show and hide the answers to the questions.

**2. Trigger:**
User clicks on the question header.

**3. Screen Change:**
The answer paragraph appears or disappears with smooth animation.

**4. Steps:**
- Select all headers with class `.accordion-header`
- Loop through them using forEach
- Add click listener to each header
- Find the next element sibling (the content)
- Toggle the 'display' style between 'block' and 'none'
- Add smooth transition effects

---

## Behavior 3: Light & Dark Mode

**1. What do you want the page to do?**
Change the overall theme colors of the site with enhanced text contrast for better readability.

**2. Trigger:**
User clicks the dynamically created "Dark Mode" button.

**3. Screen Change:**
The background color shifts to dark (#121212), text color shifts to bright white (#ffffff) for main content, golden yellow (#fbc02d) for headings, and light gray (#e0e0e0) for paragraphs to ensure maximum readability and contrast.

**4. Steps:**
- Create a toggle button dynamically using JavaScript
- Set button ID as "mode-toggle" and position it fixed in top-right corner
- Add click event listener to toggle the 'dark-mode' class on the 'body' tag
- CSS automatically updates font properties: white text for body, golden headings, light gray paragraphs
- Update button text between "تغيير الوضع 🌓" and "الوضع الفاتح ☀️" based on current mode
- Apply smooth transitions for all color changes (0.3s ease)

---

## Technical Requirements

- **Formspree Integration:** Use the provided endpoint `https://formspree.io/f/mnjnnbjn`
- **Event Listeners:** Proper event handling for all interactions
- **DOM Manipulation:** Dynamic element creation and modification
- **CSS Classes:** Toggle classes for theme switching with enhanced contrast
- **Form Handling:** Prevent default submission and handle via fetch API
- **Error Handling:** Proper error handling for network requests
- **Accessibility:** High contrast ratios in dark mode for readability
- **Responsive Design:** Dark mode works across all device sizes
