console.log('Flux initialized');

document.addEventListener('DOMContentLoaded', function() {
    console.log('App starting...');
    
    // Get Started button
    var getStartedBtn = document.querySelector('.btn-primary.btn-large');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            console.log('Get Started clicked!');
            alert('Sign up coming soon!');
        });
    }

    // Learn More button
    var learnMoreBtn = document.querySelector('.btn-secondary.btn-large');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            console.log('Learn More clicked!');
            alert('Documentation coming soon!');
        });
    }

    console.log('Event listeners ready');
});