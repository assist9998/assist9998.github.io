
(function () {
  var nav = document.getElementById('nav');
  if (nav) window.addEventListener('scroll', function () { nav.classList.toggle('scrolled', window.scrollY > 40); });
  var bg = document.getElementById('burger');
  if (bg && nav) {
    bg.addEventListener('click', function (e) { e.stopPropagation(); var o = nav.classList.toggle('open'); bg.setAttribute('aria-expanded', o ? 'true' : 'false'); });
    document.addEventListener('click', function (e) { if (!nav.contains(e.target)) nav.classList.remove('open'); });
    nav.querySelectorAll('.nav-menu a').forEach(function (a) { a.addEventListener('click', function () { nav.classList.remove('open'); }); });
  }
  function setLang(l) {
    document.querySelectorAll('[data-en]').forEach(function (e) { e.style.display = l === 'en' ? '' : 'none'; });
    document.querySelectorAll('[data-ru]').forEach(function (e) { e.style.display = l === 'ru' ? '' : 'none'; });
    document.querySelectorAll('.lang-btn').forEach(function (b) { b.classList.toggle('active', b.dataset.lang === l); });
    document.documentElement.lang = l;
    var t = document.querySelector('title');
    if (t && t.dataset[l]) document.title = t.dataset[l];
    try { localStorage.setItem('lang', l); } catch (e) {}
  }
  document.querySelectorAll('.lang-btn').forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.lang); }); });
  var l = 'en';
  try { l = localStorage.getItem('lang') || ((navigator.language || '').toLowerCase().indexOf('ru') === 0 ? 'ru' : 'en'); } catch (e) {}
  setLang(l);
})();
