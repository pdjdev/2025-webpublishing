// 댓글 폼 처리
document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const comment = document.getElementById('comment').value;
            
            if (name && email && comment) {
                // 댓글을 DOM에 추가
                addCommentToList(name, comment);
                
                // 폼 초기화
                this.reset();
                
                // 성공 메시지
                showSuccessMessage();
            }
        });
    }
});

// 댓글을 목록에 추가하는 함수
function addCommentToList(name, comment) {
    const commentsList = document.getElementById('commentsList');
    const noCommentsMsg = commentsList.querySelector('.no-comments');
    
    // "댓글이 없습니다" 메시지 제거
    if (noCommentsMsg) {
        noCommentsMsg.remove();
    }
    
    // 현재 시간 생성
    const now = new Date();
    const dateString = now.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // 새 댓글 HTML 생성
    const commentHTML = `
        <div class="comment-item">
            <div class="comment-header">
                <span class="comment-author">${escapeHtml(name)}</span>
                <span class="comment-date">${dateString}</span>
            </div>
            <div class="comment-text">${escapeHtml(comment).replace(/\n/g, '<br>')}</div>
        </div>
    `;
    
    // 목록 맨 위에 새 댓글 추가
    commentsList.insertAdjacentHTML('afterbegin', commentHTML);
}

// HTML 이스케이프 함수 (XSS 방지)
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 성공 메시지 표시
function showSuccessMessage() {
    const button = document.querySelector('.submit-btn');
    const originalText = button.textContent;
    
    button.textContent = '댓글이 등록되었습니다! ✅';
    button.style.backgroundColor = '#4CAF50';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '#4a4a4a';
    }, 2000);
}