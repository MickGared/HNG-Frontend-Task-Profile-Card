
# HNG Stage 1 Project — Profile Card, Contact & About Pages

## 🧩 Overview
This project is my **Stage 1 submission** for the **HNG Internship**.  
It extends the Stage 0 single-page profile card into a **multi-page web app** built with semantic HTML, accessible markup, responsive CSS, and minimal JavaScript.

### 🏠 Pages
1. **Home Page** — Enhanced Profile Card  
   Displays my bio, current time in milliseconds (auto-updates every 1 s), and social links.  
   - Root container → `data-testid="test-profile-card"`
   - Name, role, image, and live-updating time fields follow HNG specs.

2. **Contact Us Page** — Form with Validation  
   - Required inputs:  
     - Full Name → `test-contact-name`  
     - Email → `test-contact-email`  
     - Subject → `test-contact-subject`  
     - Message → `test-contact-message`  
   - Validation rules:  
     - All fields required  
     - Email must be valid (`name@example.com`)  
     - Message ≥ 10 characters  
   - Success / Error messages use `aria-describedby` for accessibility  
   - Submit button → `test-contact-submit`  
   - Success message → `test-contact-success`

3. **About Me Page** — Reflection Sections  
   Wrapped in `<main data-testid="test-about-page">` with five sections:
   - Bio → `test-about-bio`
   - Goals in this program → `test-about-goals`
   - Areas of low confidence → `test-about-confidence`
   - Note to future self → `test-about-future-note`
   - Extra thoughts → `test-about-extra`

## 💻 Tech Stack
- **HTML5** — semantic structure  
- **CSS3 / Flexbox / Grid** — responsive layout  
- **JavaScript (ES6)** — live clock + form validation  
- **Accessibility** — proper labels, alt text, and keyboard navigation

## ⚙️ Setup & Usage
1. Clone the repository  
   ```bash
 https://github.com/<your-username>/<your-repo>.git](https://github.com/MickGared/HNG-Stage-0-Profile-Card.git
   ```
2. Open `index.html` in your browser.  
3. Navigate using the header links or buttons to **Contact Us** and **About Me** pages.

---

## ✅ Project Verification Summary

### 🧩 Contact Us Page
| Requirement | Status | Details |
|--------------|--------|----------|
| Full Name (`test-contact-name`) | ✅ | Present and validated |
| Email (`test-contact-email`) | ✅ | Validates correct email format |
| Subject (`test-contact-subject`) | ✅ | Required and error-handled |
| Message (`test-contact-message`) | ✅ | Enforces minimum 10 characters |
| Submit Button (`test-contact-submit`) | ✅ | Accessible and functional |
| Error Messages (`test-contact-error-<field>`) | ✅ | Dynamically displayed per field |
| Success Message (`test-contact-success`) | ✅ | Only visible after successful validation |
| Accessibility (`labels`, `aria-describedby`, keyboard navigation) | ✅ | Fully compliant |

### 🧠 About Me Page
| Requirement | Status | Details |
|--------------|--------|----------|
| Main Wrapper (`test-about-page`) | ✅ | Semantic `<main>` used |
| Bio Section (`test-about-bio`) | ✅ | Includes descriptive paragraph |
| Goals Section (`test-about-goals`) | ✅ | Structured list of goals |
| Confidence Section (`test-about-confidence`) | ✅ | Clear self-reflection content |
| Future Note Section (`test-about-future-note`) | ✅ | Personal growth note present |
| Extra Thoughts Section (`test-about-extra`) | ✅ | Optional reflection included |
| Semantic HTML (`main`, `section`, `h2`, `ul`, `p`) | ✅ | Proper structure followed |

### 🌍 General
| Requirement | Status | Details |
|--------------|--------|----------|
| Semantic HTML throughout | ✅ | Cleanly structured tags |
| Accessibility (labels, alt text, ARIA) | ✅ | Verified |
| Responsive design | ✅ | Mobile, tablet, and desktop tested |
| Keyboard navigable | ✅ | Fully operational without mouse |
| Code consistency and readability | ✅ | Modular, well-commented, and maintainable |

---

## 🧠 Key Learning
- Building modular, accessible multi-page sites  
- Managing DOM interactions and live updates efficiently  
- Practicing semantic HTML for structure and clarity  

## 📄 License
This project is open-source and available under the MIT License.
````
