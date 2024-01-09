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
        'nav': undefined
    },
    'other': {
        'a': document.getElementById('other'),
        'nav': undefined
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
                nav.style.display = 'flex';
            }
        });

        if (nav) {
            nav.addEventListener('mouseleave', () => {
                hideAllNavbars();
            });
        }
    }
}

initNavBar();
