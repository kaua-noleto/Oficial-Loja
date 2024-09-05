document.querySelectorAll('.member').forEach(member => {
    member.addEventListener('mouseover', () => {
        member.style.transform = 'scale(1.1)';
        member.style.transition = 'transform 0.3s ease';
    });

    member.addEventListener('mouseout', () => {
        member.style.transform = 'scale(1)';
    });
});