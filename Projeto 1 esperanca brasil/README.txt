Fundação Esperança Brasil - Site (Entrega Inicial)
Para rodar localmente:
  python3 -m http.server 8000
e acessar http://localhost:8000


Estrutura de pastas:
/projeto 1 fundacao brasil/
├─ index.html
├─ sobre.html
├─ projetos.html
├─ voluntariado.html
├─ doacoes.html
├─ transparencia.html
├─ contato.html
├─ blog.html
├─ /assets/
│  ├─ /img/
│  │  ├─ gallery-01.jpg
│  │  ├─ ...
│  │  └─ gallery-20.jpg
│  ├─ /img/optimized/ (webp/avif + jpg fallback)
│  ├─ /video/
│  │  └─ institucional.mp4
│  ├─ /audio/
│  │  └─ depoimento1.mp3
│  ├─ /fonts/
│  └─ /icons/
├─ /css/
│  └─ style.css
├─ /js/
│  ├─ main.js
│  └─ masks.js
├─ /docs/
│  ├─ wireframes.pdf
│  ├─ especificacao-formularios.md
│  └─ relatorio-validacao-w3c.md
└─ /data/
   └─ sample-data.json