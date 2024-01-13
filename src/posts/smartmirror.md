---
title: Smart Mirror DIY
description: IoT project a smart Mirror with a Raspberry Pi
date: '2023-05-28'
tags:
  - IoT
  - DIY
  - raspberry pi
  - Smart Mirror
published: true
wallpaper: '/posts/smart_mirror/mirror_running.jpeg'
---

# Smart Mirror

During my internship at [Esperance Banlieue - Cours Eric Tabary](https://courserictabarly.esperancebanlieues.org/) in Toulon, when I arrived I didn't even have a mirror in my bathroom. As I was looking for one, Youtube algorithm hooked me up with a video about a smart mirror and I thought it would be a great idea to build one for myself. I've been interested in IoT for quite a while and I thought it would be a great project to get started but I was quite lacking in both hardware and software skills.

I did got a 3D printer in 2021 and I got to play with it for quite a while without thinking too much about the mirror up until September 2022 when I chose a course about IoT at my university. I still didn't dwell into building the mirror itself but I did get to learn a lot about Arduino. Then I've tried to find a Raspberry Pi to get started but that took quite a while as they are quite hard to find nowadays. I finally got one in November and I've started to build the mirror.

## The Building Process

### The Materials

That is by far the part that took me the most time to gather. With my very basic skill, I went for a very simple and cheap design :

1. A black plastic frame to hold the mirror in place bought on Amazon (_don't do that_)
2. An acrylic 1 way mirror bought on Amazon as well (_don't do that either_)
3. 4 wooden planks to hold the frame and attach a screen behind the mirror
4. A simple screen
5. A raspberry pi 4 4GB with a 64GB SD card
6. Couple of cables to power everything

### Assembling the Frame and the Mirror

I'm quite lucky as there is a wood workshop at my university but no one was available to help me out at the time and I really wanted to build it so I went for it anyway. I had no idea on how to fix everything properly together and I should have thought about that **before** cutting anything... I ended up screwing everything together and it's not the best but it works.

Finally, putting the mirror inside the frame was a bit tricky as I realised the amazon frame was not the exact size (turns out I cut the frame properly even though the final piece lack of _finishing touches_...)

<div class="flex justify-center items-center my-3 gap-4 md:gap-10">
  <img src="/posts/smart_mirror/mirror_cutting.jpg" alt="assembling" class="rounded-md image" />
  <img src="/posts/smart_mirror/mirror_frame.jpg" alt="assembling" class="rounded-md image" />
</div>

### Screen in place

But for it to be a smart mirror, it needs a screen behind it. I've bought a simple screen on Amazon (not to expensive and easily disassembled) and I've put it behind the mirror. I've used a couple of wooden planks to hold the screen in place and I've cut a hole (the size of the screen) inside the frame just behind the mirror to let the screen pass through and reduce the amount of light that goes through the mirror.

But, this was not tight enough so I've used some black tape on the edges of the screen to fill the gaps with the cardboard.

<div class="flex justify-center items-center my-3 mb-0 gap-4 md:gap-10">
  <img src="/posts/smart_mirror/before_light_border.jpg" alt="assembling" class="rounded-md image" />
  <img src="/posts/smart_mirror/light_borders.jpeg" alt="assembling" class="rounded-md image" />
</div>

<div class="mx-auto italic text-center">
I am indeed sitting almost properly
</div>

While I'm quite happy with the final result, the acrylic mirror is definitely not looking as I expected... The mirror is quite distorted and the screen gets scratched quite easily. I would definitely recommend to use a real glass mirror instead of an acrylic one and I plan on changing it in the future. Also, while it's not the use case here, it's possible to add a _"touch screen"_ to the mirror by adding an [IR Touch Frame](https://www.amazon.com/GreenTouch-Infrared-Without-Interface-Free-Drive/dp/B078X8R9Z3?th=1) (like this example) but it's quite expensive.

### Final results

<div class="flex justify-center items-center my-3 mb-0 gap-4 md:gap-10">
  <img src="/posts/smart_mirror/mirror_idle.jpeg" alt="assembling" class="rounded-md image" />
  <img src="/posts/smart_mirror/mirror_running.jpeg" alt="assembling" class="rounded-md image" />
</div>

<div class="mx-auto italic text-center">
  The distortion is even more obvious when looking from a side and the mirror is not running
</div>

## The Software

Now comes the easy part (at least it was easier for me !) Choosing what to run on the mirror ! I'm using a Raspberry PI 4 (4GB) running Raspbian and I've decided to use [MagicMirror²](https://magicmirror.builders/) as the main software for the mirror. It's a great piece of software that is very easy to configure and to use. It's also very well documented and there are a lot of modules available to use. I'm running theses services :

- Calendar
- Weather (with the OpenWeather API)
- Spotify Dashboard
- News Feed

Then I've started working on a custom pipeline using [whisperAI](https://github.com/openai/whisper), [ChatGPT](https://chat.openai.com/) and [Bark](https://github.com/suno-ai/bark) to add a voice assistant to the mirror. Turns out it was working well enough apart from the speed of the pipeline. It was taking way too long, not only to process the _Speech-To-Text_ and _Text-To-Speech_ on my own computer (using a GPU) but also fetching the results from ChatGPT itself.

Moreover, I'm not a big fan of using private software like ChatGPT for something as personal as a vocal assistant os I've decided to run an LLM locally. Even though [llama.cpp](https://github.com/ggerganov/llama.cpp) can work on a raspberry PI, I would rather not encourage you to do that as the token rate and the maximal size of the model are quite low... [Raspberry PI 4 4GB llama.cpp](https://github.com/ggerganov/llama.cpp/issues/58)

As my computer is not running all the time for it to act as a server for the mirror, I've decided to put that project on hold for now as I plan on building a server and adding a GPU to it to run this pipeline but also a Stable Diffusion interface whenever I want.

## References

- I tried to follow this tutorial [Instructables](https://www.instructables.com/DIY-Smart-Mirror-1/) it's great honestly but I didn't have either the skills and the budget to do it properly so I went for my cheaper version you have above
- [MagicMirror²](https://magicmirror.builders/) software base for the mirror
- [whisperAI](https://github.com/openai/whisper) Speech-To-Text model from OpenAI that can run locally
- [Bark](https://github.com/suno-ai/bark) Text-To-Speech model, replacement for the popular solution : [Eleven Labs](https://elevenlabs.io/) as it can run locally

<style>

  .image {
    height: 10rem;
  }

  @media (min-width: 500px) {
    .image {
      height: 15rem;
    }
  }

  @media (min-width: 990px) {
    .image {
      height: 19rem;
    }
  }
</style>
