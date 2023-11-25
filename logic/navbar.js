let burger = document.getElementById('burger');
let navbarLaptop = document.getElementById('wrapper-header-laptop');

let userInfo = document.getElementById('userInfo');
const AUTH = 'auth';

burger.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        navbarLaptop.classList.remove('active');
        return;
    }
    burger.classList.add('active');
    navbarLaptop.classList.add('active');
})

if (sessionStorage.getItem(AUTH)) {
    const { fullname, role_id } = JSON.parse(sessionStorage.getItem(AUTH));
    if (!window.location.href.includes('/all-course/views')) {
        userInfo.innerHTML = `
            <a ${Number(role_id) === 2 && 'href="/user"'} class="item-nav">
                <img class="img-item-nav" src="/img/user-grey.png" />
                <div class="txt-item-nav" id="headerFullname">${fullname}</div>
            </a>
            <a id="btnLogout" class="item-nav">
                <img class="img-item-nav" src="/img/log-out-grey.png" />
                <div class="txt-item-nav">Đăng xuất</div>
            </a>
        `;
    }
};

if (document.getElementById('btnLogout')) {
    document.getElementById('btnLogout').addEventListener('click', () => {
        sessionStorage.clear();
        window.location.href = '/';
    });
}

const redirectFacebook = () => {
    window.open('https://www.facebook.com/fe.ninedev', '_blank');
}

const redirectYoutube = () => {
    window.open('https://www.youtube.com/@ninedev99', '_blank');
}