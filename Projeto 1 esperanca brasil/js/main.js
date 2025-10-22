
// main.js - masks, lazy-loading, basic form helpers, and canvas charts
document.addEventListener('DOMContentLoaded', () => {
  // menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle) toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.style.display = expanded ? '' : 'block';
  });

  // masks
  function setMask(input, maskFn) {
    if (!input) return;
    input.addEventListener('input', () => {
      const pos = input.selectionStart;
      input.value = maskFn(input.value.replace(/\D/g,''));
      input.setSelectionRange(pos, pos);
    });
  }
  function cpfMask(v) {
    v = v.slice(0,11);
    v = v.replace(/^(\d{3})(\d)/,'$1.$2');
    v = v.replace(/^(\d{3})\.(\d{3})(\d)/,'$1.$2.$3');
    v = v.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/,'$1.$2.$3-$4');
    return v;
  }
  function cepMask(v) { v = v.slice(0,8); v = v.replace(/^(\d{5})(\d)/,'$1-$2'); return v; }
  function phoneMask(v) {
    v = v.slice(0,11);
    if (v.length <= 10) v = v.replace(/^(\d{2})(\d{4})(\d)/,'($1) $2-$3');
    else v = v.replace(/^(\d{2})(\d{5})(\d)/,'($1) $2-$3');
    return v;
  }
  setMask(document.getElementById('cpf'), cpfMask);
  setMask(document.getElementById('cep'), cepMask);
  setMask(document.getElementById('telefone'), phoneMask);

  // viaCEP example on blur
  const cepInput = document.getElementById('cep');
  if (cepInput) {
    cepInput.addEventListener('blur', async (e) => {
      const cep = e.target.value.replace(/\D/g,'');
      if (cep.length !== 8) return;
      try {
        const res = await fetch('https://viacep.com.br/ws/' + cep + '/json/');
        const data = await res.json();
        if (!data.erro) {
          const cidade = document.getElementById('cidade');
          const logradouro = document.getElementById('logradouro');
          if (cidade) cidade.value = data.localidade || '';
          if (logradouro) logradouro.value = data.logradouro || '';
        }
      } catch (err) {
        console.warn('Erro ao buscar CEP', err);
      }
    });
  }

  // lazy loading images
  const lazyImgs = document.querySelectorAll('img.lazy');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    }, {rootMargin: '200px'});
    lazyImgs.forEach(i => obs.observe(i));
  } else {
    lazyImgs.forEach(i => i.src = i.dataset.src);
  }

  // simple chart draws (if canvases present)
  function drawPie(canvasId, data) {
    const c = document.getElementById(canvasId);
    if (!c) return;
    const ctx = c.getContext('2d');
    const total = data.reduce((s,d)=>s+d.value,0);
    let start = -0.5 * Math.PI;
    data.forEach((d, idx) => {
      const slice = (d.value / total) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(c.width/2, c.height/2);
      ctx.arc(c.width/2, c.height/2, Math.min(c.width,c.height)/2 - 10, start, start + slice);
      ctx.closePath();
      ctx.fillStyle = ['#4CAF50','#2196F3','#FFC107','#9C27B0'][idx % 4];
      ctx.fill();
      start += slice;
    });
  }
  function drawLine(canvasId, labels, values) {
    const c = document.getElementById(canvasId); if (!c) return;
    const ctx = c.getContext('2d'); const padding = 30;
    const w = c.width, h = c.height; const max = Math.max(...values);
    ctx.beginPath(); ctx.moveTo(padding, padding); ctx.lineTo(padding, h-padding); ctx.lineTo(w-padding, h-padding); ctx.stroke();
    ctx.beginPath();
    values.forEach((v,i) => {
      const x = padding + (i/(values.length-1))*(w-2*padding);
      const y = h - padding - (v/max)*(h-2*padding);
      if (i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      ctx.fillRect(x-2,y-2,4,4);
    });
    ctx.strokeStyle = '#1976D2'; ctx.stroke();
  }
  function drawBars(canvasId, labels, values) {
    const c = document.getElementById(canvasId); if (!c) return;
    const ctx = c.getContext('2d'); const padding = 30;
    const w = c.width, h = c.height; const max = Math.max(...values);
    const barW = (w - 2*padding) / values.length * 0.7;
    values.forEach((v,i) => {
      const x = padding + i * ((w-2*padding)/values.length) + (((w-2*padding)/values.length) - barW)/2;
      const barH = (v / max) * (h - 2*padding);
      const y = h - padding - barH;
      ctx.fillRect(x, y, barW, barH);
      ctx.fillText(labels[i], x, h - padding + 12);
    });
  }

  drawPie('chart-resources', [{label:'Educação',value:40000},{label:'Saúde',value:30000},{label:'Moradia',value:20000},{label:'Admin',value:10000}]);
  drawLine('chart-volunteers',['2019','2020','2021','2022','2023'],[50,75,120,150,180]);
  drawBars('chart-impact-region',['Norte','Sul','Leste','Oeste'],[120,250,180,80]);
});
