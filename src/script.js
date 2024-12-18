document.addEventListener('DOMContentLoaded', () => {
    const updateDateTime = () => {
        const now = new Date();
        const currentDateElement = document.getElementById('current-date');
        const currentTimeElement = document.getElementById('current-time');
        const lastUpdatedElement = document.getElementById('last-updated');
        
        // Format date
        const dateOptions = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        currentDateElement.textContent = now.toLocaleDateString(undefined, dateOptions);

        // Format time
        const timeOptions = { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: true 
        };
        currentTimeElement.textContent = now.toLocaleTimeString(undefined, timeOptions);
        
        // Update last updated timestamp
        lastUpdatedElement.textContent = now.toLocaleString(undefined, {
            ...dateOptions,
            ...timeOptions
        });
    };

    // Update time immediately and then every second
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Add animation to workflow steps
    const workflowSteps = document.querySelectorAll('.workflow-step');
    workflowSteps.forEach((step, index) => {
        setTimeout(() => {
            step.style.opacity = '0';
            step.style.transform = 'translateY(20px)';
            step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            requestAnimationFrame(() => {
                step.style.opacity = '1';
                step.style.transform = 'translateY(0)';
            });
        }, index * 200);
    });

    // Add hover effect to workflow steps
    workflowSteps.forEach(step => {
        step.addEventListener('mouseenter', () => {
            step.querySelector('.step-icon').style.transform = 'scale(1.1)';
        });
        
        step.addEventListener('mouseleave', () => {
            step.querySelector('.step-icon').style.transform = 'scale(1)';
        });
    });
});
