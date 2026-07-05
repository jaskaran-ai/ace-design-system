const navLinks = document.querySelectorAll('[data-nav]');
const sections = [...document.querySelectorAll('main section[id]')];

function setActive(id) {
  navLinks.forEach(l => l.classList.toggle('active', l.dataset.nav === id));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });

sections.forEach(s => observer.observe(s));

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.dataset.nav;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive(id);
  });
});

const toast = document.getElementById('toast');
function showToast(msg) {
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translate(-50%, -4px)';
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translate(-50%, 0px)'; }, 1600);
}
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const hex = btn.dataset.hex;
    navigator.clipboard.writeText(hex).then(() => showToast('Copied ' + hex)).catch(() => showToast(hex));
  });
});

// Toggle
const toggle = document.getElementById('toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const pressed = toggle.getAttribute('aria-pressed') === 'true';
    toggle.setAttribute('aria-pressed', String(!pressed));
    toggle.classList.toggle('bg-[#B91C1C]', !pressed);
    toggle.classList.toggle('bg-[#DDD8DB]', pressed);
    toggle.querySelector('span').style.transform = !pressed ? 'translateX(20px)' : 'translateX(0)';
  });
}

// Modal
const modal = document.getElementById('modal');
document.getElementById('openModal')?.addEventListener('click', () => modal.classList.remove('hidden'));
modal?.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', () => modal.classList.add('hidden')));

// Tabs
const tabs = document.querySelectorAll('[data-tab]');
const panels = document.querySelectorAll('[data-panel]');
tabs.forEach(t => t.addEventListener('click', () => {
  tabs.forEach(x => x.classList.remove('active-tab'));
  t.classList.add('active-tab');
  panels.forEach(p => p.classList.toggle('hidden', p.dataset.panel !== t.dataset.tab));
}));

// Artifact link click handler
(function(){
  document.addEventListener("click", function(e){
    var a = e.target.closest("[data-product-id]");
    if(!a) return;
    e.preventDefault();
    var pid = a.getAttribute("data-product-id");
    if(pid) parent.postMessage({type:"ecto-artifact-link-click",productId:pid},"*");
  });
})();
