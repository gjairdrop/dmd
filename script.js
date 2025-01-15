document.getElementById('zalo-link').addEventListener('click', function(e) {
    e.preventDefault(); // Ngăn việc chuyển hướng trang khi nhấp vào link

    // Số điện thoại cần sao chép
    var phoneNumber = '0911357449';

    // Tạo một phần tử tạm thời để sao chép vào clipboard
    var textarea = document.createElement('textarea');
    textarea.value = phoneNumber;
    document.body.appendChild(textarea);

    // Chọn và sao chép vào clipboard
    textarea.select();
    document.execCommand('copy');

    // Xóa textarea tạm thời
    document.body.removeChild(textarea);

    // Thông báo cho người dùng
    alert('Số điện thoại đã được sao chép vào clipboard!');
});
