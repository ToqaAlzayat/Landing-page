/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
const sections=[...document.querySelectorAll('section')];
const navMenu=document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
 function buildNavBar(){
     sections.forEach( function (sec)
     {
        secName=sec.getAttribute('data-nav');
        secLoc=sec.id;
        list=document.createElement('li');
        list.innerHTML=`<a class='menu__link' href='#${secLoc}'>${secName}</a>`;
        navMenu.appendChild(list)
    });

}


// Add class 'active' to section when near top of viewport
function viewing(e)
{
   let postion=e.getBoundingClientRect();
   if(postion.top >= 0 && postion.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    {
        return true;
    }
    return false;
// return (
//     postion.top >= 0 &&
//     postion.left >= 0 &&
//     postion.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     postion.right <= (window.innerWidth || document.documentElement.clientWidth)
// );
}
function activeState(){
    sections.forEach(function(sec)
    {
        if(viewing(sec)){
            if (!sec.classList.contains('your-active-class')){
                sec.classList.add('your-active-class');
            }

        }
         else{
                sec.classList.remove('your-active-class');
            }
    }

    );
}

function scrollSmooth()
{

    navMenu.childNodes.forEach(item=>{
        let anchor=item.childNodes[0];
        anchor.addEventListener('click',e=>{
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({behavior:'smooth'});
        })
    });

}



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
buildNavBar();
document.addEventListener('scroll',activeState);
// Scroll to section on link click
scrollSmooth();
// Set sections as active


