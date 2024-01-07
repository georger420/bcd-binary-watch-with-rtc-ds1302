# Binární hodiny s micro:bit a RTC modulem DS1302
Pokusný projekt s micro:bit ukazuje aktuální čas v BCD kódu. To znamená, že jednotlivé číslice čísloa v desítkové soustavě jsou ve stejném pořadí vyjádřeny čísly ve dvojkové soustavě. Zde v pořadí: desítky hodin, jednotky hodiny, desítky minut a jednotky minut. Mezi jednotkami hodin a desítkami minut je blikající oddělovač suplující dvojtečku. Bity s nejnižší hodnotou jsou na řádku 4 maticového displeje, bity s nejvyšší hodnotou na řídku 1, oddělovač na řádku 0.











Projekt vytvořen v Makecode pro micro:bit.
Pro správnou funkci je třeba do projektu importovat rozšíření pro DS1302 - https://github.com/makecode-extensions/DS1302

RTC modul je k micro:bit připojen takto:

pin DS1302    pin micro:bit
CLK           13 
DA            14
RS            15

Pro nastavení času v modulu DS1302 je určen projekt "DS1302-set-time" - https://makecode.microbit.org/S05452-41199-06019-32320 . 


> Otevřít tuto stránku v aplikaci [https://georger420.github.io/bcd-binary-watch-with-rtc-ds1302/](https://georger420.github.io/bcd-binary-watch-with-rtc-ds1302/)

## Upravit tento projekt

Slouží k úpravě tohoto úložiště v aplikaci MakeCode.

* otevřít [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klikněte na možnost **Import** a poté na **Import adresy URL**
* vložte **https://github.com/georger420/bcd-binary-watch-with-rtc-ds1302** a klikněte na možnost import

#### Metadata (slouží k vyhledávání, vykreslování)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
