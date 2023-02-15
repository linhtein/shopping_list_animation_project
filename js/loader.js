 export function showLoaderUi(){
    const loader = document.createElement('div');
    loader.classList.add('loader','animate__animated','animate__fadeIn');
    loader.innerHTML = `
    <div class="min-vh-100 d-flex fixed-top bg-white justify-content-center align-items-center">
        <div class="spinner-border text-primary data-loader" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `;  
    document.body.append(loader);
  }
  
 export function removeLoaderUi(){
    var currentLoader = document.querySelector('.loader');
    currentLoader.classList.replace('animate__fadeIn','animate__fadeOut');
    currentLoader.addEventListener('animationend',_=>currentLoader.remove());
  }

  

  // ? Loading စပြီး 3 seconds pရင် animation spinner ပြပြီးရင် အဲ့ div တစ်ခုလုံးကို  ဖြတ်ချပြစ်မှာ
 