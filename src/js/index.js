const navs = {
    'school': {
        'a': document.getElementById('school'),
        'nav': document.getElementById('school-nav') 
    },
    'project': {
        'a': document.getElementById('project'),
        'nav': document.getElementById('project-nav') 
    },
    'studyAreas': {
        'a': document.getElementById('study-areas'),
        'nav': document.getElementById('study-areas-nav')
    },
    'resources': {
        'a': document.getElementById('resources'),
        'nav': document.getElementById('resources-nav')
    },
    'other': {
        'a': document.getElementById('other'),
        'nav': document.getElementById('other-nav')
    }
};

function hideAllNavbars() {
    for (const { nav } of Object.values(navs)) {
        if (nav) {
            nav.style.display = 'none';
        }
    }
}

function initNavBar() {
    for (const { a, nav } of Object.values(navs)) {
        a.addEventListener('mouseover', () => {
            hideAllNavbars();
            if (nav) {
                const mainNav = document.getElementById('main-nav');
                mainNav.classList.toggle('main-nav-sub-nav-open');
                mainNav.style.borderRadius = '0.25rem 0.25rem 0px 0px';
                nav.style.display = 'flex';
                nav.style.borderRadius = '0px 0px 0.25rem 0.25rem';
            }
        });

        if (nav) {
            nav.addEventListener('mouseleave', () => {
                const mainNav = document.getElementById('main-nav');
                mainNav.style.borderRadius = '0.25rem';
                hideAllNavbars();
            });
        }
    }
}

initNavBar();
