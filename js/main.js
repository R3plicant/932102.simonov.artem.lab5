var buttons = document.querySelectorAll('button');
var blocks = document.querySelectorAll('.block');
var blur = document.querySelector('.background-blur');
var fullArticles = document.querySelectorAll('.full-article');

blocks.forEach(function(block) {
    var headerText = block.querySelector('.article-header').innerText;
    var fullArticle = block.querySelector('.full-article');
    var fullArticleHeader = fullArticle.querySelector('.full-article-header');
    var fullArticleText = fullArticle.querySelector('.full-article-text p');
    fullArticleHeader.innerText = headerText;
    fullArticleText.innerText = headerText + ": " + fullArticleText.innerText;
});

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var fullArticle = this.parentElement.querySelector('.full-article');
        fullArticle.style.display = 'flex';
        blur.style.display = 'block';
    });
});

blocks.forEach(function(block) {
    block.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'rgb(210, 48, 48)';
    });

    block.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });
});

blur.addEventListener('click', function() {
    fullArticles.forEach(function(fullArticle) {
        fullArticle.style.display = 'none';
    });
    blur.style.display = 'none';
});