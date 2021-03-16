# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

Your reply here...
Tekst nepaliek atklāts, kad lapa tiek pārlādēta, jo, gan html, gan javascripts tiek sākts no sākuma.
---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Your reply here...
Nē, javascript kods nestrādātu un neparādītu textu, jo load EventListener ielādē html lapu pirms javascript kods atrod elementus un izmanto tos.
---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

Your reply here...
addEventListener izveido funkciju, kas tiks izsaukta katru reizi, kad norādītais notikums notiks.