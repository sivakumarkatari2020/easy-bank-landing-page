document.getElementById('hamburger-nav').addEventListener('click',open);
    function open(){
      let nav = document.getElementById('navbar');
      let icon = document.getElementById('hamburger-nav');
      icon.innerHTML = `<p>&times;</p>`;
      nav.style.display = 'block';
      icon.setAttribute('id','hamburger-nav-close');
    }

    document.getElementById('hamburger-nav-close').addEventListener('click',close);
    function close(){
      let nav = document.getElementById('navbar');
      let icon = document.getElementById('hamburger-nav-close');
      icon.innerHTML = `<p>&#9776;</p>`;
      nav.style.display = 'none';
      icon.setAttribute('id','hamburger-nav');
    }