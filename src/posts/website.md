---
title: This website is a portfolio
description: Why do I need a portfolio ?
date: '2024-01-02'
tags:
  - svelte
  - markdown
  - self-host
published: true
wallpaper: '/wallpaper.jpg'
---

# My Own Website

As my formation is very much oriented towards computer science, the focus is mainly on theoretical knowledge and not on practical skills. I wanted to have a place to showcase my projects and the skills I have acquired during my time at the [Binet Réseau](https://br.binets.fr/), Ecole Polytechnique's student network association.

I have come to a linking of being a system administrator and enjoy the benefits of **owning a server**. Therefore, I've built my own server and I'm self-hosting a bunch of services on top of my own website.

## The Stack

<div class="flex justify-center items-center my-3 gap-4 md:gap-10">
  <a href="https://svelte.dev" target="_blank">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/199px-Svelte_Logo.svg.png"
      alt="svelte"
      class="mt-3 w-20"
    />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
      alt="typescript"
      class="mt-3 w-20"
    />
  </a>
  <a href="https://tailwindcss.com" target="_blank">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png"
      alt="tailwind"
      class="mt-3 w-20"
    />
  </a>
</div>

I've tried to get into a <a href="https://reactjs.org" target="_blank">React</a> project once but I've been overwhelmed by the complexity of the framework. The project was very badly documented and I struggled to understand the codebase. Then came <a href="https://www.youtube.com/@Fireship" target='_blank'>Fireship</a> an <a href="https://www.youtube.com/watch?v=XRoSBWYMefY" target="_blank">American Youtuber</a> who makes videos mainly about web development in a short and concise 100s format and I discovered <a href="https://svelte.dev" target="_blank">Svelte</a> thanks to him - _if you don't know his channel go and check it out it is quite fun to say the least_ -.

Svelte is great for beginners, _which is my case_, because it is very easy to get started with it. It is a framework that is very close to vanilla Javascript and it is very easy to understand what is going on. Also, the documentation is in the format of an interactive tutorial instead of a documentation one like React's. I find it much more enjoyable to learn a framework this way.

Then I decided to use typescript instead of javascript because one of my friend recommended me to do so but I'm honestly not quite used at it yet and still asking him quite a lot of questions (#_teachMeSempai_). I also used <a href="https://tailwindcss.com" target="_blank">Tailwind</a> to style my website because I wanted to try it out and it is very convenient to use, more than <a href="https://getbootstrap.com" target="_blank">Bootstrap</a> in my opinion. Finally, I have used a couple of <a href="https://daisyui.com/" target="_blank">DaisyUI</a> components and I'm quite happy with the result.

Finally, after the 1st version of my website, I've decided to use <a href="https://mdxjs.com/" target="_blank">MDX</a> and especially <a href="https://github.com/pngwn/MDsveX" target="_blank">MDsveX</a> to write some posts in markdown and not in HTML as it's much easier and already the default format for my notes as I'm using <a href="https://neovim.io/" target="_blank">Neovim</a> (_btw_) as my text editor.

## Self-hosting

<div class="flex justify-center items-center my-3 gap-4 md:gap-10">
  <a href="https://docs.docker.com/" target="_blank">
    <img
      src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
      alt="docker"
      class="mt-3 w-20"
    />
  </a>
  <a href="https://debian.org" target="_blank">
    <img
      src="https://cdn.iconscout.com/icon/free/png-256/free-debian-11-1175231.png"
      alt="debian"
      class="mt-3 w-20"
    />
  </a>
  <a href="https://traefik.io/traefik/" target="_blank">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Traefik.logo.png"
      alt="traefik"
      class="mt-3 w-20"
    />
</div>

Finally, this website is running in a <a href="https://docs.docker.com/" target="_blank">Docker</a> container on my <a href="https://debian.org" target="_blank">Debian</a> server. I'm using <a href="https://traefik.io/traefik/" target="_blank">Traefik</a> as a reverse proxy to handle the https and the domain names. Along with a couple of other services for my convenience.
