// 공통 JavaScript 기능

// 메뉴 토글 기능
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
    
    // 화면 크기가 변경될 때 메뉴 상태 조정
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && menu) {
            menu.classList.remove('active');
        }
    });

    // PC 푸터 내용을 모바일 푸터에 복사
    const pcFooter = document.querySelector('.navbar-footer.pc');
    const mobileFooter = document.getElementById('mobileFooter');
    
    if (pcFooter && mobileFooter) {
        mobileFooter.innerHTML = pcFooter.innerHTML;
    }
});
