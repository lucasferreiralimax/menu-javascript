/*
  Author: Lucas Ferreira de Lima
  https://github.com/lucasferreiralimax

*/

// Variables
const menuList = [
  {
    name: 'Home',
    link: '#test',
    target: '_self',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306.773 306.773"><path d="M302.93 149.794a14.627 14.627 0 00-1.199-20.932L164.63 8.898c-6.223-5.442-16.2-5.328-22.292.257L4.771 135.258c-6.092 5.585-6.391 14.947-.662 20.902l3.449 3.592c5.722 5.955 14.971 6.665 20.645 1.581l10.281-9.207v134.792c0 8.27 6.701 14.965 14.965 14.965h53.624c8.264 0 14.965-6.695 14.965-14.965v-94.3h68.398v94.3c-.119 8.264 5.794 14.959 14.058 14.959h56.828c8.264 0 14.965-6.695 14.965-14.965V154.024s2.84 2.488 6.343 5.567c3.497 3.073 10.842.609 16.403-5.513l3.897-4.284z" fill="#fff"/></svg>`,
  },
  {
    name: 'About',
    link: '#about',
    target: '_self',
    icon: `<svg height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M4 6.75A4.756 4.756 0 018.75 2h9.133a2.745 2.745 0 00-2.633-2H3.75A2.752 2.752 0 001 2.75v15.5A2.752 2.752 0 003.75 21H4z"/><path d="M20.25 4H8.75A2.752 2.752 0 006 6.75v14.5A2.752 2.752 0 008.75 24h11.5A2.752 2.752 0 0023 21.25V6.75A2.752 2.752 0 0020.25 4zm-2 17h-7.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5zm0-4h-7.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5zm0-3.5h-7.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5zm0-4h-7.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5z"/></svg>`,
  },
  {
    name: 'Contact',
    link: '#contact',
    target: '_self',
    icon: `<svg viewBox="-42 0 512 512.002" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M210.352 246.633c33.882 0 63.222-12.153 87.195-36.13 23.973-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.133 87.195 23.977 23.969 53.313 36.125 87.188 36.125zm0 0M426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.308-10.34-7.808-20.55-13.37-30.336-5.774-10.156-12.555-19-20.165-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 01-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.039 5.34-10.972 0-22.086-1.797-33.047-5.34-11.21-3.622-20.296-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.75-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.605 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.059 11.476-3.457 22.363-4.149 32.363A438.821 438.821 0 000 423.949c0 26.727 8.496 48.363 25.25 64.32 16.547 15.747 38.441 23.735 65.066 23.735h246.532c26.625 0 48.511-7.984 65.062-23.734 16.758-15.946 25.254-37.586 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm0 0"/></svg>`,
  },
  {
    name: 'Github',
    link: 'https://github.com/lucasferreiralimax/menu-javascript',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: `<svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true" fill="#fff"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>`,
  },
]

// Method makeMenu with root, tag and items list
function makeMenu (items, css) {
  let root = document.body
  let menuStyles = document.createElement('style')
  let menuTag = document.createElement('nav')

  // Loop for increment link menu Nav
  for(let item of items) {
    let link = document.createElement('a')

    link.classList.add('menu-item')
    link.setAttribute('href', item.link)
    link.setAttribute('role', 'menuitem')
    link.setAttribute('target', item.target)

    if(item.rel) link.setAttribute('rel', item.rel)

    if(item.icon) {
      link.classList.add('icon')
      link.innerHTML = item.icon + item.name
    } else {
      link.textContent = item.name
    }

    menuTag.appendChild(link)
  }

  // Nav settings
  let buttonMobile = document.createElement('button')

  menuTag.classList.add('menu')
  menuTag.setAttribute('id', 'nav-menu')
  menuTag.setAttribute('role', 'menu')

  // Click active
  menuTag.addEventListener('click', () => {
    buttonMobile.classList.remove('active')
    menuTag.classList.remove('active')
    root.classList.remove('active-menu')
  })

  // Button Mobile
  buttonMobile.classList.add('menu-toggle')
  buttonMobile.setAttribute('aria-controls', 'nav-menu')
  buttonMobile.textContent = 'menu'

  // Button mobile click active
  buttonMobile.addEventListener('click', () => {
    buttonMobile.classList.toggle('active')
    menuTag.classList.toggle('active')
    root.classList.toggle('active-menu')
  })

  // Styles css
  menuStyles.innerHTML = css
  menuStyles.type = 'text/css'

  // Inject menu in root
  root.prepend(menuTag)
  root.prepend(buttonMobile)
  root.prepend(menuStyles)
}

const menuStyles = `
body {
  background: linear-gradient(-145deg, #666 30%, #222 50%);
  color: #fff;
  font-family: 'Teko', sans-serif;
  font-size: 1.8em;
  padding: 100px;
}

body.active-menu { overflow: hidden; }

a {
  color: #008000;
  text-decoration: none;
}

.menu {
  background: linear-gradient(-145deg, #fff 30%, transparent 50%);
  display: flex;
  justify-content: flex-end;
  left: 0;
  padding: 1em;
  position: fixed;
  right: 0;
  top: 0;
  transition: 0.5s all;
}

.menu.active {
  opacity: 1;
  pointer-events: all;
}

.menu-item {
  align-items: center;
  background: #333;
  border-radius: 10px;
  box-sizing: border-box;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  font-size: 1.5em;
  justify-content: center;
  line-height: 0;
  margin-right: 10px;
  padding: 30px 20px 25px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: 1s all;
}

.menu-item:hover {
  box-shadow: 0 0 0 2px #fff;
  filter: invert(1);
  transform: scale(1.05);
}

.menu-item:active { transform: scale(0.8); }
.menu-item:last-of-type { margin: 0; }
.menu-item.icon { padding-left: 55px; }
.menu-item.icon svg {
  fill: #fff;
  height: 30px;
  left: 15px;
  position: absolute;
  top: 12px;
}

.menu-toggle {
  background: #333;
  border-radius: 10px;
  border: 0;
  box-shadow: 0 0 0 2px #fff, 0 0 10px #333;
  color: #fff;
  cursor: pointer;
  display: none;
  font-size: 0;
  height: 40px;
  outline: none;
  position: fixed;
  right: 20px;
  text-transform: uppercase;
  top: 20px;
  transition: 1s all;
  width: 40px;
  z-index: 9;
}

.menu-toggle:hover { transform: scale(1.1); }
.menu-toggle.active { filter: invert(1); }
.menu-toggle.active:after { transform: translateY(-3px) rotate(45deg); }
.menu-toggle.active:before { transform: translateY(2px) rotate(-45deg); }
.menu-toggle:after,
.menu-toggle:before {
  background: #fff;
  border-radius: 10px;
  content: '';
  display: flex;
  height: 5px;
  transition: 0.5s all;
  width: 100%;
}

.menu-toggle:after { transform: translateY(-10px); }
.menu-toggle:before { transform: translateY(10px); }

@media (max-width: 800px) {
  .menu {
    align-items: center;
    background: linear-gradient(-145deg, #fff 70%, transparent 100%);
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    max-height: 100vh;
    opacity: 0;
    pointer-events: none;
  }
  .menu-item { margin: 0 0 10px; }
  .menu-item:last-of-type { margin: 0; }
  .menu-toggle { display: block; }
}`

// Run method makeMenu with properties
makeMenu(menuList, menuStyles)
