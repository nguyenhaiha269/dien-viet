const ghpages = require('gh-pages');

console.log('Đang build trang web Docusaurus...');
const buildDir = 'build'; // Thư mục build của Docusaurus (mặc định là 'build')

ghpages.publish(buildDir, {
    branch: 'gh-pages', // Branch sẽ deploy lên GitHub Pages
    repo: 'git@github.com:lehoangphuc747/anki-viet-nam.git', // URL SSH của repository. *KHÔNG CẦN THAY ĐỔI*
    message: 'Deploy website to GitHub Pages' // Commit message
}, function(err) {
    if (err) {
        console.error('Lỗi deploy:', err);
    } else {
        console.log('Đã deploy thành công lên GitHub Pages!');
    }
});